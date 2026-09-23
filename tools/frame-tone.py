# -*- coding: utf-8 -*-
"""새 액자 사진을 지금 hero 의 색감으로 옮겨 굽습니다.

채널마다 평균과 표준편차를 지금 frame.webp 에 맞춥니다(라인하르트 이식).
밝기 순서와 결은 그대로 두고 톤만 갈아 끼우는 가장 단순한 방법입니다.

    python frame-tone.py <새그림> [내보낼곳]
"""
import sys, os
from PIL import Image, ImageStat

HERE = r'C:\Users\USER\Desktop\VisualCodeProject\wedding-v2\images'
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

src_p = sys.argv[1]
out_p = sys.argv[2] if len(sys.argv) > 2 else os.path.join(HERE, 'frame.webp')

ref = Image.open(os.path.join(HERE, 'frame.webp')).convert('RGB')
src = Image.open(src_p).convert('RGB')
print('지금 %s  새그림 %s' % (ref.size, src.size))

rs, ss = ImageStat.Stat(ref), ImageStat.Stat(src)
print('평균  지금 %s -> 새그림 %s' % (['%.1f'%v for v in rs.mean], ['%.1f'%v for v in ss.mean]))
print('편차  지금 %s -> 새그림 %s' % (['%.1f'%v for v in rs.stddev], ['%.1f'%v for v in ss.stddev]))

chans = []
for i, ch in enumerate(src.split()):
    g = rs.stddev[i] / max(ss.stddev[i], 1e-6)
    b = rs.mean[i] - g * ss.mean[i]
    # 대비가 튀면 결이 뭉개집니다. 실제로 거의 1 근처입니다.
    lut = [min(255, max(0, round(g * v + b))) for v in range(256)]
    print('  %s  x%.3f %+.1f   (0->%d, 128->%d, 255->%d)' % ('RGB'[i], g, b, lut[0], lut[128], lut[255]))
    chans.append(ch.point(lut))

out = Image.merge('RGB', chans)
w = ref.size[0]
if out.size[0] != w:
    out = out.resize((w, round(w * out.size[1] / out.size[0])), Image.LANCZOS)
out.save(out_p, 'WEBP', quality=92, method=6)
os_ = ImageStat.Stat(out)
print('결과 평균 %s  편차 %s' % (['%.1f'%v for v in os_.mean], ['%.1f'%v for v in os_.stddev]))
print('저장 %s  %dx%d  %dKB' % (out_p, out.size[0], out.size[1], os.path.getsize(out_p)//1024))
