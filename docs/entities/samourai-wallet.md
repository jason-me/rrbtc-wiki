---
title: Samourai Wallet
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [privacy, tools, custody]
sources: [raw/why-privacy-matters-meetup-3-2022-08-11.md, raw/why-run-a-node-meetup-4-2022-09-08.md]
confidence: high
contested: true
---

# Samourai Wallet

Privacy-focused Bitcoin wallet for Android, built around on-chain transaction privacy. The project was the origin of several privacy tools later adopted across the ecosystem.

## Features (Historical)

- **Whirlpool** — CoinJoin implementation with forward-looking anonymity sets
- **Stonewall** — Opt-in privacy for transactions that pool UTXOs without a trusted coordinator
- **Stowaway** — Collaborative (PayJoin-style) transaction obfuscation between two users
- **PayNyms** — Reusable payment codes (BIP-47) for private recipient reuse without address reuse
- **Ricochet** — Transaction relay with decoy hops
- **Dojo** — Self-hosted transaction broadcaster for Android wallet

## Architecture

- On-chain only; no Lightning support
- Designed to route through the user's own Dojo or their Samourai server for connectivity metadata privacy
- CoinJoin coordinator required for Whirlpool (historically accessed via Samourai's infrastructure or self-hosted)

## Status

- Samourai Wallet was available on the Google Play Store for several years
- In April 2024, its co-founders were arrested and the app was delisted by Google
- The wallet itself is still usable by existing installs, though new wallet creation may be limited
- Whirlpool coordination shifted toward community-hosted or self-hosted instances
- PayNyms remain a live standard usable by other wallets implementing BIP-47


## Related

- [Privacy Stacks](/concepts/privacy-stacks) — UTXO management and CoinJoin
- [RoninDojo](/entities/ronindojo) — Privacy-focused node OS historically integrated with Samourai
- [JoinMarket](/entities/joinmarket) — Alternative decentralized CoinJoin marketplace
- [Wasabi Wallet](/entities/wasabi-wallet) — Alternative CoinJoin wallet
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Privacy-focused acquisition

## Resources

- [Samourai Wallet archive docs](https://www.samouraiwallet.com/)
- [Whirlpool Documentation](https://www.samouraiwallet.com/whirlpool/)
- [BIP-47 — Reusable Payment Codes](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki)
