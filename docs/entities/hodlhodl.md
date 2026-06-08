---
title: HodlHodl
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [exchange, privacy, p2p, no-kyc, trading]
sources: []
confidence: medium
contested: false
---

# HodlHodl

HodlHodl is a non-custodial, peer-to-peer bitcoin exchange platform. Unlike Bisq, it is web-hosted rather than fully decentralized, but it remains non-custodial through 2-of-3 multisig escrow.

## How It Works
- Maker posts an offer with a payment method (e.g., bank transfer, cash)
- Taker accepts and a 2-of-3 multisig escrow is funded
- Buyer sends fiat payment outside the platform
- Upon confirmation, both parties sign to release bitcoin from escrow
- In disputes, HodlHodl acts as an arbitrator with the third key

## Key Properties
| Property | Detail |
|----------|--------|
| KYC | Optional (minimal for most trades) |
| Custody | Non-custodial escrow |
| Settlement | On-chain bitcoin |
| Infrastructure | Web-hosted |
| Payment methods | Wide range (bank, cash, digital wallets) |

## Trade-offs
- **Hosted platform** — can be censored or shut down by authorities
- **Arbitrator trust** — HodlHodl holds one escrow key for disputes
- **Wider payment methods** than Bisq, making it accessible in regions with fewer local traders

## Related
- [Bisq](/entities/bisq) — Fully decentralized P2P exchange
- [Peer-to-Peer Exchange](/concepts/p2p-exchange) — P2P exchange overview
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Privacy-preserving acquisition methods

## Resources
- [HodlHodl](https://hodlhodl.com)
