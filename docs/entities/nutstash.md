---
title: Nutstash
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [privacy, tools, lightning]
sources: [raw/cashu-mints-meetup-10-2023-03-09.md]
confidence: high
---

# Nutstash

Web-based Cashu ecash wallet. Enables users to hold and transfer Chaumian ecash tokens backed by Lightning Network bitcoin.

## Features

- **Web wallet** — No installation required, runs in browser
- **Mint support** — Connect to multiple Cashu mints
- **Nostr integration** — Receive ecash tokens via Nostr direct messages
- **Token management** — Send, receive, and swap ecash tokens
- **Privacy** — Mint does not know user identity or transaction graph

## How It Works

1. Create wallet at wallet.nutstash.app
2. Add a Cashu mint (Lightning-backed)
3. Deposit bitcoin via Lightning to receive ecash tokens
4. Send tokens to other Nutstash users or over Nostr
5. Redeem tokens back to Lightning when needed

## Privacy Model

- Mint cannot link deposits to withdrawals
- Tokens are blinded — mint signs without knowing token value or owner
- Inter-mint swaps break linkability between mints
- Using different wallets for deposit and redemption erases traceability

## Related

- [Cashu](/entities/cashu) — Chaumian ecash protocol
- [Nostr](/concepts/nostr) — Nostr protocol for token transfer
- [Privacy Stacks](/concepts/privacy-stacks) — Layered privacy approach
- [Chaumian eCash](/concepts/chaumian-ecash) — Chaumian eCash concept overview

## Resources

- [Nutstash Wallet](https://wallet.nutstash.app/)
- [Cashu Protocol](https://cashu.space/)
