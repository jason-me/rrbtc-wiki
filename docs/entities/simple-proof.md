---
title: Simple Proof
created: 2026-06-05
updated: 2026-06-05
type: entity
tags: [timestamping, opentimestamps, elections, immutability, enterprise]
sources:
  - raw/simpleproof-com-meetup-25-2024-06-25.md
confidence: high
contested: false
---

# Simple Proof

Bitcoin-based document timestamping service that anchors cryptographic hashes of digital records to the Bitcoin blockchain, creating tamper-proof proof of existence and authenticity.

## What It Does

Simple Proof uses the [OpenTimestamps](https://opentimestamps.org/) protocol to generate a cryptographic hash (fingerprint) of any digital document, then anchors that hash to the Bitcoin blockchain. Once anchored, the document's existence at a specific point in time becomes verifiable by anyone — no trust in Simple Proof required.

## Key Features
- **Immutable timestamps**: Documents hashed and anchored to Bitcoin's Timechain
- **Independent verification**: Verify any timestamp using open-source tools without relying on Simple Proof's infrastructure
- **Enterprise integrations**: Amazon S3, DocuSign, and other document workflows
- **Permissionless**: Uses Bitcoin's blockchain as the neutral, uncensorable anchor

## Notable Deployment

**Screven County, Georgia (2024)** — First U.S. jurisdiction to use Bitcoin's blockchain to secure election results. Simple Proof timestamped key election reports, producing tamper-proof, publicly verifiable records. The case demonstrated Bitcoin timestamping at the highest-stakes level of democratic governance.

## Relation to Round Rock Bitcoiners

- Meetup #25 (June 2024) featured Carlos Toriello presenting "Immutable Democracy"
- Demonstrated practical use of Bitcoin beyond payments: cryptographic proof and public record integrity
- Aligned with the meetup's focus on real-world Bitcoin applications (elections, governance, document security)

## See also
- [OpenTimestamps](https://opentimestamps.org/)
- [concepts/no-kyc-acquisition.md] — related privacy concepts
- [concepts/custody-models.md] — complementary record-keeping

## Resources
- [simpleproof.com](https://www.simpleproof.com)
- [Immutable Democracy presentation (YouTube)](https://www.youtube.com/watch?v=g0nnM5_Z90E)
- [Screven County case study](https://www.simpleproof.com/case-studies-articles/screven-county-georgia-case-study)
- [Simple Proof Console](https://console.simpleproof.com/)
