---
title: SeedSigner
created: 2026-06-05
updated: 2026-06-05
type: entity
tags: [hardware-wallet, signing-device, diy, multisig, open-source]
confidence: high
contested: false
---

# SeedSigner

Open-source, DIY Bitcoin signing device built from commodity hardware. Designed for air-gapped seed generation, transaction signing, and multisig coordination without trusting proprietary hardware.

## What It Is

SeedSigner is a Bitcoin-only hardware signer assembled from a Raspberry Pi Zero W, a Waveshare 1.3-inch LCD HAT, and a Pi Camera Module. It runs purpose-built firmware that generates and stores seeds, displays QR codes for transactions, and signs PSBTs entirely offline.

## Key Features
- **Air-gapped signing**: No WiFi, Bluetooth, or USB data used after initial setup. Transactions flow in and out via QR codes.
- **Seed generation**: Creates BIP39 seed phrases using camera entropy (image noise) or manual dice rolls.
- **Multisig support**: Generates xpubs, coordinates multisig setups, and signs PSBTs for multisig transactions.
- **Verifiable build**: All components are off-the-shelf and firmware is open source. Anyone can inspect, build, and flash.
- **Low cost**: Approximately $50-70 in parts vs. $100-200+ for commercial hardware wallets.

## Security Model

SeedSigner is designed for users who want to verify every layer of their signing stack:
- No closed-source chips or secure elements
- No vendor-update mechanism that could be coerced
- Entire stack inspectable: hardware schematics, firmware code, build process
- Trade-off: no tamper-resistant enclosure or secure element. Physical security and supply-chain verification are the user's responsibility.

## Use Cases
- **Cold storage signing**: Generate a seed, record the words, then power down. Sign transactions later by booting from SD card.
- **Multisig coordinator**: Use SeedSigner as one key in a 2-of-3 or 3-of-5 setup alongside commercial hardware wallets.
- **Workshop/education**: Build and understand a hardware wallet from first principles at meetups or self-study.

## Relation to Round Rock Bitcoiners

- Featured in node-building and custody-focused meetups as part of the DIY/maker ethos
- Significantly lower cost than commercial hardware wallets; fits the community's focus on accessible self-custody
- Demonstrates the distinction between hardware wallets (proprietary, closed) and verifiable signing devices (open, inspectable)

## Resources
- [seedsigner.com](https://seedsigner.com)
- [GitHub repository](https://github.com/SeedSigner/seedsigner)
- [Build guide and parts list](https://seedsigner.github.io/)
- [SeedSigner YouTube](https://www.youtube.com/@seedsigner)

## See also
- [concepts/custody-models.md] — trade-offs between hot, warm, and cold storage
- [entities/simple-proof.md] — complementary Bitcoin-native security tools
- [entities/jade.md] — commercial hardware wallet alternative with different trust assumptions
