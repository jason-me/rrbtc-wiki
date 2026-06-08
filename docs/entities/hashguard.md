---
title: HashGuard
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [mining, automation, tools, python]
sources: [raw/mining-like-the-big-players-2026-05-14.md, presentations/mining-like-the-big-players-2026-05-14.md]
confidence: high
contested: false
---

# HashGuard

DIY Python auto-optimizer for the [Braiins Hashpower](https://hashpower.braiins.com/) marketplace. Monitors the order book, detects stalled bids, and automatically adjusts pricing to maintain hashrate flow while minimizing overpayment.

## Features

| Feature | Description |
|---------|-------------|
| Stall detection | If hashrate drops to 0 TH/s, automatically overbids the lowest matching ask by 1 tick (1,000 sats) to restore flow |
| Trim-down | If delivering but overbidding by >4%, trims back to optimal price to save sats |
| Auto-topup | Pre-places a new bid when any active order drops below 20% remaining balance |
| Profitability ceiling | Never bids above hash value + 10% (calculated from live difficulty) |
| Signal alerts | Sends a notification on every action (stall boost, trim, topup) |
| State logging | Tracks actions and daily price lows for trend analysis |
| Secrets management | API keys stored in Bitwarden, decrypted only at runtime |

## Architecture

- Runs as a daemon or cron job on a local machine
- Queries Braiins Hashpower API for order book depth and active order status
- Compares delivered hashrate against bid price vs market ask
- Executes bid adjustments via authenticated API calls
- Logs all state transitions to local file for audit

## Relationship to Other Entities

- Built for [Braiins Hashpower](/entities/braiins-hashpower) marketplace
- Complements [Bitcoin Knots](/entities/bitcoin-knots) or Bitcoin Core when combined with [DATUM](/entities/datum) for template control
- Often paired with [Ocean.xyz](/entities/ocean-xyz) or [public-pool.io](/entities/public-pool) for reward collection
- Uses [C-Lightning (Core-Lightning)](/entities/c-lightning) for Bolt 12 payout routing

## References

- Meetup demo script ^[raw/mining-like-the-big-players-2026-05-14.md]
- Presentation outline ^[presentations/mining-like-the-big-players-2026-05-14.md]
