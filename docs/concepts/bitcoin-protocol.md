---
title: Bitcoin Protocol
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [bitcoin, protocol, consensus, proof-of-work, segwit, taproot, cryptography]
sources:
  - raw/bitcoin-protocol-meetup-2-2022-07-14.md
  - raw/understand-how-bitcoin-works-2026-01-08.md
confidence: high
---

# Bitcoin Protocol

The Bitcoin protocol is a set of consensus rules governing peer-to-peer electronic cash. First released by Satoshi Nakamoto in 2009, it combines cryptography, game theory, and distributed systems to create a monetary network without central authority.

## Core Primitives

### Hash Functions
Hash functions serve as "digital fingerprints" that protect data integrity throughout the protocol.
- **Fixed length** — SHA-256 always outputs 256 bits regardless of input size
- **Deterministic** — same input always produces the same output
- **One-way** — computationally infeasible to reverse (2^256 possibilities)
- **Avalanche effect** — a single bit change produces an entirely different hash

### The Blockchain
The blockchain is a linked list of blocks, each cryptographically tied to its predecessor.
- **Hash + Public + Linked = Blockchain**
- Historical precedent: Stuart Haber and Surety LLC published hashes in the New York Times as a "trust anchor" starting in 1995
- Bitcoin maintains decentralization via >20,000 nodes actively validating the chain

## Consensus: Proof-of-Work

1. Hash all data in a candidate block
2. Check if the result has enough leading zeros
3. If NO: change the nonce and repeat
4. If YES: broadcast the valid block to the network

- **Target time:** ~10 minutes per block
- **Difficulty adjustment:** every 2,016 blocks (~2 weeks)
- **Supply cap:** strictly limited to 21 million bitcoin

### Halving Schedule

| Era | Block Reward | Approximate Dates |
|-----|-------------|-------------------|
| 1 | 50 BTC | 2009 — 2012 |
| 2 | 25 BTC | 2012 — 2016 |
| 3 | 12.5 BTC | 2016 — 2020 |
| 4 | 6.25 BTC | 2020 — 2024 |
| 5 | 3.125 BTC | 2024 — 2028 |

Each halving reduces the issuance rate, asymptotically approaching the 21-million-coin limit.

## Transactions and Ownership

Bitcoin tracks **unspent transaction outputs (UTXOs)**, not account balances.
- **Private key** — unlocks and signs transactions (must be kept secret)
- **Public key** — locks bitcoin to a receiving address (can be shared)
- **Address** — a hash of the public key plus checksum, presented to payers

## Script and Address Types

Bitcoin uses a scripting system (Script) to define spending conditions. Over time, new address types have improved efficiency and functionality:

| Type | Name | Prefix | Notes |
|------|------|--------|-------|
| P2PK | Pay to PubKey | — | Simplest; used in early coinbase outputs |
| P2PKH | Pay to PubKey Hash | 1 | Standard for years; hashes the public key |
| P2SH | Pay to Script Hash | 3 | Enables multisig and complex scripts |
| P2WPKH | SegWit v0 (Bech32) | bc1q | Witness data segregated; malleability fix |
| P2TR | Taproot (Bech32m) | bc1p | Schnorr + Merkle trees; privacy for complex scripts |

### SegWit (2017)
Segregated Witness moved signature data outside the base transaction structure, fixing transaction malleability and increasing effective block capacity. This change was critical for enabling the Lightning Network.

### Taproot (2021)
Taproot introduced Schnorr signatures and MAST (Merkelized Abstract Syntax Trees), allowing complex spending conditions to look identical to simple single-sig transactions on-chain. This improves privacy and efficiency for multisig and smart contracts.

## Node Types

- **Mining nodes** — perform Proof-of-Work to produce new blocks
- **Economic nodes** — validate all transactions and blocks, enforcing consensus rules
- **Pruned nodes** — validate the full chain but discard old blocks to save space
- **SPV clients** — query full nodes for specific transactions without full validation

## Network Effects

Bitcoin benefits from a QWERTY-style network effect: the value of the protocol increases as more participants adopt it. This decentralization cannot be easily replicated — the same coordination problem that makes Bitcoin resistant to attack also makes competitors unlikely to achieve similar security.

## Software Implementations

| Implementation | Language | Role |
|----------------|----------|------|
| Bitcoin Core | C++ | Reference implementation |
| Bitcoin Knots | C++ | Fork with stricter policies |
| Libbitcoin | C++ | Alternative implementation |
| Bitcoin-S | Scala | Developer toolkit |
| btcd | Go | Used by LND (historically) |

## Related

- [Bitcoin Core](/entities/bitcoin-core) — Reference implementation
- [Bitcoin Knots](/entities/bitcoin-knots) — Alternative implementation with stricter mempool policies
- [Lightning Network](/concepts/lightning-network) — Layer 2 enabled by SegWit
- [Multisig](/concepts/multisig) — Multi-signature setups leveraging P2SH and Taproot
- [Privacy Stacks](/concepts/privacy-stacks) — Privacy techniques using script features

## Related
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Data carving protocols built on Taproot

## Resources

- [Bitcoin Core Docs](https://bitcoincore.org/en/doc/)
- [BIP-141 — SegWit](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)
- [BIP-341 — Taproot](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)
- [Mastering Bitcoin (Andreas Antonopoulos)](https://github.com/bitcoinbook/bitcoinbook)
