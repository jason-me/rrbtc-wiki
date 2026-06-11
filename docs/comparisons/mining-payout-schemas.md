---
title: Mining Payout Schemas
description: "Comparison of PPLNS, FPPS, PPS+, TIDES, and solo mining payout models with variance analysis, latency, pool fees, and suitability for different hash-rate scales."
created: 2026-06-03
updated: 2026-06-03
type: comparison
tags: [mining, pool, economics, risk, reward, datum, tides]
sources:
  - raw/decentralized-mining-workshop-meetup-30.md
  - entities/ocean-xyz.md
  - entities/public-pool.md
  - entities/braiins-hashpower.md
  - concepts/mining-payout-schemas.md
confidence: high
contested: false
---

# Mining Payout Schemas

Mining pools and solo setups distribute block rewards through different payout schemas. Each schema trades off **variance** (how predictable your income is), **fees** (what the operator charges), **transparency** (how rewards are calculated), and **sovereignty** (how much control you retain over block templates).

> **Bottom line:** There is no universally best schema. The right choice depends on your hash rate, electricity stability, risk tolerance, and whether you value predictable cash flow over long-term fee minimization.

## At a Glance

| Schema | Type | Variance to Miner | Pool Fees | Tx Fees | Transparency | Template Control |
|--------|------|-------------------|-----------|---------|--------------|------------------|
| **PPS** | Pay Per Share | None | Higher | Excluded | Low | None |
| **FPPS** | Full Pay Per Share | None | Higher | Included | Low | None |
| **PPLNS** | Pay Per Last N Shares | High | Lower | Included | Medium | None |
| **TIDES** | Transparent Income-Dividend Even-Share | Moderate | Lower | Included | High | Full (via DATUM) |
| **Solo** | Self-mining | Extreme (all or nothing) | None | Full | Full | Full |

## Schema Breakdown

### PPS — Pay Per Share

The pool operator pays a fixed amount for every valid share submitted, regardless of whether the pool finds a block.

- **Variance:** Zero for the miner. Every share earns something.
- **Fees:** Higher (typically 2–4%) because the operator absorbs all variance risk.
- **Transaction fees:** Excluded. Miners earn only the block subsidy portion.
- **Best for:** Miners who need predictable cash flow to cover fixed costs (rent, electricity contracts).
- **Trade-off:** You pay a premium for stability. Over long time horizons, PPLNS or TIDES typically yield more.

### FPPS — Full Pay Per Share

Same as PPS, but the fixed payout includes an estimate of transaction fees.

- **Variance:** Zero for the miner.
- **Fees:** Higher than PPS (often 3–5%) because the operator now absorbs fee-market variance too.
- **Transaction fees:** Included. The pool estimates average fees over a window and bakes them into the per-share price.
- **Best for:** Large industrial farms with rigid cost structures and hedging requirements.
- **Trade-off:** The fee estimate can lag during volatile mempool periods. You may under-earn during fee spikes or over-earn during lulls.
- **Examples:** Foundry USA, Braiins Pool (historically), most large industrial pools.

### PPLNS — Pay Per Last N Shares

Rewards are distributed only when the pool finds a block, proportional to shares submitted in the last N share window.

- **Variance:** High. You can submit shares for hours and earn nothing if no block is found.
- **Fees:** Lower (typically 0–2%) because the operator does not absorb variance.
- **Transaction fees:** Included naturally — when a block is found, the full reward (subsidy + fees) is split.
- **Best for:** Miners with stable operations who can weather dry spells.
- **Trade-off:** Pool-hopping is ineffective. If you leave during a dry spell and the pool finds a block shortly after, you earn nothing for your earlier shares.
- **Examples:** Slush Pool (original), many smaller pools.

### TIDES — Transparent Income-Dividend Even-Share

Ocean.xyz's native schema. Combines pooled variance sharing with transparent accounting and optional solo/pooled hybrid modes.

- **Variance:** Moderate. You share in the pool's luck, but the accounting is fully transparent.
- **Fees:** Lower than PPS/FPPS. The operator takes a smaller cut because miners share variance.
- **Transaction fees:** Included and itemized. Every payout shows exactly how much came from subsidy vs. fees.
- **Transparency:** High. Full accounting of block rewards, fees, and share weights is published.
- **Template control:** Full via [DATUM](/entities/datum). You can submit your own block templates while still earning pooled rewards.
- **Best for:** Miners who want lower fees than FPPS but don't want to go fully solo.
- **Trade-off:** Requires trusting the pool's accounting (though it's auditable) and understanding the share-weighting formula.
- **Examples:** [Ocean.xyz](/entities/ocean-xyz)

### Solo — No Pool

You mine directly against the network difficulty. If you find a block, you keep the entire reward. If you don't, you earn nothing.

- **Variance:** Extreme. For a single Bitaxe at ~733 GH/s, expected time-to-block is measured in centuries.
- **Fees:** Zero pool fees.
- **Transaction fees:** Full. You keep 100% of subsidy + fees.
- **Template control:** Full. You construct your own block template via your own node.
- **Best for:** Philosophical miners, lottery players, or those using [Braiins Hashpower](/entities/braiins-hashpower) to rent hash for short solo bursts.
- **Trade-off:** Statistically, most solo miners never find a block. The expected value is identical to pooled mining (minus pool fees), but the distribution is wildly different.
- **Examples:** [public-pool.io](/entities/public-pool) (coordinated solo), direct network mining with [DATUM](/entities/datum)

## Risk Transfer

| Schema | Who bears variance risk? | Who bears fee-market risk? |
|--------|--------------------------|---------------------------|
| PPS | Pool operator | Pool operator (tx fees excluded) |
| FPPS | Pool operator | Pool operator |
| PPLNS | Miners collectively | Miners collectively |
| TIDES | Miners collectively | Miners collectively |
| Solo | Individual miner | Individual miner |

- **PPS / FPPS:** The pool operator must maintain reserves to cover payouts during unlucky streaks. If reserves run thin, payouts can be delayed or the pool can fail (see: 51% attacks on small PPS pools).
- **PPLNS / TIDES / Solo:** The miner bears the risk. The operator's incentive is to stay online and find blocks, not to maintain a massive reserve.

## Choosing a Schema

| Situation | Recommended Schema | Rationale |
|-----------|-------------------|-----------|
| Stable electricity, large farm, long time horizon | PPLNS or TIDES | Lower fees compound over time; you can weather variance |
| Unstable costs, small operation, need predictable income | FPPS | Smooth cash flow for covering fixed costs |
| Home miner with 1–2 Bitaxes | TIDES or Solo | TIDES for steady micro-rewards; Solo for lottery + full sovereignty |
| Renting hash for short bursts | Solo (via Braiins Hashpower) | 10,000 sats → ~2 hours of solo hash. Provably fair; full block reward if you hit. |
| Running your own node with DATUM | TIDES or Solo | Template control + pooled rewards, or full sovereignty |
| Privacy-focused, non-custodial payouts | TIDES | Lightning payouts via Bolt 12; no custodial balance held by pool |

## Transparency Spectrum

| Schema | Accounting Visibility | Auditability |
|--------|----------------------|--------------|
| PPS | Low | Trust the operator's share price |
| FPPS | Low | Trust the operator's fee estimate |
| PPLNS | Medium | Share weights visible, but block reward allocation opaque |
| TIDES | High | Full block-by-block accounting published |
| Solo | Full | You validate your own blocks |

## Related Pages

- [Mining Payout Schemas](/concepts/mining-payout-schemas) — Concept-level overview with risk framework
- [Ocean.xyz](/entities/ocean-xyz) — TIDES and DATUM implementation
- [public-pool.io](/entities/public-pool) — Pure solo mining coordination
- [Braiins Hashpower](/entities/braiins-hashpower) — On-demand hash for solo or pooled mining
- [DATUM](/entities/datum) — Protocol for template control while pooled
- [BitAxe](/entities/bitaxe) — Low-power hardware where fee optimization matters
- [Home Mining](/concepts/home-mining) — Context for residential mining economics

## References

- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]
- Ocean.xyz TIDES documentation ^[entities/ocean-xyz.md]
- Braiins Hashpower marketplace ^[entities/braiins-hashpower.md]
