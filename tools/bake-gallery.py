# -*- coding: utf-8 -*-
"""갤러리 세 벌(full 1600 / mid 720 / thumb 240)을 순서 파일대로 다시 굽습니다.

    python tools/bake-gallery.py

- 순서: tools/gallery-order.txt (줄 번호 = 사진 번호, # 은 주석). 원본은 images/gallery/new/.
- 순서를 바꾸거나 빼려면 그 파일만 고치고 다시 돌리면 됩니다. 폴더의 파일을 직접
  지우지 마세요 — 번호에 빈칸이 생겨 페이지가 깨집니다.
- 결과는 이 폴더와 배포 저장소(../wedding)의 images/gallery/ 에 같이 씁니다.
- 굽고 나면 v2-tear.html / index.html 의 SHOTS 장수를 맞춰 줍니다.
"""
import io, os, re, shutil, sys
from PIL import Image, ImageOps

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPLOY = os.path.join(os.path.dirname(HERE), "wedding")
G = os.path.join(HERE, "images", "gallery")
TIERS = {"full": (1600, 82), "mid": (720, 82), "thumb": (240, 78)}

order = [l.strip() for l in io.open(os.path.join(HERE, "tools", "gallery-order.txt"), encoding="utf-8")
         if l.strip() and not l.startswith("#")]
missing = [f for f in order if not os.path.exists(os.path.join(G, "new", f))]
assert not missing, "원본이 없습니다: %s" % missing
assert len(order) == len(set(order)), "같은 사진이 두 번 적혀 있습니다"

for tier in TIERS:
    for root in (G, os.path.join(DEPLOY, "images", "gallery")):
        d = os.path.join(root, tier)
        shutil.rmtree(d, ignore_errors=True); os.makedirs(d)

for i, f in enumerate(order, 1):
    im = ImageOps.exif_transpose(Image.open(os.path.join(G, "new", f))).convert("RGB")
    for tier, (w, q) in TIERS.items():
        out = im if im.size[0] <= w else im.resize((w, round(w * im.size[1] / im.size[0])), Image.LANCZOS)
        p = os.path.join(G, tier, "%02d.jpg" % i)
        out.save(p, "JPEG", quality=q, optimize=True, progressive=True)
        shutil.copyfile(p, os.path.join(DEPLOY, "images", "gallery", tier, "%02d.jpg" % i))
    print("%02d  %s" % (i, f))

n = len(order)
for page in (os.path.join(HERE, "v2-tear.html"), os.path.join(DEPLOY, "index.html")):
    s = io.open(page, encoding="utf-8").read()
    s2, k = re.subn(r"const SHOTS = Array\.from\(\{ length: \d+ \}",
                    "const SHOTS = Array.from({ length: %d }" % n, s)
    assert k == 1, page
    io.open(page, "w", encoding="utf-8", newline="\n").write(s2)
for repo in (HERE, DEPLOY):
    p = os.path.join(repo, "tools", "used-images.txt")
    lines = [l for l in io.open(p, encoding="utf-8").read().split("\n") if l and not l.startswith("gallery/")]
    lines += ["gallery/%s/%02d.jpg" % (t, i) for t in TIERS for i in range(1, n + 1)]
    io.open(p, "w", encoding="utf-8", newline="\n").write("\n".join(sorted(lines)) + "\n")
print("총 %d장 — SHOTS 와 used-images 를 맞췄습니다." % n)
