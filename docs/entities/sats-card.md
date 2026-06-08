---
title: SatsCard
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [nfc, hardware, cold-storage, opendime, gifting, on-chain]
sources: [raw/nfc-cards-wallets-for-bitcoin-2023-05-12.md]
confidence: high
contested: false
---

# SatsCard

NFC-enabled physical card from Coinkite functioning like a re-usable [OpenDime](https://opendime.com/). Load bitcoin onto it and transfer via NFC tap.

## Specifications
- Reusable up to 10 times for on-chain transactions
- NFC tap-to-transfer (no battery required)
- Two layers of security; only connects when near an NFC reader
- No KYC required to purchase
- Portable cold storage comparable to traditional payment cards

## Setup Requirements
- NFC-enabled smartphone
- Nunchuk Mobile Wallet for signing and transfers
- Physical SatsCard device

## Trade-offs
| Advantage | Risk |
|-----------|------|
| No charging needed | Card can be lost |
| No KYC | Private keys must be backed up during setup |
| Easy physical gifting | Limited to 10 uses |
| Two security layers | Replacement only possible with key backup |

Manufacturer: [Coinkite](https://coinkite.com/)

See also: [tap-signer], [bolt-card], [nunchuk]
