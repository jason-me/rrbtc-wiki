---
title: BTCPayServer
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [payment-processor, self-hosted, lightning, open-source, merchant-tools]
sources: [raw/running-on-zero-fiat-for-business-2023-07-31.md, raw/bip-78-payjoin-protocol-pay-to-endpoint-p2ep-2023-07-31.md]
confidence: high
contested: false
---

# BTCPayServer

Self-hosted, open-source payment processor for Bitcoin. Accept on-chain and Lightning payments without relying on third-party custodians.

## Key Features
- No KYC, no middleman, no processing fees beyond Bitcoin network fees
- Supports both on-chain and Lightning Network settlements
- Hot wallet integration including Payjoin (BIP 78) support since 2022
- WooCommerce plugin available for WordPress e-commerce
- Direct-to-wallet settlement: you control the keys at all times

## Plugins and Integrations
| Plugin | Purpose |
|--------|---------|
| BTCPayServer for WooCommerce V2 | E-commerce checkout with Bitcoin |
| BTCQBO (third-party) | Auto-sync payments to QuickBooks Online |

## Trade-offs
- Requires running a node (home or cloud) and managing channels/liquidity for Lightning
- More setup than custodial alternatives like CashApp for Business
- Reward: full sovereignty and reduced counterparty risk

See also: [self-custody], [lightning-network], [payjoin]
