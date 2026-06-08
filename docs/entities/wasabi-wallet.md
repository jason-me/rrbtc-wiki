---
title: Wasabi Wallet
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [privacy, tools, custody]
sources: [raw/why-privacy-matters-meetup-3-2022-08-11.md]
confidence: high
---

# Wasabi Wallet

Privacy-focused Bitcoin desktop wallet with built-in CoinJoin coordination by default. Uses the WabiSabi credential protocol for CoinJoin transactions.

## Features

- **CoinJoin (WabiSabi)** — Built-in coordinator for privacy-enhancing bitcoin transactions via Zerolink (now WabiSabi) protocol
- **Tor by default** — All network traffic routed through Tor for IP privacy
- **Full node friendly** — Can connect to your own Bitcoin Core node
- **Cold card integration** — Air-gapped hardware wallet support
- **Fee estimation** — Smart fee targeting for transaction costs

## WabiSabi Protocol

- Replaces the older Zerolink protocol
- Uses anonymous credentials (blinded attributes) to track ownership without linking inputs to outputs
- Improves on fixed-denomination limitations of earlier CoinJoin designs
- Allows variable-amount CoinJoins with strong anonymity guarantees

## Trade-offs

- Centralized coordinator (zkSNACKs) — users trust the coordinator for availability, but not custody (blinded outputs)
- Desktop-only (Windows, macOS, Linux)
- Requires minimum amounts for participation
- Coordinator fees apply per successful CoinJoin round

## Related

- [Samourai Wallet](/entities/samourai-wallet) — Alternative CoinJoin approach (Whirlpool)
- [JoinMarket](/entities/joinmarket) — Decentralized CoinJoin marketplace
- [Privacy Stacks](/concepts/privacy-stacks) — UTXO management and privacy layering
- [Bitcoin Address Types](/concepts/bitcoin-address-types) — Address reuse avoidance

## Resources

- [Wasabi Wallet](https://wasabiwallet.io/)
- [WabiSabi Documentation](https://wabisabi.co/)
- [zkSNACKs Coordinator](https://zksnacks.com/)
