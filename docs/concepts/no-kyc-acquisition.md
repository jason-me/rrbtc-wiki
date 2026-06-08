---
title: No-KYC Acquisition Methods
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [privacy, bitcoin, kyc, acquisition, p2p, mining, vouchers]
sources: ['raw/why-privacy-matters-meetup-3-2022-08-11.md']
confidence: high
contested: false
---

# No-KYC Acquisition Methods

Acquiring bitcoin without identity verification preserves financial privacy, reduces third-party trust, and protects against data breaches. These methods range from low-effort (vouchers) to high-effort (mining), with varying privacy guarantees.

## Methods Compared

| Method | KYC Level | Effort | Cost/Fees | Best For |
|--------|-----------|--------|-----------|----------|
| Peer-to-peer | None | Low | Minimal | Small, recurring buys |
| Bitcoin ATMs | Minimal | Low | 8–20% | Instant cash conversion |
| Azteco Vouchers | Minimal | Low | ~5% | Gifting, onboarding |
| [Bisq](/entities/bisq) | None | Medium | Minimal | Larger buys, any currency |
| Home Mining | None | High | Electricity cost | Long-term, tech-savvy |
| Earn in Bitcoin | None | Variable | None | Freelancers, circular economy |

## Peer-to-Peer
- **Meetups** — Round Rock Bitcoiners and local groups often have sellers
- **Friends and family** — introduce them to self-custody wallets, trade in cash
- **Circular economy** — accept bitcoin for goods/services, spend bitcoin locally
- **BTCPay Server** — free, open-source payment processor for businesses

## Bitcoin ATMs
- Find machines via [CoinATMradar.com](https://coinatmradar.com)
- Use an **anonymous prepaid phone** for SMS verification (if required)
- Fees are high (8–20%) but the process is fast and requires no bank account
- Limits vary by operator; scan palm/ID at higher thresholds
- **Risk:** some ATMs log camera footage and associate it with wallet addresses

## Azteco Vouchers
- Purchase a voucher with cash or card at a participating location
- Redeem online to a Bitcoin address of your choice
- ~5% total markup (1.5% seller, 3.5% Azteco)
- No account required; ideal for onboarding newcomers

## Home Mining
- Buy hardware ([BitAxe](/entities/bitaxe), Antminer) and mine directly
- Electricity bill is the only "identity trail"
- Join [public-pool.io](/entities/public-pool) or use [Ocean.xyz](/entities/ocean-xyz) for non-KYC payouts
- Up-front capital and technical setup required

## Earn
- Freelance platforms (e.g., Stakwork, Microlancer) pay in Lightning sats
- Offer services locally and accept bitcoin via BTCPay Server or [Cashu](/entities/cashu)
- Content creation, consulting, handyman work — price in sats

## Hybrid Approach for Privacy
Most experienced bitcoiners use a **stack**:
1. Acquire non-KYC via P2P, Bisq, or mining
2. Separate KYC and non-KYC wallets (label UTXOs in Sparrow)
3. CoinJoin non-KYC UTXOs before spending
4. Use Lightning or Cashu for day-to-day payments

## Resources
- [Bisq](https://bisq.network)
- [CoinATMradar](https://coinatmradar.com)
- [Azteco](https://azte.co)
- [BTCPay Server](https://btcpayserver.org)
- [Sparrow Wallet](https://sparrowwallet.com) — UTXO labeling
- [Samourai Wallet](https://samouraiwallet.com) — CoinJoin, UTXO management
