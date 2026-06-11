#!/usr/bin/env python3
"""
Idempotent slide page and sidebar generator for Docusaurus with strict cleanup.
"""

import os
import re
import json
import yaml
import shutil
from pathlib import Path
from datetime import datetime, date

# Paths
SLIDES_SRC = Path("/agent/files/rrbtc-wiki-docusaurus/static/img/slides")
DOCS_DEST = Path("/agent/files/rrbtc-wiki-docusaurus/docs/presentations")
SIDEBAR_OUT = Path("/agent/files/rrbtc-wiki-docusaurus/sidebars.presentations.js")

# Explicit, auditable mapping: deck folder -> source outline path
DECK_TO_SOURCE_MAP = {
    "bisq-to-bitcoin-retirement-2025-10-10": "raw/bisq-to-bitcoin-retirement-2025-10-10.md",
    "bitchat-and-chill-2025-08-14": "raw/bitchat-and-chill-2025-08-14.md",
    "bitcoin-protocol-meetup-2-2022-07-14": "raw/bitcoin-protocol-meetup-2-2022-07-14.md",
    "bitcoindesign-gaad-workshop1-2025-05-16": "raw/bitcoindesign-gaad-workshop1-2025-05-16.md",
    "bitcoindesign-gaad-workshop2-2025-05-16": "raw/bitcoindesign-gaad-workshop2-2025-05-16.md",
    "cashu-mints-meetup-10-2023-03-09": "raw/cashu-mints-meetup-10-2023-03-09.md",
    "decentralized-home-mining-bitaxe-2025-04": "raw/decentralized-home-mining-bitaxe-2025-04.md",
    "decentralized-mining-workshop-meetup-30": "raw/decentralized-mining-workshop-meetup-30.md",
    "feed-filter-demo-2025-12-11": "raw/feed-filter-demo-2025-12-11.md",
    "mining-like-the-big-players-2026-05-14": "raw/mining-like-the-big-players-2026-05-14.md",
    "mobile-privacy-meetup-5-2022-10-13": "raw/mobile-privacy-meetup-5-2022-10-13.md",
    "node-builder-workshop-2025-11-13": "raw/node-builder-workshop-2025-11-13.md",
    "round-rock-bitcoiners-26-larp-2024-07-29": "raw/round-rock-bitcoiners-26-larp-2024-07-29.md",
    "rr-bitcoiners-18-plebdevs-2023-11-09": "raw/rr-bitcoiners-18-plebdevs-2023-11-09.md",
    "understand-how-bitcoin-works-2026-01-08": "raw/understand-how-bitcoin-works-2026-01-08.md",
    "what-is-multisig-meetup-7-2022-12-08": "raw/what-is-multisig-meetup-7-2022-12-08.md",
    "what-is-nostr-meetup-8-2023-01-12": "raw/what-is-nostr-meetup-8-2023-01-12.md",
    "why-lightning-plus-ai-2024-08-13": "raw/why-lightning-plus-ai-2024-08-13.md",
    "why-privacy-matters-meetup-3-2022-08-11": "raw/why-privacy-matters-meetup-3-2022-08-11.md",
    "why-run-a-node-meetup-4-2022-09-08": "raw/why-run-a-node-meetup-4-2022-09-08.md",
    "zero-dollar-manifesto-sahil-2024-06-22": "raw/zero-dollar-manifesto-sahil-2024-06-22.md",
}

def parse_frontmatter(md_text):
    match = re.match(r'^---\n(.*?)\n---\n(.*)', md_text, re.DOTALL)
    if match:
        try:
            fm = yaml.safe_load(match.group(1)) or {}
            return fm, match.group(2).strip()
        except yaml.YAMLError:
            return {}, match.group(2).strip()
    return {}, md_text.strip()

def get_deck_metadata(deck_name, slide_dir):
    fm = {}
    body = ""
    source_path = DECK_TO_SOURCE_MAP.get(deck_name)
    
    if source_path:
        full_path = Path("/agent/files/roundrock-meetup-wiki") / source_path
        if full_path.exists():
            fm, body = parse_frontmatter(full_path.read_text())
    
    title = fm.get("title", "")
    if not title:
        title = deck_name.replace("-", " ").title()
    
    date_val = fm.get("event_date", "") or fm.get("date", "")
    if isinstance(date_val, date):
        date_str = date_val.strftime("%Y-%m-%d")
    else:
        date_str = str(date_val) if date_val else ""
        
    if not date_str:
        match = re.search(r'(\d{4}-\d{2}-\d{2})', deck_name)
        if match:
            date_str = match.group(1)
    
    presenter = fm.get("presenter", "")
    keywords = fm.get("tags", [])
    alternate_url = fm.get("alternate_source_url", "")
    
    display_presenter = presenter.strip() if presenter else "Round Rock Bitcoiners"
        
    return {
        "title": title,
        "date": date_str or "Unknown date",
        "presenter": display_presenter,
        "keywords": keywords,
        "alternate_url": alternate_url,
        "slide_count": len(list(slide_dir.glob("slide_*.jpg"))),
        "source_body": body,
        "has_source": bool(source_path)
    }

def load_alt_text_overrides():
    return {}

def generate_alt_text(slide_num, total_slides, title, date, presenter, keywords, override_key, alt_overrides):
    if override_key in alt_overrides:
        return alt_overrides[override_key]
    if presenter and presenter != "Round Rock Bitcoiners":
        base_alt = f"Slide {slide_num} of {total_slides} from '{title}' ({date}, {presenter})"
    else:
        base_alt = f"Slide {slide_num} of {total_slides} from '{title}' ({date})"
    if keywords:
        base_alt += f". Part of a presentation covering: {', '.join(keywords)}."
    return base_alt

def generate_deck_landing_page(deck_name, meta, slide_files, alt_overrides, next_deck_name=None):
    title = meta["title"]
    date = meta["date"]
    presenter = meta["presenter"]
    keywords = meta["keywords"]
    source_body = meta["source_body"]
    has_source = meta["has_source"]
    alternate_url = meta["alternate_url"]
    
    # Pagination: deck landing page -> slide-001
    first_slide = f"presentations/{deck_name}/slide-001"
    
    header = f"""---
title: "{title}"
date: "{date}"
presenter: "{presenter}"
type: presentation
sidebar_label: "{title}"
pagination_next: "{first_slide}"
---

# {title}

**Date:** {date}  
**Presenter:** {presenter}  
"""
    if keywords:
        header += f"**Topics:** {', '.join(keywords)}\n"
    
    if alternate_url:
        header += f"\n**Alternate Deck Link:** [Published CASCDR Deck on SpeakerDeck]({alternate_url})\n"
    
    header += "\n---\n\n"
    
    if has_source and source_body:
        header += f"## Outline & Notes\n\n{source_body}\n\n"
    
    header += "\n## Slides in this Deck\n\n"
    header += f"- [Deck Overview (All Slides)](/presentations/{deck_name}/)\n"
    for idx in range(1, meta['slide_count'] + 1):
        header += f"- [Slide {idx}](/presentations/{deck_name}/slide-{str(idx).zfill(3)})\n"

    images_md = ""
    for idx, img in enumerate(slide_files, start=1):
        alt_text = generate_alt_text(idx, meta['slide_count'], title, date, presenter, keywords, f"slides/{deck_name}/{img.name}", alt_overrides)
        images_md += f"![{alt_text}](/img/slides/{deck_name}/{img.name})\n\n"
    
    content = header + images_md
    dest = DOCS_DEST / deck_name / "index.md"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(content)
    return dest

def generate_slide_page(deck_name, img_name, slide_num, total_slides, meta, alt_overrides, next_deck_name=None):
    title = meta["title"]
    date = meta["date"]
    presenter = meta["presenter"]
    keywords = meta["keywords"]
    
    alt_text = generate_alt_text(slide_num, total_slides, title, date, presenter, keywords, f"slides/{deck_name}/{img_name}", alt_overrides)

    # For slide 1, prev is the deck landing page (index); for others, previous slide
    if slide_num == 1:
        prev_slide = f"presentations/{deck_name}/index"
    else:
        prev_slide = f"presentations/{deck_name}/slide-{str(slide_num - 1).zfill(3)}"
    
    if slide_num < total_slides:
        next_slide = f"presentations/{deck_name}/slide-{str(slide_num + 1).zfill(3)}"
    else:
        next_slide = f"presentations/{next_deck_name}/index" if next_deck_name else ""
    
    frontmatter = f"""---
title: "Slide {slide_num} of {total_slides} - {title}"
sidebar_label: "Slide {slide_num}"
"""
    if next_slide:
        frontmatter += f'pagination_next: "{next_slide}"\n'
    # Always add pagination_prev: slide 1 -> deck landing page, others -> previous slide
    frontmatter += f'pagination_prev: "{prev_slide}"\n'
        
    frontmatter += f"""---

# {title} — Slide {slide_num}

![{alt_text}](/img/slides/{deck_name}/{img_name})

<br/>
<br/>

"""
    if slide_num > 1:
        frontmatter += f'[← Previous Slide](/presentations/{deck_name}/slide-{str(slide_num - 1).zfill(3)})  \n'
    else:
        frontmatter += '  \n'
        
    frontmatter += f'[Back to Deck Overview](/presentations/{deck_name}/)  \n'
    
    if next_slide:
        frontmatter += f'[Next Slide →](/{next_slide.replace("/index", "/")})\n'
        
    frontmatter += "\n"
    
    dest = DOCS_DEST / deck_name / f"slide-{str(slide_num).zfill(3)}.md"
    dest.write_text(frontmatter)
    return dest

def clean_stale_directories():
    """Remove any deck directory in docs/presentations/ that is not in DECK_TO_SOURCE_MAP."""
    print("Cleaning stale presentation directories...")
    for item in DOCS_DEST.iterdir():
        if item.is_dir() and item.name not in DECK_TO_SOURCE_MAP:
            shutil.rmtree(item)
            print(f"  Removed stale dir: {item.name}")

def generate_sidebar_and_pages(decks_meta):
    def parse_date(d):
        try:
            if isinstance(d["date"], date):
                return d["date"]
            return datetime.strptime(str(d["date"]), "%Y-%m-%d").date()
        except ValueError:
            return date(1970, 1, 1)
            
    sorted_decks = sorted(decks_meta, key=parse_date, reverse=True)
    
    for i, d in enumerate(sorted_decks):
        deck_name = d["name"]
        next_deck_name = sorted_decks[i+1]["name"] if i + 1 < len(sorted_decks) else None
        
        slide_files = sorted((Path("/agent/files/rrbtc-wiki-docusaurus/static/img/slides") / deck_name).glob("slide_*.jpg"))
        
        generate_deck_landing_page(deck_name, d, slide_files, load_alt_text_overrides(), next_deck_name)
        
        for idx, img in enumerate(slide_files, start=1):
            generate_slide_page(deck_name, img.name, idx, d["slide_count"], d, load_alt_text_overrides(), next_deck_name)

    js_lines = [
        "// Auto-generated by scripts/gen-slides.py. Do not edit manually.",
        "// This file is require()d by the main sidebars.js",
        "module.exports = [",
        "  {"
    ]
    js_lines.append("    type: 'category',")
    js_lines.append("    label: 'Presentations',")
    js_lines.append("    collapsed: true,")
    js_lines.append("    items: [")
    
    for d in sorted_decks:
        deck_name = d["name"]
        title = d["title"]
        date_str = d["date"] if isinstance(d["date"], str) else str(d["date"])
        slide_count = d["slide_count"]
        
        js_lines.append("      {")
        js_lines.append("        type: 'category',")
        js_lines.append(f"        label: '{title} ({date_str})',")
        js_lines.append("        collapsed: true,")
        js_lines.append("        items: [")
        js_lines.append(f"          {{ type: 'doc', id: 'presentations/{deck_name}/index', label: 'Deck Overview' }},")
        
        for i in range(1, slide_count + 1):
            js_lines.append(f"          {{ type: 'doc', id: 'presentations/{deck_name}/slide-{str(i).zfill(3)}', label: 'Slide {i}' }},")
            
        js_lines.append("        ]")
        js_lines.append("      },")
        
    js_lines.append("    ]")
    js_lines.append("  }")
    js_lines.append("];")
    
    SIDEBAR_OUT.write_text("\n".join(js_lines))
    return SIDEBAR_OUT

if __name__ == "__main__":
    print("Starting clean slide generation...")
    clean_stale_directories()
    
    decks_meta = []
    total_slides = 0
    
    for deck_dir in sorted(SLIDES_SRC.iterdir()):
        if not deck_dir.is_dir() or deck_dir.name == "slides":
            continue
        
        deck_name = deck_dir.name
        
        # STRICT CHECK: Only process if in map
        if deck_name not in DECK_TO_SOURCE_MAP:
            print(f"  Skipping unmapped dir: {deck_name}")
            continue
            
        print(f"Processing: {deck_name}")
        
        slide_files = sorted(deck_dir.glob("slide_*.jpg"))
        if not slide_files:
            print(f"  No slides found in {deck_name}, skipping.")
            continue
            
        meta = get_deck_metadata(deck_name, deck_dir)
        meta["name"] = deck_name
        decks_meta.append(meta)
        total_slides += meta["slide_count"]
            
    generate_sidebar_and_pages(decks_meta)
    
    print(f"\nSuccess! Processed {len(decks_meta)} deck directories.")
    print(f"Expected total slide pages: {total_slides}")
    print(f"Sidebar module written to: {SIDEBAR_OUT}")