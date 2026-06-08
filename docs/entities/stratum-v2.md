---
title: Stratum V2
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, protocol, stratum, security, decentralization]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: false
---

# Stratum V2

Stratum V2 (Sv2) is a next-generation mining protocol that addresses the centralization risks inherent in the original Stratum protocol by giving miners control over block template construction.

## Why Stratum V2 Matters
In Stratum V1, the pool operator builds the block template. This creates:
- **Censorship risk** — pools can exclude transactions
- **Fee sniping risk** — pool can redirect rewards
- **Single point of failure** — compromised pool affects all connected miners

Sv2 inverts this: miners (or their proxies) construct templates; the pool only coordinates difficulty and rewards.

## Key Improvements
- **Job Negotiation** — miner proposes template; pool approves or rejects
- **Encrypted channels** — TLS-like security between miner and pool
- **Bandwidth efficiency** — binary protocol, less overhead
- **Decentralized payout aggregation** — can split rewards without trusting pool

## Implementations
- [Dmnd.work](https://dmnd.work) — Stratum V2 reference implementation
- [Braiins.com](https://braiins.com) — operates Slush Pool with Sv2 support
- [StratumV2.org](https://stratumv2.org) — spec and developer resources

## Relationship to DATUM
- Sv2 is a **protocol standard** for template negotiation
- [DATUM](/entities/datum) is an **implementation** that uses similar principles (miner-side templates)
- Both push template control to the edge of the network
- Sv2 is pool-facing; DATUM is node-facing (your own Bitcoin node)

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]

## Related
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Template control and miner choice over data-carving transactions

## Resources
- [Stratum V2 Official Site](https://stratumv2.org)
- [dmnd.work — Sv2 Reference Implementation](https://dmnd.work)
- [Braiins Sv2 Documentation](https://braiins.com/stratum-v2)
- [GitHub: stratum-mining](https://github.com/stratum-mining)
