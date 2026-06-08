---
title: Payjoin Development Kit (PDK)
created: 2026-06-04
updated: 2026-06-04
type: entity
tags: [privacy, development-kit, payjoin, bip-78, open-source]
sources: [raw/bip-78-payjoin-protocol-pay-to-endpoint-p2ep-2023-07-31.md]
confidence: high
contested: false
---

# Payjoin Development Kit (PDK)

Open-source SDK for building Payjoin (BIP 78) functionality into Bitcoin wallets and applications. Maintained by Dan Gould.

## Purpose
Payjoin breaks the "common input ownership heuristic" by having both sender and receiver contribute inputs to a transaction. This prevents chain analysis from assuming all inputs in a transaction belong to the same person. PDK makes this privacy technique accessible to developers.

## Relation to BIP 78
- BIP 78: The protocol specification for Payjoin (Pay-to-Endpoint) introduced by Nicolas Dorier in 2019
- PDK: A developer toolkit implementing the protocol, enabling wallets to add Payjoin without building from scratch

## Key Properties
| Property | Detail |
|----------|--------|
| Protocol | BIP 78 (Payjoin / P2EP) |
| Maintainer | Dan Gould |
| License | Open source |
| Use case | Privacy-enhanced Bitcoin transactions |
| Adoption | BTCPayServer hot wallets (2022), independent wallets via SDK |

See also: [btcpay-server], [samourai-wallet] (Stowaway), [bip-78]
