---
title: RoboSats
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [exchange, privacy, p2p, lightning, tor, no-kyc]
sources: []
confidence: medium
contested: false
---

# RoboSats

RoboSats is a peer-to-peer exchange for buying and selling bitcoin using Lightning Network payments. It operates entirely over Tor and uses temporary robot identities, meaning users do not accumulate persistent trade history or reputation.

## How It Works
- Users generate a temporary robot identity for each trading session
- Offers to buy or sell bitcoin are posted on a public order book
- Trade settlement happens via Lightning Network invoices and payments
- No KYC required; no fiat payment information is stored on platform

## Key Properties
| Property | Detail |
|----------|--------|
| Settlement | Lightning Network |
| KYC | None |
| Custody | Self-custody via user wallets |
| Communication | Tor hidden service |
| Reputation | None (temporary identities) |

## Trade-offs
- **Lightning required** — not suitable for on-chain-only users
- **Tor required** — accessibility barrier for some users
- **No reputation** — temporary identities mean no history to evaluate counterparty reliability
- **Liquidity** — smaller market than Bisq or centralized exchanges

## Related
- [Bisq](/entities/bisq) — Decentralized on-chain P2P exchange
- [Lightning Network](/concepts/lightning-network) — Lightning settlement layer
- [Peer-to-Peer Exchange](/concepts/p2p-exchange) — P2P exchange overview

## Resources
- [RoboSats](https://robosats.com)
