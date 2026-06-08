---
title: C-Lightning (Core-Lightning)
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [lightning, node, bolt12, payouts, mining]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: false
---

# C-Lightning (Core-Lightning)

Core-Lightning (CLN, often called c-lightning) is a lightweight, modular Lightning Network implementation. It is notable for early support of Bolt 12, which enables static Lightning offers for automated recurring payments.

## Mining Use Case: Bolt 12 Payouts
Traditional Lightning invoices are single-use and require an inbound request. Bolt 12 introduces "offers"—a reusable QR code or string that a payer can hit anytime to initiate a payment.

### Setup for Mining Payouts
1. Run CLN on [StartOS](/entities/start-os) or your own Linux node
2. Enable the `experimental-offers` plugin (now merged in recent CLN releases)
3. Generate a Bolt 12 offer: `lightning-cli offer [amount] "Mining payout"`
4. Import the offer string into [Ocean.xyz](/entities/ocean-xyz) dashboard
5. Ocean pays out automatically to your Lightning node when threshold is met

## Advantages Over On-Chain Payouts
- **Privacy** — no address reuse, no on-chain footprint per payout
- **Speed** — sub-second settlement vs. block confirmation times
- **Low fees** — negligible for frequent small payouts
- **Self-custody** — funds arrive in your own node, not a custodial wallet

## Comparison of Lightning Implementations
| Implementation | Bolt 12 | Notable For |
|----------------|---------|-------------|
| **Core-Lightning** | Yes (native) | Modularity, scripting hooks |
| LND | Partial / experimental | Broader ecosystem, Loop/Pool |
| Eclair | Partial | Scala-based, ACINQ focus |
| LDK | Yes (library) | Embedded / mobile wallets |

## Related
- [StartOS](/entities/start-os) — home server OS that packages CLN
- [Ocean.xyz](/entities/ocean-xyz) — mining pool supporting Bolt 12 payouts
- [Bitcoin Knots](/entities/bitcoin-knots) — base layer node CLN depends on

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]

## Resources
- [Core-Lightning Documentation](https://docs.corelightning.org)
- [GitHub: ElementsProject/lightning](https://github.com/ElementsProject/lightning)
- [Bolt 12 Specification](https://bolt12.org)
- [Features: Offers / Bolt 12](https://docs.corelightning.org/docs/offers)
