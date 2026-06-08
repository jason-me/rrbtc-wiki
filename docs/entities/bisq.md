---
title: Bisq
created: 2026-06-02
updated: 2026-06-03
type: entity
tags: [exchange, privacy, p2p, no-kyc, trading, decentralized]
sources: ['raw/why-privacy-matters-meetup-3-2022-08-11.md', 'raw/bisq-to-bitcoin-retirement-2025-10-10.md']
confidence: high
contested: false
---

# Bisq

Bisq is a decentralized, peer-to-peer exchange for buying and selling bitcoin with national currencies or other cryptocurrencies. No account creation, no KYC, no central server — trades are coordinated over Tor and settled via 2-of-2 multisig escrow with a third-party mediator.

## How It Works
1. **Maker** creates an offer (e.g., "Sell 0.1 BTC for USD via Zelle")
2. **Taker** accepts the offer and deposits a security bond in BTC
3. Both parties lock trade funds in a 2-of-2 multisig address
4. Fiat payment is sent outside Bisq (bank transfer, Cash by Mail, etc.)
5. Once payment is confirmed, both parties sign to release bitcoin from escrow
6. If a dispute arises, a bonded mediator reviews evidence and awards funds

## Trade Limits & Security Bonds
- Low trade limits for new accounts; limits increase with successful trade history
- Security bonds discourage malicious behavior — forfeit if you break protocol
- Mediators are bonded professionals who can only sign with one of the two keys

## Payment Methods
- F2F (face-to-face / cash)
- National bank transfers (SEPA, Zelle, FPS, etc.)
- Money orders, Cash by Mail
- Altcoin swaps (Monero, etc.)

## Running Bisq
- **Desktop application** — Java-based, runs on Linux, macOS, Windows
- **Own node** — connects to your local Bitcoin node for block verification
- **Tor by default** — all communication is onion-routed
- No email, no phone number, no name required

## Risks
- **Trade duration** — fiat settlement can take days vs. minutes on a centralized exchange
- **Mediator reliance** — disputes require trusting a third party, though they cannot steal funds
- **Low liquidity** — less volume than major CEXs; limit orders may sit unfilled

## Comparison
| Exchange | KYC | Custody | P2P | Decentralized |
|----------|-----|---------|-----|---------------|
| Bisq | No | Self | Yes | Yes |
| HodlHodl | Minimal | Self | Yes | No (hosted) |
| RoboSats | No | Self | Yes | No (Tor-only) |
| Kraken/Coinbase | Yes | Custodial | No | No |

## Related

- [Peer-to-Peer Exchange](/concepts/p2p-exchange) — Overview of peer-to-peer exchange concept
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Privacy-preserving acquisition methods
- [BTCMap](/entities/btcmap) — Merchant discovery for spending bitcoin
- [Circular Economy](/concepts/circular-economy) — Bitcoin circular economy overview


## Related
- [RoboSats](/entities/robosats) — Lightning-native P2P exchange
- [HodlHodl](/entities/hodlhodl) — Web-hosted non-custodial exchange
- [Sparrow Wallet](/entities/sparrow-wallet) — Desktop wallet with HWI support
- [Whirlpool](/entities/whirlpool) — CoinJoin for privacy

## Resources
- [Bisq Network](https://bisq.network)
- [Bisq Docs](https://bisq.wiki)
- [GitHub: bisq-network](https://github.com/bisq-network)
