---
title: Braiins Hashpower
created: 2026-06-01
updated: 2026-06-01
type: entity
tags: [mining, marketplace, tools]
sources: [raw/meetup-demo-cheatsheet.md, presentations/mining-hashpower-datum-outline-2026-05.md]
confidence: medium
contested: false
---

# Braiins Hashpower

On-demand SHA-256 hashrate marketplace launched by Braiins in January 2026 (public beta). Miners buy and sell hashrate through a live order book without long-term contracts or hardware ownership.

## How It Works

**Bids ( Buyers )**
- Place a bid at your chosen price in sats per PH per day (e.g. 47,000)
- **Pay-your-bid** model: you pay the price you bid, not the current lowest ask
- Hashrate delivers continuously while your balance covers the bid
- Cancel anytime; no contracts or lock-ups
- Minimum order: 10,000 sats (~$9)

**Asks ( Sellers )**
- Miners list hashrate at their chosen price
- Cheapest liquidity typically ranges ~47,000–48,000 sats/PH/day
- Real-time charting with 5m / 15m / 1h / 4h / 1d timeframes

**Market Depth**
- Total liquidity: ~3.09 EH/s (live)
- Best ask: ~47,204 sats / PH/day (as of May 2026)
- 0% service fees during beta

## Use Cases

- **Solo mining (lottery):** 10,000 sats → 1.95 PH/s for ~2 hours. Provably fair; full block reward if you hit.
- **Pooled mining:** Continuous hashrate directed to a pool like [Ocean.xyz](/entities/ocean-xyz) for steady proportional payouts.
- **DATUM routing:** Rented hash can be pointed to your own [DATUM](/entities/datum) endpoint for template control.

## Automation Integration

- [HashGuard](/entities/hashguard) — DIY Python script that monitors the order book, detects stalled bids, and auto-overbids to restore flow
- [Braiins Hashrate Autopilot](/entities/hashrate-autopilot) — Braiins-managed rules engine that buys when price crosses thresholds and auto-rebalances between pools

## Relationship to Other Entities

- Uses standard Stratum endpoints, compatible with [Stratum V2](/entities/stratum-v2) template-negotiation concepts
- Often paired with [Ocean.xyz](/entities/ocean-xyz) for pooled rewards or solo failover
- Complements [Bitcoin Knots](/entities/bitcoin-knots) or Bitcoin Core when combined with DATUM for template control

## References

- Official site: https://hashpower.braiins.com
- Telegram: @braiinshashpower
- Braiins Academy: https://academy.braiins.com/en/braiins-hashpower/about/
- Meetup demo script ^[raw/meetup-demo-cheatsheet.md]
- Presentation outline ^[presentations/mining-hashpower-datum-outline-2026-05.md]

## Resources
- [Braiins Hashpower Marketplace](https://hashpower.braiins.com)
- [Braiins Academy — Hashpower Docs](https://academy.braiins.com/en/braiins-hashpower/about/)
- [Braiins Blog](https://braiins.com/blog)
- [Telegram: @braiinshashpower](https://t.me/braiinshashpower)
