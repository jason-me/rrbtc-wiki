---
title: Home Mining
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [mining, hardware, decentralization, sovereignty, asic]
sources: [raw/decentralized-home-mining-bitaxe-2025-04.md, raw/decentralized-mining-workshop-meetup-30.md, presentations/mining-hashpower-datum-outline-2026-05.md]
confidence: high
---

# Home Mining

The practice of mining Bitcoin from a residence or small office using low-to-medium power hardware. Contrasts with industrial-scale mining in dedicated facilities. Home mining has seen a resurgence with the rise of efficient, quiet, open-source ASICs and hashrate marketplaces that let participants rent industrial-scale hash without owning hardware.

## Why Home Mine?

- **Network decentralization** — Distribute hash rate geographically, reduce pool centralization
- **Privacy** — Acquire non-KYC bitcoin at near-spot price via electricity conversion
- **Education** — Learn Proof of Work mechanics firsthand
- **Sovereignty** — Directly participate in consensus without intermediaries
- **Open-source innovation** — Support projects like Bitaxe that publish hardware designs

## Hardware Spectrum

| Device | Hash Rate | Power | Noise | Monthly Cost | Use Case |
|--------|-----------|-------|-------|-------------|----------|
| Bitaxe 401 Supra | 733 GH/s | 15–18 W | Silent | ~$1.30 | Education, lottery solo |
| Bitaxe 601 Gamma | 1.2 TH/s | ~18 W | Silent | ~$1.50 | Education, lottery solo |
| Antminer S19j Pro+ | 120 TH/s | 3,250–4,080 W | Loud | ~$330–$410 | Serious home operation |
| Braiins Hashpower (rented) | 1.95 PH/s+ | N/A | None | Variable | Industrial scale, no hardware |

## Noise & Heat Management

Home ASICs generate significant heat and noise. Community-tested solutions:

- **AC Infinity Cloudline** — Inline duct fans for exhaust
- **AC Infinity Inline Duct Silencers** — Reduce fan noise
- **Fruition Designs** — 3D-printed ASIC silencing and cooling kits
- **Njord Fan Control PCB** — Allows Bitmain miners to control AC Infinity fans automatically

## Software Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Firmware | [AxeOS](/entities/axe-os) | Custom Bitaxe firmware to reduce latency |
| OS | [StartOS](/entities/start-os) | Home server OS for running node stack |
| Node | [Bitcoin Knots](/entities/bitcoin-knots) | Enhanced privacy, custom block templates |
| Lightning | [C-Lightning (Core-Lightning)](/entities/c-lightning) | Bolt 12 offers for automated payouts |
| Template control | [DATUM](/entities/datum) | Custom work issuance from your own mempool |
| Pool | [Ocean.xyz](/entities/ocean-xyz) | TIDES payouts, non-custodial, DATUM-native |
| Monitoring | [HashGuard](/entities/hashguard) | Python script to monitor Braiins Hashpower order book |

## Mining Strategies

### Pooled Mining
- Join a pool for steady, small payouts
- Schemas: PPS (stable), PPLNS (lower fees), FPPS (includes tx fees)
- [Mining Payout Schemas](/concepts/mining-payout-schemas) has full comparison

### Solo / Lottery Mining
- Mine against network difficulty directly
- 12 blocks solo mined in 2024; 2 by Bitaxes
- Odds calculator: [SoloChance.com](https://solochance.com)
- public-pool.io and Ocean.xyz both support solo modes

### Rented Hash + Template Control
- Buy hashrate on [Braiins Hashpower](/entities/braiins-hashpower) marketplace
- Route to your own [DATUM](/entities/datum) endpoint
- Mine at industrial scale with your own transaction selection

## Trade-offs

| Approach | Pros | Cons |
|----------|------|------|
| Bitaxe | Silent, cheap, open-source | Extremely low odds of finding a block |
| Home ASIC (S19) | Real hash rate, learn operations | Noise, heat, electricity cost, neighbor relations |
| Rented hash | No hardware, industrial scale | Counterparty trust, ongoing cost |

## Resources
- [Bitaxe.org](https://bitaxe.org)
- [OSMU.com](https://osmu.com)
- [Hashrate Index](https://hashrateindex.com)
- [SoloChance.com](https://solochance.com)
- [Home Mining Wizards (Telegram)](https://t.me/homeminingwizards)
- [KaboomRacks](https://kaboomracks.com)
