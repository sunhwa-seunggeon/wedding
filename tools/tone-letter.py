# -*- coding: utf-8 -*-
"""편지지를 장 바탕 쪽으로 낮춰 굽습니다.

편지지 원본은 (251 250 243) 으로 장 바탕보다 훤합니다. 그대로 두면 종이
위에 흰 네모가 얹힌 것처럼 떠 보입니다. 채널마다 곱해서(밝기 비율을
유지하도록) 바탕에 가깝게 내립니다 — 우편번호 칸의 빨강도 같은 비율로
어두워져 색이 틀어지지 않습니다.

    python tools/tone-letter.py        # 바탕보다 +4 (기본)
    python tools/tone-letter.py 8      # 바탕보다 +8

바탕색은 v2-tear.html 의 --paper 에 종이결 평균을 곱한 값입니다.
완전히 같게(0) 두지는 마세요 — 그림자만으로는 얹힌 종이로 안 읽힙니다.
원본은 git 에 있습니다: git show <원본커밋>:images/letter-lines.webp
"""
import os
import sys

from PIL import Image, ImageStat

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LETTER = os.path.join(HERE, "images", "letter-lines.webp")
ORIGIN = (251, 250, 243)        # 원본 편지지 여백
SHEET = (241, 239, 234)         # --paper #f6f4ef x 종이결 평균 249.7/255


def main():
    lift = float(sys.argv[1]) if len(sys.argv) > 1 else 4.0
    target = tuple(c + lift for c in SHEET)
    im = Image.open(LETTER).convert("RGB")
    here = im.getpixel((30, 30))
    # 이미 구운 파일을 또 구우면 두 번 어두워집니다. 항상 원본 기준으로 잽니다.
    f = [t / o for t, o in zip(target, ORIGIN)]
    g = [t / h for t, h in zip(target, here)]
    print("바탕 %s  목표 %s (+%.0f)" % (SHEET, tuple(round(c) for c in target), lift))
    print("지금 파일 여백 %s -> 배율 R%.4f G%.4f B%.4f" % (here, *g))
    out = Image.merge("RGB", [ch.point([min(255, round(v * g[i])) for v in range(256)])
                              for i, ch in enumerate(im.split())])
    out.save(LETTER, "WEBP", quality=94, method=6)
    print("결과 여백 %s  평균 %.1f %.1f %.1f  %dKB"
          % (out.getpixel((30, 30)), *ImageStat.Stat(out).mean,
             os.path.getsize(LETTER) // 1024))
    print("(원본 기준 배율이었다면 R%.4f G%.4f B%.4f)" % tuple(f))


if __name__ == "__main__":
    main()
