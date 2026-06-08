---
title: BitAxe
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, hardware, asic, home-mining, open-source]
sources: ['raw/decentralized-home-mining-bitaxe-2025-04.md']
confidence: medium
contested: false
---

# BitAxe

BitAxe is an open-source, low-power Bitcoin ASIC miner designed for home mining. It bridges the gap between industrial-scale equipment and hobbyist participation in network security.

## Models

| Model | Hash Rate | Power | Efficiency |
|-------|-----------|-------|------------|
| BitAxe 401 Supra | 733 GH/s | 15–18 W | 20–25 J/TH |
| BitAxe 601 Gamma | 1.2 TH/s | ~18 W | 15 J/TH |

## Context: Network Scale
- Global hashrate surpassed 1 Zetahash
- Antminer S19j Pro+ reference: 120 TH/s, 3,250–4,080 W
- BitAxe 601 Gamma efficiency (15 J/TH) competes with or beats many industrial units

## Use Cases
1. **Education** — Learn mining mechanics at low cost (~$1.30–$2.60/mo electricity)
2. **Lottery / Solo Mining** — tiny chance at full block reward via [public-pool.io](/entities/public-pool) or [DATUM](/entities/datum)
3. **Decentralization** — Participate in hash rate distribution without industrial infrastructure
4. **Stacking Sats at Cost** — Acquire non-KYC bitcoin at near spot via hashrate

## Setup: Solo Pool (public-pool.io)
1. Power on; IP address appears on screen
2. Navigate to Settings > Network > Wi-Fi
3. Stratum Host: `public-pool.io`
4. Port: `21496`
5. User: `[YourBitcoinAddress].[WorkerName]`
6. Save & restart

## Advanced Stack
- [AxeOS](/entities/axe-os) — custom firmware to reduce latency
- [Bitcoin Knots](/entities/bitcoin-knots) — enhanced privacy, custom block templates
- [C-Lightning (Core-Lightning)](/entities/c-lightning) — Bolt 12 offers for Lightning payouts
- [DATUM](/entities/datum) — custom work issuance, solo or pooled via [Ocean.xyz](/entities/ocean-xyz)

## Resources
- [Bitaxe.org](https://bitaxe.org)
- [OSMU.com](https://osmu.com)
- [SoloChance.com](https://solochance.com)
- [Hashrate Index](https://hashrateindex.com)
- Home Mining Wizards (Telegram)

## References
- Bitaxe deck (April 2025) ^[raw/decentralized-home-mining-bitaxe-2025-04.md]
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]
