---
title: Mining Decentralization
created: 2026-06-04
updated: 2026-06-04
type: summary
tags: [mining, decentralization, home-mining, stratum-v2, datum, bitcoin-core, bitcoin-knots, sovereignty]
sources:
  - raw/understand-how-bitcoin-works-2026-01-08.md
  - raw/why-run-a-node-meetup-4-2022-09-08.md
  - raw/decentralized-home-mining-bitaxe-2025-04.md
  - raw/decentralized-mining-workshop-meetup-30.md
  - raw/node-builder-workshop-2025-11-13.md
confidence: high
contested: false
---

# Mining Decentralization

Proof-of-Work is what makes Bitcoin immutable. At Meetup #2 and again in January 2026 we covered the mechanics: miners hash block data, race for a valid nonce, and broadcast solutions that the network accepts. The difficulty adjustment targets ten minutes per block. The supply cap is twenty-one million. None of this works without distributed hash rate competing to find the next block.

But hash rate is not automatically distributed. At Meetup #30 and in the Bitaxe deck from April 2025 we traced the evolution from CPUs to GPUs to FPGAs to ASICs to industrial facilities. The network crossed one zetahash in total hash rate, and the vast majority of that power sits in a handful of large pools. When a few pools choose which transactions to include, they are not just pooling hash rate. They are pooling a critical piece of network sovereignty.

This article synthesizes our mining meetups into one question: what does it actually take to bring template selection back to individual miners?

## The Problem: Template Centralization

At Meetup #4 in September 2022 we defined five node types, including the Mining Node. Its function is straightforward: participate in Nakamoto Consensus and earn block rewards plus fees. But earning rewards requires finding a block, and finding a block requires selecting transactions into a template.

Most miners today do not select their own templates. They connect to a pool, receive work, and hash. The pool decides the template. This means the same handful of pool operators effectively decide mempool policy for the majority of hash rate. The Core vs Knots debate over inscriptions, spam filtering, and RDTS becomes largely academic if the miners hashing on those rules never actually choose which transactions to confirm.

Our mining workshops in 2025 treated this as a practical problem with practical solutions, not an abstract complaint.

## The Home Mining Counter-Movement

Both mining decks repeated the same hardware evolution line: CPUs to GPUs to FPGAs to ASICs to industrial facilities. They also repeated the same counter-narrative: open-source firmware, low-power hardware, and template protocols now make home mining viable again, not as a profit play but as a participation play.

### Entry-Level: Bitaxe

At the April 2025 Bitaxe presentation and again at Meetup #30 we compared two ends of the home mining spectrum:

| Feature | Bitaxe 601 Gamma | Antminer S19j Pro+ |
|--------|------------------|---------------------|
| Hash rate | 1.2 TH/s | 120 TH/s |
| Power | ~18 watts | 3,250 to 4,080 watts |
| Efficiency | 15 J/TH | 27 to 34 J/TH |
| Monthly cost | ~$1.30 to $2.60 | ~$326 to $412 |

The Bitaxe is not competitive with industrial farms. It is competitive with doing nothing. It lets a hobbyist run a SHA-256 ASIC at desk power levels with no HVAC requirements and near-silent operation. Meetup #30 noted that twelve blocks were solo mined in 2024, and two of those were by Bitaxes.

### Serious Home: Refurbished ASICs

For those willing to manage noise and heat, refurbished S19-series miners offer industrial hash rate at residential scale. Both decks addressed the practical barriers directly:

- **AC Infinity Cloudline** inline fans and silencers
- **Fruition Designs** 3D-printed cooling and silencing kits
- **Njord Fan Control PCB** letting Bitmain miners drive aftermarket fans automatically

The monthly cost is real ($326 to $412 at typical residential rates), but so is the hash rate. The #HashTheTorch initiative mentioned at Meetup #30 offers one-month S19 loaners so prospective miners can experience heat, noise, and pool configuration before committing capital.

## Two Paths to Template Sovereignty

Our workshops presented two distinct protocols for miners who want to choose their own block templates. They are not interchangeable. They work with different node software and serve different setups.

### Stratum V2 + Bitcoin Core

Stratum V2 improves on the original Stratum protocol by encrypting communication and, critically, letting miners negotiate their own block templates. Under Sv2, a miner runs their own Bitcoin node (Core), builds a template from their local mempool and policy, and the pool coordinates only the hash rate aggregation. The pool sees the templates but does not impose them.

Sv2 works with Bitcoin Core. It is implementation-agnostic at the node layer. At Meetup #30 we referenced Dmnd.work and Braiins.com as sources for Sv2-compatible mining software and pool coordination.

### DATUM + Bitcoin Knots

DATUM (Decentralized Template Auction Machine) goes further. It lets a miner issue custom work directly from their own node without requiring downstream pool template approval. DATUM integrates with Ocean.xyz for pooled or solo mining, and it runs specifically with Bitcoin Knots.

Knots matters here because it offers the enhanced mempool policies and template options that DATUM is designed to exploit. At the November 2025 node builder workshop we explicitly paired Knots with DATUM as part of the "advanced decentralized stack": StartOS for hosting, Knots for template policy, DATUM for work issuance.

The practical difference: Sv2 decentralizes template selection within a pool structure. DATUM decentralizes template issuance itself, with the pool acting more as a coordination and payout layer.

## Pooled vs Solo: Variance Trade-Offs

Template sovereignty is only one axis. The other is reward variance. Both mining decks summarized the same payout landscape:

| Schema | Mechanism | Template Control | Variance |
|--------|-----------|------------------|----------|
| PPS | Fixed per share | Pool-controlled | None |
| FPPS | Fixed per share + tx fees | Pool-controlled | None |
| PPLNS | Pay when block found, weighted by recent shares | Pool-controlled | High |
| TIDES (Ocean.xyz) | Transparent, time-weighted | Pool-controlled | Medium |
| Stratum V2 pool | Pooled hash rate, miner template | Miner | Reduced by pool |
| DATUM solo | Direct node work issuance | Miner | Full block variance |
| True solo (public-pool.io) | No pool; full reward if block found | Miner | Maximum |

At Meetup #30 we walked through the public-pool.io setup for true solo mining: point the Bitaxe at public-pool.io port 21496, set the user to `[Your Bitcoin Address].[Worker Name]`, and hash. If the device finds a block, the full reward lands at that address. The odds are long. Both decks explicitly recommended SoloChance.com for calculating them honestly.

## The Honest Premise

Our mining decks do not claim home mining is for everyone. They claim it is for:

- Hobbyists who want to participate directly in consensus
- Sovereignty-minded individuals who do not want a pool choosing their mempool policy
- Network defenders who believe geographic and operator diversity of hash rate strengthens Bitcoin

The Bitaxe deck stated it plainly: Bitaxe lowers barriers and supports open-source innovation. It does not promise ROI. Meetup #30 was equally direct: start simple, understand the trade-offs, and only scale if the noise, heat, and power costs are acceptable in your environment.

## What We Did Not Claim

- We do not claim a Bitaxe will mine a block at any predictable schedule
- We do not claim home mining beats industrial farms on efficiency or scale
- We do not claim Sv2 or DATUM eliminate the need for pools entirely
- We do not claim any single setup solves both template sovereignty and variance reduction simultaneously

## Cross-Links

- [Home Mining](/concepts/home-mining) — Hardware, power, pools, and residential economics
- [Proof of Work & Bitcoin Supply](/concepts/proof-of-work) — Consensus, difficulty adjustment, and the 21M cap
- [Bitcoin Core vs Bitcoin Knots](/comparisons/bitcoin-core-vs-knots) — Mempool policy differences that affect template selection
- [Mining Payout Schemas](/comparisons/mining-payout-schemas) — PPS, FPPS, PPLNS, TIDES, and solo variance
- [BitAxe](/entities/bitaxe) — Open-source home mining hardware
- [AxeOS](/entities/axe-os) — Custom firmware for minimizing latency
- [Stratum V2](/entities/stratum-v2) — Open mining protocol for template negotiation
- [DATUM](/entities/datum) — Decentralized Template Auction Machine protocol
- [Ocean.xyz](/entities/ocean-xyz) — Mining pool with DATUM and TIDES payout
- [public-pool.io](/entities/public-pool) — Public solo mining pool
- [Bitcoin Knots](/entities/bitcoin-knots) — Restrictive node implementation for custom templates
- [How Do I Start Mining at Home?](/queries/how-do-i-start-mining-at-home) — Decision path: Bitaxe vs ASIC vs rented hashrate

## Resources

- [Speaker Deck: Decentralized Home Mining w/ Bitaxe](https://speakerdeck.com/rrbtc/bitaxe)
- [Speaker Deck: Decentralized Mining Workshop — Meetup #30](https://speakerdeck.com/rrbtc/round-rock-bitcoiners-meetup-number-30-decentralized-mining-workshop)
- [Speaker Deck: Understand How Bitcoin Works](https://speakerdeck.com/rrbtc/understand-how-bitcoin-works-08-jan-2026)
- [Speaker Deck: Why Run a Node? — Meetup #4](https://speakerdeck.com/rrbtc/why-run-a-node-meetup-number-4-2022-09-08)
- [SoloChance.com](https://solochance.com)
- [Bitaxe.org](https://bitaxe.org)
- [Ocean.xyz](https://ocean.xyz)
- [Public-pool.io](https://public-pool.io)
- [Braiins.com (Sv2)](https://braiins.com)
- [Dmnd.work (Sv2)](https://dmnd.work)
