---
title: Sparrow Wallet
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [wallet, desktop, privacy, multisig, open-source]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/what-is-multisig-meetup-7-2022-12-08.md
confidence: high
contested: false
---

# Sparrow Wallet

Sparrow Wallet is a desktop Bitcoin wallet focused on privacy, security, and flexibility. It supports single-sig and multisig setups and is designed for users who want full control over their coins and connections.

## Properties
| Property | Detail |
|----------|--------|
| Type | Desktop (Linux, macOS, Windows) |
| License | Open-source |
| Multisig | Full support (PSBT, hardware wallets) |
| Coinjoin | Whirlpool integration available |
| Node connection | Local Core, private Electrum, public server |

## Key Features
- **Server Connection**: Private Electrum via own node (Umbrel, MyNode), public Electrum servers (Tor), or local Bitcoin Core RPC
- **HWI**: connects to Trezor, Ledger, ColdCard, SeedSigner
- **PSBT**: partial signed bitcoin transactions for multisig coordination
- **CoinJoin**: integrated Whirlpool mixing for privacy

> Round Rock meetup notes:
> - "Sparrow Wallet (HWI + Electrum, public/local/remote nodes)" — node meetup
> - "Bitcoiner.Guide Multisig (Specter + Sparrow)" — multisig meetup
> - "Orange Surf Multisig Guide (Sparrow 2-of-2 and 2-of-3)" — multisig meetup

## Related
- [Electrum](/entities/electrum) — Precursor to Sparrow's server model
- [ColdCard](/entities/coldcard) — Air-gapped hardware wallet commonly paired with Sparrow
- [Specter Desktop](/entities/specter-desktop) — Multisig coordinator alternative
- [Whirlpool](/entities/whirlpool) — CoinJoin integration

## Resources
- [Sparrow Wallet](https://sparrowwallet.com)
