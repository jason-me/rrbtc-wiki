--- Log

## [2026-06-11] deploy | Wiki v0.1 — Full Docusaurus launch
- Migrated from MkDocs to Docusaurus v3 with Bitcoin Orange theming
- Built complete presentation archive: 21 decks, 465 slides from SpeakerDeck + raw outlines
- Implemented idempotent slide generator (scripts/gen-slides.py) with explicit DECK_TO_SOURCE_MAP
- Fixed duplicate deck: CASCDR excluded, folded alternate SpeakerDeck URL into "Why Lightning + AI"
- Backfilled Zero Dollar Manifesto (ZDM) deck: fetched PDF, converted to 28 JPGs, full interactive deck
- Corrected Meetup #18 date (2024-07-29 → 2023-11-09); left #26 LARP at 2024-07-29 per user ruling
- Category landing pages (6): Concepts, Comparisons, Entities, Presentations, Queries, Summaries
  - Added approved verbatim prose + DocCardList with filtered items (README excluded from cards)
  - Frontmatter titles match sidebar labels exactly ("Concepts Overview", etc.)
  - Sequential pagination: category overview → first article → ... → next category overview
- License & footer: MIT License page at /license; footer copyright + links centered inline
- Fixed broken links: sahil-chaturvedi, start-os entity refs; ZDM outline slug collision resolved via explicit slug frontmatter
- Fixed slide pagination regression:
  - Deck landing → slide-001 → ... → last slide → next deck landing (bisq → bitchat verified)
  - Category overview → first article → ... → last article → next category overview (verified on Concepts)
- Clean build: zero broken-link warnings; accessibility-themed CSS override for DocCardList descriptions

## [2026-05-10] init | Wiki structure + SCHEMA.md
- Created directories: raw/, entities/, concepts/, comparisons/, queries/
- Wrote SCHEMA.md with YAML frontmatter spec, taxonomy, naming rules
- Initialized index.md and this log.md

## [2026-05-10] ingest | Speaker Deck archive (17 decks)
- Copied meetup deck extractions from speakerdeck.com/rrbtc
- Decks span 2022-07 to 2026-01 covering nodes, mining, privacy, design, and protocol

## [2026-05-10] synthesize | Mining-focused entity pages (5)
- entities/datum.md — DATUM protocol, solo config, node integration
- entities/bitaxe.md — BitAxe 401/601 hardware, setup, advanced stack
- entities/ocean-xyz.md — TIDES payouts, Bolt 12, DATUM hybrid pool
- entities/stratum-v2.md — Protocol improvements, job negotiation
- entities/public-pool.md — Pure solo mining, zero fees

## [2026-05-10] synthesize | Infrastructure entity pages (4)
- entities/bitcoin-knots.md — Enhanced full node, template options
- entities/c-lightning.md — Bolt 12 offers for Lightning payouts
- entities/axe-os.md — BitAxe firmware, latency optimization
- entities/start-os.md — Home server OS, one-click services

## [2026-05-10] synthesize | Concept pages (1)
- concepts/mining-payout-schemas.md — PPS / PPLNS / FPPS / TIDES comparison

## [2026-05-10] outline | New meetup presentation: Rented Hashrate + DATUM
- Created 19-slide Canva-ready outline at presentations/mining-hashpower-datum-outline-2026-05.md
- Researched Braiins Hashpower API, market mechanics, and solo lottery packages
- Integrated Hermes Agent privacy-tiered architecture (T1/T2/T3) into the narrative
- Added BIP-110 / RDTS context (Core vs Knots debate) with neutral framing
- Included two-path template control: DATUM+Ocean vs StratumV2+dmnd.work
- Included demo scenario, economics, risks, and call to action

## Next
- Integrate Canva intro slide content once shared (all Canva links returned 403)
- Add comparison page: pool-types (Ocean vs public-pool vs Braiins vs Foundry)
- Add concept page: hashrate-rental economics
- Review outline with user and adjust emphasis
