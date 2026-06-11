---
title: "Mining Like The Big Players"
date: "2026-05-14"
presenter: "RRBTC"
type: presentation
sidebar_label: "Mining Like The Big Players"
pagination_next: "presentations/mining-like-the-big-players-2026-05-14/slide-001"
---

# Mining Like The Big Players

**Date:** 2026-05-14  
**Presenter:** RRBTC  
**Topics:** mining, hashrate-marketplace, braiins, datum, stratum-v2, automation

---

## Outline & Notes

# Mining Like The Big Players - 14 May 2026
**Presenter:** RRBTC
**Date:** May 14, 2026

## Slide 1: Title
**Mine Like the Big Players**
Using Hashrate Marketplaces, DATUM, & Automation for securing real economic activity

## Slide 2: Why Hash Markets?
- You don't need a huge warehouse in West Texas with cheap electric to mine Bitcoin
- New hash marketplaces let you rent PH/s-scale hashrate on-demand
- Combine rented hash with DATUM and own your block templates
- Let HashGuard or Braiins Hashrate Autopilot babysit your bids through price spikes
- Put your hodl stack to work securing the network and enforcing your rules
- We'll show you the tools, then demo them live

## Slide 3: The Miner Centralization Problem
- A few pools control most of Bitcoin's power
- They decide which transactions go through
- When everything clusters in one place, rules can be bent
- How do we participate in mining at scale without feeding the fiat machine?
- (3 - 4 pools control >50% of Bitcoin's hash rate)

## Slide 4: Two Solutions: Rent Hash + Control Templates
**Rent Hash (no hardware)**
- Braiins Hashpower (beta): live order book, instant delivery
- Minimum order: 10,000 sats (~$9)

**Control Templates (your rules)**
- DATUM + Stratum V2: miner-controlled block templates from your own node
- Pool only handles difficulty + reward coordination

**Together = Industrial-scale hash, your transactions, your rules.**

## Slide 5: Braiins Hashpower Overview
- Launched Jan 2026 (public beta)
- On-demand SHA-256 hashrate
- Live order book: bid/ask in BTC per EHs/day
- 0% service fees during beta
- Telegram: @braiinshashpower

## Slide 6: How the Market Works
**Bids (You Buy)**
- Place bid at your price (e.g. ₿47000 sats/Ph/day)
- Delivers continuously while balance covers it
- Cancel bid anytime and make new

**Asks (Miners Sell)**
- Cheapest liquidity: ₿47,000 - 48,0000 sats range
- Real-time charting: 5M/15M/1H/4H/1D timeframes
- Older bids have precedence, then highest bid over market

## Slide 7: Solo vs Pooled Mining
**Solo (Lottery)**
- Fixed cost, fixed duration, all-or-nothing
- 10,000 sats → 1.95 PH/s for ~2 hours (0.0025% win chance)
- Provably fair; full block reward if you hit
- Reward is ₿3.125 (~$300K) + fees every 10 minutes
- Odds are low but much better than Powerball

**Pooled (Steady Sats)**
- Share hash with thousands of miners
- Earn proportional sats per block found
- Ocean uses TIDES payout (no pool fee)
- Predictable, low-variance income
- No jackpot, but less dry spells

## Slide 8: Template Control Paths
**Path A: DATUM + Ocean.xyz**
- Run your own node (Core or Knots) with DATUM
- Build templates from your mempool
- Route rented hashrate to your DATUM endpoint

**Path B: Stratum V2 + dmnd.work**
- Open protocol for template negotiation
- Miner proposes template; pool approves or rejects
- Works with Slush Pool (Braiins) and others

## Slide 9: Node Choice - Core vs Knots (BIP-110 / RDTS)
**Bitcoin Core (permissive)**
- Accepts nearly all valid transactions (Ordinals, inscriptions, non-monetary data)
- Neutral mempool - doesn't judge transaction 'purpose'

**Bitcoin Knots (restrictive)**
- Limits data pushes >256 bytes, large scriptPubKeys
- Goal: filter non-monetary data
- Controversy: Censorship vs protecting Bitcoin-as-money

**Our take:** You choose. Both work with template-control protocols.

## Slide 10: Our Stack
- Braiins Hashpower (rented PH/s)
- DATUM or StratumV2 endpoint (your node)
- Bitcoin Core / Knots (mempool + templates)
- Ocean.xyz or Solo Pool (rewards)
- C-Lightning (Bolt 12 payouts w/ onchain fallback)
- HashGuard or Braiins Hashrate Autopilot

**Physical:** StartOS on Dell OptiPlex 9020M | 2TB SSD, 16GB RAM

## Slide 11: HashGuard (Our Auto-Optimizer)
- **Stall detection** - if hashrate drops to 0 TH/s, automatically overbids the lowest matching ask by 1 tick (1,000 sats) to restore flow on Braiins
- **Trim-down** - if delivering but overbidding by >4%, trims back to optimal price to save sats
- **Auto-topup** - pre-places a new bid when any active order drops below 20% remaining balance
- **Profitability ceiling** - never bids above hash value + 10% (calculated from live difficulty)
- **Signal alerts** - sends a notification on every action (stall boost, trim, topup)
- **State logging** - tracks actions and daily price lows for trend analysis
- **Secrets** - stored in Bitwarden, decrypted only at runtime

## Additional Content
The deck continues with:
- Braiins Hashrate Autopilot (official automation tool)
- Demo scenario walkthrough
- Economics & risk analysis (break-even calculations, difficulty impact)
- Call to action (join monitoring channel, start with 10K sats)
- Resources (ocean.xyz, dmnd.work, solochance.com, braiins.com)

## Key Themes
1. Hashrate marketplaces democratize access to PH/s-scale mining without hardware ownership
2. DATUM and StratumV2 restore template sovereignty to individual miners
3. Automation tools (HashGuard, Braiins Autopilot) manage bid optimization and stall recovery
4. Stack combines rented hash + template control + Lightning payouts for full sovereignty
5. Minimum viable test: 10,000 sats (~$9) for ~2 hours of 1.95 PH/s solo mining


## Slides in this Deck

- [Deck Overview (All Slides)](/presentations/mining-like-the-big-players-2026-05-14/)
- [Slide 1](/presentations/mining-like-the-big-players-2026-05-14/slide-001)
- [Slide 2](/presentations/mining-like-the-big-players-2026-05-14/slide-002)
- [Slide 3](/presentations/mining-like-the-big-players-2026-05-14/slide-003)
- [Slide 4](/presentations/mining-like-the-big-players-2026-05-14/slide-004)
- [Slide 5](/presentations/mining-like-the-big-players-2026-05-14/slide-005)
- [Slide 6](/presentations/mining-like-the-big-players-2026-05-14/slide-006)
- [Slide 7](/presentations/mining-like-the-big-players-2026-05-14/slide-007)
- [Slide 8](/presentations/mining-like-the-big-players-2026-05-14/slide-008)
- [Slide 9](/presentations/mining-like-the-big-players-2026-05-14/slide-009)
- [Slide 10](/presentations/mining-like-the-big-players-2026-05-14/slide-010)
- [Slide 11](/presentations/mining-like-the-big-players-2026-05-14/slide-011)
- [Slide 12](/presentations/mining-like-the-big-players-2026-05-14/slide-012)
- [Slide 13](/presentations/mining-like-the-big-players-2026-05-14/slide-013)
- [Slide 14](/presentations/mining-like-the-big-players-2026-05-14/slide-014)
- [Slide 15](/presentations/mining-like-the-big-players-2026-05-14/slide-015)
- [Slide 16](/presentations/mining-like-the-big-players-2026-05-14/slide-016)
- [Slide 17](/presentations/mining-like-the-big-players-2026-05-14/slide-017)
- [Slide 18](/presentations/mining-like-the-big-players-2026-05-14/slide-018)
![Slide 1 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_000.jpg)

![Slide 2 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_001.jpg)

![Slide 3 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_002.jpg)

![Slide 4 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_003.jpg)

![Slide 5 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_004.jpg)

![Slide 6 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_005.jpg)

![Slide 7 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_006.jpg)

![Slide 8 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_007.jpg)

![Slide 9 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_008.jpg)

![Slide 10 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_009.jpg)

![Slide 11 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_010.jpg)

![Slide 12 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_011.jpg)

![Slide 13 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_012.jpg)

![Slide 14 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_013.jpg)

![Slide 15 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_014.jpg)

![Slide 16 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_015.jpg)

![Slide 17 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_016.jpg)

![Slide 18 of 18 from 'Mining Like The Big Players' (2026-05-14, RRBTC). Part of a presentation covering: mining, hashrate-marketplace, braiins, datum, stratum-v2, automation.](/img/slides/mining-like-the-big-players-2026-05-14/slide_017.jpg)

