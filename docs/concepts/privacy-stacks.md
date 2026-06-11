---
title: Privacy Stacks
description: "Modular compositions of tools for on-chain, Lightning, and metadata privacy — including CoinJoin, Silent Payments, Tor, and Nostr/SSH isolation."
created: 2026-06-02
updated: 2026-06-02
type: concept
tags: [privacy, bitcoin, coinjoin, tor, vpn, opsec, utxo-management]
sources: ['raw/why-privacy-matters-meetup-3-2022-08-11.md', 'raw/mobile-privacy-meetup-5-2022-10-13.md']
confidence: high
contested: false
---

# Privacy Stacks

Privacy in Bitcoin is not a single tool — it is a layered practice combining network hygiene, transaction obfuscation, and operational security (OPSEC). The goal is to selectively reveal data instead of broadcasting it by default.

## Why Privacy Matters for Bitcoiners
- **Identity fraud** cost Americans ~$56 billion in 2020 (49 million consumers)
- **Government surveillance programs** (NSA xkeyscore, PRISM, Section 702) remain active
- **Financial censorship** (Operation Chokepoint, Canadian trucker freeze) targets on-chain activity
- **Carrier data-mining** — telecoms sell location data without meaningful consent
- Metadata alone is often enough to deanonymize: "We kill people based on metadata." — Fmr. NSA Chief Michael Hayden

## Layer 0: Network Hygiene
Before touching Bitcoin, secure the environment:

| Tool | Purpose |
|------|---------|
| Mullvad VPN | No-logs, anonymous sign-up (cash or BTC), wireguard support |
| Tor Browser | Onion routing for web traffic; access .onion services |
| GrapheneOS / CalyxOS | Hardened Android with no Google telemetry |
| Burner SIMs | Cash pay-as-you-go or Silent Link (anonymous eSIM) |

## Layer 1: Acquisition
How you obtain bitcoin often determines how anonymous it is.

| Method | KYC Level | Effort | Notes |
|--------|-----------|--------|-------|
| [Bisq](/entities/bisq) | None | Medium | Decentralized P2P exchange with multisig escrow |
| Peer-to-peer | None | Low | Meetups, friends, circular economy |
| Bitcoin ATMs | Minimal | Low | Use anonymous prepaid phone; fees 8–20% |
| Azteco Vouchers | Minimal | Low | ~5% markup; cash or card purchase |
| Home Mining | None | High | Pay via electricity bill; up-front hardware cost |

Related: [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition)

## Layer 2: Transaction Privacy
Once you hold bitcoin, protect the graph:

### CoinJoin
Aggregate transactions with others to break deterministic links.
- **Whirlpool** — Samourai; continuous remixing pool
- **JoinMarket** — maker/taker model; Jam UI for usability
- **Wasabi** — coordinator-based; WabiSabi credential system

### UTXO Management
- Never reuse addresses
- Use **Stonewall** (Samourai) and **StonewallX2** for non-equal output transactions
- Separate "clean" and "hot" wallets
- Label UTXOs by source (KYC vs non-KYC) in wallets like Sparrow

### Lightning Privacy
- **Bolt 12 Offers** — reusable, no invoice pre-image leakage
- **Payjoin (BIP-78)** — sender and receiver both contribute inputs, breaking common-input-ownership heuristic
- **Stowaway / PayNyms** — BIP-47 reusable payment codes
- Route through private channels or Tor-only nodes

## Layer 3: Device Hygiene
- Turn off location sharing, review app permissions, delete unused apps
- Use encrypted messaging: Signal, SimpleX, Matrix/Element
- Separate devices for "clean" bitcoin and daily browsing

## Wallet Recommendations
### Mobile (Hot)
- Samourai — on-chain privacy focused; Whirlpool + Stonewall
- Blockstream Green — multisig, HWI
- Blue Wallet — Lightning + own node
- Muun Wallet — on-chain + Lightning, simple UX

### Hardware (Cold)
- Trezor — open-source
- Ledger — closed-source, Secure Element
- ColdCard — verifiable-source, air-gapped, PSBT-native
- Seed Signer — fully open-source, DIY

## Resources
- [Mullvad VPN](https://mullvad.net)
- [Tor Project](https://torproject.org)
- [GrapheneOS](https://grapheneos.org)
- [Samourai Wallet](https://samouraiwallet.com)
- [Sparrow Wallet](https://sparrowwallet.com)
- [Citadel Dispatch: Seth For Privacy on Mobile Phone Privacy](https://citadeldispatch.com)
