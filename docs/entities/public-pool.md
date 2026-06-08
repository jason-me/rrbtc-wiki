---
title: public-pool.io
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, pool, solo-mining, bitaxe, non-kyc]
sources: ['raw/decentralized-home-mining-bitaxe-2025-04.md']
confidence: medium
contested: false
---

# public-pool.io

public-pool.io is a zero-fee, open-source solo mining pool. Instead of sharing rewards across participants, every connected miner hashes independently against the network difficulty—if you find a block, you keep the entire reward.

## How It Works
- Pool coordinates stratum connection but does not aggregate hash rate for shared rewards
- Each miner competes individually against network difficulty (~83T at time of writing)
- 12 blocks were solo mined in 2024; 2 of them by Bitaxes

## Configuration (BitAxe)
- Stratum Host: `public-pool.io`
- Port: `21496`
- User: `[BitcoinAddress].[WorkerName]`
- Save & restart

## Odds
Use [SoloChance.com](https://solochance.com) to calculate expected time-to-block based on your hash rate.

## Comparison to Other Pools
| Pool | Type | Fees | Template Control |
|------|------|------|------------------|
| public-pool.io | Pure solo | 0% | Full (your node, or default pool templates) |
| [Ocean.xyz](/entities/ocean-xyz) | Solo / Pooled hybrid | Low | Full (via [DATUM](/entities/datum)) |
| Braiins / Slush | Pooled (Sv2) | ~2% | Partial (Sv2 negotiation) |
| Foundry | Pooled (FPPS) | Variable | None (pool templates) |

## Related
- [BitAxe](/entities/bitaxe) — ideal hardware for low-cost solo participation
- [DATUM](/entities/datum) — lets you run solo with your own templates while still using a pool backend
- [Mining Payout Schemas](/concepts/mining-payout-schemas) — broader context on how rewards are distributed

## References
- Bitaxe deck (April 2025) ^[raw/decentralized-home-mining-bitaxe-2025-04.md]

## Resources
- [public-pool.io](https://public-pool.io)
- [GitHub: public-pool](https://github.com/benjamin-wilson/public-pool)
- [SoloChance.com](https://solochance.com) — solo mining probability calculator
- [Bitaxe Setup Guide](https://bitaxe.org)
