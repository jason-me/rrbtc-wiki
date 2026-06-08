---
title: ColdCard
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [hardware-wallet, custody, cold-storage, air-gapped, verifiable]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
  - raw/bitcoin-protocol-meetup-2-2022-07-14.md
confidence: high
contested: false
---

# ColdCard

ColdCard is a hardware wallet for advanced users prioritizing security verification, air-gapped signing, and open-source principles. Manufactured by Coinkite, widely used in multisig setups.

## Properties
| Property | Detail |
|----------|--------|
| Form factor | Calculator-style with physical keypad |
| Source | Verifiable source; reproducible builds offered |
| Connectivity | MicroSD + USB (USB can be disabled) |
| Key storage | Dual secure elements (different vendors) |

## Key Features
- **Air-gapped signing** — sign PSBTs via MicroSD; no USB required
- **Tamper-evident bag** — physical delivery security
- **Brick PIN + duress PIN** — anti-coercion measures
- **Multisig native** — designed for complex m-of-n setups

> Round Rock meetups note: "ColdCard: verifiable-source, air-gapped"

## Related
- [Trezor](/entities/trezor) — Open-source USB alternative
- [Ledger](/entities/ledger) — Secure-element competitor
- [Sparrow Wallet](/entities/sparrow-wallet) — Desktop multisig companion

## Resources
- [ColdCard](https://coldcard.com)
