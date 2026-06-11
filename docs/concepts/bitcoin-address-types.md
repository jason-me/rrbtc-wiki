---
title: Bitcoin Address Types
description: "Comparison of Bitcoin address formats including Legacy, P2SH, SegWit (Bech32), native SegWit, and Taproot, with guidance on which to use for compatibility, privacy, and future-proofing."
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [bitcoin, addresses, scripts, segwit, taproot, cryptography]
sources: ['raw/bitcoin-protocol-meetup-2-2022-07-14.md']
confidence: high
contested: false
---

# Bitcoin Address Types

Bitcoin addresses are human-readable encodings of scriptPubKeys — the spending conditions that lock bitcoin to a specific key or set of keys. Over time, address formats have evolved to improve efficiency, privacy, and compatibility.

## P2PK — Pay to Public Key (Legacy)
- The earliest address format; used in Satoshi-era coinbase transactions
- Simply locks funds to a public key directly
- **Rare today** — privacy leak (public key is visible before spending); replaced by P2PKH

## P2PKH — Pay to Public Key Hash (Legacy)
- **Prefix:** `1` (mainnet)
- Locks funds to the hash of a public key rather than the key itself
- Requires the spender to reveal the public key and provide a valid signature
- Still widely used but less efficient than newer formats

## P2SH — Pay to Script Hash
- **Prefix:** `3` (mainnet)
- Locks funds to the hash of an arbitrary script (not just a public key)
- Enables multisig, timelocks, and more complex spending conditions
- The full script (redeem script) is only revealed at spend time, improving privacy slightly

## Segwit (P2SH-P2WPKH / P2WPKH / Bech32)
- **Prefixes:** `bc1q` (Bech32 / native Segwit), or nested in `3` addresses
- Separates witness data (signatures) from the transaction body
- Benefits:
  - Fixes **transaction malleability** (critical for Lightning Network)
  - Reduces transaction weight → lower fees
  - Larger effective block capacity without changing the 1MB block size

## Taproot (P2TR / Bech32m)
- **Prefix:** `bc1p`
- Activated via soft fork in November 2021
- Combines single-sig and multisig into a single public key appearance on-chain
- Enables **Merklized Alternative Script Trees (MAST)** — only the executed script branch is revealed
- Improves privacy by making multisig and complex scripts look identical to single-sig
- Sets the stage for **Schnorr signatures** (_BATCH_ verification, signature aggregation)

## Comparison

| Type | Prefix | Efficiency | Privacy | Use Case |
|------|--------|-----------|---------|----------|
| P2PK | — | Low | Poor | Historical only |
| P2PKH | `1` | Medium | Basic | General wallets |
| P2SH | `3` | Medium | Basic | Multisig, legacy scripts |
| P2WPKH | `bc1q` | High | Basic | Modern single-sig |
| P2TR | `bc1p` | Highest | Best | Modern wallets, multisig, scripts |

## Resources
- [Bitcoin Wiki — Address](https://en.bitcoin.it/wiki/Address)
- [BIP-141 — Segregated Witness](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)
- [BIP-341 — Taproot](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)
- [BIP-350 — Bech32m](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki)
