---
title: How Do I Start Mining at Home?
created: 2026-06-03
updated: 2026-06-04
type: query
tags: [mining, bitaxe, solo-mining, pool-mining, datum, stratum, home-mining]
sources:
  - raw/decentralized-home-mining-bitaxe-2025-04.md
  - raw/decentralized-mining-workshop-meetup-30.md
  - presentations/mining-hashpower-datum-outline-2026-05.md
  - entities/bitaxe.md
  - entities/datum.md
  - entities/stratum-v2.md
  - entities/ocean-xyz.md
  - entities/public-pool.md
  - entities/braiins-hashpower.md
  - concepts/mining-payout-schemas.md
confidence: high
contested: false
---

# How Do I Start Mining at Home?

Home mining has three entry points: **low-power hardware (Bitaxe), professional ASICs at home (S19, S21), or rented industrial hashrate** you control via template protocols (DATUM/Stratum V2). This page maps all three paths from first purchase to first accepted share.

> **Bottom line:** Start with a Bitaxe (~$150) to learn the mechanics. Scale to a professional ASIC only if you have the power, space, and noise tolerance. Use rented hashrate to experiment at industrial scale without capital expenditure.

## Quick Decision Flow

```
Do you want to own hardware?
|
├── Yes → What is your power/noise budget?
│   ├── Low → Bitaxe (18W, ~1.2 TH/s, silent)
│   │   ├── Just learning → Public Pool (solo lottery, no fees)
│   │   ├── Steady sats → Ocean.xyz (TIDES, transparent)
│   │   └── Max control → DATUM + your own node
│   └── High → Professional ASIC (S19/S21, 3kW+, 75–85 dB)
│       ├── Garage/basement → Ocean.xyz or Braiins Pool
│       └── Max control → DATUM + your own node
│
└── No → Rent hashrate (Braiins Hashpower)
    ├── Lottery mode → One-click solo (10k sats, ~2 hours)
    └── Steady build → DATUM + recurring bids
```

## Path A: Bitaxe Home Miner

### What You Need

| Item | Purpose | Cost |
|---|---|---|
| **Bitaxe 601 Gamma** | ASIC miner, 1.2 TH/s, ~18W | ~$150 |
| **Power supply** | 5V/4A USB-C or barrel jack | ~$15 |
| **Wi-Fi** | For pool connection and monitoring | — |
| **Bitcoin address** | Where payouts go | — |

**Why Bitaxe:** It is the most efficient home miner (15 J/TH) vs. industrial Antminers (27–34 J/TH). It runs silent, uses less power than a light bulb, and is fully open-source.

### Setup (5 Minutes)

1. **Power on** — Plug in; the screen shows its IP address
2. **Connect to Wi-Fi** — Visit the IP in a browser → Settings → Network → enter Wi-Fi credentials
3. **Choose a pool** — See pool comparison below
4. **Enter pool details** — Stratum URL, port, and your bitcoin address as the username
5. **Save and restart** — Hashing begins within seconds

### Pool Options for Bitaxe

| Pool | Schema | Fees | Best For |
|---|---|---|---|
| **public-pool.io** | Solo (lottery) | 0% | Learning; you keep full block reward if you hit |
| **Ocean.xyz** | TIDES | ~2% | Transparent, predictable payouts; supports DATUM |
| **Braiins Pool** | FPPS | ~2% | Stable payouts including transaction fees |

**Recommendation:** Start with Public Pool for 2–4 weeks to watch the mechanics. Switch to Ocean.xyz if you want consistent (though tiny) payouts.

### Expected Returns

At 1.2 TH/s and current difficulty, a Bitaxe finds a block roughly once every **~2,000 years** on average. This is a lottery, not a salary. The value is in:
- Learning how mining works firsthand
- Supporting network decentralization
- Being ready to scale when you upgrade hardware or rent hash

## Path B: Rented Hashrate (No Hardware)

### What You Need

| Item | Purpose | Cost |
|---|---|---|
| **Braiins Hashpower account** | Rent SHA-256 hashrate on-demand | 10,000 sats minimum |
| **Bitcoin node (optional)** | For DATUM template control | — |
| **DATUM plugin** | Connects your node to the pool | Free |

### How It Works

1. **Deposit sats** to Braiins Hashpower (beta, 0% fees)
2. **Place a bid** at your price (e.g., ₿0.49 / EHs/day)
3. **Hashrate delivers continuously** while your balance covers it
4. **Cancel anytime** — no contracts

### Lottery Mode (One-Click Solo)

- **Cost:** 10,000 sats (~$9)
- **Duration:** ~2 hours
- **Hashrate:** ~1.95 PH/s
- **Win chance:** ~0.0025% per round
- **Payout:** Full block reward (3.125 BTC + fees) if you hit

This is provably fair and lets you experience solo mining at industrial scale without owning an industrial miner.

### Template Control (DATUM)

If you run your own node, you can build block templates from *your* mempool and route rented hashrate to mine them:

1. Run [Bitcoin Core](/entities/bitcoin-core) or [Bitcoin Knots](/entities/bitcoin-knots)
2. Install the [DATUM](/entities/datum) plugin
3. Connect DATUM to [Ocean.xyz](/entities/ocean-xyz)
4. Route Braiins Hashpower to your DATUM endpoint

**Result:** You decide which transactions make it into blocks, even though you do not own the hardware.

## Path C: Professional ASIC at Home (S19, S21, etc.)

This is the middle ground between a silent Bitaxe and rented hashrate: you own industrial-grade hardware, run it in your garage or basement, and keep the full payout minus pool fees.

### What You Need

| Item | Purpose | Cost |
|---|---|---|
| **Antminer S19j Pro+** (or S21) | 120 TH/s, ~3,250W | ~$1,500–$3,500 used |
| **240V power** (NEMA 6-20 or PDUs) | Standard 120V outlets cannot handle 3kW+ | Electrician install ~$200–$800 |
| **Garage, basement, or shed** | Noise isolation from living space | — |
| **Ventilation** | Exhaust 3kW of heat (equivalent to a space heater) | Inline fan + ducting ~$150–$400 |
| **Soundproofing (optional)** | Reduce 75–85 dB to tolerable levels | Fruition Designs kit ~$200–$500 |
| **Bitcoin address** | Where payouts go | — |

**Where to buy:** KaboomRacks (used, tested), Braiins Marketplace, or direct from resellers. Avoid random eBay listings without warranty.

### Setup

1. **Install 240V circuit** — Hire an electrician; a single S19 pulls ~15A at 240V
2. **Position the miner** — Garage, basement, or dedicated shed; never in living space
3. **Connect ventilation** — Exhaust hot air outside; intake cool air from another source
4. **Connect to pool** — Same stratum setup as Bitaxe, but with much higher hashrate
5. **Monitor** — Use Braiins OS+ or stock firmware; watch for hashboard failures

### Pool Options for Professional ASICs

| Pool | Schema | Fees | Best For |
|---|---|---|---|
| **Ocean.xyz** | TIDES | ~2% | Template control via DATUM; transparent payouts |
| **Braiins Pool** | FPPS | ~2% | Stable payouts including transaction fees; Braiins OS+ integration |
| **Public Pool** | Solo (lottery) | 0% | Full block reward if you hit; high variance |

**Recommendation:** Start with Braiins Pool (FPPS) for predictable cash flow. Switch to Ocean.xyz (TIDES) if you want to run DATUM and control templates.

### Expected Returns

At 120 TH/s and current difficulty, an S19 finds a block roughly once every **~20 years** on average. With FPPS/TIDES, you receive micro-payouts proportional to your hash every few hours. At $0.12/kWh, power costs often exceed FPPS revenue — **do not expect profit unless you have cheap or free power.**

The value is in:
- Owning physical hash and supporting decentralization
- Learning industrial mining operations at small scale
- Being ready to scale if power costs drop or bitcoin price rises

## Noise, Heat, and Power

### Bitaxe
- **Noise:** Silent (no fans)
- **Heat:** Negligible (~18W)
- **Power cost:** ~$1.30–$2.60/month

### Professional ASIC at Home (e.g., S19)
- **Noise:** 75–85 dB — requires garage, basement, or soundproofing
- **Heat:** 3,000+ watts — requires ventilation or HVAC
- **Power cost:** ~$330–$410/month at $0.12/kWh

**Noise solutions:** AC Infinity Cloudline 8" inline fan + silencer, Fruition Designs 3D-printed silencing kits, Njord Fan Control PCB.

## Advanced Stack (Full Sovereignty)

For users who want maximum control:

| Layer | Tool | Purpose |
|---|---|---|
| **OS** | [StartOS](/entities/start-os) | Home server operating system |
| **Node** | [Bitcoin Knots](/entities/bitcoin-knots) | Restrictive mempool policy, enhanced templates |
| **Lightning** | [C-Lightning (Core-Lightning)](/entities/c-lightning) | Bolt 12 offers for payout receipts |
| **Firmware** | [AxeOS](/entities/axe-os) | Custom Bitaxe firmware for lower latency |
| **Protocol** | [DATUM](/entities/datum) | Custom block templates from your node |
| **Pool** | [Ocean.xyz](/entities/ocean-xyz) | TIDES payouts, DATUM integration |

## Common Mistakes

| Mistake | Why It Hurts | Fix |
|---|---|---|
| **Expecting profit from a Bitaxe** | 1.2 TH/s is ~0.00001% of network hash | Treat it as education + lottery |
| **Buying an S19 without 240V power** | Standard outlets cannot deliver 3kW | Verify electrical capacity first |
| **Installing ASIC in living space** | 75–85 dB is louder than a vacuum cleaner | Garage, basement, or shed only |
| **Ignoring power costs** | S19 miners can cost $400+/month | Calculate before buying hardware |
| **Using exchange deposit address** | Exchanges may not credit tiny pool payouts | Use a self-custody wallet |
| **No backup pool** | If your pool goes down, hash is wasted | Configure failover in miner settings |
| **Wrong address format** | Some pools require specific address types | Use native Segwit (bc1q...) or Taproot (bc1p...) |

## Decision Matrix

| Profile | Setup | Monthly Cost | Expected Outcome |
|---|---|---|---|
| **Curious beginner** | Bitaxe + Public Pool | ~$2 | Learn mechanics; tiny lottery chance |
| **Steady learner** | Bitaxe + Ocean.xyz | ~$2 | Tiny but regular TIDES payouts |
| **No hardware, big curiosity** | Braiins Hashpower lottery | ~$9 per round | Industrial-scale solo experience |
| **Sovereignty maximalist** | Bitaxe + StartOS + Knots + DATUM + Ocean | ~$2 + node cost | Full template control, educational |
| **Home ASIC operator** | S19/S21 + Braiins Pool + ventilation | ~$330–$410 power + pool fees | Industrial hash at home; likely break-even or loss at grid power |
| **Scale without warehouse** | Braiins Hashpower + DATUM + own node | Variable bid cost | Industrial hash, your templates |

## Cross-Links

- [BitAxe](/entities/bitaxe) — Hardware specs and AxeOS firmware
- [DATUM](/entities/datum) — Decentralized Template Auction Machine
- [Stratum V2](/entities/stratum-v2) — Open mining protocol for template negotiation
- [Ocean.xyz](/entities/ocean-xyz) — TIDES pool with DATUM support
- [public-pool.io](/entities/public-pool) — Solo lottery pool
- [Braiins Hashpower](/entities/braiins-hashpower) — On-demand hashrate marketplace
- [Mining Payout Schemas](/concepts/mining-payout-schemas) — PPS, FPPS, PPLNS, TIDES, Solo compared
- [Mining Payout Schemas](/comparisons/mining-payout-schemas) — Detailed payout schema comparison
- [Bitcoin Knots](/entities/bitcoin-knots) — Restrictive node for template control
- [StartOS](/entities/start-os) — Home server OS for node stack
