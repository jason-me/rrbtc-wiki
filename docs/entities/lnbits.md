---
title: LNbits
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [lightning, node, accounting, tools]
sources: [raw/round-rock-bitcoiners-26-larp-2024-07-29.md]
confidence: medium
---

# LNbits

An open-source Lightning accounting system that sits on top of a Lightning node. Provides a web interface, wallet system, and extensions for building Lightning-powered applications.

## What It Does

LNbits is not a Lightning node itself — it is an accounting layer that connects to an existing node (LND, Core Lightning, or LnPay). It creates sub-wallets, generates invoices, and tracks balances for multiple users or applications from a single node.

## Key Features

- **Multi-wallet** — Create unlimited sub-wallets from one node
- **Extensions** — Plugin ecosystem: paywalls, tpos, nostr, events, and more
- **Lightning Address** — Create LNAddresses for each wallet
- **LNURL** — Support for LNURL-pay, LNURL-withdraw, and LNURL-auth
- **API** — Full REST and WebSocket API for application integration

## Use Cases

- **Merchants** — Point-of-sale terminal for accepting Lightning
- **Events** — Sell tickets or accept payments via QR codes
- **Developers** — Spin up test wallets for app development
- **Communities** — Shared node where multiple users get their own wallets

## Relationship to Lightning Security

LNbits can be used with cosigner extensions or multi-signature setups to improve Lightning wallet security. It does not hold keys itself — it delegates signing to the underlying node.

## Related

- [Lightning Network](/concepts/lightning-network) — Protocol LNbits operates on
- [C-Lightning (Core-Lightning)](/entities/c-lightning) — Node implementation LNbits can connect to

## Resources

- [LNbits](https://lnbits.com/)
- [LNbits GitHub](https://github.com/lnbits/lnbits)
