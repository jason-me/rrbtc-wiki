---
title: Zeus
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [lightning, wallet, mobile, node-management, open-source]
sources: [raw/running-robosats-2023-04-14.md]
confidence: high
contested: false
---

# Zeus

Mobile Lightning wallet and node management app. Connects to your own Lightning node (LND, Core Lightning, or Eclair) remotely, giving you full control without running a node on your phone.

## Key Features
- Connects to remote Lightning nodes via Tor or clearnet
- Supports multiple node backends: LND, Core Lightning, Eclair
- Point-of-sale mode for merchant use
- On-chain and Lightning payments
- On-chain fee bumping (RBF/CPFP)

## RoboSats Compatibility
- Highly compatible with payment status checks
- Caution: misleading UX around HODL invoice states; verify on-chain or via node directly if in doubt

## Comparison to Other Lightning Wallets
| Wallet | Custody | Node Required | Best For |
|--------|---------|---------------|----------|
| Zeus | Self-custody | Remote node | Power users, node operators |
| Breez | Self-custody | Built-in | Easy onboarding, POS |
| Phoenix | Self-custody | Built-in | Beginners |
| Muun | Self-custody | Hybrid | Simple UX, on-chain fallback |

Website: [Zeus](https://zeusln.com/)

See also: [breez], [phoenix], [muun], [lightning-network]
