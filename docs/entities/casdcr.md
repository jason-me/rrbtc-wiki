---
title: CASCDR
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [lightning, ai, nostr, services]
sources: [raw/why-lightning-plus-ai-2024-08-13.md, raw/cascdr-project-meetup-27-2024-08-08.md]
confidence: high
---

# CASCDR

A decentralized AI service platform built on the Bitcoin Lightning Network. CASCDR provides private, pay-as-you-go AI tools for content creators, using Lightning payments to preserve user privacy and enable permissionless access.

## What It Does

CASCDR wraps popular AI capabilities in a Lightning-native payment layer. Instead of monthly subscriptions to centralized AI providers, users pay per use via Lightning invoices.

## Service Modules

| Service | Description |
|---------|-------------|
| 🧠 General Purpose LLM | GPT-style chat interface |
| 👁 AI Image Analysis | Analyze and describe images |
| 🖼️ Text to Image | Generate images from prompts |
| 🗣️ AI Voice-to-Text | Transcribe audio |
| 🎥 YouTube Video Extraction | Pull transcripts and metadata |
| 💾 Storage as a Service | File storage |
| 🔔 YouTube Channel Alerts | New video notifications |
| 📝 AI Generated Summaries | Summarize long content |
| ✍️ AI Generated Blog Posts | Generate draft posts |
| 📬 Nostr DM Delivery | Send DMs via Nostr |

## Why Lightning

| Problem | Lightning Solution |
|---------|-------------------|
| Privacy | BOLT11 sender privacy keeps chats unlinkable |
| Centralization | Decentralized network incentivizes independent operators |
| Cost | Pay-as-you-go instead of flat subscription |
| Interop | AI agents can chain paid tools in series |

## Access

- **Website:** https://cascdr.xyz
- **Subscription:** $9.99/month
- **Lightning Address:** `cascdr@getalby.com`
- **One-time donation:** $5 via Lightning

## Relationship to Alby

CASCDR uses Alby for Lightning payment processing. Users with the Alby browser extension can pay invoices in one click.

## Related

- [Lightning Network](/concepts/lightning-network) — Payment layer CASCDR runs on
- [Alby](/entities/alby) — Lightning wallet and payment infrastructure
- [Nostr](/concepts/nostr) — Protocol used for DM delivery module
- [AI and Bitcoin](/concepts/ai-and-bitcoin) — AI and Bitcoin concept hub

## Resources

- [CASCDR website](https://cascdr.xyz)
- [Alby — payment provider](https://getalby.com/)
