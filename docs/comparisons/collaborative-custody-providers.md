---
title: Collaborative Custody Providers
description: "Side-by-side evaluation of Casa, Unchained, Nunchuk, and other collaborative custody providers covering multisig quorums, key management, recovery flows, and fees."
created: 2026-06-04
updated: 2026-06-04
type: comparison
tags: [custody, multisig, collaborative, inheritance]
sources:
  - entities/casa.md
  - entities/unchained-capital.md
  - entities/nunchuk.md
  - raw/what-is-multisig-meetup-7-2022-12-08.md
  - raw/bisq-to-bitcoin-retirement-2025-10-10.md
confidence: high
contested: false
---

# Collaborative Custody Providers

Comparison of three collaborative custody approaches. All use multisig so you retain sovereign control; none can unilaterally spend your funds.

## At a Glance

| | [Casa](https://casa.io) | [Unchained Capital](https://unchained.com) | [Nunchuk](https://nunchuk.io) |
|---|---|---|---|
| **Model** | Subscription + concierge | Custody + financial services | Open-source mobile + advisor network |
| **Multisig** | 2-of-3 or 3-of-5 | 2-of-3 only | Flexible M-of-N |
| **Platform** | Mobile app (iOS/Android) | Web + hardware wallets | Mobile (iOS/Android) |
| **Key control** | You hold majority | You hold 2 keys | You hold majority |
| **Recovery key** | Casa holds 1 | Unchained holds 1 | Advisor holds 1 (Byzantine) |
| **Bitcoin-backed loans** | No | Yes | No |
| **Retirement accounts** | No | Yes (Bitcoin IRA) | No |
| **Inheritance** | Yes (legal docs) | Yes | Yes (timelocked) |
| **Source code** | Closed | Closed | [Open source](https://github.com/nunchuk-io) |

## Casa

Subscription-based service built around proactive security and concierge support.

- **Vaults:** 2-of-3 (personal) or 3-of-5 (family)
- **Keys:** Mobile key + hardware wallet keys + one Casa recovery key
- **Monitoring:** Proactive alerts and key health checks
- **Inheritance:** Protocol with legal documentation support

[Casa](https://casa.io) | [Blog](https://casa.io/blog/)

## Unchained Capital

Bitcoin-native financial services company with custody as the foundation.

- **Structure:** 2-of-3 — you hold 2 keys, Unchained holds 1
- **Recovery:** Cosign with their key + your remaining key if one is lost
- **Products:** Bitcoin-backed loans, Bitcoin IRA
- **Education:** Open-source tools and [content](https://unchained.com/blog/)

Trade-off: Financial services require KYC; narrower multisig options.

[Unchained Capital](https://unchained.com)

## Nunchuk

Open-source mobile wallet with collaborative custody via the [Byzantine](https://nunchuk.io/byzantine) advisor network.

- **Model:** Flexible M-of-N multisig on mobile
- **Collaborative custody:** Multi-user wallets where clients retain full control and an advisor holds a backup key
- **Signing:** Air-gapped hardware wallet support (Coldcard, etc.)
- **Inheritance:** Timelocked estate planning built in
- **Open source:** [GitHub](https://github.com/nunchuk-io)

Trade-off: No loans or IRAs; advisor network is newer and invite-based.

[Nunchuk](https://nunchuk.io) | [Byzantine](https://nunchuk.io/byzantine)

## Decision Matrix

| If you want... | Choose |
|---|---|
| Guided mobile setup and concierge | Casa or Unchained |
| Family vault with 3-of-5 | Casa |
| Bitcoin-backed loans or retirement account | Unchained |
| Maximum key control (2 of 3 in your possession) | Unchained |
| Open-source wallet with advisor backup | Nunchuk |
| Air-gapped hardware signing | Nunchuk or Casa |
| Proactive security monitoring | Casa |
| Educational content + financial tools | Unchained |

## Common Concerns

**What if the company disappears?**
All three models are designed for this. You hold the majority of keys and can move funds without the company's involvement.

**What if I lose a key?**
- Casa / Unchained: Use their recovery key + your remaining keys.
- Nunchuk: Use advisor backup key + your remaining keys.

**Privacy**
All require some KYC for the service relationship. For maximum privacy, use self-hosted multisig with [Caravan](https://caravan.multisig.com) or [Specter Desktop](https://specter.solutions).

## See Also
- [Casa](/entities/casa) | [Unchained Capital](/entities/unchained-capital) | [Nunchuk](/entities/nunchuk)
- [Custody Models](/concepts/custody-models) — Self-custody vs collaborative custody
- [Multisig](/concepts/multisig) — M-of-N threshold signatures
- [Which Custody Model Fits My Threat Model?](/queries/which-custody-model-fits-my-threat-model) — Decision framework
