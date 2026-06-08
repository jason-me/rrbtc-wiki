---
title: Multisig
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [custody, multisig, hardware-wallet]
sources: [raw/what-is-multisig-meetup-7-2022-12-08.md, raw/bisq-to-bitcoin-retirement-2025-10-10.md]
confidence: high
---

# Multisig

Multisignature (multisig) scripts set a condition where *N* public keys are recorded and at least *M* must provide signatures to unlock funds. This is expressed as an *M-of-N* threshold (e.g., 2-of-3).

## Benefits

- **Key Distribution** — An attacker must compromise multiple keys in different physical locations
- **Removes Single Point of Failure** — Losing one key does not mean losing funds (in M-of-N where M < N)
- **Diversify Risk** — Use hardware wallets from multiple manufacturers
- **Escrow Transactions** — A third party can adjudicate disputes without taking custody
- **2FA-like Security** — Keys on different devices (note: 2-of-2 is risky because losing one key makes funds unrecoverable)

## Common Configurations

| Setup | Use Case | Risk Level |
|-------|----------|------------|
| 2-of-2 | Two-party escrow, couple's savings | High — total loss if one key lost |
| 2-of-3 | Personal vault, collaborative custody | Moderate — tolerate one key loss |
| 3-of-5 | Enterprise, inheritance planning | Lower — tolerate two key losses |

## Pitfalls

- Advanced setup increases possibility of error
- More seeds to backup, more devices to secure
- **Backup of ALL public keys is required** — loss of one seed plus one public key can prevent recovery even in 2-of-3
- Must document script type and derivation paths
- Always use testnet first; test recovery multiple times before mainnet

## Tools

- [Specter Desktop](/entities/specter-desktop) — DIY multisig coordinator
- [Casa](/entities/casa) — Managed collaborative custody
- [Unchained Capital](/entities/unchained-capital) — Collaborative custody with key recovery services
- Nunchuk — Mobile shared vaults
- Caravan — Open-source coordinator

## Related

- [Custody Models](/concepts/custody-models) — Self-custody vs collaborative custody
- [Bitcoin Address Types](/concepts/bitcoin-address-types) — P2SH, Segwit, and Taproot multisig support
- [Bisq](/entities/bisq) — Bisq 1 uses 2-of-2 multisig escrow for trades

## Resources

- [Bitcoiner.Guide Multisig](https://bitcoiner.guide/multisig/)
- [Orange Surf Multisig Guide](https://orangesurf.io/)
- [Bitcoin Wiki — Multisignature](https://en.bitcoin.it/wiki/Multisignature)
