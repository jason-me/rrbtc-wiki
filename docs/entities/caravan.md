---
title: Caravan
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [custody, multisig, tools]
sources: [raw/bisq-to-bitcoin-retirement-2025-10-10.md]
confidence: high
---

# Caravan

Open-source multisig coordinator by Unchained Capital. Web-based tool for building and managing multisig transactions without installing software.

## Features

- **Web-based coordinator** — No installation required
- **Multisig vault creation** — Build M-of-N setups with various hardware wallets
- **PSBT handling** — Create, sign, and broadcast Partially Signed Bitcoin Transactions
- **Hardware wallet support** — Coldcard, Trezor, Ledger, Keystone, and more
- **Address verification** — Verify receiving addresses on hardware devices

## Use Cases

- DIY multisig without running a full node
- Quick vault setup for testing
- Collaborative signing across geographically distributed keys
- Backup coordinator if primary software fails

## Trade-offs

- Web-based = requires trust in the hosted instance (or self-host)
- No built-in blockchain data; requires connection to a block explorer or node
- Less feature-rich than Specter Desktop or Nunchuk
- Best used as a backup or lightweight coordinator

## Related

- [Multisig](/concepts/multisig) — Multisig technical details
- [Unchained Capital](/entities/unchained-capital) — Parent company offering collaborative custody
- [Specter Desktop](/entities/specter-desktop) — Full-featured desktop coordinator
- [Nunchuk](/entities/nunchuk) — Mobile multisig alternative

## Resources

- [Caravan](https://caravan.unchained.com/)
- [Caravan GitHub](https://github.com/unchained-capital/caravan)
