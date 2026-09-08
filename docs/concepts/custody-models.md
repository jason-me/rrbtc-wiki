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
- **Multisig** — [[concepts/multisig.md]] with multiple keys you control. Removes single point of failure at cost of complexity.

Best for: Technically proficient users, long-term HODLers, privacy maximizers.

## Collaborative Custody

You hold the majority of keys; a service holds one. You retain spending sovereignty, but the service can help with recovery if you lose a key.

- [[entities/unchained-capital.md]] — You hold 2 keys, they hold 1 (2-of-3)
- [[entities/casa.md]] — Fee-based plans with 2-of-3 or 3-of-5

Best for: Users who want recovery guarantees without full third-party trust.

## Semi-Custodial / Assisted

A third party holds one or more keys and provides ongoing security services. You can still spend unilaterally in some configurations, or the provider co-signs.

Best for: High-net-worth individuals, businesses, those prioritizing convenience.

## DIY Signing Devices

Open-source, self-built signing devices offer a lower-cost, fully inspectable path to self-custody. They trade tamper-resistant hardware for transparency - every layer can be audited and rebuilt by the user.

- [[entities/krux.md]] - Open-source firmware for K210-based microcontrollers
- [[entities/seedsigner.md]] - Raspberry Pi Zero-based air-gapped signer
- [[entities/jade-diy.md]] - Blockstream Jade firmware on generic hardware
- [[entities/specter-diy.md]] - Specter DIY air-gapped hardware wallet

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

- [[concepts/multisig.md]] — Technical implementation of threshold signatures
- [[entities/specter-desktop.md]] — multisig coordinator software
- [[entities/krux.md]] — open-source signing-device firmware
- [[entities/seedsigner.md]] — DIY air-gapped signer
- [[entities/jade-diy.md]] — Jade firmware on generic hardware
- [[entities/specter-diy.md]] — Specter DIY hardware wallet
- [[entities/bisq.md]] — Non-custodial exchange
- [[presentations/round-rock-bitcoiners-50-self-custody-entropy.md]] — Meetup #50 on self-custody and entropy

## Resources

- [Bitcoiner.Guide — Inheritance](https://bitcoiner.guide/inheritance/)
- [Unchained Retirement Calculator](https://unchained.com/)
- [Casa Blog — Inheritance](https://casa.io/)
