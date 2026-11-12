#!/usr/bin/env python3
"""
Regenerate src/content/gallery.ts from public/photos/manifest.json.

    python scripts/build-gallery.py

Run this after scripts/prep-photos.py whenever photos are added or removed.
The generated file drives the /gallery page and the home page photo strip.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "public" / "photos" / "manifest.json"
OUT = ROOT / "src" / "content" / "gallery.ts"

HEADER = """/**
 * Full photo archive — every image supplied by the team.
 * Generated from public/photos/manifest.json by scripts/build-gallery.py.
 *
 * Alt text here is deliberately generic: the team must replace it with a real
 * description and a caption stating who, where and with what consent
 * (brief p.7) before launch. /photo-review shows each slot for that review.
 */

export type ArchivePhoto = {
  id: string;
  w: number;
  h: number;
  ratio: number;
  orientation: "landscape" | "portrait" | "square";
  alt: string;
};

export const archivePhotos: ArchivePhoto[] = [
"""


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    rows = []
    for i, item in enumerate(manifest, start=1):
        alt = (
            f"Photograph {i} from the Jamhooriyat Saheliyan archive, "
            "showing women taking part in community work in Sindh."
        )
        rows.append(
            "  { id: %s, w: %d, h: %d, ratio: %s, orientation: %s, alt: %s },"
            % (
                json.dumps(item["id"]),
                item["w"],
                item["h"],
                item["ratio"],
                json.dumps(item["orientation"]),
                json.dumps(alt),
            )
        )

    body = HEADER + "\n".join(rows) + "\n];\n\nexport const archiveCount = archivePhotos.length;\n"
    OUT.write_text(body, encoding="utf-8")
    print(f"Wrote {len(rows)} photos to {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
