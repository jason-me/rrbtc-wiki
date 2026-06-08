---
title: Alby
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [lightning, nostr, tools]
sources: [raw/what-is-nostr-meetup-8-2023-01-12.md, raw/cascdr-project-meetup-27-2024-08-08.md, raw/why-lightning-plus-ai-2024-08-13.md, raw/rr-bitcoiners-18-plebdevs-2024-07-29.md]
confidence: high
---

# Alby

Browser extension for Bitcoin Lightning payments and Nostr signing. Provides a non-custodial wallet with seamless web integration via the WebLN standard.

## Features

- **Lightning wallet** — Send and receive bitcoin over Lightning directly in the browser
- **Nostr signing** — Sign Nostr events without exposing private keys to websites
- **LNURL & Lightning Address** — Easy payments to Lightning addresses (e.g., `cascdr@getalby.com`)
- **WebLN provider** — Websites can request payments and invoices via standardized browser API
- **Keysend** — Direct payments to node pubkeys

## Use Cases

- Tipping on Nostr clients (Damus, Snort, Astral)
- Paying for AI services like CASCDR
- General Lightning web payments
- Nostr identity management
- Developer testing via WebLN integration

## Model

- Non-custodial — you control your keys (seed backup available)
- Browser-based convenience with hardware-wallet-like signing for Nostr
- Acts as a WebLN provider that web apps can detect and communicate with

## Related

- [Lightning Network](/concepts/lightning-network) — Payment layer Alby operates on
- [Nostr](/concepts/nostr) — Nostr protocol and client ecosystem
- [C-Lightning (Core-Lightning)](/entities/c-lightning) — Lightning implementation Alby can connect to
- [PlebDevs](/entities/plebdevs) — Teaches Alby as part of the Lightning dev stack

## Resources

- [GetAlby](https://getalby.com/)
- [Alby GitHub](https://github.com/getAlby/)
- [WebLN specification](https://webln.dev/)
