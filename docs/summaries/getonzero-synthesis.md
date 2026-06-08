---
title: "GetOnZero: Living on the Bitcoin Standard"
created: 2026-06-04
updated: 2026-06-04
type: summary
tags: [getonzero, bitcoin-only, personal-finance, circular-economy, sovereignty, taxes, kyc, privacy]
sources:
  - raw/zero-dollar-manifesto-sahil-2024-06-22.md
  - raw/bisq-to-bitcoin-retirement-2025-10-10.md
  - raw/mining-like-the-big-players-2026-05-14.md
  - entities/bitrefill.md
  - entities/btcmap.md
  - entities/fold.md
  - entities/strike.md
  - entities/bisq.md
  - entities/cashu.md
---

# GetOnZero: Living on the Bitcoin Standard

> A synthesis of Round Rock Bitcoiners meetups on the philosophy, acquisition, deployment, and spending of Bitcoin as primary money.

## What GetOnZero Means

GetOnZero is the personal finance philosophy of minimizing or eliminating fiat currency holdings in favor of Bitcoin. It is not a purity test, nor does it require extreme austerity. The goal is to upgrade your money: replace the depreciating asset (fiat) with the appreciating one (Bitcoin), then spend from that position of strength.

As Sahil Chaturvedi framed it at Meetup #24: dollars are a legacy payment rail to move bitcoin. The mindset shift is from "I own Bitcoin as an investment" to "I use Bitcoin as money."

## The Fundamental Rule: Spend Less Than You Earn

Before acquisition methods matter, the arithmetic must work. GetOnZero is impossible if outflows exceed inflows. The discipline is simple:

1. Track every dollar and sat that enters and leaves
2. Cut discretionary spending that does not serve your values
3. Save the surplus in the hardest money available
4. Let compound appreciation do what fiat inflation destroys

Bitcoin rewards patience. Fiat punishes it. The spread between those two curves is where wealth is built.

## Stage 1: Acquire

### KYC Rails (Convenient, Tracked)

These are the on-ramps most people start with. They require identity verification, link to bank accounts, and create a paper trail. Use them for the portion of your stack you are comfortable attributing to your name.

| Platform | Type | Notes |
|----------|------|-------|
| **Cash App** | Mobile app | Simple BTC buys, Lightning sends, mainstream adoption |
| **Strike** | Payment app | Bank-linked purchases, global Lightning transfers, merchant tools |
| **River** | Broker | Bitcoin-only, auto-buy DCA, cold storage custody option |
| **Swan** | Broker | Automated DCA, education-focused, withdrawal to self-custody |
| **Fold** | Rewards card | Sats-back on fiat spending, gamified, KYC required |
| **Relai** | European app | Simple DCA, non-custodial option, EU-focused |
| **Bull Bitcoin** | Canadian broker | Bitcoin-only, bill pay feature, non-custodial withdrawal |

Best practice: buy on these platforms, then withdraw to self-custody immediately. Do not leave bitcoin on an exchange or custodial app longer than necessary.

### Non-KYC Rails (Private, Sovereign)

For the portion of your stack that is nobody's business:

- **[Bisq](/entities/bisq)** - Peer-to-peer exchange over Tor, non-custodial, no identity required
- **Bisq 2 (Easy)** - Reputation-based trades without multisig deposits, ideal for smaller amounts
- **RoboSats** - Lightning-native P2P exchange, no accounts, no KYC
- **HodlHodl** - P2P with multisig escrow, no identity verification
- **Azteco** - Buy vouchers with cash, redeem for bitcoin
- **Bitcoin ATMs** - Cash in, bitcoin out (use non-KYC machines with reasonable fees)
- **P2P in person** - Local meetups, friends, family; cash or goods for sats

Verification: GPG-sign all binaries before installation. Verify PGP keys of counterparties on P2P platforms.

### The Hybrid Approach

Most Bitcoiners use both. KYC rails for regular DCA and convenience. Non-KYC rails for larger purchases, privacy-sensitive amounts, or geographic regions with restrictive banking. There is no shame in using KYC to start. The goal is to trend toward sovereignty over time.

## Stage 2: Hold (Self-Custody)

Once acquired, the priority shifts to preservation. The Bisq-to-Retirement deck outlined the custody ladder:

- Start simple with a bitcoin-only hardware wallet
- Secure backups: steel or paper copies, no cloud storage
- Multi-sig for larger amounts: [Unchained Capital](/entities/unchained-capital) (2-of-3 collaborative), [Specter Desktop](/entities/specter-desktop) (DIY), [Nunchuk](/entities/nunchuk) (mobile shared vaults)
- Inheritance plan: key shares or trusted provider setup
- Revisit yearly, patch firmware

## Stage 3: Deploy (Put Sats to Work)

Hodling is valid, but deploying capital into productive mining activity generates yield while supporting network decentralization. Meetup #30 covered the full stack:

- **[Braiins Hashpower](/entities/braiins-hashpower)** - Rent PH/s-scale hashrate for ~10,000 sats (~$9) minimum
- **[DATUM](/entities/datum) + [Ocean.xyz](/entities/ocean-xyz)** - Control your own block templates via your node
- **[Stratum V2](/entities/stratum-v2) + dmnd.work** - Template negotiation with pool approval
- **[HashGuard](/entities/hashguard) / [Braiins Hashrate Autopilot](/entities/hashrate-autopilot)** - Automation for bid management and stall recovery

The stack: rented hash → your node (Core or Knots) → template control → [C-Lightning (Core-Lightning)](/entities/c-lightning) Bolt 12 payouts → on-chain fallback.

## Stage 4: Spend (Circular Economy)

Living on Bitcoin requires finding places that accept it. Our wiki catalogs the tools:

- **[Bitrefill](/entities/bitrefill)** - Gift cards for everyday spending (groceries, gas, streaming)
- **[BTCMap](/entities/btcmap)** - Map of local merchants accepting Bitcoin
- **[Fold](/entities/fold)** - Bitcoin rewards on fiat spending (transition tool)
- **[Strike](/entities/strike)** - Payment rails for sending and receiving
- **[LNbits](/entities/lnbits)** - Self-hosted Lightning wallet for merchant acceptance
- **[Cashu](/entities/cashu)** - Chaumian ecash for privacy-preserving small payments

The goal is not to avoid spending, but to spend from a position where your money appreciates rather than depreciates.

### KYC vs Non-KYC Spending

| Approach | Method | Privacy | Convenience |
|----------|--------|---------|-------------|
| KYC spend | Fold card, Strike debit, Cash App card | Low (linked to identity) | High (works everywhere) |
| Hybrid spend | Bitrefill gift cards bought with KYC bitcoin | Medium (merchant sees gift card, not you) | High (works at major retailers) |
| Non-KYC spend | Cashu ecash, Lightning via non-KYC node, P2P | High | Medium (growing acceptance) |
| Circular spend | BTCMap merchants, Bitcoin-native vendors | High | Low (limited but expanding) |

Practical workflow: Use KYC cards for unavoidable fiat rails (rent, utilities, gas stations without BTC). Use Bitrefill for everything that accepts gift cards. Use Lightning or Cashu for peer payments and privacy-sensitive purchases. Use BTCMap for local circular economy support.

## Taxes: Prepare, Pay, and Preserve Your Advantage

Bitcoin is taxable in most jurisdictions. Ignoring this does not make it go away; it makes it worse. The goal is to comply without surrendering the advantage of holding hard money.

### What Is Taxable

- **Selling bitcoin for fiat** - Capital gains or losses
- **Spending bitcoin on goods/services** - Treated as sale at fair market value
- **Mining rewards** - Ordinary income at time of receipt
- **Receiving bitcoin as payment** - Income at fair market value
- **Swapping bitcoin for altcoins** - Taxable event (and a bad idea)

### What Is Not Taxable

- **Buying bitcoin with fiat** - No tax, just a purchase
- **Moving bitcoin between your own wallets** - Not a sale
- **Gifting bitcoin** - Generally not taxable for the giver (check local limits)
- **Donating bitcoin to qualified charities** - Often deductible at fair market value

### Record Keeping

The IRS and most tax agencies require detailed records. Do this from day one:

1. **Date and time** of every acquisition, sale, spend, and mining reward
2. **Fair market value in fiat** at the time of each event
3. **Cost basis** - what you paid for the bitcoin you are spending or selling
4. **Transaction IDs** - blockchain proof of every movement
5. **Purpose** - was it a sale, a spend, a gift, income?

Tools that help:
- **CoinTracker** - Portfolio tracking with tax reporting
- **Koinly** - Multi-exchange import, capital gains reports
- **Bitcoin.Tax** - Bitcoin-specific tracking
- **Custom spreadsheet** - For the sovereign: export from your wallet, track manually

### Tax Strategy

1. **HODL over one year** - Long-term capital gains rates are lower than short-term in most jurisdictions
2. **Tax-loss harvesting** - Sell underwater positions to offset gains (watch wash-sale rules)
3. **Spend appreciated coins last** - Preserve low-basis sats; spend high-basis sats first
4. **Donate appreciated bitcoin** - Avoid capital gains, get full fair-market deduction
5. **Mining as business** - If substantial, structure as business for expense deductions (hardware, electricity, internet)
6. **Pay quarterly estimates** - If mining or trading generates income, pay as you go to avoid penalties

### The Mindset

Paying taxes on bitcoin gains feels painful because the numbers are large. But remember: you are paying tax on appreciation that fiat could never deliver. A 20% tax on 500% gains still leaves you with 400% more purchasing power than you started with. Fiat savers pay a hidden tax every year via inflation and get no deduction for their losses.

The goal is not to evade taxes. It is to optimize within the law while preserving the core advantage: your savings are denominated in an asset that cannot be debased.

## The Mindset Shift

| Fiat Mindset | Bitcoin Mindset |
|--------------|-----------------|
| Save in dollars | Save in sats |
| Spend and replace | Spend and earn |
| Volatility is risk | Volatility is opportunity |
| Bitcoin is an investment | Bitcoin is money |
| DCA into stocks | DCA into bitcoin |
| Inflation is normal | Inflation is theft |
| Debt is a tool | Debt is a trap |

Sahil's closing line from Meetup #24 captures it: "When you upgrade your money, spending bitcoin goes from being ideological to logical."

## Practical Transition Plan

### Month 1-3: Foundation
1. Open one KYC exchange account (Strike, River, or Swan)
2. Set up auto-buy DCA for a fixed amount you can afford to lose
3. Buy a hardware wallet and practice sending a small amount
4. Start tracking every transaction in a spreadsheet or app

### Month 4-6: Acceleration
1. Increase DCA amount as you cut discretionary spending
2. Try one non-KYC purchase (Bisq, Azteco, or P2P)
3. Set up Bitrefill and buy one gift card with bitcoin
4. Research local BTCMap merchants and visit one

### Month 7-12: Optimization
1. Move majority of stack to self-custody
2. Set up multi-sig for long-term savings
3. Explore mining or Lightning routing for yield
4. File taxes with proper bitcoin reporting
5. Build 3-6 month fiat buffer, then convert surplus to sats

### Year 2+: Sovereignty
1. Minimize KYC exposure where practical
2. Earn income in bitcoin where possible
3. Spend primarily via Lightning, gift cards, or circular economy
4. Teach others the same path

## Risks and Realities

- **Volatility:** Bitcoin can drop 50% in a month. A fiat buffer prevents forced selling at lows.
- **Acceptance:** Not every merchant takes Bitcoin yet. Gift cards and Lightning bridges solve most daily needs.
- **Tax complexity:** Every spend is a taxable event in most jurisdictions. Track everything.
- **Regulatory uncertainty:** The rules change. Stay informed, stay compliant, stay sovereign.
- **Security:** Self-custody means you are the bank. Lose your keys, lose your sats. No customer service.

## Related Wiki Pages

- [Zero Dollar Manifesto Sahil 2024 06 22](/raw/zero-dollar-manifesto-sahil-2024-06-22) - Sahil's original presentation
- [Bisq To Bitcoin Retirement 2025 10 10](/raw/bisq-to-bitcoin-retirement-2025-10-10) - Acquisition and custody
- [Mining Like The Big Players 2026 05 14](/raw/mining-like-the-big-players-2026-05-14) - Capital deployment via mining
- [Bisq](/entities/bisq) - Peer-to-peer exchange
- [Bitrefill](/entities/bitrefill) - Gift card spending
- [BTCMap](/entities/btcmap) - Merchant discovery
- [Strike](/entities/strike) - Payment rails
- [Fold](/entities/fold) - Rewards on spending
- [Cashu](/entities/cashu) - Privacy-preserving ecash
- [Braiins Hashpower](/entities/braiins-hashpower) - Hashrate marketplace
- [DATUM](/entities/datum) - Template control protocol
- [Ocean.xyz](/entities/ocean-xyz) - Mining pool
- [HashGuard](/entities/hashguard) - DIY automation
- [Braiins Hashrate Autopilot](/entities/hashrate-autopilot) - Official automation
