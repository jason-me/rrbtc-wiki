---
title: Stowaway
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [privacy, payjoin, samourai, transaction-graph, collaborative]
sources:
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
confidence: high
contested: true
---

# Stowaway

Stowaway is a collaborative transaction privacy feature in Samourai Wallet based on PayJoin (BIP-78). Two users construct a transaction together, breaking the common-input-ownership heuristic.

## How It Works
1. Sender and receiver agree via BIP-47 PayNyms
2. Both provide inputs
3. Receiver provides output to receive payment
4. Observers see multi-input transaction and assume single ownership — incorrectly

## Comparison
| Technique | Parties | Structure | Goal |
|-----------|---------|-----------|------|
| Stowaway | 2 users | PayJoin (BIP-78) | Break common-input heuristic |
| Stonewall | 1 user | Fake CoinJoin | Confuse output analysis |
| CoinJoin | 5+ users | Equal outputs | Break deterministic links |

> Round Rock privacy meetup note: "Lightning: Bolt-12, Payjoin, Stowaway, PayNyms, BIP-47"

## Related
- [Samourai Wallet](/entities/samourai-wallet) — Wallet implementing Stowaway
- [PayJoin](/concepts/payjoin) — BIP-78 PayJoin overview
- [Stonewall](/entities/stonewall) — Single-user decoy transactions

## Resources
- [Samourai Wallet Docs](https://docs.samourai.io)
