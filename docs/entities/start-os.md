---
title: StartOS
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [node, server, self-hosting, bitcoin, privacy]
source_refs:
  - presentations:decentralized-mining-workshop-meetup-30.md
  - presentations:node-builder-workshop-2025-11-13.md
confidence: medium
contested: false
---

# StartOS

StartOS (formerly Start9OS) is a Debian-based operating system designed specifically for self-hosting Bitcoin and Lightning infrastructure. It packages complex services into one-click installs with automatic Tor and LAN access.

## Role in the Mining Stack
StartOS is the foundational home-server layer for the decentralized mining workshop:
- Runs [Bitcoin Knots](/entities/bitcoin-knots) as a service (full node with enhanced templates)
- Runs [C-Lightning (Core-Lightning)](/entities/c-lightning) for Bolt 12 Lightning payouts
- Can host [DATUM](/entities/datum) or stratum proxy containers
- Provides LAN dashboard and remote Tor access

## Hardware Reference
From [Node Builder Workshop](/presentations/node-builder-workshop-2025-11-13):
- **Recommended:** Dell OptiPlex 9020M (i5, 16GB RAM, 2TB SSD)
- **BIOS:** Legacy boot, Secure Boot disabled
- **Network:** Ethernet preferred; Wi-Fi via USB adapter if needed
- **Storage:** 2TB SSD minimum for full chain + indexing

## Services Relevant to Mining
| Service | Purpose |
|---------|---------|
| Bitcoin Knots | Full node, mempool, block templates |
| Core-Lightning | Lightning node, Bolt 12 offers |
| BTC RPC Explorer | Block / transaction explorer |
| Electrum Server | Wallet backend |
| File Browser | Manage config files / logs |

## Why StartOS for Miners
- **No command-line required** — web UI for all config
- **Automatic updates** — security patches and service upgrades
- **Tor by default** — remote access without opening ports
- **Service isolation** — each app runs in its own container

## Alternatives
- **Umbrel** — similar UX, larger app store, less mining-focused
- **RaspiBlitz** — more manual, stronger Lightning tooling
- **myNode** — simpler, Bitcoin Core default
- **Bare metal** — full control, maximum complexity

## Related
- [Bitcoin Knots](/entities/bitcoin-knots) — recommended full node on StartOS
- [C-Lightning (Core-Lightning)](/entities/c-lightning) — Lightning implementation packaged for StartOS
- [Node Builder Workshop](/presentations/node-builder-workshop-2025-11-13) — detailed hardware/BIOS setup

## References
- Meetup #30: Decentralized Mining Workshop
- Node Builder Workshop

## Resources
- [Start9 / StartOS Official Site](https://start9.com)
- [StartOS Documentation](https://docs.start9.com)
- [StartOS GitHub](https://github.com/Start9Labs)
- [Community Forum](https://community.start9.com)
