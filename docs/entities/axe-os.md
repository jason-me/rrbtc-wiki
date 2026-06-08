---
title: AxeOS
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, firmware, bitaxe, open-source, optimization]
sources: ['raw/decentralized-home-mining-bitaxe-2025-04.md']
confidence: medium
contested: false
---

# AxeOS

AxeOS is the primary open-source firmware for BitAxe miners. It replaces factory firmware to provide lower latency, better pool compatibility, and advanced configuration options including [DATUM](/entities/datum) support.

## Key Features
- **Low latency** — optimized stratum communication to reduce stale shares
- **Wi-Fi configuration** — onboard AP + client mode via web UI
- **Pool failover** — automatic switching between primary and backup pools
- **DATUM support** — can issue work from a local [DATUM](/entities/datum) endpoint
- **Voltage/frequency tuning** — overclocking and efficiency optimization

## Installation
- Download from [Bitaxe.org](https://bitaxe.org) or compile from source
- Flash via USB or OTA (over-the-air) from the stock firmware web UI
- Default access: connect to BitAxe AP, browse to `192.168.4.1`

## Configuration Highlights
- **Stratum URL / Port** — define primary and backup pools
- **Datum Pool Host** — leave blank for solo, or point to your node for pooled DATUM
- **Failover To Lottery** — auto-switch to solo if pool drops
- **Pooled Mining Only** — disable if you want pure solo/DATUM mode

## Role in the Decentralized Mining Stack
```
ASIC chip (BitAxe)
  -> AxeOS firmware (template negotiation)
    -> DATUM / Stratum (work source)
      -> Bitcoin Knots (mempool / templates)
        -> Bitcoin network
```

## Related
- [BitAxe](/entities/bitaxe) — hardware that runs AxeOS
- [DATUM](/entities/datum) — protocol AxeOS can speak to for custom templates
- [public-pool.io](/entities/public-pool) — common default pool in AxeOS configs
- [Ocean.xyz](/entities/ocean-xyz) — pool with native DATUM integration

## References
- Bitaxe deck (April 2025) ^[raw/decentralized-home-mining-bitaxe-2025-04.md]

## Resources
- [AxeOS Repository](https://github.com/bitaxeorg/axeos)
- [Bitaxe.org](https://bitaxe.org) — hardware and firmware hub
- [OSMU Wiki](https://wiki.osmu.org) — open-source mining hardware community
- [ESP-Miner](https://github.com/bitaxeorg/esp-miner) — underlying ESP32 mining firmware
