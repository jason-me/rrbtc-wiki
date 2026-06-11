---
title: Bitcoin Core vs Bitcoin Knots
description: "Neutral comparison of Bitcoin Core and Bitcoin Knots consensus rules, mempool policies, BIP-110/RDTS differences, and guidance on choosing based on your transaction filtering preferences."
created: 2026-06-03
updated: 2026-06-03
type: comparison
tags: [bitcoin, node, consensus, mempool, policy, controversy]
sources:
  - raw/decentralized-mining-workshop-meetup-30.md
  - presentations/mining-hashpower-datum-outline-2026-05.md
  - entities/bitcoin-core.md
  - entities/bitcoin-knots.md
confidence: high
contested: true
---

# Bitcoin Core vs Bitcoin Knots

Both are full-node implementations of the Bitcoin protocol. They follow identical consensus rules — neither can create or accept invalid blocks — but they differ in **mempool policy**: the set of rules each node uses to decide which unconfirmed transactions to accept, relay, and mine.

> **Bottom line:** If you run either node, you validate the same chain. The difference is which unconfirmed transactions you see in your mempool and relay to peers.

## At a Glance

| | Bitcoin Core | Bitcoin Knots |
|---|---|---|
| **Maintainer** | Decentralized team (Wladimir van der Laan, et al.) | Luke Dashjr |
| **Base** | Original reference implementation | Fork of Bitcoin Core |
| **Consensus** | Identical to Knots | Identical to Core |
| **Mempool policy** | Permissive — accepts nearly all valid transactions | Restrictive — filters certain transaction patterns |
| **Default stance on inscriptions** | Neutral relay | Stricter limits on data-heavy witness fields |
| **Target user** | General node operators, developers, businesses | Miners, privacy-focused users, policy conservatives |
| **Packaging** | Manual build, distro packages, Docker | Manual build, distro packages, [StartOS](/entities/start-os) service |

## Where They Agree

- **Consensus rules:** Both validate the same blocks and transactions. A block accepted by Core is accepted by Knots and vice versa.
- **P2P protocol:** Both speak the same wire protocol and can peer with each other seamlessly.
- **RPC interface:** Both expose the same `bitcoin-cli` commands for querying the chain, wallet, and mempool.
- **Data directory format:** Both use the same on-disk layout for blocks, chainstate, and indexes.

You can switch from one to the other without re-downloading the blockchain.

## Where They Differ

### Mempool Policy

This is the primary divergence. Mempool policy is **not consensus** — it is each node's local preference for which unconfirmed transactions to hold and forward.

| Policy area | Bitcoin Core | Bitcoin Knots |
|---|---|---|
| **Data-heavy transactions** | Relays all valid transactions, including inscription data in witness fields | Limits data pushes >256 bytes and large scriptPubKeys (BIP-110 / RDTS) |
| **Transaction size** | Standard limits (~100 KB) | Same standard limits, but additional filters on script structure |
| **Replace-by-Fee (RBF)** | Optional BIP-125 signaling | Same, with additional RPC toggles |
| **Privacy defaults** | Standard | Additional privacy-hardened RPC options |

### Mining and Template Construction

| | Bitcoin Core | Bitcoin Knots |
|---|---|---|
| **Block template API** | Standard `getblocktemplate` | Enhanced template options with more control over transaction selection |
| **DATUM compatibility** | Works with DATUM via standard template | Preferred by DATUM for advanced template control |
| **Stratum V2** | Compatible | Compatible |

Knots' enhanced template options matter most for miners using [DATUM](/entities/datum) or Stratum V2 who want fine-grained control over which transactions appear in their blocks.

## The Debate

The Core vs Knots policy difference became prominent during the 2023–2024 inscription boom, when Ordinals, BRC-20, and Runes used witness data to inscribe arbitrary content on the blockchain.

### Permissive View (Core-aligned)
- Bitcoin is permissionless; valid transactions should not be filtered by "purpose"
- Neutral mempool policy protects all valid use cases equally
- Defining "spam" is subjective and risks creeping censorship
- Fee markets naturally price out low-value use cases over time
- Attempting to filter inscriptions is a game of whack-a-mole; next protocol will use a different encoding

### Restrictive View (Knots-aligned)
- Bitcoin's value proposition is sound money, not a general-purpose data store
- Block space is scarce and should prioritize monetary transactions
- Inscriptions create negative externalities: node storage bloat, higher fees for payments, UTXO set growth
- Non-monetary use cases invite regulatory scrutiny ("unregistered securities" framing)
- Node operators should have the option to filter transactions they consider harmful to the network

### Meetup Context

> From the May 2026 mining presentation:
> "You choose. Both work with template-control protocols."

This reflects the Round Rock meetup's neutral stance: the debate is real, both positions have merit, and individual node operators (and miners) should make informed choices.

## When to Choose Which

| Scenario | Recommendation |
|---|---|
| **General node operator** who wants the default, most-tested path | Bitcoin Core |
| **Miner using DATUM** or wanting advanced template control | Bitcoin Knots |
| **Privacy-focused user** wanting additional RPC hardening | Bitcoin Knots |
| **Developer** building on standard Bitcoin RPC | Either (APIs are compatible) |
| **User concerned about inscription spam** | Bitcoin Knots (or Core with custom filters) |
| **User who believes all valid transactions should be relayed** | Bitcoin Core |

## Practical Notes

- **Switching is easy:** Both use the same data directory. Stop one, start the other.
- **You can run both:** Some operators run Core for general use and Knots for mining template construction.
- **Neither censors the chain:** Both validate the same confirmed blocks. The difference is only in unconfirmed transaction relay.
- **Policy is local:** Your mempool policy does not force other nodes to adopt it. The network is a heterogeneous mix of policies.

## Related
- [Bitcoin Core](/entities/bitcoin-core) — Reference implementation details
- [Bitcoin Knots](/entities/bitcoin-knots) — Enhanced fork details
- [Bitcoin Protocol](/concepts/bitcoin-protocol) — Consensus rules both follow
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Ordinals/inscriptions debate context
- [DATUM](/entities/datum) — Template construction protocol
- [Stratum V2](/entities/stratum-v2) — Alternative template negotiation

## Resources
- [Bitcoin Core](https://bitcoincore.org)
- [Bitcoin Knots](https://bitcoinknots.org)
- [BIP-110](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki)
