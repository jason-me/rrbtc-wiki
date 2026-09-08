---
title: Jade DIY
created: 2026-09-07
updated: 2026-09-07
type: entity
tags: [custody, hardware-wallet, signing-device, diy, open-source, firmware]
confidence: high
contested: false
sources: [raw/self-custody-and-entropy-meetup-50-2026-09-07.md]
---

# Jade DIY

Jade DIY is Blockstream's open-source firmware for the Blockstream Jade hardware wallet, made available for installation on compatible off-the-shelf hardware. The project lets users build and verify their own Jade-compatible signing device from generic components.

## What It Is

- **Open-source firmware** for the Blockstream Jade, released so users can flash it onto supported boards
- **DIY path**: build a signing device without buying a retail unit; verify the firmware and build yourself
- **Air-gapped operation**: communicates via QR codes with coordinator software
- **Main repo**: [github.com/epiccurious/jade-diy](https://github.com/epiccurious/jade-diy) (guide and tooling), firmware from [Blockstream/Jade](https://github.com/Blockstream/Jade)

## Key Features

- Runs Jade's open-source firmware on generic hardware
- Supports seed generation, xpub export, and PSBT signing
- Works with [[entities/specter-desktop.md]], Sparrow, Nunchuk, and other coordinators
- Enables [[concepts/multisig.md]] alongside other DIY and commercial signers

## Security Model

Like [[entities/krux.md]] and [[entities/seedsigner.md]], Jade DIY emphasizes transparency over tamper resistance. The user is responsible for physical security and supply-chain verification; the benefit is a fully inspectable stack.

## Relation to Round Rock Bitcoiners

- Featured in [[presentations/round-rock-bitcoiners-50-self-custody-entropy.md|Meetup #50 — On Self Custody & Entropy]] as a DIY firmware option
- Part of the community's DIY/maker ethos around self-custody

## Resources

- [Jade DIY guide](https://github.com/epiccurious/jade-diy)
- [Blockstream Jade firmware](https://github.com/Blockstream/Jade)
- [Blockstream Jade](https://blockstream.com/jade/)

## See also

- [[entities/krux.md]] — open-source signing-device firmware
- [[entities/seedsigner.md]] — DIY air-gapped signing device
- [[entities/specter-diy.md]] — Specter's DIY hardware wallet
