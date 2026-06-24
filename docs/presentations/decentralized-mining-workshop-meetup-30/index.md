---
title: "Round Rock Bitcoiners Meetup"
date: "2024-11-14"
presenter: "Round Rock Bitcoiners"
type: presentation
sidebar_label: "Round Rock Bitcoiners Meetup"
pagination_next: "presentations/decentralized-mining-workshop-meetup-30/slide-001"
---

# Round Rock Bitcoiners Meetup

**Date:** 2024-11-14  
**Presenter:** Round Rock Bitcoiners  

---

## Outline & Notes

# Round Rock Bitcoiners Meetup #30: Decentralized Mining Workshop

## Community
- Mission: "Share bitcoin knowledge, tools, and resources while creating a peer to peer network"
- Guidelines: Bitcoin only, Chatham House Rules
- Initiatives: #HashTheTorch (1-month S-19 loaner), #RunWithHal (Satoshi Trail Run for ALS)

## Mining Fundamentals & Evolution
- CPUs to GPUs to FPGAs to ASICs to Industrial Facilities
- Workshop advocates return to Home Mining for network security and open-source innovation

### Payout Schemas
- PPS: fixed payout per share, stable, no tx fees
- PPLNS: based on recent shares when block found, more volatile
- FPPS: includes transaction fees (Braiins, Foundry)
- TIDES (Ocean.xyz): transparent, predictable

### Solo Mining
- Mining alone for full block reward
- 12 blocks solo mined in 2024

## Hardware Comparison
| Feature | BitAxe 401 Supra | Antminer S19j Pro+ |
| Hash Rate | 733 GH/s | 120 TH/s |
| Power Consumption | 15-18 Watts | 3,250-4,080 Watts |
| Efficiency | 20-25 J/TH | 27-34 J/TH |
| Monthly Cost | ~$1.26-$1.51 | ~$326.59-$411.84 |

## Noise & Heat Solutions
- AC Infinity: Cloudline 8" Fan, Inline Duct Silencers
- Fruition Designs: 3D-printed ASIC silencing/cooling kits
- Njord Fan Control PCB: allows Bitmain miners to control AC Infinity fans automatically

## Software & Protocols
- StratumV2: improves security/efficiency; miners control block templates (Dmnd.work, Braiins.com)
- DATUM: custom templates directly on node; integrates with Ocean.xyz for pooled or solo mining
- AxeOS: custom Bitaxe firmware to minimize latency
- Bitcoin Knots: enhanced privacy/decentralization

## Setup Guides
### BitAxe to Solo Pool
1. Power on, access IP on screen
2. Settings > Network > WiFi
3. Stratum URL: public-pool.io, Port: 21496
4. User: [Bitcoin Address].[Worker Name]
5. Save & Restart

### DATUM for Solo (Lottery) Mining
- Remove text from "Datum Pool Host"
- Default: pool mine on OCEAN, switch to Lottery if pool offline
- Disable "Pooled Mining Only"

### Lightning Payouts (Bolt 12)
- Use C-Lightning on StartOS
- Enable Bolt 12 to generate offer
- Import configuration into Ocean.xyz for automated Lightning payouts

## Resources
- HashRate Index, SoloChance.com
- KaboomRacks, Bitaxe.org
- Home Mining Wizards (Telegram)


## Slides in this Deck

- [Deck Overview (All Slides)](/presentations/decentralized-mining-workshop-meetup-30/)
- [Slide 1](/presentations/decentralized-mining-workshop-meetup-30/slide-001)
- [Slide 2](/presentations/decentralized-mining-workshop-meetup-30/slide-002)
- [Slide 3](/presentations/decentralized-mining-workshop-meetup-30/slide-003)
- [Slide 4](/presentations/decentralized-mining-workshop-meetup-30/slide-004)
- [Slide 5](/presentations/decentralized-mining-workshop-meetup-30/slide-005)
- [Slide 6](/presentations/decentralized-mining-workshop-meetup-30/slide-006)
- [Slide 7](/presentations/decentralized-mining-workshop-meetup-30/slide-007)
- [Slide 8](/presentations/decentralized-mining-workshop-meetup-30/slide-008)
- [Slide 9](/presentations/decentralized-mining-workshop-meetup-30/slide-009)
- [Slide 10](/presentations/decentralized-mining-workshop-meetup-30/slide-010)
- [Slide 11](/presentations/decentralized-mining-workshop-meetup-30/slide-011)
- [Slide 12](/presentations/decentralized-mining-workshop-meetup-30/slide-012)
- [Slide 13](/presentations/decentralized-mining-workshop-meetup-30/slide-013)
- [Slide 14](/presentations/decentralized-mining-workshop-meetup-30/slide-014)
- [Slide 15](/presentations/decentralized-mining-workshop-meetup-30/slide-015)
- [Slide 16](/presentations/decentralized-mining-workshop-meetup-30/slide-016)
- [Slide 17](/presentations/decentralized-mining-workshop-meetup-30/slide-017)
- [Slide 18](/presentations/decentralized-mining-workshop-meetup-30/slide-018)
- [Slide 19](/presentations/decentralized-mining-workshop-meetup-30/slide-019)
- [Slide 20](/presentations/decentralized-mining-workshop-meetup-30/slide-020)
- [Slide 21](/presentations/decentralized-mining-workshop-meetup-30/slide-021)
- [Slide 22](/presentations/decentralized-mining-workshop-meetup-30/slide-022)
- [Slide 23](/presentations/decentralized-mining-workshop-meetup-30/slide-023)
- [Slide 24](/presentations/decentralized-mining-workshop-meetup-30/slide-024)
- [Slide 25](/presentations/decentralized-mining-workshop-meetup-30/slide-025)
- [Slide 26](/presentations/decentralized-mining-workshop-meetup-30/slide-026)
- [Slide 27](/presentations/decentralized-mining-workshop-meetup-30/slide-027)
- [Slide 28](/presentations/decentralized-mining-workshop-meetup-30/slide-028)
- [Slide 29](/presentations/decentralized-mining-workshop-meetup-30/slide-029)
- [Slide 30](/presentations/decentralized-mining-workshop-meetup-30/slide-030)
- [Slide 31](/presentations/decentralized-mining-workshop-meetup-30/slide-031)
- [Slide 32](/presentations/decentralized-mining-workshop-meetup-30/slide-032)
- [Slide 33](/presentations/decentralized-mining-workshop-meetup-30/slide-033)
- [Slide 34](/presentations/decentralized-mining-workshop-meetup-30/slide-034)
![Slide 1 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_000.jpg)

![Slide 2 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_001.jpg)

![Slide 3 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_002.jpg)

![Slide 4 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_003.jpg)

![Slide 5 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_004.jpg)

![Slide 6 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_005.jpg)

![Slide 7 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_006.jpg)

![Slide 8 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_007.jpg)

![Slide 9 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_008.jpg)

![Slide 10 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_009.jpg)

![Slide 11 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_010.jpg)

![Slide 12 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_011.jpg)

![Slide 13 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_012.jpg)

![Slide 14 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_013.jpg)

![Slide 15 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_014.jpg)

![Slide 16 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_015.jpg)

![Slide 17 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_016.jpg)

![Slide 18 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_017.jpg)

![Slide 19 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_018.jpg)

![Slide 20 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_019.jpg)

![Slide 21 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_020.jpg)

![Slide 22 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_021.jpg)

![Slide 23 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_022.jpg)

![Slide 24 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_023.jpg)

![Slide 25 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_024.jpg)

![Slide 26 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_025.jpg)

![Slide 27 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_026.jpg)

![Slide 28 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_027.jpg)

![Slide 29 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_028.jpg)

![Slide 30 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_029.jpg)

![Slide 31 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_030.jpg)

![Slide 32 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_031.jpg)

![Slide 33 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_032.jpg)

![Slide 34 of 34 from 'Round Rock Bitcoiners Meetup' (2024-11-14)](/img/slides/decentralized-mining-workshop-meetup-30/slide_033.jpg)

