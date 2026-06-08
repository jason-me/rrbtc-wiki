---
title: Feed Filter
created: 2026-06-03
updated: 2026-06-03
type: entity
tags: [AI, privacy, social media, nostr, sovereignty, browser-extension]
sources: [raw/feed-filter-demo-2025-12-11.md]
confidence: high
---

# Feed Filter

A user-controlled AI filter for social media feeds. Developed by Ted Thayer at Pleb Lab, Feed Filter restores "mental sovereignty" by letting users algorithmically control which posts they see, countering engagement-optimized algorithms that prioritize rage and conflict.

## The Problem

Social media algorithms are optimized for engagement time, not user wellbeing:
- Facebook reportedly weights rage-bait 5x higher than neutral content
- 1 in 5 people have become estranged from family due to social media-fueled disagreements
- Users have no meaningful control over what appears in their feeds

Core question driving the project:
> "What if we could control which posts we see?"

## How It Works

1. **User sets filter rules** — Define what you want to see (or not see)
2. **Network interception** — Feed Filter intercepts feed data as it loads (X/Twitter initially)
3. **Local AI classification** — Post data is sent to the nearest server running two VLM (Vision Language Model) instances for nuanced contextual analysis
4. **DOM rewriting** — The feed is dynamically altered in the browser to hide or re-rank posts based on the user's rules

## Features

| Feature | Feed Filter |
|---------|-------------|
| Works across sites | ✓ |
| High user control | ✓ |
| Set & forget | ✓ |
| Nuanced contextual understanding | ✓ (via VLMs) |

## Architecture

- **Browser extension** — Primary interface for desktop users
- **Mobile app** — Companion for phone-based social media
- **Distributed VLM servers** — Local models classify content with reasoning
- **Minimal API dependency** — Designed to avoid platform API rate limits and terms-of-service restrictions

## Philosophy

Feed Filter is built with sovereign-tech values:
- Minimize reliance on centralized APIs, VCs, and regulatory chokepoints
- Browser and phone as the user's control points
- Local AI where possible to preserve privacy

## Roadmap

- Brand and infrastructure established
- Proof of concept built
- Alpha/Beta testing on X/Twitter
- Public Chrome Web Store launch
- Expansion to additional platforms

## Relationship to Nostr

Feed Filter aligns with Nostr's values of user control and permissionless publishing. While initially targeting X/Twitter, the architecture could extend to Nostr feeds in the future.

## Related

- [AI and Bitcoin](/concepts/ai-and-bitcoin) — Overview of AI and Bitcoin intersection
- [Nostr](/concepts/nostr) — Decentralized social protocol sharing Feed Filter's values
- [PlebDevs](/entities/plebdevs) — Pleb Lab education initiative (parent org)

## Resources

- [Pleb Lab](https://pleblab.austin)
