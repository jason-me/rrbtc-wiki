---
title: HWI (Hardware Wallet Interface)
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [development, hardware-wallet, bitcoin-core, signing, cli]
sources: [raw/popular-bitcoin-node-projects-2023-02-23.md]
confidence: high
contested: false
---

# HWI (Hardware Wallet Interface)

Command-line tool and Python library for connecting hardware wallets to [Bitcoin Core](https://bitcoincore.org/). Enables direct signing with devices like Trezor, Ledger, and Coldcard without trusting intermediary software.

## How It Works
- Provides a bridge between Bitcoin Core's wallet and hardware signing devices
- Uses the hardware wallet's secure element to sign transactions
- Core handles UTXO management, balance tracking, and broadcasting
- Device never exposes private keys

## Trade-offs
| Advantage | Limitation |
|-----------|------------|
| Multi-device support | CLI setup; not beginner-friendly |
| Broad hardware compatibility | Requires running Bitcoin Core |
| No additional node software | More complex than all-in-one solutions |
| Suitable for advanced/custom integrations | Steeper learning curve |

## Alternatives for Connecting Wallets to Nodes
| Method | Difficulty | Best For |
|--------|------------|----------|
| HWI + Bitcoin Core | High | Advanced users, custom software |
| Electrum Server | Medium | Remote access, multiple wallets |
| Sparrow Wallet | Low | Unified, user-friendly setup |

Maintained as part of the Bitcoin Core project.

See also: [bitcoin-core], [sparrow-wallet], [electrum], [coldcard], [trezor], [ledger]
