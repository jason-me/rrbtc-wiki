---
title: Bolt Card
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [nfc, lightning, payments, coincorner, pos, physical-card]
sources: [raw/nfc-cards-wallets-for-bitcoin-2023-05-12.md]
confidence: high
contested: false
---

# Bolt Card

Lightning-enabled NFC card for tap-to-pay Bitcoin transactions. Originally from CoinCorner; compatible with third-party Bolt Card Hub services.

## How It Works
- Tap card on NFC reader to pay via Lightning Network
- Works in-person or on websites via phone NFC
- Requires Bolt Card Wallet (fork of BlueWallet with Bolt Card support)
- Connects to a Bolt Card Hub service for Lightning channel management

## Setup Steps
1. Acquire card (CoinCorner or resellers like lasereyes.cards)
2. Download Bolt Card Wallet app (iOS/Android)
3. Connect to a Bolt Card Hub (e.g., hub.boltcardwallet.com)
4. Tap card to phone to pair
5. Fund wallet via Lightning invoice

## Trade-offs
| Advantage | Risk |
|-----------|------|
| Fast tap-to-pay | Requires hub service availability |
| Low Lightning fees | Custodial trade-off via hub |
| No KYC to obtain card | Backup critical for recovery |

Manufacturer: [CoinCorner](https://www.coincorner.com/)

See also: [sats-card], [tapsigner], [lightning-network]
