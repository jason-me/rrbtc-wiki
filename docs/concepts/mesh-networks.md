---
title: Mesh Networks
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [privacy, mesh-networking, offline, disaster-prep, bluetooth, lora, resilient-communications]
sources: ['raw/bitchat-and-chill-2025-08-14.md']
confidence: high
contested: false
---

# Mesh Networks

Mesh networks enable communication without centralized infrastructure — no cell towers, no ISPs, no internet required. For Bitcoiners, this is critical: payments can be agreed upon and signed offline, then broadcast when connectivity returns.

## Why Mesh Matters for Bitcoin
- **Blackout scenarios** — traditional wallets cannot broadcast without internet; mesh enables offline coordination and [Cashu](/entities/cashu) ecash transfer
- **Censorship resistance** — no central chokepoint to surveil or shut down
- **Local resilience** — communicate and transact within a neighborhood or city

## Technology Comparison

| Type | Radio | Range | Bandwidth | Best For |
|------|-------|-------|-----------|----------|
| Wi-Fi Mesh | 2.4/5 GHz | 100 m | High | Home/City broadband backup |
| Bluetooth Mesh (BLE) | 2.4 GHz | 10–100 m | Low | Secure local chat, phone-to-phone |
| LoRa Mesh | Sub-GHz | 1–5 km | Very low | Long-range text, GPS, alerts |
| Hybrid | Multiple | Varies | Varies | Disaster response, mixed use |

## Key Platforms

### Bitchat (Jack Dorsey)
- Encrypted messenger using **Bluetooth Low Energy (BLE)**
- **Noise Protocol** for encryption
- Multi-hop relays through nearby devices
- Payload ~512B — sufficient for [Cashu](/entities/cashu) ecash tokens or signed PSBTs
- **Status:** Experimental; iOS focus

### Meshtastic
- Open-source **LoRa** firmware for off-grid messaging
- Range: 1–5 km (up to 10+ km with line of sight)
- Max payload ~242B — small but usable for Cashu tokens
- Supports GPS sharing, encryption, and store-and-forward
- Hardware: TTGO LORA32, Heltec, RAK Wireless
- **Best for:** Neighborhood-scale, camping, disaster prep

### Briar
- Decentralized Android messenger
- **Bramble protocol** for privacy and metadata resistance
- Store-and-forward via trusted contacts
- Works over Tor, Wi-Fi, or Bluetooth
- **Limitation:** Android-only;

## Bitcoin + Mesh Workflow
1. **Online phase** — mint [Cashu](/entities/cashu) tokens or create a presigned PSBT
2. **Offline phase** — copy token/PSBT to clipboard
3. **Transfer** — send via Bitchat BLE, Meshtastic, or Briar while disconnected
4. **Relay** — message hops device-to-device until it reaches the recipient
5. **Online phase** — recipient redeems Cashu or broadcasts the PSBT

## Limitations
- **Trust in mint** — Cashu requires an online mint to redeem; mesh only covers the transfer layer
- **BLE hop scalability** — crowds may saturate Bluetooth mesh capacity
- **Power** — mesh devices need charging; LoRa is low-power but not zero
- **Range vs density** — LoRa needs fewer hops but lower bandwidth; BLE is dense but short-range

## Future
- Mesh-first Bitcoin wallets that natively create and transfer PSBTs or ecash
- Community-run Cashu mints with mesh-aware payout endpoints
- Hybrid networks combining BLE (dense) + LoRa (long-range) + Wi-Fi (backhaul)

## Resources
- [Meshtastic](https://meshtastic.org)
- [Briar Project](https://briarproject.org)
- [Cashu.space](https://cashu.space)
- [Noise Protocol Framework](https://noiseprotocol.org)
