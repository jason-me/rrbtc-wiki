---
title: Peer-to-Peer Exchange
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [exchange, p2p, no-kyc, privacy, trading, circular-economy]
sources:
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
  - raw/bisq-to-bitcoin-retirement-2025-10-10.md
confidence: high
---

# Peer-to-Peer Exchange

Peer-to-peer (P2P) exchanges allow individuals to buy and sell bitcoin directly with one another, without centralized intermediaries holding funds or requiring identity verification. This aligns with Bitcoin's cypherpunk roots: minimize trust, preserve privacy, and maintain self-custody.

## Why P2P?

| Problem with CEXs | P2P Solution |
|-------------------|--------------|
| KYC/AML surveillance | No identity required |
| Custodial risk (exchange hacks) | Self-custody throughout |
| Withdrawal freezes | No gatekeeper on settlement |
| Geographic restrictions | Permissionless, global |
| Single point of failure | Decentralized coordination |

## How It Works

### Generic P2P Trade Flow
1. **Maker** posts an offer (buy or sell)
2. **Taker** accepts the offer
3. Both parties lock funds in a multisig or deposit bond
4. Fiat payment moves off-platform (bank transfer, cash, etc.)
5. Bitcoin is released from escrow once payment is confirmed
6. Disputes are resolved by bonded mediators or reputation systems

### Escrow Models

| Model | Mechanism | Trade-off |
|-------|-----------|-----------|
| 2-of-2 multisig + mediator | Both parties + mediator hold keys | Trust in mediator, but they can't steal |
| 2-of-3 multisig | Two parties + arbitrator | More decentralized, complex setup |
| Reputation bonds | No deposit; reputation limits exposure | Faster onboarding, less security |

## Major Platforms

### Bisq
- Desktop app, Tor by default
- 2-of-2 multisig + bonded mediator
- Supports fiat and altcoin trades
- Full node integration (verifies own chain)

### Bisq 2 (Easy)
- Reputation-based model (no deposit required)
- Smaller trades, simpler onboarding
- Same Tor and privacy defaults

### HodlHodl
- Web-based, hosted (but non-custodial)
- 2-of-3 multisig escrow
- Wider range of payment methods

### RoboSats
- Lightning-native, Tor-only
- Temporary robot identities (no persistent reputation)
- Fast settlement via Lightning

## Comparison

| Platform | KYC | Custody | P2P | Decentralized |
|----------|-----|---------|-----|---------------|
| Bisq | No | Self | Yes | Yes |
| Bisq 2 (Easy) | No | Self | Yes | Yes |
| HodlHodl | Minimal | Self | Yes | No (hosted) |
| RoboSats | No | Self | Yes | No (Tor-only) |
| Kraken/Coinbase | Yes | Custodial | No | No |

## Risks

- **Trade duration** — fiat settlement can take days
- **Low liquidity** — less volume than major CEXs
- **Mediator reliance** — disputes require third-party judgment
- **User error** — losing bond or failing to confirm payment

## Circular Economy Connection

P2P exchange is the acquisition side of the circular economy: earning and spending bitcoin without re-entering the fiat banking system. Combined with merchant tools (Lightning POS, Cashu, BTCMap), P2P exchange enables closed-loop bitcoin economies.

## Related

- [Bisq](/entities/bisq) — Decentralized P2P exchange
- [BTCMap](/entities/btcmap) — Merchant discovery for spending earned bitcoin
- [Cashu](/entities/cashu) — Ecash for offline/private payments
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Broader privacy-preserving acquisition methods

## Related
- [RoboSats](/entities/robosats)
- [HodlHodl](/entities/hodlhodl)
- [Sparrow Wallet](/entities/sparrow-wallet)
- [Whirlpool](/entities/whirlpool)

## Resources

- [Bisq Network](https://bisq.network)
- [HodlHodl](https://hodlhodl.com)
- [RoboSats](https://robosats.com)
