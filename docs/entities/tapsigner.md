---
title: Tapsigner
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [nfc, hardware, signing-device, cold-storage, coinkite]
sources: [raw/nfc-cards-wallets-for-bitcoin-2023-05-12.md]
confidence: high
contested: false
---

# Tapsigner

NFC-enabled card from Coinkite storing a Bitcoin private key. Sign transactions by tapping the card to your phone.

## Function
- Stores private key on a physical card with NFC communication
- Signs mobile wallet transactions via tap
- Works with compatible wallets supporting NFC signing
- No battery; passive NFC power from the device

## Security Model
- Private key never leaves the card during signing
- Backup required during initial setup to prevent loss
- Two-factor: physical possession of card + wallet PIN/app

## Comparison to SatsCard
| Feature | SatsCard | Tapsigner |
|---------|----------|-----------|
| Primary use | Transfer/gift sats | Sign transactions |
| Protocol | On-chain transfer | Signing |
| Reusability | 10 uses | Unlimited |
| Works with | Nunchuk | Multiple NFC wallets |

Manufacturer: [Coinkite](https://coinkite.com/)

See also: [sats-card], [bolt-card], [nunchuk]
