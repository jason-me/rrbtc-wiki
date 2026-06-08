# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`

## [2026-05-10] create | Wiki initialized
- Domain: Round Rock Bitcoiners meetup knowledge base
- Structure created with SCHEMA.md, index.md, log.md
- Raw sources directory created for meetup deck extractions

## [2026-05-10] ingest | Speaker Deck archive
- Copied 17 meetup deck extractions from speakerdeck.com/rrbtc
- Raw sources saved to meetup/raw/
- Decks span 2022-07 to 2026-01 covering nodes, mining, privacy, design, and protocol

## [2026-06-01] create | entities/braiins-hashpower.md
- Created entity page for Braiins Hashpower marketplace
- Sources: raw/meetup-demo-cheatsheet.md, presentations/mining-hashpower-datum-outline-2026-05.md
- Added to index.md under Entities
- Linked to: datum, ocean-xyz, stratum-v2, bitcoin-knots

## [2026-06-02] ingest | Bitcoin Basics cluster
- Created concepts/proof-of-work.md — PoW consensus, halving schedule, 21M cap
- Created concepts/utxo-model.md — UTXO model, private/public keys, coin selection
- Created concepts/bitcoin-address-types.md — P2PK, P2PKH, P2SH, Segwit, Taproot
- Created concepts/bitcoin-node-types.md — Full, mining, Lightning, Uncle Jim nodes
- Created entities/bitcoin-core.md — Reference implementation, RPC, wallet backends
- Updated index.md: 11 Entities, 5 Concepts, last updated 2026-06-02
- Sources: raw/understand-how-bitcoin-works-2026-01-08.md, raw/bitcoin-protocol-meetup-2-2022-07-14.md, raw/why-run-a-node-meetup-4-2022-09-08.md

## [2026-06-03] ingest | Privacy & KYC-Free cluster
- Created concepts/privacy-stacks.md — Layered privacy: VPN/Tor, CoinJoin, UTXO management, OPSEC
- Created concepts/no-kyc-acquisition.md — Methods to acquire bitcoin without KYC
- Created concepts/mesh-networks.md — Offline mesh networking: BLE, LoRa, Wi-Fi
- Created entities/bisq.md — Decentralized P2P exchange with multisig escrow
- Created entities/cashu.md — Chaumian ecash tokens on Lightning
- Updated index.md: 13 Entities, 8 Concepts, last updated 2026-06-03
- Sources: raw/why-privacy-matters-meetup-3-2022-08-11.md, raw/mobile-privacy-meetup-5-2022-10-13.md, raw/cashu-mints-meetup-10-2023-03-09.md, raw/bitchat-and-chill-2025-08-14.md

## [2026-06-03] ingest | Multisig & Custody cluster
- Created concepts/multisig.md — M-of-N threshold signatures, benefits, pitfalls, configurations
- Created concepts/custody-models.md — Self-custody, collaborative custody, inheritance planning
- Created entities/unchained-capital.md — Collaborative custody with key recovery and loans
- Created entities/specter-desktop.md — Open-source DIY multisig coordinator
- Created entities/casa.md — Fee-based collaborative custody with multisig vaults
- Updated index.md: 16 Entities, 10 Concepts, last updated 2026-06-03
- Sources: raw/what-is-multisig-meetup-7-2022-12-08.md, raw/bisq-to-bitcoin-retirement-2025-10-10.md

## [2026-06-03] ingest | Nostr cluster
- Created concepts/nostr.md — Decentralized social protocol, keypairs, relays, clients
- Created entities/alby.md — Browser extension for Lightning payments and Nostr signing
- Updated index.md: 17 Entities, 11 Concepts, last updated 2026-06-03
- Sources: raw/what-is-nostr-meetup-8-2023-01-12.md, raw/cashu-mints-meetup-10-2023-03-09.md, raw/cascdr-project-meetup-27-2024-08-08.md

## [2026-06-03] ingest | Accessibility cluster
- Created concepts/accessibility-in-bitcoin.md — Disability use cases, assistive tech, testing checklists, design patterns
- Updated index.md: 17 Entities, 12 Concepts, last updated 2026-06-03
- Sources: raw/bitcoindesign-gaad-workshop1-2025-05-16.md, raw/bitcoindesign-gaad-workshop2-2025-05-16.md

## [2026-06-03] ingest | Privacy Tools cluster
- Created entities/samourai-wallet.md — Privacy wallet with Whirlpool, Stonewall, Stowaway, PayNyms
- Created entities/ronindojo.md — Privacy-focused node OS with Whirlpool and Bisq
- Created entities/wasabi-wallet.md — Desktop CoinJoin wallet with WabiSabi protocol
- Created entities/joinmarket.md — Decentralized CoinJoin marketplace with Jam UI
- Created concepts/payjoin.md — BIP-78 collaborative transaction privacy
- Created entities/strike.md — Consumer-friendly Bitcoin/Lightning payments
- Created entities/azteco.md — Bitcoin voucher system for no-KYC acquisition
- Created entities/btcmap.md — Open-source map of Bitcoin-accepting merchants
- Created entities/nutstash.md — Web-based Cashu ecash wallet
- Created entities/nunchuk.md — Mobile multisig wallet for shared vaults
- Created entities/caravan.md — Open-source web-based multisig coordinator
- Updated index.md: 25 Entities, 13 Concepts, last updated 2026-06-03
- Sources: raw/why-privacy-matters-meetup-3-2022-08-11.md, raw/mobile-privacy-meetup-5-2022-10-13.md, raw/why-run-a-node-meetup-4-2022-09-08.md, raw/cashu-mints-meetup-10-2023-03-09.md, raw/bisq-to-bitcoin-retirement-2025-10-10.md

## [2026-06-03] update | Accessibility page enriched
- Updated concepts/accessibility-in-bitcoin.md with content from Bitcoin Universal Design Guide
- Added WCAG POUR principles, visual/cognitive/motor/hearing requirements
- Added practical examples: recovery, transaction clarity, privacy, interface, offline support
- Added Core Accessibility Benefit Framework table
- Added link: https://jason-me.github.io/bitcoin-universal-design/
## [2026-06-03] create | Bitcoin Core vs Knots comparison
- Created comparisons/bitcoin-core-vs-knots.md — Neutral head-to-head on mempool policy, mining templates, and the inscription debate
- Added to index.md under Comparisons section
- Sources: raw/decentralized-mining-workshop-meetup-30.md, presentations/mining-hashpower-datum-outline-2026-05.md, entities/bitcoin-core.md, entities/bitcoin-knots.md
- Cross-links: bitcoin-core.md, bitcoin-knots.md, bitcoin-protocol.md, bitcoin-nfts.md, datum.md, stratum-v2.md, start-os.md

## [2026-06-03] create | Mining Payout Schemas comparison
- Created comparisons/mining-payout-schemas.md — Detailed head-to-head of PPS, FPPS, PPLNS, TIDES, and Solo
- Added risk transfer table, transparency spectrum, and decision matrix
- Updated index.md: 2 Comparisons, last updated 2026-06-03
- Sources: raw/decentralized-mining-workshop-meetup-30.md, entities/ocean-xyz.md, entities/public-pool.md, entities/braiins-hashpower.md, concepts/mining-payout-schemas.md
- Cross-links: ocean-xyz.md, public-pool.md, braiins-hashpower.md, datum.md, bitaxe.md, home-mining.md
2026-06-03T23:22:28-05:00 | Added comparison: privacy-stacks.md — CoinJoin and no-KYC acquisition tools (Samourai, Wasabi, JoinMarket, Bisq, Azteco) | Comparisons: 3
2026-06-03T23:29:45-05:00 | Added query: which-custody-model-fits-my-threat-model.md — Decision framework for custody by threat model | Queries: 1
2026-06-03T23:39:05-05:00 | Added query: what-privacy-stack-should-i-use-for-mobile.md — Mobile privacy stack: OS, network, wallet, acquisition, messaging | Queries: 2
2026-06-04T00:00:43-05:00 | Indexed 3 unlisted raw sources: why-lightning-plus-ai-2024-08-13, round-rock-bitcoiners-26-larp-2024-07-29, rr-bitcoiners-18-plebdevs-2024-07-29 | Total raw sources: 21
2026-06-04T00:09:24-05:00 | Added query: how-do-i-start-mining-at-home.md — Entry point for home mining (Bitaxe vs rented hashrate, pools, DATUM) | Queries: 3

2026-06-04T00:30:00-05:00 | Sync index.md to actual disk content | Removed meetup-demo-cheatsheet from raw (it is a presentation outline). Added 25 missing entities, 9 missing concepts, presentations section. Entities grouped by category: Wallets, Privacy Tools, Node Software, Mining, Custody & Multisig, Lightning & Payments, Development & Tools. Index now reflects 20 raw, 22 concepts, 50 entities, 3 comparisons, 3 queries, 1 presentation.

2026-06-04T09:41:00-05:00 | Added comparison: node-operating-systems.md — StartOS vs Umbrel vs RaspiBlitz vs MyNode vs RoninDojo | Comparisons: 4

## [2026-06-04] create | summaries/privacy-as-a-spectrum.md
- Created summary synthesizing four years of privacy meetups (#3, #5, #10, #38)
- 5-layer spectrum: Network hygiene → Acquisition → Graph breaking → Off-chain (Cashu) → Offline mesh
- Sources: raw/why-privacy-matters-meetup-3, raw/mobile-privacy-meetup-5, raw/cashu-mints-meetup-10, raw/bitchat-and-chill-2025-08-14
- Updated index.md: added Summaries section, count now 1 Summary

## [2026-06-04] create | summaries/mining-decentralization.md
- Created summary synthesizing 5 sources on mining decentralization
- Theme: template sovereignty through StratumV2 (Core) vs DATUM (Knots)
- Spectrum: Bitaxe hobbyist → S19 home miner → Sv2 pool → DATUM solo → true solo
- Sources: raw/understand-how-bitcoin-works, raw/why-run-a-node-meetup-4, raw/decentralized-home-mining-bitaxe, raw/decentralized-mining-workshop, raw/node-builder-workshop
- Updated index.md: Summaries count now 2

## [2026-06-04] ingest | raw/mining-like-the-big-players-2026-05-14.md
- Extracted content from Speaker Deck: Mining Like The Big Players (May 14, 2026)
- New topics: Braiins Hashpower marketplace, HashGuard auto-optimizer, hashrate rental workflow
- Updated index.md: Raw sources now 21, Presentations now 22

## [2026-06-04] ingest | Mining Like The Big Players deck
- Created presentations/mining-like-the-big-players-2026-05-14.md
- Created raw/mining-like-the-big-players-2026-05-14.md (full slide extraction)
- Updated index.md: 21 raw sources, 22 presentations

## [2026-06-04] ingest | Zero Dollar Manifesto by Sahil Chaturvedi
- Created raw/zero-dollar-manifesto-sahil-2024-06-22.md (Meetup #24)
- Created presentations/zero-dollar-manifesto-sahil-2024-06-22.md
- Created entities/sahil-chaturvedi.md (presenter bio)

## [2026-06-04] synthesize | GetOnZero synthesis article
- Created summaries/getonzero-synthesis.md: acquire, hold, deploy, spend
- Guides Bitcoin-only living from acquisition (Bisq) to mining deployment to circular spending

## [2026-06-04] synthesize | Mining automation entities
- Created entities/hashguard.md: DIY Python auto-optimizer
- Created entities/hashrate-autopilot.md: Official Braiins rules engine
- Both referenced from Mining Like The Big Players deck

## [2026-06-04] ingest | Website scrape roundrockbitcoiners.com
- Scraped 55 WordPress posts via REST API
- Created 28 new raw markdown extractions from website content
- Skipped 16 posts (minimal content / SpeakerDeck embeds only)
- Added website-sourced raw files alongside existing SpeakerDeck extractions
- Total raw sources now: 50 (22 SpeakerDeck + 28 website)
- Key new captures: BIP-78 Payjoin, home mining guide, RoboSats tutorial, NFC wallets, Nostr dev course, Cashu mints, onboarding local businesses

## [2026-06-04] create | New entity pages from website scrape
- Created 23 new entity pages from content discovered in roundrockbitcoiners.com raw extractions
- Key entities: BTCPayServer, Payjoin Development Kit, SatsCard, Tapsigner, Bolt Card
- Payment/merchant tools: Oshi App, IBEXPay, OpenNode, Breez
- Mining infrastructure: KaboomRacks, ComparePower, HashRate Index, Upstream Data, ShushMiner
- Wallets: Zeus, BlueWallet, Phoenix, Muun
- Community/people: Bitcoin Commons, CoinATMRadar
- Developer tools: HWI (Hardware Wallet Interface)
- Education: Hodl Up (board game)
- Total entities now: 76

## [2026-06-05] remove | casey-rodarmor entity page
- Deleted: entities/casey-rodarmor.md
- Reason: Factual inaccuracies in content
- Updated: index.md entity count 76 -> 75
- Any factual reference to "Casey Rodarmor (creator of Ordinals)" remains in concepts/bitcoin-nfts.md where it is accurate

## [2026-06-05] add | Simple Proof entity + raw source
- Created: raw/simpleproof-com-meetup-25-2024-06-25.md (Meetup #25, Carlos Toriello)
- Created: entities/simple-proof.md — Bitcoin document timestamping via OpenTimestamps
- Notable: Screven County, GA first U.S. jurisdiction to timestamp election results on Bitcoin
- Updated: index.md counts (51 raw, 76 entities)

## [2026-06-05] fix | slide deck image paths; add seed signer entity
- Fixed: 20 slide index.md files now use raw HTML `<img>` tags to avoid RoamLinksPlugin
  rewriting image paths incorrectly (all decks were pointing to NOSTR meetup images)
- Created: entities/seedsigner.md — open-source DIY Bitcoin signing device
- Updated: index.md counts (77 entities)
