---
title: What Privacy Stack Should I Use for Mobile?
description: "Matched privacy stack recommendations for iOS and Android based on threat model — from casual user to high-risk scenarios, covering wallets, networking, and communication."
created: 2026-06-03
updated: 2026-06-03
type: query
tags: [privacy, mobile, android, coinjoin, kyc, opsec, tools]
sources:
  - raw/mobile-privacy-meetup-5-2022-10-13.md
  - raw/why-privacy-matters-meetup-3-2022-08-11.md
  - concepts/privacy-stacks.md
  - entities/samourai-wallet.md
  - entities/azteco.md
confidence: high
contested: false
---

# What Privacy Stack Should I Use for Mobile?

Mobile devices are the weakest link in most bitcoiners' privacy stacks. They broadcast location, run closed-source basebands, and constantly phone home to Apple or Google. This page maps a practical mobile privacy stack from OS to wallet.

> **Bottom line:** If you cannot switch OS, you can still harden Android/iOS significantly. If you can switch OS, GrapheneOS on a Pixel is the current gold standard for mobile bitcoin privacy.

## Quick Decision Flow

```
Are you willing to buy a dedicated device for bitcoin?
|
├── Yes → GrapheneOS Pixel + Mullvad VPN + Samourai/Blockstream Green
│   Maximum isolation; no Google telemetry; sandboxed apps if needed
|
└── No → Harden your existing phone
        ├── Android → Disable Google apps, use Shelter work profile,
        │             Mullvad VPN, Signal, Samourai (if installed)
        └── iOS → Limited hardening; accept higher metadata leakage;
                    use Signal, Blockstream Green, avoid iCloud backup of wallet
```

## Layer 0: Operating System

The OS is the foundation. Everything above it inherits its trust model.

| OS | Privacy Level | Bitcoin Wallet Support | Notes |
|---|---|---|---|
| **GrapheneOS** | Highest | Full Android compatibility | No Google by default; sandboxed Play Services optional; verified boot |
| **CalyxOS** | High | Full Android compatibility | microG for app compatibility; pre-installed privacy tools |
| **Stock Android** | Low | Full | Constant Google connectivity checks; location history; app telemetry |
| **iOS** | Low–Medium | Limited by App Store | Closed source; iCloud backups leak wallet metadata; Lockdown Mode helps |

**Recommendation:** A used Pixel 3a or newer running GrapheneOS costs ~$100–$300 and removes the largest surveillance surface on your stack.

## Layer 1: Network Hygiene

Mobile networks are uniquely hostile: IMEI tracking, cell tower triangulation, carrier data sales.

| Tool | Purpose | Cost |
|---|---|---|
| **Mullvad VPN** | Hide traffic from carrier; anonymous signup (cash/BTC) | ~$5/mo |
| **Tor Browser / Orbot** | Onion-routing for wallet traffic and web | Free |
| **Burner SIM** | Cash pay-as-you-go; no identity linked to IMEI | ~$10–$30 |
| **Silent Link** | Anonymous eSIM; no ID required | Varies |

**Critical:** Even with a VPN, your carrier knows your IMEI and approximate location via cell towers. A burner SIM or Silent Link eSIM breaks that link.

## Layer 2: Bitcoin Wallet

Mobile wallets trade security for convenience. Use them for spending money, not long-term savings.

| Wallet | Privacy Features | Platform | Best For |
|---|---|---|---|
| **Samourai** | Whirlpool, Stonewall, PayNyms, Dojo | Android | On-chain privacy; existing installs only (delisted 2024) |
| **Blockstream Green** | 2FA multisig, Tor, own node | Android, iOS | Security-first hot wallet |
| **Blue Wallet** | Lightning + own node, Tor | Android, iOS | Lightning spending |
| **Muun** | Simple UX, submarine swaps | Android, iOS | Beginners; on-chain + Lightning |
| **Zeus** | Self-hosted Lightning node UI | Android, iOS | Power users with own node |

**Trade-offs:**
- Samourai has the strongest on-chain privacy but is Android-only and delisted
- iOS users lack CoinJoin wallets; use Blockstream Green or Muun and accept weaker transaction privacy
- Never back up wallet seeds to iCloud or Google Drive

## Layer 3: Acquisition on Mobile

Buying bitcoin from a mobile device is inherently higher risk than from a desktop or node.

| Method | Mobile Viability | Privacy | Notes |
|---|---|---|---|
| **Azteco voucher** | Excellent | Medium | Buy voucher in person or via web; redeem on mobile wallet |
| **Bisq** | Poor | High | Desktop-only; do not run Java apps on mobile |
| **Peer-to-peer** | Good | High | Meetups, friends, Telegram/Signal groups; cash or Strike |
| **Bitcoin ATM** | Good | Medium | Use burner phone; high fees (8–20%) |

**Recommendation:** Use Azteco for small amounts on mobile. For larger amounts, acquire on desktop (Bisq) and transfer to mobile wallet over Lightning or PayJoin.

## Layer 4: Communication

Your messaging app leaks metadata: who you talk to, when, how often.

| App | Metadata Protection | Bitcoin Integration | Notes |
|---|---|---|---|
| **Signal** | Sealed sender, no logs | None | Gold standard for private messaging |
| **SimpleX** | No user IDs, no central servers | None | Maximum metadata resistance |
| **Telegram** | Secret Chats only | Some bots | Default chats are not E2E encrypted |
| **Matrix/Element** | Federated, self-hostable | None | Good for communities; higher complexity |

**Avoid:** WhatsApp (Meta), default SMS (carrier logged), iMessage (Apple logged).

## Hardening Without Switching OS

If you cannot switch to GrapheneOS, do this on any Android device:

1. **Disable Google apps** you do not use (Maps, Assistant, Photos)
2. **Turn off location history** and Wi-Fi scanning
3. **Review app permissions** — deny location, contacts, microphone unless essential
4. **Use Shelter** (work profile) to isolate bitcoin apps from daily apps
5. **Set DNS to Mullvad** or Quad9 to block trackers at the network level
6. **Disable connectivity checks** if rooted (stops Google ping on every Wi-Fi join)

On iOS:
1. Enable **Lockdown Mode** (Settings > Privacy & Security)
2. Disable **iCloud Backup** for wallet apps
3. Use **Sign in with Apple** with hidden email for app accounts
4. Accept that iOS privacy is fundamentally limited by closed-source design

## Decision Matrix

| Profile | OS | Network | Wallet | Acquisition | Messaging |
|---|---|---|---|---|---|
| **Maximum privacy** | GrapheneOS | Mullvad + Tor + Silent Link | Samourai + Dojo | Azteco / P2P | Signal / SimpleX |
| **Balanced** | CalyxOS | Mullvad VPN | Blockstream Green | Azteco / ATM | Signal |
| **Hardened stock Android** | Stock + Shelter | Mullvad VPN | Blockstream Green | Azteco | Signal |
| **iOS user** | iOS + Lockdown | Mullvad VPN | Blockstream Green | Azteco | Signal |
| **Beginner** | Any | Mullvad VPN | Muun | Azteco / ATM | Signal |

## Common Mistakes

| Mistake | Why It Hurts | Fix |
|---|---|---|
| Backing up seed to iCloud/Google Drive | Cloud accounts are hackable and subpoena-able | Steel backup or encrypted local storage |
| Using same phone for bitcoin and social media | Social apps harvest contacts, location, usage patterns | Dedicated device or Shelter work profile |
| Ignoring baseband risk | Cellular modem firmware is closed-source and privileged | Airplane mode + Wi-Fi when possible; burner SIM |
| Using KYC exchange app on daily phone | Exchange links identity to IMEI, location, contacts | Acquire via Azteco or P2P; use web, not app |
| Reusing addresses | Links all your transactions together | Use wallets with automatic address rotation |

## Cross-Links

- [Privacy Stacks](/concepts/privacy-stacks) — Full Layer 0–3 privacy guide (desktop + mobile)
- [Privacy Stacks — CoinJoin and No-KYC Acquisition](/comparisons/privacy-stacks) — CoinJoin tools and no-KYC acquisition compared
- [Samourai Wallet](/entities/samourai-wallet) — Whirlpool, Stonewall, PayNyms
- [Azteco](/entities/azteco) — Voucher-based no-KYC acquisition
- [Bisq](/entities/bisq) — Desktop P2P exchange (not mobile-compatible)
- [No-KYC Acquisition Methods](/concepts/no-kyc-acquisition) — Acquisition methods overview
- [PayJoin](/concepts/payjoin) — Collaborative transaction privacy for spending
