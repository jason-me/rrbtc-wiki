---
title: Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)
description: "Analysis of ordinal inscriptions, rare sats, and NFT protocols on Bitcoin, with examination of their impact on block space, fees, and network philosophy."
created: 2026-06-04
updated: 2026-06-04
type: concept
tags: [protocol, ordinals, inscriptions, nfts, brc-20, runes, controversy, taproot]
sources:
  - presentations/mining-hashpower-datum-outline-2026-05.md
confidence: high
contested: true
---

# Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)

Since the Taproot soft fork in 2021, several protocols have emerged that use Bitcoin's script and witness fields to inscribe or associate arbitrary data with individual satoshis. These are collectively known as **inscriptions** or **data carving** protocols. The most prominent are Ordinals, BRC-20 tokens, and Runes.

> This page documents the technology and the debate as it has appeared in Round Rock meetup materials.

## Ordinals

Ordinals is a numbering scheme that assigns a unique serial number to every satoshi in existence, based on the order in which it was mined. This creates a "non-fungible" property for otherwise fungible units of bitcoin.

### Inscriptions
- Arbitrary data (images, text, code) is stored in the **Taproot witness** field of a transaction
- The data is committed to a specific satoshi via its ordinal number
- Once inscribed, the association is permanent on the blockchain

### Implications
- **Block space competition**: inscriptions increase demand for block space, raising fees
- **Node storage**: full archival nodes must store the data forever
- **UTXO bloat**: some inscription protocols create many small outputs

## BRC-20

BRC-20 is a token standard built on top of Ordinals inscriptions. It uses JSON data inscriptions to define mint, transfer, and balance operations for fungible tokens.

- No smart contracts; all logic is off-chain indexing
- Creates significant UTXO bloat due to repeat inscriptions
- Largely superseded by Runes

## Runes

Runes is a more efficient token protocol by Casey Rodarmor (creator of Ordinals) designed to reduce UTXO bloat. It uses OP_RETURN outputs instead of witness data for token balances.

- More UTXO-efficient than BRC-20
- Does not rely on ordinal theory
- Still uses block space for non-monetary data

## The Debate

The emergence of inscription protocols has created significant controversy in the Bitcoin community.

### Arguments For Permissiveness (Bitcoin Core stance)
- Bitcoin is permissionless; valid transactions should not be filtered by "purpose"
- Neutral mempool policy protects all valid use cases
- Attempting to define "spam" opens the door to subjective censorship
- Fee markets can naturally price out low-value use cases

### Arguments For Restrictiveness (Bitcoin Knots / BIP-110 stance)
- Bitcoin's value proposition is sound money, not a general data store
- Block space is scarce and should be reserved for monetary transactions
- Inscriptions create negative externalities: node bloat, higher fees for payments
- Non-monetary use cases invite regulatory scrutiny on "unregistered securities"

### Technical Responses
- **BIP-110 / RDTS**: Proposes limiting data pushes to 256 bytes and restricting large scriptPubKeys
- **Template control**: DATUM and Stratum V2 allow miners (not pools) to choose which transactions to include, effectively letting the market decide

## Round Rock Meetup Context

> From the May 2026 mining presentation:
> **Bitcoin Core** (default, permissive): "Accepts nearly all valid transactions (Ordinals, inscriptions). Neutral mempool — doesn't judge transaction 'purpose'."
>
> **Bitcoin Knots** (restrictive, BIP-110 / RDTS): "Limits data pushes >256 bytes, large scriptPubKeys. Goal: filter non-monetary data. Controversy: Censorship vs. protecting Bitcoin-as-money."
>
> **Our take:** "You choose. Both work with template-control protocols."

This reflects the meetup's neutral stance on the Core vs. Knots debate.

## Related
- [Bitcoin Core](/entities/bitcoin-core) — Permissive default implementation
- [Bitcoin Knots](/entities/bitcoin-knots) — Restrictive alternative with spam filtering
- [Bitcoin Protocol](/concepts/bitcoin-protocol) — Underlying protocol rules (SegWit, Taproot)
- [DATUM](/entities/datum) — Template-control protocol for miner choice
- [Stratum V2](/entities/stratum-v2) — Protocol for pool-miner template negotiation

## Resources
- [Ordinals.com](https://ordinals.com)
- [Runes Protocol](https://rodarmor.com/blog/runes)
- [BIP-110 Discussion](https://github.com/bitcoin/bips/pull/110)
