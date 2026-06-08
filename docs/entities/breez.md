---
title: Breez
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [lightning, wallet, pos, mobile, non-custodial, nfc]
sources: [raw/running-robosats-2023-04-14.md, raw/nfc-cards-wallets-for-bitcoin-2023-05-12.md]
confidence: high
contested: false
---

# Breez

Mobile Lightning wallet for iOS and Android. Built on Flutter. Non-custodial, Lightning-native, and includes a built-in marketplace plus point-of-sale (POS) support.

## Key Features
- Non-custodial: private keys stored on device; no account freezes possible
- Fast, cheap Lightning transactions
- Built-in Tor support for privacy
- Built-in marketplace for Lightning goods and services
- POS terminal mode for merchant tap-to-pay (used with BoltCard demos)
- HODL invoice support for applications like RoboSats bonds

## Use in Round Rock Bitcoiners
- Featured wallet in the Running RoboSats tutorial
- POS terminal for BoltCard NFC tap demonstrations

## Wallet Compatibility Notes
| Context | Compatibility |
|---------|---------------|
| RoboSats (buyer) | Supported |
| HODL invoices | Supported |
| Lightning receiving | Supported |
| NFC/BoltCard | Used as POS terminal |

Website: [breez.technology](https://breez.technology/)

See also: [lightning-network], [robosats], [bolt-card]
