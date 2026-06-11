---
title: Lightning Network
description: "Overview of Lightning Network architecture, channel management, routing, Bolt 12 offers, and trade-offs versus on-chain and other Layer 2 solutions."
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [lightning, layer-2, payments, privacy, scalability]
sources: [raw/why-lightning-plus-ai-2024-08-13.md, raw/round-rock-bitcoiners-26-larp-2024-07-29.md, raw/rr-bitcoiners-18-plebdevs-2024-07-29.md, raw/node-builder-workshop-2025-11-13.md, raw/cashu-mints-meetup-10-2023-03-09.md]
confidence: high
---

# Lightning Network

A layer-2 payment protocol built on Bitcoin that enables near-instant, low-cost transactions by moving them off the main blockchain into payment channels.

## Core Mechanism

- **Payment channels** — Two peers lock up bitcoin UTXOs in a shared 2-of-2 multisig channel
- **Off-chain settlement** — Payments between channel peers occur instantly without touching the chain
- **Routing** — Payments hop through existing channels to reach any node on the network
- **On-chain finality** — Channels open and close with on-chain transactions; everything in between stays off-chain

## Key Properties

| Property | Description |
|----------|-------------|
| **Speed** | Sub-second settlement |
| **Cost** | Fractions of a satoshi per payment |
| **Resolution** | Supports micro-transactions (thousandths of a sat) |
| **Privacy** | Payments are onion-routed; intermediaries know only their hop |
| **Finality** | Cryptographically provable but not blockchain-settled until channel close |

## Common Analogies

- **Bar tab** — You and the bartender open a tab; settle at the end of the night
- **Abacus beads** — Sliding value from one side to another within the channel

## Security Model

- Channels are enforced by Bitcoin's script language (timelocks, revocation keys)
- A cheating attempt can be penalized by the counterparty claiming all funds
- Users must monitor the chain for fraudulent close attempts (or use watchtowers)

## Implementations

- **LND** (Lightning Labs) — Most widely deployed, Go-based
- **Core Lightning (CLN)** — Blockstream's C implementation
- **Eclair** — ACINQ's Scala implementation
- **LDK** — Lightning Dev Kit for embedding into applications

## Wallet Types

| Type | Examples | Trade-off |
|------|----------|-----------|
| **Custodial** | Wallet of Satoshi, Alby | Easy; counterparty risk |
| **Self-custodial** | Phoenix, Breez, Mutiny | You hold keys; requires channel management |
| **Browser-based** | Alby | Web-native; integrates with Nostr and WebLN |

## Use Cases

- **Micropayments** — Tipping, paywalls, streaming sats per minute
- **Commerce** — Point-of-sale with instant settlement
- **AI services** — Pay-per-query APIs via Lightning (e.g., CASCDR)
- **Cross-border** — Near-free remittances without intermediaries
- **Nostr zaps** — Social media tipping over Lightning

## Tools for Developers

- **Polar** — Local Lightning network simulator for testing
- **WebLN** — Browser API for web apps to interact with Lightning wallets
- **LNbits** — Open-source accounting layer with extensions
- **Replit** — Cloud IDE for building Lightning apps without local setup

## Risks & Trade-offs

- **Liquidity constraints** — Need inbound capacity to receive
- **Online requirement** — Must be online (or use a service) to receive
- **Channel management** — Opening/closing costs on-chain fees
- **Custodial shortcuts** — Many UX-friendly wallets are custodial

## Relationship to Bitcoin

Lightning does not create a new token. It uses real bitcoin locked in contracts on the base layer. Every Lightning payment is ultimately backed by a Bitcoin UTXO.

## Resources

- [Lightning Network Whitepaper](https://lightning.network/lightning-network-paper.pdf)
- [Mastering Lightning (Andreas Antonopoulos)](https://github.com/lnbook/lnbook)
- [Bitcoiner.Guide Lightning Section](https://bitcoiner.guide/lightning/)
