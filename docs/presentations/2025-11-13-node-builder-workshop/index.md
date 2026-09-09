---
title: "Node Builder Workshop – Build a Start9OS Bitcoin Node"
date: "2025-11-13"
presenter: "Round Rock Bitcoiners"
type: presentation
sidebar_label: "Node Builder Workshop – Build a Start9OS Bitcoin Node"
pagination_next: "presentations/2025-11-13-node-builder-workshop/slide-001"
---

# Node Builder Workshop – Build a Start9OS Bitcoin Node

**Date:** 2025-11-13  
**Presenter:** Round Rock Bitcoiners  

---

## Outline & Notes

# Node Builder Workshop – Build a Start9OS Bitcoin Node
**Date:** November 13, 2025
**Presenter:** RRBTC

## Event Overview
Hands-on workshop to build a DIY x86 Start9OS node and personal server. Assert monetary sovereignty.

## Workshop Goals
- Assemble and install a Bitcoin node from scratch
- Understand sovereign self-hosting with Start9OS
- Leave with a fully operational node ready to sync Bitcoin Core or Knots
- Compare Core vs. Knots and CLN vs. LND
- Practice software verification and manual backups

## Why Run Your Own Node
- Verify don't trust — enforce your own rules
- Avoid 3rd-party reliance & censorship
- Support Bitcoin decentralization
- Run Lightning, Electrum, Mempool privately

## Hardware Inventory
| Component | Spec |
| Desktop | Dell OptiPlex 9020M Micro (i7-4785T 2.2 GHz) |
| RAM | 16 GB Crucial DDR3L 1600 MHz |
| SSD | Samsung 870 QVO 2 TB |

## BIOS Configuration
- Boot Mode: Legacy
- Secure Boot: Disabled
- SATA Operation: AHCI
- Virtualization: Enabled
- Boot Order: USB → Internal SSD

## Software Verification
Download Start9 image from GitHub and verify SHA-256 checksum.
```bash
sha256sum startos-0.3.5.1-39de098_x86_64-nonfree.iso
# 29b0f1e0211568ea66d6b729536ff84aed3b6cbc1c38540a7c80a391fd01616e
```

## Flashing & Installation
1. Flash Start9OS to USB using Balena Etcher
2. Boot from USB (F12), choose Install Start9OS
3. Select internal SSD, confirm erase, install
4. Remove USB, restart

## Network Architecture
Internet → Tomato Router (192.168.79.1) → GS105 Switch → Nodes

## Post-Install Stack
- Bitcoin Core or Bitcoin Knots
- CLN, LND, Electrum, Mempool
- Manual USB backups (critical after opening Lightning channels)


## Slides in this Deck

- [Deck Overview (All Slides)](/presentations/2025-11-13-node-builder-workshop/)
- [Slide 1](/presentations/2025-11-13-node-builder-workshop/slide-001)
- [Slide 2](/presentations/2025-11-13-node-builder-workshop/slide-002)
- [Slide 3](/presentations/2025-11-13-node-builder-workshop/slide-003)
- [Slide 4](/presentations/2025-11-13-node-builder-workshop/slide-004)
- [Slide 5](/presentations/2025-11-13-node-builder-workshop/slide-005)
- [Slide 6](/presentations/2025-11-13-node-builder-workshop/slide-006)
- [Slide 7](/presentations/2025-11-13-node-builder-workshop/slide-007)
- [Slide 8](/presentations/2025-11-13-node-builder-workshop/slide-008)
- [Slide 9](/presentations/2025-11-13-node-builder-workshop/slide-009)
- [Slide 10](/presentations/2025-11-13-node-builder-workshop/slide-010)
- [Slide 11](/presentations/2025-11-13-node-builder-workshop/slide-011)
- [Slide 12](/presentations/2025-11-13-node-builder-workshop/slide-012)
- [Slide 13](/presentations/2025-11-13-node-builder-workshop/slide-013)
- [Slide 14](/presentations/2025-11-13-node-builder-workshop/slide-014)
- [Slide 15](/presentations/2025-11-13-node-builder-workshop/slide-015)
- [Slide 16](/presentations/2025-11-13-node-builder-workshop/slide-016)
- [Slide 17](/presentations/2025-11-13-node-builder-workshop/slide-017)
![Slide 1 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_000.jpg)

![Slide 2 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_001.jpg)

![Slide 3 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_002.jpg)

![Slide 4 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_003.jpg)

![Slide 5 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_004.jpg)

![Slide 6 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_005.jpg)

![Slide 7 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_006.jpg)

![Slide 8 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_007.jpg)

![Slide 9 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_008.jpg)

![Slide 10 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_009.jpg)

![Slide 11 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_010.jpg)

![Slide 12 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_011.jpg)

![Slide 13 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_012.jpg)

![Slide 14 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_013.jpg)

![Slide 15 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_014.jpg)

![Slide 16 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_015.jpg)

![Slide 17 of 17 from 'Node Builder Workshop – Build a Start9OS Bitcoin Node' (2025-11-13)](/img/slides/2025-11-13-node-builder-workshop/slide_016.jpg)

