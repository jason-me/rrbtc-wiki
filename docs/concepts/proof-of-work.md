---
title: Proof of Work & Bitcoin Supply
description: "Fundamentals of Nakamoto consensus, difficulty adjustment, hash rate measurement, energy economics, and the security model underlying Bitcoin's immutability."
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [bitcoin, consensus, proof-of-work, halving, supply-cap, mining]
sources: ['raw/understand-how-bitcoin-works-2026-01-08.md']
confidence: high
contested: false
---

# Proof of Work & Bitcoin Supply

Bitcoin uses Proof of Work (PoW) as its consensus mechanism. Miners compete to find a hash below a network-adjusted target, expending real-world energy to secure the ledger and issue new bitcoin.

## How Proof of Work Works
1. Hash all data in a candidate block (transactions, previous block hash, timestamp, etc.)
2. Check if the resulting hash has enough leading zeros to meet the current difficulty target
3. If not: increment the nonce and repeat
4. If yes: broadcast the valid block to the network for verification

Key properties:
- **One-way function** — computationally infeasible to reverse (2^256 possibilities)
- **Avalanche effect** — a single bit change in the input produces an entirely different hash
- **Repeatable** — anyone can independently verify a claimed solution

## Difficulty Adjustment
- Target block time: **10 minutes**
- Difficulty readjusts every **2,016 blocks** (approximately two weeks)
- Keeps block production stable regardless of total hash rate changes

## Supply Cap: 21 Million
Bitcoin has a strictly limited supply enforced by consensus rules — no central planner can alter the issuance schedule.

## Halving Schedule
Each halving cuts the block subsidy in half, slowing new issuance exponentially.

| Era | Block Reward | Total Issued in Era | Approx. Dates |
|-----|-------------|---------------------|---------------|
| 1 | 50 BTC | 10,500,000 | 2009–2012 |
| 2 | 25 BTC | 5,250,000 | 2012–2016 |
| 3 | 12.5 BTC | 2,625,000 | 2016–2020 |
| 4 | 6.25 BTC | 1,312,500 | 2020–2024 |
| 5 | 3.125 BTC | 656,250 | 2024–2028 |

Eventually, transaction fees alone will compensate miners once the subsidy reaches zero.

## Historical Context: Timestamping Before Bitcoin
Stuart Haber and Surety LLC began "Linked Timestamping" in 1995, publishing hashes in the New York Times as a trusted anchor. Bitcoin extends this idea by replacing the newspaper with decentralized consensus.

## Resources
- [Bitcoin.org — How Bitcoin Works](https://bitcoin.org/en/how-it-works)
- [Satoshi Whitepaper](https://bitcoin.org/bitcoin.pdf)
- [Halving Countdown](https://www.bitcoinblockhalf.com)
- [Energy Consumption Index (Digiconomist)](https://digiconomist.net/bitcoin-energy-consumption)
