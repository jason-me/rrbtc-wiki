---
title: Nostr
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [nostr, privacy, tools]
sources: [raw/what-is-nostr-meetup-8-2023-01-12.md, raw/cashu-mints-meetup-10-2023-03-09.md, raw/cascdr-project-meetup-27-2024-08-08.md]
confidence: high
---

# Nostr

**Notes and Other Stuff Transmitted by Relays** — a decentralized protocol for creating censorship-resistant social networks and messaging systems based on cryptographic keypairs.

## Core Design

- Not peer-to-peer: users interact via relays (servers)
- Every user identified by a public key (npub...)
- Every post (event) is cryptographically signed and validated
- NIP-01 defines the core protocol; other NIPs extend functionality
- Anyone can run a relay; users choose which relays to publish to and read from

## How It Works

1. Users run a client (app)
2. Anyone can run a relay (server)
3. Clients publish signed events to relays of their choice
4. To follow someone, a client queries relays for events by that public key
5. On startup, clients pull data chronologically from known relays

## Key Management

- [Alby](/entities/alby) — Browser extension for signing and Lightning wallet
- Nos2x — Dedicated Nostr signing extension
- Private keys must be kept secure; loss = loss of identity

## Clients

| Client | Platform | Notes |
|--------|----------|-------|
| Damus | iOS | Closest to Twitter experience; Lightning tipping |
| Snort.Social | Mobile Web | Good UI; works with Kiwi browser + nos2x on Android |
| Astral.ninja | Desktop Web | Full desktop UI; Alby integration |

## Advanced Concepts

- **nostrnode-cli** — Send encrypted RPC commands to Bitcoin Core, Core Lightning, or Join Market via Nostr events
- **Nostr 2.0** — Layer 2 off-chain data storage, incentivizing relays to become full nodes
- **eCash over Nostr** — Receive Cashu ecash tokens directly via Nostr DMs

## Round Rock Bitcoiners on Nostr

- NIP-05: `roundrockbitcoiners@nostrplebs.com`
- Npub: `npub17ysayggwumkpkpgsq75axd7ed9guw03wz9jldz5d0zrkgz0cja2qd09tzu`
- Relay: `wss://nostr.roundrockbitcoiners.com`

## Related

- [Cashu](/entities/cashu) — Chaumian ecash tokens transferable over Nostr
- [Alby](/entities/alby) — Lightning wallet and Nostr signing tool
- [Privacy Stacks](/concepts/privacy-stacks) — Identity and communication privacy

## Resources

- [Nostr Protocol](https://nostr.com/)
- [NIPs Repository](https://github.com/nostr-protocol/nips)
- [nostrnode-cli](https://github.com/0xBEEFCAF3/nostr-node)
