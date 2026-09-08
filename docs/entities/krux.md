---
title: Krux
created: 2026-09-07
updated: 2026-09-07
type: entity
tags: [custody, hardware-wallet, signing-device, diy, open-source, firmware]
confidence: high
contested: false
sources: [raw/self-custody-and-entropy-meetup-50-2026-09-07.md]
---

# Krux

Krux is open-source firmware that enables anyone to build a Bitcoin signing device from off-the-shelf parts. It runs on cheap, general-purpose microcontrollers (e.g. M5StickV, Maix Amigo, Maix Dock) and turns them into air-gapped signing devices.

## What It Is

- **Open-source firmware** written in MicroPython, designed for K210-based devices
- **DIY build**: no custom PCB, no secure element, no proprietary chips — buy commodity hardware and flash the firmware
- **Air-gapped**: communicates via QR codes; no USB data after setup, no wireless radios used
- **Seed handling**: generates and imports BIP39 seeds, displays xpubs, signs PSBTs

## Key Features

- Works with coordinator wallets like [[entities/specter-desktop.md]], Sparrow, and Nunchuk
- Supports [[concepts/multisig.md]] setups as one of several signing devices
- Camera-based QR scanning (same air-gap pattern as [[entities/seedsigner.md]])
- Fully inspectable build — firmware, schematics, and assembly are public
- Low cost: tens of dollars in parts versus $100+ for commercial hardware wallets

## Security Model

Krux trades tamper-resistant hardware for transparency. There is no secure element; physical security and supply-chain verification are the user's responsibility. The trade-off is that every layer — hardware, firmware, and signing flow — can be inspected and rebuilt by the user.

## Relation to Round Rock Bitcoiners

- Featured in [[presentations/round-rock-bitcoiners-50-self-custody-entropy.md|Meetup #50 — On Self Custody & Entropy]] as a DIY alternative to commercial signers
- Fits the community's focus on accessible, verifiable self-custody
- Complements [[entities/seedsigner.md]] and [[entities/jade-diy.md]] in the DIY signing-device ecosystem

## Resources

- [Krux documentation](https://selfcustody.github.io/krux)
- [GitHub repository](https://github.com/selfcustody/krux)

## See also

- [[concepts/custody-models.md]] — trade-offs between custody approaches
- [[entities/seedsigner.md]] — another DIY air-gapped signing device
- [[entities/specter-desktop.md]] — coordinator software for multisig
