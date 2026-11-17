"""Check real build artifacts: crawl local URLs, fragments and metadata."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1] / 'dist'
ORIGIN = 'https://trellisworks.ca'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.links, self.ids, self.canonical, self.h1s = path, [], set(), [], 0
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'Duplicate ID: {self.path}: {attrs["id"]}'
            self.ids.add(attrs['id'])
        if tag == 'h1': self.h1s += 1
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical.append(attrs.get('href'))
        if tag in ('a', 'link', 'script', 'img'):
            target = attrs.get('href') if tag in ('a', 'link') else attrs.get('src')
            if target: self.links.append(target)
        if tag == 'meta' and attrs.get('property') == 'og:image': self.links.append(attrs['content'])

pages = {p: Page(p) for p in ROOT.rglob('*.html')}
assert len(pages) >= 3, 'Build must contain homepage, campaign and privacy pages'
for path, page in pages.items():
    relative = path.relative_to(ROOT).as_posix()
    public_path = '/' + relative.removesuffix('index.html')
    assert page.canonical == [ORIGIN + public_path], f'Canonical mismatch: {path}: {page.canonical}'
    assert page.h1s == 1, f'Expected one H1: {path}'
    for link in page.links:
        url = urlsplit(link)
        if url.scheme and not link.startswith(ORIGIN + '/'): continue
        if url.netloc and url.netloc != 'trellisworks.ca': continue
        dest = ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)
        if not url.path: dest = path
        if dest.is_dir(): dest = dest / 'index.html'
        assert dest.exists(), f'Broken local URL: {path}: {link}'
        if url.fragment and dest.suffix == '.html':
            assert unquote(url.fragment) in pages[dest].ids, f'Broken fragment: {path}: {link}'
landing = pages[ROOT / 'excel-reporting/index.html']
assert landing.links.count('https://calendar.app.google/uV1Mua1VdEaYQ73i7') == 2
assert 'https://trellisworks.ca/excel-reporting/' in (ROOT / 'sitemap.xml').read_text()
print(f'Built-site crawl passed: {len(pages)} pages; assets, fragments, canonical URLs, booking links and sitemap verified.')
