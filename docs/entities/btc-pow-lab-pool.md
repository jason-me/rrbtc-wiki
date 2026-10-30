---
title: BTC PoW Lab Pool
created: 2026-09-24
updated: 2026-09-24
type: entity
tags: [mining, pool, solo-mining, hybrid-solo, bitaxe]
sources: [https://btcpowlab-pool.com/model, https://btcpowlab-pool.com/proof, https://btcpowlab-pool.com/start]
confidence: medium
contested: false
---

# BTC PoW Lab Pool

BTC PoW Lab Pool is a Bitcoin Hybrid Solo pool operated by Carlos Monzon through Power CM Software. It combines a large finder allocation with a smaller community allocation based on normalized accepted work.

## Reward Model

| Allocation | Recipient | Basis |
| --- | --- | --- |
| 85 percent | Finder | Miner identity that finds the accepted block |
| 10 percent | Eligible miners | Normalized accepted work in the published eligibility window |
| 5 percent | Operator | Infrastructure and pool operation |

The finder is excluded from the community portion for the same block. Accounting uses integer satoshis and normalized demonstrated work rather than worker count.

## Configuration

| Setting | Value |
| --- | --- |
| Stratum host | `stratum.btcpowlab-pool.com` |
| Port | `3333` |
| User | `BTC_ADDRESS.worker` |
| Password | `x` |

The pool supports standard Stratum V1 clients. Variable difficulty starts at 1024 and can adjust down to difficulty 1 for low power miners.

## Verification

The public dashboard exposes pool status, current network data, miners, workers, accepted work, and best share information. The Proof Center publishes the current template data and the reward rules that would apply when a block is found.

## Hashrate Boost

Hashrate Boost lets an authenticated miner add rented SHA 256 hashrate to the same mining identity for a selected period. The service reports confirmed power, shares, best share, activity, and timing separately from the miner's own equipment. If capacity cannot activate, the paid amount is returned in BTC to the verified mining wallet. A final average below 75 percent of confirmed power creates a proportional adjustment.

## Risk

Mining is probabilistic. Connection, accepted shares, rented power, and a high best share do not guarantee a block, reward, profit, or recovery of costs.

## Resources

[Pool](https://btcpowlab-pool.com/)

[Setup guide](https://btcpowlab-pool.com/start)

[Reward model](https://btcpowlab-pool.com/model)

[Proof Center](https://btcpowlab-pool.com/proof)

[Hashrate Boost](https://btcpowlab-pool.com/boost)
