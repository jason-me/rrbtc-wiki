---
title: Whirlpool
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [privacy, coinjoin, mixing, on-chain, samourai]
sources:
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
confidence: high
contested: true
---

# Whirlpool

Whirlpool is a zero-link CoinJoin implementation developed by Samourai Wallet. It breaks deterministic links between inputs and outputs, improving on-chain privacy.

## How It Works
- Deposit bitcoin into a Whirlpool "premix" wallet
- Mix in a collaborative transaction with 4-5 peers
- Receive equal-denomination outputs to new addresses
- Post-mix funds stored in a "postmix" wallet with strict UTXO hygiene
- Remixes are free

## RoninDojo Integration
[RoninDojo](/entities/ronindojo) bundles Bitcoin Core, Whirlpool CLI, Samourai remote connection, and Electrum server for a turnkey privacy node.

## Controversy
In April 2024, Samourai Wallet developers (including Whirlpool) were arrested by U.S. authorities for alleged money laundering. Servers were seized, raising debate about:
- Legal risks of privacy tool developers
- Centralized coordinator fragility vs. decentralized alternatives

> Round Rock meetups note: "RoninDojo: privacy-focused, integrates Whirlpool and Bisq"

## Related
- [Samourai Wallet](/entities/samourai-wallet) — Wallet integrating Whirlpool
- [RoninDojo](/entities/ronindojo) — Node stack for Whirlpool users
- [Privacy Stacks](/concepts/privacy-stacks) — Comprehensive privacy stack

## Resources
- [Whirlpool Docs](https://docs.samourai.io/whirlpool/)
