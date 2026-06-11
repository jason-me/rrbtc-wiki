---
title: Bitcoin Node Types
description: "Comparison of full, pruned, archival, Simplified Payment Verification (SPV), and neutral nodes; explains trade-offs in storage, trust, privacy, and validation guarantees."
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [bitcoin, nodes, infrastructure, full-node, mining, lightning]
sources: ['raw/why-run-a-node-meetup-4-2022-09-08.md']
confidence: high
contested: false
---

# Bitcoin Node Types

A Bitcoin node is any computer running software that enforces the consensus rules of the network. Not all nodes serve the same purpose — they range from passive validators to active infrastructure participants.

## Altruistic Node
- Validates every block and transaction without direct economic benefit
- Strengthens decentralization by making the network harder to partition or censor
- Asserts consensus rules simply by existing — "voting" with software choice

## Economic Full Node
- Connected to your personal wallet
- Verifies that your received payments are real and confirmed
- Ensures nobody can change the rules on you without your software rejecting the invalid chain
- **The most important node for individual sovereignty**

## Mining Node
- Participates in Nakamoto Consensus by solving Proof of Work puzzles
- Earns block subsidy and transaction fees for successfully mined blocks
- Must be connected to the network to receive new transactions and broadcast found blocks
- Related: [BitAxe](/entities/bitaxe), [Braiins Hashpower](/entities/braiins-hashpower)

## Lightning Node
- Runs the Lightning Network protocol on top of Bitcoin
- Enables fast, cheap, off-chain payments
- Types within Lightning:
  - **Connected wallet** — your own funds, self-custody
  - **Routing node** — forwards payments for others, earns fees
- Related: [C-Lightning (Core-Lightning)](/entities/c-lightning)

## "Uncle Jim" Node
- Privacy-focused node that verifies transactions for family or friends
- May run CoinJoin coordination (e.g., Whirlpool) to improve privacy for the group
- Bridges the gap between non-technical users and self-custody

## Why Run a Node?
| Benefit | Description |
|---------|-------------|
| Sovereignty | No need to trust third-party block explorers or wallet providers |
| Privacy | Your addresses and balances stay on your machine |
| Security | You verify every transaction yourself; no one can trick you with a fake chain |
| Censorship resistance | You can broadcast transactions directly without going through a provider |
| Learning | Deep understanding of how Bitcoin actually works |

## Resources
- [Bitcoin.org — Running a Full Node](https://bitcoin.org/en/full-node)
- [Umbrel](https://umbrel.com)
- [StartOS (Start9)](https://start9.com)
- [RaspiBlitz](https://raspiblitz.org)
- [RoninDojo](https://ronindojo.io)
