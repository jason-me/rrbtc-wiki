---
title: UTXO Model
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [bitcoin, utxo, transactions, keys, cryptography]
sources: ['raw/understand-how-bitcoin-works-2026-01-08.md', 'raw/bitcoin-protocol-meetup-2-2022-07-14.md']
confidence: high
contested: false
---

# UTXO Model

Bitcoin does not use an "account balance" system like a bank. Instead, it tracks **Unspent Transaction Outputs (UTXOs)** — discrete chunks of bitcoin that have been received but not yet spent.

## How It Works
- Each transaction consumes existing UTXOs as inputs and creates new UTXOs as outputs
- A wallet's "balance" is the sum of all UTXOs it controls
- Once a UTXO is spent, it becomes a spent output and is removed from the UTXO set

Example:
```
You have a 1 BTC UTXO.
You send 0.3 BTC to Alice.
You receive 0.699 BTC back as a new UTXO (0.7 minus fees).
Your wallet now controls one UTXO of 0.699 BTC.
```

## Private and Public Keys
- **Private key** — a secret number that unlocks and signs transactions; proves ownership of UTXOs
- **Public key** — derived from the private key; used to create addresses and verify signatures
- Anyone with the private key can spend the UTXOs locked to its corresponding address

## UTXO vs Account Model
| Property | UTXO (Bitcoin) | Account (Ethereum, Banks) |
|----------|---------------|---------------------------|
| Balance | Sum of discrete outputs | Single cumulative balance |
| Privacy | Easier to split and merge | Tied to single identity |
| Parallel validation | Yes — UTXOs are independent | Requires global state |
| Smart contracts | Limited script flexibility | Turing-complete |

## Implications
- **Coin selection matters** — wallets must choose which UTXOs to spend (affects privacy and fees)
- **Dust outputs** — tiny UTXOs may cost more in fees to spend than they are worth
- **Chain analysis** — all UTXOs are publicly visible on the blockchain; reusing addresses degrades privacy

## Resources
- [Mastering Bitcoin (Andreas Antonopoulos) — Chapter 2: How Bitcoin Works](https://github.com/bitcoinbook/bitcoinbook)
- [UTXO Alliance](https://utxo-alliance.org)
- [Learn Me a Bitcoin — UTXO](https://learnmeabitcoin.com/technical/utxo)
