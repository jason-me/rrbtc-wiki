---
title: BlueWallet
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [lightning, wallet, mobile, open-source, ldk]
sources: [raw/running-robosats-2023-04-14.md, raw/nfc-cards-wallets-for-bitcoin-2023-05-12.md]
confidence: high
contested: false
---

# BlueWallet

Mobile Bitcoin wallet for iOS and Android. Supports both on-chain and Lightning. Originally included a custodial Lightning option; shifting toward non-custodial with Lightning Dev Kit (LDK) integration.

## Current State
- Removing custodial Lightning wallet functionality (users must migrate to self-custodial LDK or external wallets)
- Forked as the basis for BoltCard Wallet (added NFC/BoltCard support)
- Open source with active development

## RoboSats Compatibility
- Good UX for Lightning transactions
- **Not recommended** for RoboSats due to accounting bugs reported by the community
- May misreport balances or payment states when handling HODL invoices

## NFC/BoltCard Use
- BoltCard Wallet is a fork of BlueWallet with added NFC card linking capability
- Original BlueWallet does not support BoltCard natively

## Comparison
| Feature | BlueWallet | BoltCard Wallet (fork) |
|---------|------------|------------------------|
| Lightning | LDK (non-custodial) | LDK + BoltCard hub |
| BoltCard NFC | No | Yes |
| Custodial option | Being removed | No |

Website: [BlueWallet](https://bluewallet.io/)

See also: [bolt-card], [breez], [robosats]
