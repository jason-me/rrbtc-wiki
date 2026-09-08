---
title: Specter DIY
created: 2026-09-07
updated: 2026-09-07
type: entity
tags: [custody, hardware-wallet, signing-device, diy, open-source]
confidence: high
contested: false
sources: [raw/self-custody-and-entropy-meetup-50-2026-09-07.md]
---

# Specter DIY

Specter DIY is an open-source, do-it-yourself hardware wallet project from the Specter suite. It turns commodity hardware into an air-gapped signing device that pairs with Specter Desktop for multisig and single-sig custody.

## What It Is

- **DIY hardware wallet**: assembled from off-the-shelf parts (e.g. STM32-based discovery boards)
- **Air-gapped**: QR-based communication with the coordinator; no persistent USB data link
- **Companion to [[entities/specter-desktop.md]]**: signs PSBTs for wallets managed in Specter Desktop
- **Open-source**: firmware and build instructions are public

## Key Features

- Generates and holds seeds, displays xpubs, signs transactions
- Integrates with [[concepts/multisig.md]] setups alongside other signers
- Focus on verifiable, user-built custody rather than closed proprietary devices
- Part of the broader Specter ecosystem for Bitcoin self-custody

## Security Model

Specter DIY trades tamper-resistant hardware for transparency and user control. There is no secure element; physical security and supply-chain verification are the user's responsibility.

## Relation to Round Rock Bitcoiners

- Featured in [[presentations/round-rock-bitcoiners-50-self-custody-entropy.md|Meetup #50 — On Self Custody & Entropy]] as a DIY custody option
- Existing wiki coverage of [[entities/specter-desktop.md]] as a coordinator

## Resources

- [Specter Solutions](https://specter.solutions)
- [Specter DIY documentation](https://docs.specter.solutions/diy/)

## See also

- [[entities/specter-desktop.md]] — multisig coordinator software
- [[entities/krux.md]] — open-source signing-device firmware
- [[concepts/custody-models.md]] — custody trade-offs
