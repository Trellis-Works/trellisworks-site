"""Render the campaign's text/grid social card; no customer data or external assets."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ink, brass, paper = '#1b2430', '#946726', '#f6f4ee'
canvas = Image.new('RGB', (1200, 630), paper)
draw = ImageDraw.Draw(canvas)
font_path = '/System/Library/Fonts/Avenir Next.ttc'
def font(size):
    try: return ImageFont.truetype(font_path, size)
    except OSError: return ImageFont.truetype('DejaVuSans.ttf', size)

draw.text((70, 48), 'TRELLIS WORKS', font=font(22), fill=ink)
draw.line((70, 103, 1130, 103), fill='#d7d7cb', width=2)
draw.text((70, 140), 'EXCEL REPORTING AUTOMATION', font=font(17), fill=brass)
for y, text, fill in [(194, 'The same report.', ink), (275, 'Every month.', ink), (356, 'Less rebuilding.', brass)]:
    draw.text((65, y), text, font=font(68), fill=fill)
draw.rectangle((70, 500, 471, 558), fill=ink)
draw.text((91, 513), 'Talk through your report', font=font(22), fill=paper)
draw.text((855, 542), 'trellisworks.ca', font=font(19), fill=ink)
draw.rounded_rectangle((790, 181, 1128, 459), radius=8, fill='#eeefe8', outline='#cbd1c4', width=2)
draw.text((815, 205), 'Source files', font=font(17), fill='#5c6b78')
draw.line((815, 245, 1103, 245), fill='#cbd1c4', width=2)
draw.text((815, 265), 'Rules + checks', font=font(22), fill=ink)
draw.line((815, 313, 1103, 313), fill='#cbd1c4', width=2)
draw.text((815, 334), 'Your Excel report', font=font(22), fill=ink)
draw.text((815, 393), 'Ready for review', font=font(15), fill='#5c6b78')
canvas.save(ROOT / 'public/brand/excel-reporting-social.png', optimize=True)
print('Generated public/brand/excel-reporting-social.png (1200 × 630)')
