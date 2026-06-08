---
title: Braiins Hashrate Autopilot
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [mining, automation, tools, braiins]
sources: [raw/mining-like-the-big-players-2026-05-14.md, presentations/mining-like-the-big-players-2026-05-14.md]
confidence: high
contested: false
---

# Braiins Hashrate Autopilot

Official automation tool from Braiins for managing hashrate bids on the [Braiins Hashpower](https://hashpower.braiins.com/) marketplace. Rules-based engine that buys hashrate when price crosses thresholds and auto-rebalances between pools.

## How It Works

- Connects to Braiins Hashpower API with user credentials
- Monitors market depth and price trends across timeframes (5m / 15m / 1h / 4h / 1d)
- Executes buy rules when ask prices drop below configured thresholds
- Auto-rebalances delivered hashrate between pools based on profitability or uptime
- Provides dashboard for rule configuration and performance review

## Comparison with HashGuard

| Feature | Hashrate Autopilot | HashGuard |
|---------|-------------------|-----------|
| Vendor | Braiins (official) | Community/DIY |
| UI | Web dashboard | CLI / config file |
| Stall detection | Yes | Yes |
| Auto-topup | Yes | Yes |
| Trim-down | Yes | Yes |
| Signal alerts | Platform notifications | Signal messenger |
| Secrets | Braiins account | Bitwarden |
| Custom logic | Limited to rules engine | Full Python extensibility |

## Use Cases

- **Hands-off mining:** Set rules once, let Autopilot manage bids 24/7
- **Pool failover:** Automatically switch hashrate between Ocean, Braiins Pool, and solo based on uptime
- **Price-sensitive accumulation:** Buy only when market ask drops below target sats/PH/day

## Relationship to Other Entities

- Native integration with [Braiins Hashpower](/entities/braiins-hashpower) marketplace
- Compatible with [Ocean.xyz](/entities/ocean-xyz), [public-pool.io](/entities/public-pool), and Braiins Pool as downstream targets
- Complements [DATUM](/entities/datum) and [Stratum V2](/entities/stratum-v2) for template control layers

## References

- Official site: https://hashpower.braiins.com
- Meetup demo script ^[raw/mining-like-the-big-players-2026-05-14.md]
- Presentation outline ^[presentations/mining-like-the-big-players-2026-05-14.md]
