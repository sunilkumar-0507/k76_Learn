"""Builds every logo and icon size in public/ from branding/k76-logo-source.jpg.

The source is the logo tile photographed on a light background with a grey
frame. This crops the coloured tile, rounds its corners with a transparent
background and writes the sizes the site uses.

Usage: python3 scripts/build-icons.py   (requires Pillow)
"""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "branding" / "k76-logo-source.jpg"
PUBLIC = ROOT / "public"

# The coloured tile inside the source image (left, top, right, bottom), excluding frame and shadow.
TILE_BOX = (336, 301, 921, 901)
# Corner radius as a fraction of the tile size, matched to the source artwork.
RADIUS = 0.15
SITE_BG = (4, 5, 12)


def rounded_mask(size: int) -> Image.Image:
    scale = 4  # supersample for smooth, anti-aliased corners
    big = Image.new("L", (size * scale, size * scale), 0)
    ImageDraw.Draw(big).rounded_rectangle((0, 0, size * scale - 1, size * scale - 1), radius=int(size * scale * RADIUS), fill=255)
    return big.resize((size, size), Image.LANCZOS)


def tile(size: int) -> Image.Image:
    img = Image.open(SOURCE).convert("RGB").crop(TILE_BOX).resize((size, size), Image.LANCZOS)
    out = img.convert("RGBA")
    out.putalpha(rounded_mask(size))
    return out


def main() -> None:
    master = tile(1024)

    def sized(px: int) -> Image.Image:
        return master.resize((px, px), Image.LANCZOS)

    # Structured data / general use. Palette mode keeps it small; the artwork is mostly flat colour.
    sized(512).quantize(256, method=Image.FASTOCTREE).save(PUBLIC / "logo.png", optimize=True)
    sized(160).save(PUBLIC / "logo-mark.webp", quality=90, method=6)  # header and footer
    sized(160).save(PUBLIC / "logo-mark.png", optimize=True)
    sized(64).save(PUBLIC / "favicon.png", optimize=True)
    sized(48).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # iOS draws its own rounded corners and shows transparency as black, so give it a full square on the site colour.
    touch = Image.new("RGBA", (180, 180), SITE_BG + (255,))
    inner = sized(164)
    touch.alpha_composite(inner, (8, 8))
    touch.convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)

    for name in ["logo.png", "logo-mark.webp", "logo-mark.png", "favicon.png", "favicon.ico", "apple-touch-icon.png"]:
        print(f"{name:22} {(PUBLIC / name).stat().st_size / 1024:6.1f} KB")


if __name__ == "__main__":
    main()
