---
title: Trezor
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [hardware-wallet, custody, cold-storage, open-source]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
confidence: high
contested: false
---

# Trezor

Trezor is a hardware wallet developed by SatoshiLabs. The first commercial hardware wallet (2014), known for fully open-source firmware.

## Properties
| Property | Detail |
|----------|--------|
| Form factor | USB with screen (Model One, Model Safe 3, Model T) |
| Firmware | Fully open-source |
| Key storage | General-purpose microcontroller (no secure element) |
| Seed | BIP39 (12 or 24 words) |

## Features
- Screen confirmation for every transaction
- Shamir backup (SSPL)
- CoinJoin integration in Trezor Suite
- Optional BIP39 passphrase

## Comparison with Ledger
| | Trezor | Ledger |
|---|---|---|
| Firmware | Open-source | Closed-source |
| Chip | General MCU | Secure Element |
| Bluetooth | No | Yes (Nano X) |

> Round Rock meetups note: "Trezor: open-source, non-custodial"

## Related
- [Ledger](/entities/ledger) — Secure-element competitor
- [ColdCard](/entities/coldcard) — Air-gapped alternative

## Resources
- [Trezor](https://trezor.io)
