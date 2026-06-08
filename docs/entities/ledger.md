---
title: Ledger
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [hardware-wallet, custody, cold-storage, security-element]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
  - raw/bitcoin-protocol-meetup-2-2022-07-14.md
confidence: high
contested: false
---

# Ledger

Ledger is a hardware wallet manufacturer using secure element (SE) chips to protect private keys. One of the most widely sold hardware wallets globally.

## Properties
| Property | Detail |
|----------|--------|
| Form factor | USB (Nano S, Nano X, Stax, Flex) |
| Firmware | Closed-source; open-source companion app |
| Key storage | Secure Element chip |
| Connectivity | USB / Bluetooth (Nano X) |

## Controversy: Ledger Recover (2023)
Optional service that encrypts and shards a user's seed via third parties (Coincover + self-custody shards). Generated backlash from the self-custody community for introducing trusted parties into the backup flow.

## Trade-offs
| Pro | Con |
|-----|-----|
| Widely available | Closed-source firmware |
| Secure Element | Ledger Recover controversy |
| Bluetooth support | Proprietary software stack |

> Round Rock meetups note: "Ledger: closed-source, Secure Element" — node meetup; "Ledger — closed-source, HSM" — privacy meetup

## Related
- [Trezor](/entities/trezor) — Open-source competitor
- [ColdCard](/entities/coldcard) — Air-gapped alternative

## Resources
- [Ledger](https://ledger.com)
