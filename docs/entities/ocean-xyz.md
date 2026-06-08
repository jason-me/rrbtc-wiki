---
title: Ocean.xyz
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, pool, datum, stratum, solo-mining, non-kyc]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: false
---

# Ocean.xyz

Ocean.xyz is a Bitcoin mining pool that emphasizes transparency, non-custodial payouts, and miner sovereignty through the [DATUM](/entities/datum) protocol.

## Key Features
- **DATUM native** — miners can submit custom block templates from their own node
- **TIDES payout** — Transparent, Income-Dividend, Even-Share schema
- **Non-custodial** — payouts go directly to miner-provided addresses or Lightning offers
- **Solo / Pooled hybrid** — mine solo with pool failover, or pooled with template control

## Payout Schema: TIDES
- Transparent: full accounting of block rewards and fees
- Predictable: stable share calculation
- Contrasts with opaque FPPS models used by large pools

## Lightning Payouts (Bolt 12)
1. Run [C-Lightning (Core-Lightning)](/entities/c-lightning) on [StartOS](/entities/start-os) (or equivalent)
2. Enable Bolt 12 to generate a static offer
3. Import offer into Ocean.xyz dashboard
4. Automated Lightning payouts when threshold reached

## Related Entities
- [DATUM](/entities/datum) — protocol layer Ocean.xyz uses for template negotiation
- [Stratum V2](/entities/stratum-v2) — broader standard that enables similar miner-side template control
- [C-Lightning (Core-Lightning)](/entities/c-lightning) — Lightning node implementation supporting Bolt 12
- [public-pool.io](/entities/public-pool) — alternative pure-solo pool

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]
- Bitaxe deck (April 2025) ^[raw/decentralized-home-mining-bitaxe-2025-04.md]

## Resources
- [Ocean.xyz](https://ocean.xyz)
- [ Ocean Documentation](https://ocean.xyz/docs)
- [TIDES Payout Schema](https://ocean.xyz/tides)
- [DATUM Protocol Page](https://ocean.xyz/datum)
