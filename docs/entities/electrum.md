---
title: Electrum
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [wallet, desktop, light-client, open-source, legacy]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/node-builder-workshop-2025-11-13.md
confidence: high
contested: false
---

# Electrum

Electrum is one of the oldest Bitcoin wallets, using SPV to verify transactions without downloading the full blockchain. Its server implementation (ElectrumX, Electrs, Fulcrum) is widely bundled with node packages.

## Two Roles

### 1. Wallet Client
- Fast startup — no blockchain download
- Hardware wallet integration available
- Single-sig and 2FA multisig options
- Battle-tested since 2011

### 2. Electrum Server
- Indexes the UTXO set for fast querying
- Enables external wallets (Sparrow, BlueWallet) to connect remotely
- Bundled with Umbrel, MyNode, Start9

> Round Rock meetup notes:
> - "Electrum Server (Umbrel/MyNode, Tor, remote)" — connects Sparrow to node
> - "Run Lightning, Electrum, Mempool privately" — node workshop services stack

## Related
- [Sparrow Wallet](/entities/sparrow-wallet) — Wallet using Electrum server model
- [Umbrel](/entities/umbrel) — Node bundling Electrum server
- [MyNode](/entities/mynode) — Node bundling Electrum server

## Resources
- [Electrum](https://electrum.org)
