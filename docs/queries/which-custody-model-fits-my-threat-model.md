---
title: Which Custody Model Fits My Threat Model?
description: "Decision framework for choosing between single-sig, multisig, collaborative custody, and custodial solutions mapped to specific threat models and capability levels."
created: 2026-06-03
updated: 2026-06-03
type: query
tags: [custody, multisig, hardware-wallet, inheritance, security]
sources:
  - raw/what-is-multisig-meetup-7-2022-12-08.md
  - raw/bisq-to-bitcoin-retirement-2025-10-10.md
  - concepts/custody-models.md
  - concepts/multisig.md
confidence: high
contested: false
---

# Which Custody Model Fits My Threat Model?

There is no universal "best" way to hold bitcoin. The right custody model depends on your technical ability, value at stake, threat model, and need for recovery or inheritance. This page walks through the decision process.

> **Bottom line:** Start simple. Upgrade custody as your balance and competence grow. A hardware wallet you use correctly beats a multisig you set up incorrectly.

## Quick Decision Flow

```
How much bitcoin are you securing?
|
├── < $1,000 → Mobile hot wallet (Blockstream Green, Blue Wallet)
│   Acceptable risk for small amounts; focus on learning
|
├── $1,000 – $50,000 → Single-sig hardware wallet
│   ColdCard, Trezor, or Ledger + steel seed backup
|
├── $50,000 – $250,000 → Multisig (self-hosted or collaborative)
│   2-of-3 with 2 hardware wallets + seed backup in separate location
|
└── > $250,000 → Collaborative custody or 3-of-5 multisig
    Casa, Unchained Capital, or Specter + multiple hardware wallets
```

## What Is Your Primary Threat?

| Threat | Best Model | Why |
|---|---|---|
| **Theft / burglary** | Multisig (2-of-3) | Attacker needs 2 keys in different locations |
| **Loss of seed** | Collaborative custody | Provider holds recovery key; you can reconstruct with their help |
| **Self-error / death** | Collaborative custody + inheritance plan | Provider + written instructions for heirs |
| **Government seizure** | Self-hosted multisig | No third party to subpoena or compel |
| **Exchange failure** | Self-custody any model | Not your keys, not your coins |
| **Beginner mistakes** | Single-sig hardware | Lower complexity = fewer ways to fail |

## Self-Custody vs Collaborative Custody

### Self-Custody (Sovereign)
You hold all keys. No one can help you recover, but no one can freeze or seize.

**Best for:** Privacy maximizers, technically proficient users, those in jurisdictions with custody risk.

**Tools:**
- Single-sig: ColdCard, Trezor, Ledger + Sparrow/Electrum
- Multisig: [Specter Desktop](/entities/specter-desktop) + 2–3 hardware wallets

**Trade-offs:**
- Full responsibility for backups and recovery
- No inheritance safety net without additional planning
- Multisig requires documenting derivation paths and script types

### Collaborative Custody
You hold the majority of keys; a service holds one recovery key.

**Best for:** Users who want recovery guarantees without trusting a single custodian.

**Tools:**
- [Casa](/entities/casa) — Mobile-guided 2-of-3 or 3-of-5, subscription-based
- [Unchained Capital](/entities/unchained-capital) — 2-of-3 with financial services (loans, IRAs)

**Trade-offs:**
- Subscription fees
- Less privacy than fully self-hosted
- Requires trust in provider's key recovery process (but not custody)

## Inheritance Planning

If you die without a plan, your bitcoin dies with you.

**Minimum viable inheritance plan:**
1. Write down key locations and recovery instructions
2. Store a copy with a trusted attorney or family member (not the seed itself)
3. Use a collaborative custody provider as a recovery key
4. Revisit the plan yearly; test recovery on testnet

**Advanced:**
- [Nunchuk](/entities/nunchuk) — Built-in inheritance workflows with time-locked releases
- [Casa](/entities/casa) — Legal documentation support for inheritance protocols

## Common Mistakes

| Mistake | Why It Hurts | Fix |
|---|---|---|
| 2-of-2 multisig | Lose one key = funds unrecoverable | Use 2-of-3 instead |
| Not backing up public keys | Lose one seed + one public key = no recovery in 2-of-3 | Export and backup all XPUBs |
| Storing seeds in cloud storage | Cloud accounts are hackable and subpoena-able | Steel backup in physical safe |
| Never testing recovery | You discover a problem when it is too late | Test on testnet yearly |
| Using one manufacturer for all keys | Supply-chain or firmware bug affects all keys | Diversify hardware wallet brands |

## Decision Matrix

| Profile | Recommended Setup | Estimated Cost |
|---|---|---|
| **Newcomer, < $5k** | Blockstream Green (2FA multisig) or ColdCard single-sig | $0–$150 |
| **HODLer, $5k–$50k** | ColdCard + Sparrow, steel backup, 2 locations | $150–$300 |
| **Family, $50k–$250k** | 2-of-3: ColdCard + Trezor + Casa recovery key | $500–$1,000/yr |
| **High net worth, > $250k** | 3-of-5: 3 hardware wallets + Unchained + attorney-held key | $1,000–$2,000/yr |
| **Privacy maximalist** | Self-hosted Specter 2-of-3, no third parties | $300–$600 |

## Cross-Links

- [Custody Models](/concepts/custody-models) — Full spectrum from self-custody to custodial
- [Multisig](/concepts/multisig) — Technical details of M-of-N threshold signatures
- [Casa](/entities/casa) — Managed collaborative custody with inheritance support
- [Unchained Capital](/entities/unchained-capital) — Collaborative custody with loans and IRAs
- [Specter Desktop](/entities/specter-desktop) — DIY multisig coordinator
- [Nunchuk](/entities/nunchuk) — Mobile multisig with inheritance workflows
- [Caravan](/entities/caravan) — Open-source web-based multisig coordinator
- [Bitcoin Address Types](/concepts/bitcoin-address-types) — P2SH, Segwit, Taproot multisig support
