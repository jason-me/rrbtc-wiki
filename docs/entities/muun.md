---
title: Muun
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [lightning, wallet, mobile, self-custodial, submarine-swaps]
sources: [raw/running-robosats-2023-04-14.md]
confidence: high
contested: false
---

# Muun

Self-custodial Bitcoin wallet with a hybrid Lightning/on-chain model. Uses submarine swaps to enable Lightning payments without the user managing channels directly.

## Key Features
- Excellent UX for HODL invoices (good for sellers on RoboSats)
- Hybrid model: Lightning invoices are settled via submarine swaps to on-chain
- Non-custodial with social recovery via email

## RoboSats Compatibility
- **Buyer incompatible**: vulnerable to fee siphoning attacks on RoboSats
- **Seller compatible**: excellent for receiving HODL invoice payouts
- Use only if you are selling bitcoin, not buying

## Security Note
The submarine swap architecture makes Muun unsuitable for certain Lightning-native applications that depend on specific HTLC behavior. RoboSats specifically flags Muun as incompatible for buyers due to fee manipulation risks.

Website: [Muun](https://muun.com/)

See also: [breez], [phoenix], [robosats], [hodl-invoice]
