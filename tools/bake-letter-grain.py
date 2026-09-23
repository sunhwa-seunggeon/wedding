# -*- coding: utf-8 -*-
"""편지지(letter-lines.webp)에 장 바탕과 같은 종이결을 구워 넣습니다.

편지지는 평평한 그림이라 종이결이 깔린 장 위에서 매끈한 종이로 떠 보였습니다.
장이 쓰는 paper.jpg 를 그대로 타일로 깔고 multiply 로 곱하는데, 그 결은 평균
249.7 로 아주 옅어서(장에서는 넓은 면적이라 보이지만 편지지 한 장에서는 안
보임) 평균을 중심으로 대비를 GAIN 배 키운 뒤 곱합니다.

    python tools/bake-letter-grain.py          # GAIN 3.0
    python tools/bake-letter-grain.py 4        # 더 거칠게

이미 구운 파일에 또 돌리면 결이 두 겹으로 겹칩니다 — 원본(git 의 결 없는
버전)에서 시작하도록, 스크립트가 tools/letter-lines.flat.webp 를 원본으로 씁니다.
"""
import io, os, shutil, sys
from PIL import Image, ImageChops, ImageStat

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPLOY = os.path.join(os.path.dirname(HERE), "wedding")
FLAT = os.path.join(HERE, "tools", "letter-lines.flat.webp")   # 결 없는 원본 보관
OUT = "images/letter-lines.webp"
GAIN = float(sys.argv[1]) if len(sys.argv) > 1 else 3.0

if not os.path.exists(FLAT):
    shutil.copyfile(os.path.join(HERE, OUT), FLAT)
    print("결 없는 원본을 tools/letter-lines.flat.webp 로 보관했습니다.")

letter = Image.open(FLAT).convert("RGB")
tile = Image.open(os.path.join(HERE, "images", "paper.jpg")).convert("L")
mean = ImageStat.Stat(tile).mean[0]
# 평균을 중심으로 대비만 키웁니다(밝기는 그대로).
tile = tile.point(lambda v: max(0, min(255, round(mean + (v - mean) * GAIN))))
# 결의 평균을 255 로 올려 둡니다 — 그래야 multiply 가 평균 밝기는 건드리지 않고
# 어두운 알갱이만 남깁니다. 안 올리면 편지지 전체가 2% 어두워져 바탕과 같아집니다.
tile = tile.point(lambda v: min(255, v + round(255 - mean)))

# 편지지 크기로 타일링
w, h = letter.size
grain = Image.new("L", (w, h))
for y in range(0, h, tile.size[1]):
    for x in range(0, w, tile.size[0]):
        grain.paste(tile, (x, y))
grain_rgb = Image.merge("RGB", (grain, grain, grain))
# 255 로 올려도 위쪽이 잘려 결의 평균은 255 에 못 미칩니다(재 보면 251 -> x0.985).
# 그만큼 편지지를 미리 밝혀 곱한 뒤의 평균이 원본(flat)과 같아지게 합니다.
k = 255 / ImageStat.Stat(grain).mean[0]
letter = Image.merge("RGB", [ch.point([min(255, round(v * k)) for v in range(256)]) for ch in letter.split()])
out = ImageChops.multiply(letter, grain_rgb)

for root in (HERE, DEPLOY):
    p = os.path.join(root, OUT)
    out.save(p, "WEBP", quality=90, method=6)
    print("%s  %dKB" % (p, os.path.getsize(p) // 1024))
print("GAIN %.1f, 결 평균 %.1f -> 255 로 올려 밝기 유지, 편차 x%.1f" % (GAIN, mean, GAIN))
