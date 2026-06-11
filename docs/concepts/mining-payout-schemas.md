---
title: Mining Payout Schemas
description: "Comparison of PPLNS, FPPS, PPS+, TIDES, and solo mining payout models with variance, latency, and pool fee implications."
created: 2026-05-10
updated: 2026-06-02
type: concept
tags: [mining, economics, pool, risk, reward]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: false
---

# Mining Payout Schemas

Mining pools distribute block rewards and fees to participants according to a chosen payout schema. The schema determines how risk (variance) and reward (fees / stability) are allocated between miners and the pool operator.

## Schema Comparison

| Schema | Description | Variance | Fees | Transaction Fees |
|--------|-------------|----------|------|------------------|
| **PPS** | Pay Per Share — fixed payout per valid share submitted | None to miner | Higher | Excluded |
| **FPPS** | Full PPS — fixed payout including transaction fees | None to miner | Higher | Included |
| **PPLNS** | Pay Per Last N Shares — payout when block found, based on recent share window | High | Lower | Included naturally |
| **TIDES** | Transparent Income-Dividend Even-Share (Ocean.xyz) | Moderate | Lower | Included, transparent |
| **Solo** | No pool; miner keeps entire block reward | Extreme (all or nothing) | None | Full |

## Risk Transfer
- **PPS / FPPS** — pool operator absorbs variance risk; charges premium
- **PPLNS / TIDES** — miners share variance; operator takes smaller cut
- **Solo** — miner assumes all risk and all reward

## Choosing a Schema
- **Stable electricity / large farm** → PPLNS or TIDES (lower fees over time)
- **Unstable costs / small operation** → FPPS (predictable cash flow)
- **Philosophical / sovereignty** → Solo or DATUM-backed pooled solo via [Ocean.xyz](/entities/ocean-xyz)

## Relevant Entities
- [Ocean.xyz](/entities/ocean-xyz) — TIDES and DATUM solo/pooled options
- [BitAxe](/entities/bitaxe) — low-power hardware where fee optimization matters
- [public-pool.io](/entities/public-pool) — pure solo, zero pool fees

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]
