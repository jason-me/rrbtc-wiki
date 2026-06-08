---
title: JoinMarket
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [privacy, tools, custody]
sources: [raw/why-privacy-matters-meetup-3-2022-08-11.md, raw/mobile-privacy-meetup-5-2022-10-13.md]
confidence: high
---

# JoinMarket

Decentralized CoinJoin marketplace. Uses a maker-taker model where liquidity providers (makers) earn fees for providing inputs to CoinJoin transactions, while privacy seekers (takers) pay for the service.

## How It Works

- **Makers** — Users who leave their bitcoin available for CoinJoin; earn yield as takers pay fees
- **Takers** — Users who initiate CoinJoin transactions and pay maker fees
- **No central coordinator** — Communication via IRC or direct messaging between peers
- **Fidelity bonds** — Optional economic commitment to establish trustworthiness as a maker

## Jam (JoinMarket UI)

- Web-based user interface for JoinMarket
- Simplifies the command-line experience
- Manages wallets, CoinJoin transactions, and maker/taker configuration
- Docker-based deployment for easy setup

## Trade-offs

- Requires running continuously for maker yield (hot wallet risk)
- More complex setup than Wasabi or Samourai
- Smaller anonymity sets per transaction than Wasabi coordinator
- Maker-taker fee model can be expensive for takers and requires capital lockup for makers

## Related

- [Wasabi Wallet](/entities/wasabi-wallet) — Centralized coordinator model
- [Samourai Wallet](/entities/samourai-wallet) — Whirlpool CoinJoin
- [Privacy Stacks](/concepts/privacy-stacks) — UTXO management and privacy layering
- [Bitcoin Address Types](/concepts/bitcoin-address-types) — Address reuse avoidance

## Resources

- [JoinMarket GitHub](https://github.com/JoinMarket-Org/joinmarket-clientserver)
- [Jam UI](https://github.com/joinmarket-webui/jam)
- [JoinMarket Docs](https://joinmarket.readthedocs.io/)
