---
id: mining-hashpower-datum-outline
type: presentation-outline
tags: [mining, braiins, datum, hashpower, hermes-agent, privacy]
event: Round Rock Bitcoiners Meetup
date: 2026-05-XX
status: draft
last_updated: 2026-05-10
---

# Mining with Rented Hashrate: Braiins Hashpower + DATUM

> Pared-down outline for ~45 min: 20 min content + 25 min demos & Q&A.

---

## Slide 1: Connect with Us
**Title:** Round Rock Bitcoiners
**Body:**
- Telegram / Keet / SimpleX — links on the table
- Stay on topic (bitcoin only), respect privacy (Chatham House Rules)
- Next month: TBD — volunteer speakers & sponsors always welcome

---

## Slide 2: Circular Economy
**Title:** Circular Economy
**Body:**
- Local peer-to-peer exchange of goods, services, and sats
- Supporting bitcoin-accepting businesses in Round Rock
- Keeping value within the community

---

## Slide 3: Title — Mining Like the Big Players
**Title:** Mining Like the Big Players
**Subtitle:** Hashrate Marketplaces, DATUM, & Automation
**Footer:** Round Rock Bitcoiners | [Date]

---

## Slide 4: Why We're Here Tonight
- You don't need a warehouse in West Texas to mine Bitcoin
- New hash marketplaces let you rent PH/s-scale hashrate on-demand
- Combine rented hash with DATUM and own your block templates
- We'll show you the tools, then demo them live

---

## Slide 5: The Centralization Problem
- 3–4 pools control >50% of Bitcoin's hash rate
- Pool operators choose which transactions make it into blocks
- Geographic centralization = regulatory capture risk
- **How do we participate at scale without feeding the machine?**

---

## Slide 6: Two Solutions — Rent Hash + Control Templates
**Rent Hash (no hardware)**
- Braiins Hashpower (beta): live order book, instant delivery
- Minimum order: 10,000 sats (~$9)

**Control Templates (your rules)**
- DATUM + Stratum V2: miner-controlled block templates from your own node
- Pool only handles difficulty + reward coordination

**Together:** Industrial-scale hash, your transactions, your rules.

---

## Slide 7: Braiins Hashpower — Overview
- Launched Jan 2026 (public beta)
- On-demand SHA-256 hashrate
- Live order book: bid/ask in BTC per EHs/day
- Current market: ~3.15 EH/s total, ~45% utilized
- 0% service fees during beta
- Telegram: @braiinshashpower

---

## Slide 8: How the Market Works
**Bids (You Buy):**
- Place bid at your price (e.g. ₿0.49 / EHs/day)
- Delivers continuously while balance covers it
- Cancel anytime; no contracts

**Asks (Miners Sell):**
- Cheapest liquidity: ₿0.47–0.48 range
- Real-time charting: 5M/15M/1H/4H/1D timeframes

---

## Slide 9: Solo Mining & Hashrate Autopilot
**One-Click Solo (Lottery Mode)**
- Fixed cost, fixed duration, all-or-nothing
- 10,000 sats → 1.95 PH/s for ~2 hours (0.0025% win chance)
- Provably fair; full block reward if you hit

**Hashrate Autopilot**
- Set rules: "Buy hashrate when price < X, route to my DATUM node"
- Auto-rebalancing between pools based on payout models
- Demo: `http://<AUTOPILOT-HOST>:<PORT>/`

---

## Slide 10: Template Control — Two Paths
**Path A: DATUM + Ocean.xyz**
- Run your own node (Core or Knots) with DATUM
- Build templates from *your* mempool
- Route rented hashrate to your DATUM endpoint

**Path B: Stratum V2 + dmnd.work**
- Open protocol for template negotiation
- Miner proposes template; pool approves or rejects
- Works with Slush Pool (Braiins) and others

**Either way:** You decide what transactions get mined.

---

## Slide 11: Node Choice — Core vs. Knots (BIP-110 / RDTS)
**Bitcoin Core** (default, permissive)
- Accepts nearly all valid transactions (Ordinals, inscriptions)
- Neutral mempool — doesn't judge transaction "purpose"

**Bitcoin Knots** (restrictive, BIP-110 / RDTS)
- Limits data pushes >256 bytes, large scriptPubKeys
- Goal: filter non-monetary data
- **Controversy:** Censorship vs. protecting Bitcoin-as-money

**Our take:** You choose. Both work with template-control protocols.

---

## Slide 12: Our Stack
```
Braiins Hashpower (rented PH/s)
    ↓
DATUM endpoint (your node)
    ↓
Bitcoin Knots (mempool + templates)
    ↓
Ocean.xyz or Solo Pool (rewards)
    ↓
C-Lightning (Bolt 12 payouts)
```

**Physical layer:** StartOS on Dell OptiPlex 9020M
- 2TB SSD, 16GB RAM — runs Knots + CLN + DATUM proxy

---

## Slide 13: Hermes Agent — Privacy-Tiered AI
**The Problem:** Most AI sends everything to the cloud. Your configs, keys, addresses → someone else's server.

**Our Tiers:**
| Tier | Model | Location | Use Case |
|------|-------|----------|----------|
| **T1** | Local Qwen | Agentorange (home) | API keys, configs, wallet data |
| **T2** | TryMaple | E2E encrypted cloud | Financial CSVs, analytics |
| **T3** | Opus / Cloud | Orchestration only | Public data, slide outlines |

**Rule:** Raw sensitive data never touches T3. Keys live in Bitwarden, injected at runtime.

---

## Slide 14: Live Demo — Hashrate Autopilot
**What you'll see:**
- Autopilot dashboard at `http://<AUTOPILOT-HOST>:<PORT>/`
- Real-time market depth from Braiins Hashpower API
- Automated bid placement when price crosses threshold
- Routing logic: rented hash → DATUM endpoint → our node
- (If time) One-click solo package spin-up

---

## Slide 15: Economics & Risks (Quick)
**Costs:** ~₿0.47–0.62 / EHs/day (~$47–62 at $100k/BTC)

**Risks:**
- Bid may sit unfilled if price spikes
- Solo mining = lottery, not investment
- API key compromise → rotate immediately

**Mitigations:** Start small (10k sats). Use DATUM failover. Monitor locally.

---

## Slide 16: Call to Action
**Tonight:**
- Sign up at hashpower.braiins.com (10k sats min)
- Try a one-click solo package
- If you run a node, spin up DATUM

**This Month:**
- Join @braiinshashpower on Telegram
- Read the wiki on agentorange: `<WIKI-HOST>:/path/to/wiki/>`

**Long Term:** More hash rate under miner-controlled templates. Less pool centralization. Bitcoin wins.

---

## Slide 17: Resources
- [Braiins Hashpower](https://hashpower.braiins.com/)
- [Braiins Academy / API Docs](https://academy.braiins.com/en/braiins-hashpower/about/)
- [DATUM Protocol](https://ocean.xyz/datum)
- [Stratum V2](https://stratumv2.org)
- [dmnd.work](https://dmnd.work)
- Autopilot Demo: `http://<AUTOPILOT-HOST>:<PORT>/`
- Our wiki: `<WIKI-HOST>:/path/to/wiki/>`

---

## Slide 18: Q&A
**Title:** Questions?
**Subtitle:** Let's talk hash markets, node setups, and keeping AI out of your wallet.

---

## Appendix: Speaker Notes
**Slide 5 (Centralization):** Mention Foundry/DMND dominance. Reference Ocean.xyz as the exception.
**Slide 11 (Core vs Knots):** Keep brief and neutral. Acknowledge debate exists; both paths work for template control.
**Slide 13 (Hermes):** Emphasize this isn't theoretical — we use this every session.
**Slide 14 (Demo):** If Autopilot is unreachable (Tailnet), fall back to screenshots of market.braiins.com + terminal DATUM logs.
**Slide 11 (BIP-110):** RDTS = proposed temporary softfork. 0% miner signaling currently. Ideological debate: money vs. platform.
