---
title: PayJoin
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [privacy, tools]
sources: [raw/why-privacy-matters-meetup-3-2022-08-11.md]
confidence: high
---

# PayJoin

A privacy technique (BIP-78, also known as P2EP — Pay-to-Endpoint) where a payment transaction is collaboratively constructed between sender and receiver. Both parties contribute inputs, breaking the common-input-ownership heuristic used by chain analysts.

## How It Works

1. Sender creates a transaction paying the receiver
2. Receiver adds one of their own UTXOs as an additional input
3. Receiver also adds an output returning change to themselves
4. The resulting transaction has multiple inputs from different owners, appearing like a CoinJoin or self-transfer to blockchain observers

## Benefits

- **Breaks common-input-ownership heuristic** — Chain analysts can no longer assume all inputs belong to the same entity
- **No extra transaction** — Privacy is gained within a normal payment flow
- **Receiver pays fees** — The additional input/output are paid for by the receiver's contribution
- **No coordinator required** — Direct communication between sender and receiver

## Implementations

- Samourai Wallet (Stowaway)
- Wasabi Wallet
- BTCPay Server
- BlueWallet (with BIP-78 support)

## Limitations

- Requires receiver to be online and participate
- Both parties must support the protocol
- Slightly more complex transaction construction
- Not as strong anonymity as CoinJoin with many participants

## Related

- [Privacy Stacks](/concepts/privacy-stacks) — Layered privacy approach
- [Samourai Wallet](/entities/samourai-wallet) — Stowaway implementation
- [Wasabi Wallet](/entities/wasabi-wallet) — BIP-78 support
- [Bitcoin Address Types](/concepts/bitcoin-address-types) — Address types used in transactions

## Resources

- [BIP-78 — PayJoin](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)
- [PayJoin Dev Kit](https://payjoindevkit.org/)
