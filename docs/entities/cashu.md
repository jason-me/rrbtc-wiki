---
title: Cashu
created: 2026-06-02
updated: 2026-06-02
type: entity
tags: [privacy, ecash, lightning, chaum, mint, nostr, cashu]
sources: ['raw/cashu-mints-meetup-10-2023-03-09.md', 'raw/bitchat-and-chill-2025-08-14.md']
confidence: high
contested: false
---

# Cashu

Cashu is a free and open-source Chaumian ecash system built for Bitcoin. It lets users hold and transfer ecash tokens offline, settling against the Lightning Network when needed. Nobody needs to know who you are, how much you hold, or with whom you transact.

## Core Technology: Chaumian Blind Signatures
Invented by David Chaum in 1982, blind signatures allow a mint to sign a token without knowing its contents. This means:
- The mint can verify a token is authentic
- The mint cannot link issuance to redemption
- Internal transfers within a single mint are **perfectly private**

## How It Works
1. **Mint** — an online Lightning node custodies sats and issues signed ecash tokens
2. **Mint** — a user receives a set of tokens from the mint (funded via Lightning)
3. **Transfer** — the user sends tokens to another user via QR, link, or [Nostr](/concepts/nostr) DM
4. **Redeem** — the recipient redeems tokens back into Lightning sats (or keeps them as ecash)

## Privacy via Mint Swaps
| Scenario | Privacy Level |
|----------|---------------|
| Internal transfer (same mint) | Perfect — mint sees nothing |
| Inter-mint swap | Strong — receiving mint doesn't know origin |
| Deposit + redeem via different wallets | Strong — link erased at Lightning layer |

## Offline Use Cases
Cashu tokens can be transferred without internet access:
- Copy the Base64 token to clipboard
- Send via [Mesh Networks](/concepts/mesh-networks) (Bitchat BLE, Meshtastic LoRa, Briar) while offline
- Recipient redeems when back online

## Wallets & Mints
- **Nutstash** — web wallet (wallet.nutstash.app)
- **Cashu.me** — browser wallet with nostr integration
- **eNuts** — Android wallet
- **Community mints** — anyone can run a mint with a Lightning node

## Trust Model
- The mint custodies the underlying bitcoin — **trusted**, but for small amounts
- Verify mint reserves via proof-of-reserves where available
- Use multiple mints to reduce single-point-of-failure
- Community-run mints lower trust compared to unknown operators

## Related
- [Privacy Stacks](/concepts/privacy-stacks) — broader privacy practices
- [Peer-to-Peer Exchange](/concepts/p2p-exchange) — Peer-to-peer exchange for acquiring bitcoin
- [Chaumian eCash](/concepts/chaumian-ecash) — Chaumian eCash concept overview
- [Circular Economy](/concepts/circular-economy) — Bitcoin circular economy overview
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — how to fund Cashu
- [Nostr](/concepts/nostr) — protocol for sending tokens peer-to-peer

## Resources
- [Cashu.space](https://cashu.space)
- [Nutstash Wallet](https://wallet.nutstash.app)
- [Cashu Protocol Spec](https://github.com/cashubtc/cashu)
- [Chaum's original paper (1982)](https://www.cs.ru.nl/~jhh/pub/secsem/chaum1982.pdf)
