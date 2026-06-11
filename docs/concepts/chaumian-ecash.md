---
title: Chaumian eCash
description: "Explanation of Chaumian eCash principles, blind signatures, and modern implementations like Cashu and Fedimint for private, custodial or federated ecash on Bitcoin."
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [privacy, ecash, cashu, lightning, chaum, mint, offline]
sources:
  - raw/cashu-mints-meetup-10-2023-03-09.md
  - raw/bitchat-and-chill-2025-08-14.md
confidence: high
---

# Chaumian eCash

Chaumian eCash is a privacy-preserving digital cash system built on top of Bitcoin. It uses blind signatures to allow a mint to authenticate tokens without knowing who holds them or how they are spent. Cashu is the most widely adopted open-source implementation, settling against the Lightning Network.

## Core Technology: Blind Signatures

Invented by David Chaum in 1982, blind signatures allow a signer (the mint) to validate a token without seeing its contents:

1. User blinds a token (mathematically obscures it)
2. Mint signs the blinded token
3. User unblinds the signature
4. The signature is valid, but the mint cannot link it to the original request

This means **internal transfers within a single mint are perfectly private** — the mint sees deposits and redemptions, but cannot connect them.

## How Cashu Works

1. **Deposit** — User sends bitcoin via Lightning to a Cashu mint
2. **Issue** — Mint returns signed ecash tokens
3. **Transfer** — User sends tokens to another person via QR, link, or Nostr DM
4. **Redeem** — Recipient redeems tokens back into Lightning sats

## Privacy via Mint Swaps

| Scenario | Privacy Level |
|----------|---------------|
| Internal transfer (same mint) | Perfect — mint sees nothing |
| Inter-mint swap | Strong — receiving mint doesn't know origin |
| Deposit + redeem via different wallets | Strong — link erased at Lightning layer |

## Offline Use

Cashu tokens can be transferred without internet access:
- Copy the Base64 token to clipboard
- Send via mesh networks (Bitchat BLE, Meshtastic LoRa, Briar) while offline
- Recipient redeems when back online

This makes Cashu useful for disaster scenarios, censorship events, or areas with unreliable connectivity.

## Trust Model

- The mint **custodies** the underlying bitcoin — trusted, but for small amounts
- Verify mint reserves via proof-of-reserves where available
- Use multiple mints to reduce single-point-of-failure
- Community-run mints lower trust compared to unknown operators

## Comparison to Other Privacy Tools

| Tool | Mechanism | Online Required | Custody |
|------|-----------|-----------------|---------|
| Cashu | Blind signatures | No (token transfer) | Mint custodial |
| Lightning | HTLCs | Yes | Self-custodial |
| CoinJoin | Transaction mixing | Yes | Self-custodial |
| PayJoin | Interactive transaction | Yes | Self-custodial |

## Wallets & Mints

- **Nutstash** — web wallet (wallet.nutstash.app)
- **Cashu.me** — browser wallet with Nostr integration
- **eNuts** — Android wallet
- **Community mints** — anyone can run a mint with a Lightning node

## Related

- [Cashu](/entities/cashu) — Cashu protocol entity
- [Nutstash](/entities/nutstash) — Web wallet for Cashu
- [Privacy Stacks](/concepts/privacy-stacks) — Broader privacy practices
- [Lightning Network](/concepts/lightning-network) — Settlement layer for Cashu
- [Peer-to-Peer Exchange](/concepts/p2p-exchange) — Acquiring bitcoin to fund Cashu

## Resources

- [Cashu.space](https://cashu.space)
- [Nutstash Wallet](https://wallet.nutstash.app)
- [Cashu Protocol Spec](https://github.com/cashubtc/cashu)
- [Chaum's original paper (1982)](https://www.cs.ru.nl/~jhh/pub/secsem/chaum1982.pdf)
