---
title: Custody Models
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [custody, multisig, hardware-wallet, inheritance]
sources: [raw/what-is-multisig-meetup-7-2022-12-08.md, raw/bisq-to-bitcoin-retirement-2025-10-10.md]
confidence: high
---

# Custody Models

The spectrum of bitcoin custody ranges from full self-custody to fully custodial exchange wallets. The right model depends on technical ability, threat model, and need for inheritance or recovery.

## Self-Custody (Sovereign)

You hold all private keys. No third party can freeze, seize, or lose your funds.

- **Single-sig** — One seed, one hardware wallet. Simplest, but single point of failure.
- **Multisig** — [Multisig](/concepts/multisig) with multiple keys you control. Removes single point of failure at cost of complexity.

Best for: Technically proficient users, long-term HODLers, privacy maximizers.

## Collaborative Custody

You hold the majority of keys; a service holds one. You retain spending sovereignty, but the service can help with recovery if you lose a key.

- [Unchained Capital](/entities/unchained-capital) — You hold 2 keys, they hold 1 (2-of-3)
- [Casa](/entities/casa) — Fee-based plans with 2-of-3 or 3-of-5

Best for: Users who want recovery guarantees without full third-party trust.

## Semi-Custodial / Assisted

A third party holds one or more keys and provides ongoing security services. You can still spend unilaterally in some configurations, or the provider co-signs.

Best for: High-net-worth individuals, businesses, those prioritizing convenience.

## Inheritance Planning

- Create a written inheritance plan with key locations and recovery instructions
- Use key shares or a trusted provider as a backup
- Avoid cloud storage or third-party dependence for seed backups
- Revisit setup yearly, patch firmware, verify backups

## Comparison

| Model | Key Control | Recovery Help | Complexity | Privacy |
|-------|-------------|---------------|------------|---------|
| Single-sig self | 100% | None | Low | High |
| Multisig self | 100% | None | High | High |
| Collaborative | Majority | Yes | Medium | Medium |
| Semi-custodial | Minority | Yes | Low | Low |

## Related

- [Multisig](/concepts/multisig) — Technical implementation of threshold signatures
- [Specter Desktop](/entities/specter-desktop) — DIY multisig coordinator
- [Bisq](/entities/bisq) — Non-custodial exchange

## Resources

- [Bitcoiner.Guide — Inheritance](https://bitcoiner.guide/inheritance/)
- [Unchained Retirement Calculator](https://unchained.com/)
- [Casa Blog — Inheritance](https://casa.io/)
