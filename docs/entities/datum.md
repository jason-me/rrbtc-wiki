---
title: DATUM
created: 2026-05-10
updated: 2026-06-02
type: entity
tags: [mining, stratum, ocean, solo-mining, protocol]
sources: ['raw/decentralized-mining-workshop-meetup-30.md']
confidence: medium
contested: false
---

# DATUM

DATUM (Decentralized Template Auction Machine / UTXO Manager) is a protocol that lets miners build custom block templates directly on their own node and submit them to a mining pool—without the pool dictating what transactions go into the block.

## Core Purpose
- Put block template control back in the hands of the miner
- Integrate with [Ocean.xyz](/entities/ocean-xyz) for pooled rewards or solo mining
- Reduce trust in pool operators (censorship resistance)

## How It Works
1. Run [Bitcoin Knots](/entities/bitcoin-knots) on your own node
2. Configure DATUM to issue custom work from your mempool
3. Point your ASIC or [BitAxe](/entities/bitaxe) at the DATUM endpoint
4. Optionally fail over to Ocean.xyz pool if solo connection drops

## Configuration (Solo / Lottery Mining)
- Remove text from "Datum Pool Host" (leave blank for solo)
- Disable "Pooled Mining Only"
- Optionally disable "Failover To Lottery" if you want pure solo

## Relationship to Other Protocols
- Builds on [Stratum V2](/entities/stratum-v2) concepts (miner-initiated templates)
- Used by [Ocean.xyz](/entities/ocean-xyz) as its native template layer
- Complements [C-Lightning (Core-Lightning)](/entities/c-lightning) when combined with Bolt 12 for Lightning payouts

## Related Entities
- [Ocean.xyz](/entities/ocean-xyz) — pool that natively supports DATUM
- [BitAxe](/entities/bitaxe) — low-powered miner compatible with DATUM solo setups
- [Bitcoin Knots](/entities/bitcoin-knots) — recommended full node with enhanced template options
- [AxeOS](/entities/axe-os) — custom Bitaxe firmware that can talk to DATUM

## References
- Meetup #30: Decentralized Mining Workshop ^[raw/decentralized-mining-workshop-meetup-30.md]
- Bitaxe deck (April 2025) ^[raw/decentralized-home-mining-bitaxe-2025-04.md]

## Related
- [Bitcoin Data Carving (Ordinals, Inscriptions, BRC-20, Runes)](/concepts/bitcoin-nfts) — Template control and the inscriptions debate

## Resources
- [DATUM Overview — Ocean.xyz](https://ocean.xyz/datum)
- [Ocean.xyz Documentation](https://ocean.xyz/docs)
- [GitHub: oceano-org/datum](https://github.com/ocean-tech/datum)
- [Stratum V2 Specification](https://stratumv2.org)
