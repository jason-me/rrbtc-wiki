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
- **Companion to [Specter Desktop](/entities/specter-desktop)**: signs PSBTs for wallets managed in Specter Desktop
- **Open-source**: firmware and build instructions are public

## Key Features

- Generates and holds seeds, displays xpubs, signs transactions
- Integrates with [Multisig](/concepts/multisig) setups alongside other signers
- Focus on verifiable, user-built custody rather than closed proprietary devices
- Part of the broader Specter ecosystem for Bitcoin self-custody

## Security Model

Specter DIY trades tamper-resistant hardware for transparency and user control. There is no secure element; physical security and supply-chain verification are the user's responsibility.

## Relation to Round Rock Bitcoiners

- Featured in [Meetup #50 — On Self Custody & Entropy](/presentations/2026-09-07-self-custody-and-entropy-meetup-50) as a DIY custody option
- Existing wiki coverage of [Specter Desktop](/entities/specter-desktop) as a coordinator

## Resources

- [Specter Solutions](https://specter.solutions)
- [Specter DIY documentation](https://docs.specter.solutions/diy/)

## See also

- [Specter Desktop](/entities/specter-desktop) — multisig coordinator software
- [Krux](/entities/krux) — open-source signing-device firmware
- [Custody Models](/concepts/custody-models) — custody trade-offs
