# -*- coding: utf-8 -*-
"""손글씨 잉크색을 다시 굽습니다.

--forest 를 바꾸면 이 그림들은 따라오지 않습니다. 색이 RGB 에 구워져
있고(마스크는 file:// 에서 교차 출처로 막혀 못 씁니다), 원본은 검은 잉크라
밝기를 뒤집어 알파로 쓰고 원하는 색으로 칠합니다.

    python tools/bake-ink.py            # 아래 FOREST 로 굽기
    python tools/bake-ink.py 2b4632     # 색을 지정해서 굽기

굽고 나면 v2-tear.html 의 --forest 도 같은 값으로 바꿔야 합니다.
줄 폭이 바뀌면 --w 값도 다시 계산해야 합니다(아래 출력 참고).
"""
import os
import sys

from PIL import Image

# 윈도우 콘솔이 cp949 라 — 같은 문자에서 죽습니다. 출력만 utf-8 로 바꿉니다.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

FOREST = "#2b4632"

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MASTER = os.path.join(HERE, "images", "handwriting-master.webp")

# 편지지에서 잰 값 — 점선 여덟 줄이 놓인 필기 영역의 가로 범위(폭 대비).
SPAN = 0.9316 - 0.0703
FILL = 0.98          # 가장 긴 줄이 점선을 채우는 비율
SIGN_W = 0.2150      # 서명. 서명줄(폭의 25%)보다 조금 작게 —
                     # 본문과 글자 크기를 맞추면 이 정도입니다.

ATTACH = os.environ.get(
    "WEDDING_ATTACH",
    r"C:\Users\USER\AppData\Local\Temp\claude"
    r"\C--Users-USER-Desktop-VisualCodeProject-wedding-v2"
    r"\8956b71b-42bf-418b-be6e-1078be041466\images",
)


def bands(alpha_img, min_h=6):
    """잉크가 있는 가로 띠를 위에서부터 찾습니다."""
    w, h = alpha_img.size
    p = alpha_img.load()
    out, run = [], None
    for y in range(h):
        hit = any(p[x, y] > 40 for x in range(0, w, 2))
        if hit:
            run = [y, y] if run is None else [run[0], y]
        elif run is not None:
            if run[1] - run[0] >= min_h:
                out.append(run)
            run = None
    if run and run[1] - run[0] >= min_h:
        out.append(run)
    return out


def main():
    hexv = (sys.argv[1] if len(sys.argv) > 1 else FOREST).lstrip("#")
    rgb = tuple(int(hexv[i:i + 2], 16) for i in (0, 2, 4))
    print("잉크색 #%s" % hexv)

    im = Image.open(MASTER).convert("RGBA")
    w, h = im.size
    # 검은 잉크 / 투명 바탕. 흰 종이 위에 합성한 뒤 밝기를 뒤집어 알파로 씁니다.
    flat = Image.alpha_composite(Image.new("RGBA", (w, h), (255, 255, 255, 255)), im)
    alpha = flat.convert("L").point(lambda v: 255 - v)

    rows = bands(alpha)
    assert len(rows) == 9, "본문 여덟 줄 + 서명 한 줄이어야 합니다 (찾은 줄 %d)" % len(rows)

    ap = alpha.load()
    cuts = []
    for y0, y1 in rows:
        xs = [x for x in range(w) if any(ap[x, y] > 40 for y in range(y0, y1 + 1))]
        cuts.append((xs[0], y0, xs[-1] + 1, y1 + 1))

    os.makedirs(os.path.join(HERE, "images", "hand"), exist_ok=True)
    body = cuts[:8]
    widest = max(b[2] - b[0] for b in body)
    scale = SPAN * FILL / widest

    print("\n본문 여덟 줄 — 가장 긴 줄 %dpx 가 점선의 %d%% 를 채웁니다." % (widest, FILL * 100))
    for i, box in enumerate(body, 1):
        a = alpha.crop(box)
        out = Image.new("RGBA", a.size, rgb + (0,))
        out.putalpha(a)
        path = os.path.join(HERE, "images", "hand", "%02d.webp" % i)
        out.save(path, "WEBP", quality=94, method=6)
        print("  hand/%02d.webp %4dx%-3d %2dKB   --w:%.2f%%"
              % (i, a.size[0], a.size[1], os.path.getsize(path) // 1024,
                 100 * (box[2] - box[0]) * scale))

    # 마지막 줄은 서명. 서명줄 폭에 맞추므로 본문 배율과 무관합니다.
    box = cuts[8]
    a = alpha.crop(box)
    out = Image.new("RGBA", a.size, rgb + (0,))
    out.putalpha(a)
    ow = 360
    out = out.resize((ow, round(ow * a.size[1] / a.size[0])), Image.LANCZOS)
    path = os.path.join(HERE, "images", "hand", "sign.webp")
    out.save(path, "WEBP", quality=94, method=6)
    print("  hand/sign.webp %dx%d %dKB   --w:%.2f%%"
          % (out.size[0], out.size[1], os.path.getsize(path) // 1024, 100 * SIGN_W))

    # 달력 손글씨는 따로 받은 그림입니다.
    for name, src, width in [("save-the-date.webp", "64.png", 434),
                             ("date-circle.webp", "65.png", 360)]:
        p = os.path.join(ATTACH, src)
        if not os.path.exists(p):
            print("  ! 원본 없음: %s — %s 는 건너뜁니다" % (p, name))
            continue
        src_im = Image.open(p).convert("RGBA")
        sa = src_im.getchannel("A")
        sa = sa.crop(sa.point(lambda v: 255 if v > 20 else 0).getbbox())
        o = Image.new("RGBA", sa.size, rgb + (0,))
        o.putalpha(sa)
        o = o.resize((width, round(width * sa.size[1] / sa.size[0])), Image.LANCZOS)
        o.save(os.path.join(HERE, "images", name), "WEBP", quality=94, method=6)
        print("  %s %dx%d" % (name, o.size[0], o.size[1]))

    print("\nv2-tear.html 의 --forest 를 #%s 로, --w 값을 위 숫자로 맞추세요." % hexv)


if __name__ == "__main__":
    main()
