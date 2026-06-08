---
title: Bitcoin Knots
created: 2026-05-10
updated: 2026-06-03
type: entity
tags: [node, full-node, mining, privacy, bitcoin-core-fork]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: true
contradictions: [bitcoin-core]
---

# Bitcoin Knots

Bitcoin Knots is an enhanced full-node implementation of Bitcoin, maintained by Luke Dashjr. It builds on Bitcoin Core with additional privacy, decentralization, and mining-related features.

## Key Differences from Bitcoin Core
- **Enhanced block template options** — more control over transaction selection for mining
- **Spam filtering** — stricter mempool policies (notably the "inscriptions" debate)
- **Privacy hardening** — additional RPC toggles and defaults
- **More conservative defaults** — prefers decentralization over convenience

## Role in Mining Stacks
- Required node software for [DATUM](/entities/datum)-based template construction
- Provides the mempool and UTXO set that DATUM uses to build custom work
- When combined with [AxeOS](/entities/axe-os) and [Ocean.xyz](/entities/ocean-xyz), creates a fully miner-controlled pipeline

## Installation Context
- Packaged for [StartOS](/entities/start-os) as a system service
- Can run on any Linux/macOS/Windows server with sufficient disk and bandwidth
- Pruning supported but not recommended if serving miners (full chain validation matters)

## Relationship to Start9OS / StartOS
- [StartOS](/entities/start-os) is the operating system
- Bitcoin Knots is one of the services you run on it (alongside [C-Lightning (Core-Lightning)](/entities/c-lightning), BTC RPC Explorer, etc.)

## Related
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Ordinals/inscriptions debate context
- [DATUM](/entities/datum) — uses Knots as its template source
- [StartOS](/entities/start-os) — home server OS where Knots commonly runs
- [Stratum V2](/entities/stratum-v2) — alternative template negotiation standard
- [Bitcoin Protocol](/concepts/bitcoin-protocol) — Underlying protocol implemented by Bitcoin Knots

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]

## Resources
- [Bitcoin Knots Official Site](https://bitcoinknots.org)
- [GitHub: bitcoin/bitcoin (Knots fork)](https://github.com/bitcoinknots/bitcoin)
- [BIP-110](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki)
- [Luke Dashjr's Dev Blog](https://www.dashjr.org)
