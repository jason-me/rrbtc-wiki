---
title: Bitcoin Core
created: 2026-06-02
updated: 2026-06-03
type: entity
tags: [bitcoin, node, full-node, reference-implementation, software]
sources: ['raw/why-run-a-node-meetup-4-2022-09-08.md', 'raw/bitcoin-protocol-meetup-2-2022-07-14.md']
confidence: high
contested: false
---

# Bitcoin Core

Bitcoin Core is the reference implementation of the Bitcoin protocol. Originally released by Satoshi Nakamoto in 2009 as "Bitcoin," it remains the most widely used, reviewed, and trusted node software.

## Role in the Ecosystem
- Defines the de facto consensus rules that the network follows
- Undergoes extensive peer review before any protocol change is merged
- Sets the standard that alternative implementations (e.g., [Bitcoin Knots](/entities/bitcoin-knots), Libbitcoin, Bitcoin-S) must be compatible with

## Key Characteristics
- **Open source** — MIT license; anyone can audit, compile, or modify
- **~500 GB** chain state at time of writing (grows continuously)
- **Pruning supported** — can discard old blocks to save space after full validation
- **Full validation** — checks every transaction and block from genesis to tip

## RPC Verification Commands
Useful for checking your node's state via CLI or scripts:
```
gettxoutsetinfo    # statistics about the entire UTXO set
getblockchaininfo  # current chain height, difficulty, best block hash
gettransaction <txid>  # details about a specific transaction
```

## Relationship to Alternatives
| Implementation | Relationship to Core |
|---------------|----------------------|
| **Bitcoin Core** | Reference implementation; neutral default |
| [Bitcoin Knots](/entities/bitcoin-knots) | Fork with stricter mempool policies (e.g., BIP-110 / RDTS) |
| Libbitcoin | Independent C++ implementation |
| Bitcoin-S | Scala-based implementation focused on developers |
| btcd | Go implementation (used by LND until recently) |

## Connecting a Wallet
Bitcoin Core can be used as the backend for personal wallets via:
1. **HWI** (Hardware Wallet Interface) — CLI tool for signing with Trezor, Ledger, ColdCard
2. **Electrum Server** — indexes the blockchain for fast wallet queries
3. **Sparrow Wallet** — GUI that connects to Core over RPC or through Electrum Server

## Related

- [Bitcoin Protocol](/concepts/bitcoin-protocol) — Underlying protocol implemented by Bitcoin Core

## Related
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Ordinals/inscriptions and the spam-filtering debate

## Resources

- [Bitcoin Core Official Site](https://bitcoincore.org)
- [GitHub: bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)
- [Bitcoin Core Docs](https://bitcoincore.org/en/doc/)
- [HWI (Hardware Wallet Interface)](https://github.com/bitcoin-core/HWI)
