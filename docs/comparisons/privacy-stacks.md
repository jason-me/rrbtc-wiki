---
title: Privacy Stacks — CoinJoin and No-KYC Acquisition
description: "Modular on-chain, Lightning, and metadata privacy stack compositions — compares CoinJoin, Silent Payments, Tor, Nostr, and SSH isolation approaches for different threat models."
created: 2026-06-03
updated: 2026-06-03
type: comparison
tags: [privacy, coinjoin, acquisition, no-kyc, bitcoin, opsec]
sources:
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
  - raw/mobile-privacy-meetup-5-2022-10-13.md
  - entities/samourai-wallet.md
  - entities/wasabi-wallet.md
  - entities/joinmarket.md
  - entities/bisq.md
  - entities/azteco.md
  - concepts/privacy-stacks.md
confidence: high
contested: true
---

# Privacy Stacks — CoinJoin and No-KYC Acquisition

Privacy in Bitcoin is not a single tool — it is a layered practice. This comparison focuses on the two most critical layers: **how you acquire bitcoin without KYC** and **how you break the transaction graph** after acquisition.

> **Bottom line:** No single tool does everything. Acquisition privacy and transaction privacy are separate problems that require different trade-offs.

## At a Glance

| | Samourai Wallet | Wasabi Wallet | JoinMarket | Bisq | Azteco |
|---|---|---|---|---|---|
| **Category** | Mobile wallet + CoinJoin | Desktop wallet + CoinJoin | Decentralized CoinJoin marketplace | P2P exchange | Voucher system |
| **Primary use** | On-chain privacy (Android) | On-chain privacy (desktop) | Earn yield or pay for privacy | Buy/sell bitcoin no-KYC | Buy bitcoin no-KYC |
| **CoinJoin model** | Whirlpool (coordinator) | WabiSabi (coordinator) | Maker/taker (no coordinator) | N/A | N/A |
| **Platform** | Android only | Windows, macOS, Linux | Linux/server + Jam UI | Desktop (Java) | Web / retail |
| **KYC required** | No | No | No | No | Minimal (voucher only) |
| **Custody** | Self-custody | Self-custody | Self-custody | Self-custody (2-of-2 escrow) | Self-custody |
| **Network privacy** | Tor via Dojo | Tor by default | Tor optional | Tor by default | Standard HTTPS |
| **Fee model** | Pool fee + miner fees | Coordinator fee per round | Maker earns / taker pays | Trade fee + miner fees | ~5% voucher markup |
| **Status** | Delisted (April 2024); usable by existing installs | Active | Active | Active | Active |

## Where They Agree

All five tools share the same goal: **reduce the linkability of your bitcoin activity to your real-world identity.**

- **Self-custody:** None hold your keys. You control your funds at all times.
- **No identity verification:** No government ID, no bank account linking, no email required.
- **Open source:** All publish source code for audit (Samourai historically, Wasabi, JoinMarket, Bisq).
- **Bitcoin-only:** No altcoin distractions; focused on bitcoin privacy.

## Where They Differ

### CoinJoin: Coordinator vs Decentralized

| Dimension | Samourai (Whirlpool) | Wasabi (WabiSabi) | JoinMarket |
|---|---|---|---|
| **Coordination** | Central coordinator (historical Samourai servers; now community/self-hosted) | Central coordinator (zkSNACKs) | Decentralized — peers negotiate directly |
| **Anonymity set** | Forward-looking: all past and future peers in the same pool | Per-round: peers in that specific round | Per-transaction: peers in that specific transaction |
| **Denomination** | Fixed pool sizes (e.g., 0.01, 0.05, 0.5 BTC) | Variable amounts via WabiSabi credentials | Flexible — negotiated per transaction |
| **Continuous mixing** | Yes — remixes automatically in pool | No — user initiates each round | Yes — if running as maker |
| **Platform** | Android | Desktop | Server / CLI / Jam web UI |
| **Setup complexity** | Low | Low | Medium–High |
| **Economic model** | Pay to enter pool; free remixes | Pay per round | Earn as maker / pay as taker |

### Acquisition: P2P vs Voucher

| Dimension | Bisq | Azteco |
|---|---|---|
| **Mechanism** | Match with a peer; settle fiat via bank/cash/mail | Buy a voucher; redeem for bitcoin |
| **Counterparty risk** | Low — 2-of-2 multisig + bonded mediator | Low — voucher is prepaid; no chargeback |
| **Speed** | Minutes to days (fiat settlement) | Minutes (instant redemption) |
| **Amount flexibility** | Any amount (within account limits) | Fixed voucher denominations |
| **Geographic availability** | Global (fiat-dependent) | Limited to retail partner locations |
| **Privacy level** | High — no KYC, Tor-routed | Medium — no KYC, but purchase may be on camera/cash register |

## The CoinJoin Debate

CoinJoin tools differ in trust model and usability more than in cryptographic security. All break the common-input-ownership heuristic, but they make different trade-offs between convenience, decentralization, and cost.

### Coordinator Model (Samourai / Wasabi)
**Pros:**
- Larger anonymity sets per round
- Simpler UX — one button to mix
- Predictable fee structure

**Cons:**
- Coordinator is a single point of failure (availability, not custody)
- Coordinator knows IP addresses unless Tor is used perfectly
- Regulatory pressure can shut down coordinators (Samourai arrest, zkSNACKs geo-blocking)

### Decentralized Model (JoinMarket)
**Pros:**
- No central coordinator to shut down
- Makers earn yield — privacy pays for itself
- Flexible transaction sizes

**Cons:**
- Smaller anonymity sets per transaction
- Requires running a hot wallet continuously for maker yield
- Higher setup complexity; Jam UI helps but still needs a node

## Decision Matrix

| Situation | Best tool | Why |
|---|---|---|
| **Mobile-first; want simple CoinJoin** | Samourai (if already installed) | Android-native; Whirlpool remixes continuously |
| **Desktop-only; want largest anonymity set** | Wasabi | WabiSabi variable amounts; largest coordinator-driven pools |
| **Run a node; want to earn yield while mixing** | JoinMarket | Maker fees subsidize privacy; no coordinator dependency |
| **Buying bitcoin privately with fiat** | Bisq | No KYC; multisig escrow; many payment methods |
| **Quick small purchase with cash** | Azteco | Voucher model; no peer negotiation; ~5% markup |
| **Maximum privacy stack** | Bisq → JoinMarket → Cold storage | Acquire without KYC; mix decentralized; store offline |

## Layered Privacy in Practice

A complete privacy stack typically combines tools from both categories:

1. **Acquire:** Bisq (large amounts) or Azteco (small/quick)
2. **Mix:** Wasabi or JoinMarket (break the acquisition graph)
3. **Spend:** PayJoin (BIP-78) or Lightning (Bolt 12) to avoid re-linking
4. **Store:** Hardware wallet with labeled UTXOs (KYC vs non-KYC separated)

Related: [Privacy Stacks](/concepts/privacy-stacks) — full layering guide including network hygiene and device security.

## Cross-Links

- [Samourai Wallet](/entities/samourai-wallet) — Whirlpool, Stonewall, PayNyms
- [Wasabi Wallet](/entities/wasabi-wallet) — WabiSabi, Tor-by-default
- [JoinMarket](/entities/joinmarket) — Maker/taker marketplace, Jam UI
- [Bisq](/entities/bisq) — P2P exchange, multisig escrow
- [Azteco](/entities/azteco) — Voucher-based acquisition
- [Privacy Stacks](/concepts/privacy-stacks) — Layer 0–3 privacy guide
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Acquisition methods overview
- [PayJoin](/concepts/payjoin) — Collaborative transaction privacy
