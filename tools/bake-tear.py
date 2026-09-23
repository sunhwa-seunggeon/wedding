# -*- coding: utf-8 -*-
"""찢긴 경계 마스크를 v2-tear.html 안에 data: 로 다시 굽습니다.

브라우저는 file:// 로 연 쪽에서 mask 이미지를 막습니다(파일 하나하나를
서로 다른 출처로 봅니다). 그러면 띠가 통째로 사라져 경계가 자로 자른 듯
보입니다. data: 는 막히지 않아서 더블클릭으로 열어도 그대로 보입니다.

    python tools/bake-tear.py
"""
import base64, io, os, re, sys
from PIL import Image

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
page = os.path.join(HERE, "v2-tear.html")
s = io.open(page, encoding="utf-8").read()

for n in "abc":
    im = Image.open(os.path.join(HERE, "images", "tear", "%s.png" % n)).convert("RGBA")
    # 알파만 남기면 절반 가까이 작아집니다. 알파는 버리면 안 됩니다 —
    # 사파리의 -webkit-mask-image 는 밝기가 아니라 알파를 봅니다.
    a = im.getchannel("A")
    # 종이 쪽이 217 까지 내려가 있습니다 — 그대로 쓰면 아랫장이 15% 비쳐
    # 초록 장 위에서 가로줄로 보입니다. 200 이상은 꽉 채우고, 찢긴
    # 가장자리의 흐릿한 부분(200 미만)은 그대로 둡니다.
    a = a.point(lambda v: 255 if v >= 200 else v)
    la = Image.merge("LA", (Image.new("L", im.size, 0), a))
    buf = io.BytesIO()
    la.save(buf, "PNG", optimize=True)
    uri = base64.b64encode(buf.getvalue()).decode()
    pat = re.compile(r'(  --edge-%s:url\("data:image/png;base64,)[^"]*(")' % n)
    assert pat.search(s), "--edge-%s 를 못 찾았습니다" % n
    s = pat.sub(lambda m: m.group(1) + uri + m.group(2), s, count=1)
    print("%s  %dx%d  %.1fKB" % (n, im.size[0], im.size[1], len(uri) / 1024))

io.open(page, "w", encoding="utf-8", newline="\n").write(s)
print("ok  %s  %.0fKB" % (os.path.basename(page), os.path.getsize(page) / 1024))
