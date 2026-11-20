#!/usr/bin/env python3
"""
Convert the team's source photos into web-ready WebP.

    python scripts/prep-photos.py

Reads every image in  ../Photos  (relative to this repo) — including iPhone
.HEIC files — corrects EXIF rotation, and writes:

    public/photos/<id>.webp         max 2000px on the long edge, q84
    public/photos/thumbs/<id>.webp  640px, q78  (used by /photo-review)
    public/photos/manifest.json     dimensions, orientation, source filename

Requires:  pip install pillow pillow-heif

Re-running is safe: files are overwritten by id, and the id is derived from the
original filename so slots in src/content/photos.ts keep working.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps

try:
    import pillow_heif

    pillow_heif.register_heif_opener()
except ImportError:  # HEIC support is optional
    pillow_heif = None  # type: ignore

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "Photos"
OUT = ROOT / "public" / "photos"
THUMB = OUT / "thumbs"

# Keep the full native resolution of every source (most are 1280-1600px; the
# iPhone HEIC files are 3024-5712px). Downscaling was the main cause of soft
# photos on large screens, so only very large files are capped.
MAX_EDGE = 3200
THUMB_EDGE = 800
# 92 is visually lossless for WebP at these sizes. The Next.js image optimiser
# re-encodes once more, so the source must start clean.
QUALITY = 92
THUMB_QUALITY = 88


def slugify(name: str, index: int) -> str:
    stem = re.sub(r"[^a-z0-9]+", "-", Path(name).stem.lower()).strip("-")
    stem = re.sub(r"-+", "-", stem)[:60].strip("-")
    return f"p{index:03d}-{stem}" if stem else f"p{index:03d}"


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Source folder not found: {SRC}")

    OUT.mkdir(parents=True, exist_ok=True)
    THUMB.mkdir(parents=True, exist_ok=True)

    files = sorted(p for p in SRC.iterdir() if p.is_file())
    manifest: list[dict] = []

    for i, f in enumerate(files, start=1):
        try:
            with Image.open(f) as im:
                im = ImageOps.exif_transpose(im).convert("RGB")
                w, h = im.size
                # WhatsApp re-compresses photos, which softens edges. A gentle
                # unsharp mask restores crispness without visible halos. iPhone
                # originals (large files) are already sharp and are left alone.
                if max(w, h) <= 2000:
                    im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=70, threshold=3))
                pid = slugify(f.name, i)

                big = im.copy()
                big.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
                big.save(OUT / f"{pid}.webp", "WEBP", quality=QUALITY, method=6)

                th = im.copy()
                th.thumbnail((THUMB_EDGE, THUMB_EDGE), Image.LANCZOS)
                th.save(THUMB / f"{pid}.webp", "WEBP", quality=THUMB_QUALITY, method=6)

                manifest.append(
                    {
                        "id": pid,
                        "src": f"/photos/{pid}.webp",
                        "thumb": f"/photos/thumbs/{pid}.webp",
                        "original": f.name,
                        "w": w,
                        "h": h,
                        "orientation": (
                            "landscape"
                            if w > h * 1.05
                            else "portrait"
                            if h > w * 1.05
                            else "square"
                        ),
                        "ratio": round(w / h, 3),
                        "kb": round((OUT / f"{pid}.webp").stat().st_size / 1024),
                    }
                )
                print(f"OK  {i:3d}  {w}x{h}  {f.name}")
        except Exception as exc:  # noqa: BLE001
            print(f"ERR {i:3d}  {f.name}: {exc}")

    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nConverted {len(manifest)} of {len(files)} files.")


if __name__ == "__main__":
    main()
