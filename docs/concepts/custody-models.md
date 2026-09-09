---
title: Custody Models
created: 2026-06-03
updated: 2026-09-07
type: concept
tags: [custody, multisig, hardware-wallet, inheritance]
sources: [raw/what-is-multisig-meetup-7-2022-12-08.md, raw/bisq-to-bitcoin-retirement-2025-10-10.md, raw/self-custody-and-entropy-meetup-50-2026-09-07.md]
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

## DIY Signing Devices

Open-source, self-built signing devices offer a lower-cost, fully inspectable path to self-custody. They trade tamper-resistant hardware for transparency - every layer can be audited and rebuilt by the user.

- [Krux](/entities/krux) - Open-source firmware for K210-based microcontrollers
- [SeedSigner](/entities/seedsigner) - Raspberry Pi Zero-based air-gapped signer
- [Jade DIY](/entities/jade-diy) - Blockstream Jade firmware on generic hardware
- [Specter DIY](/entities/specter-diy) - Specter DIY air-gapped hardware wallet

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
- [Specter Desktop](/entities/specter-desktop) — multisig coordinator software
- [Krux](/entities/krux) — open-source signing-device firmware
- [SeedSigner](/entities/seedsigner) — DIY air-gapped signer
- [Jade DIY](/entities/jade-diy) — Jade firmware on generic hardware
- [Specter DIY](/entities/specter-diy) — Specter DIY hardware wallet
- [Bisq](/entities/bisq) — Non-custodial exchange
- [2026 09 07 Self Custody And Entropy Meetup 50](/presentations/2026-09-07-self-custody-and-entropy-meetup-50) — Meetup #50 on self-custody and entropy

## Resources

- [Bitcoiner.Guide — Inheritance](https://bitcoiner.guide/inheritance/)
- [Unchained Retirement Calculator](https://unchained.com/)
- [Casa Blog — Inheritance](https://casa.io/)
