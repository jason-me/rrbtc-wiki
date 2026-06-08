---
title: Phoenix
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [lightning, wallet, mobile, self-custodial, beginner-friendly]
sources: [raw/running-robosats-2023-04-14.md]
confidence: high
contested: false
---

# Phoenix

Self-custodial Lightning wallet by ACINQ. Designed to abstract channel management from the user while keeping keys on-device.

## Key Features
- Automatic channel creation and management (no manual liquidity setup)
- Trampoline routing for reliable payments
- On-chain swap-in and swap-out
- Non-custodial: keys remain on device

## RoboSats Compatibility
- Good UX overall
- **Caution for makers**: maker bond duration must be set to **< 10 hours** due to Phoenix's internal channel management constraints
- Works well for buyers with standard duration settings

## Comparison to Similar Wallets
| Feature | Phoenix | Breez | Muun |
|---------|---------|-------|------|
| Channel mgmt | Automatic | Automatic | Hybrid |
| Trampoline | Yes | No | No |
| On-chain fallback | Swap | LSP | Native |

Website: [Phoenix](https://phoenix.acinq.co/)

See also: [breez], [muun], [zeus], [robosats]
