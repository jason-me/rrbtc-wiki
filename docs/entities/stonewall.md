---
title: Stonewall
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [privacy, coinjoin, samourai, transaction-graph, obfuscation]
sources:
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
confidence: high
contested: true
---

# Stonewall

Stonewall is a single-user privacy feature in Samourai Wallet that creates transactions resembling mini CoinJoins but without multiple parties. It confuses chain analysis heuristics.

## How It Works
- Constructs a transaction with multiple inputs and outputs
- Output pattern mimics collaborative CoinJoin (equal outputs, varied sizes)
- All inputs belong to the same user; no external parties involved
- Goal: make it harder to determine the real payment output

> Round Rock privacy meetup note: "UTXO Management: never reuse addresses, Stonewall"

## Related
- [Samourai Wallet](/entities/samourai-wallet) — Wallet implementing Stonewall
- [Whirlpool](/entities/whirlpool) — True collaborative CoinJoin
- [Stowaway](/entities/stowaway) — Collaborative transaction privacy

## Resources
- [Samourai Wallet Docs](https://docs.samourai.io)
