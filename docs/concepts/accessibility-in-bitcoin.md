---
title: Accessibility in Bitcoin
description: "Guidance on designing and evaluating Bitcoin wallets, apps, and workflows for universal usability across visual, cognitive, auditory, motor, and temporary impairments."
created: 2026-06-03
updated: 2026-06-03
type: concept
tags: [design, accessibility, ux]
sources: [raw/bitcoindesign-gaad-workshop1-2025-05-16.md, raw/bitcoindesign-gaad-workshop2-2025-05-16.md]
confidence: high
---

# Accessibility in Bitcoin

Bitcoin UX is high-stakes and unforgiving. Accessibility ensures that people with disabilities — and those in temporary or environmental limiting conditions — can use bitcoin safely and independently.

> "Design for the edges, strengthen the core"
> "Solve for one. Extend to many."

## Why It Matters

- Free and open-source software must serve everyone
- A broken wallet experience can mean permanent loss of funds
- Hal Finney used assistive technology
- Temporary conditions (broken arm, noisy café, bright sunlight) affect everyone
- Designing for edge cases creates more robust systems for all users

## Disability Use Cases

| Category | Conditions | Bitcoin Impact |
|----------|------------|----------------|
| Visual | Blindness, low vision, colorblindness | QR-only workflows exclude screen reader users |
| Cognitive/Neuro | ADHD, dyslexia, autism, memory issues | Complex UIs increase error risk |
| Auditory | Deafness, hard-of-hearing | Audio confirmations are inaccessible |
| Motor | Limited mobility, tremors, paralysis | Touch targets and gestures may be impossible |
| Temporary/Environmental | Broken arm, noisy café, bright sun | Situational barriers match permanent ones |

## Assistive Technologies

| Technology | Function | Common Failures |
|------------|----------|-----------------|
| Screen Readers | Text-to-speech/braille output | Unlabeled buttons, missing ARIA roles |
| Screen Magnifiers | Zoom to 200-400% | Layouts break, content clipped |
| Switches & Eye Tracking | One-button or gaze input | Lack of keyboard support |
| Voice Control | Navigate by spoken commands | Labels not matching visible UI |

## WCAG POUR Principles

The Web Content Accessibility Guidelines (WCAG) 2.2 establishes four essential principles:

- **Perceivable** — Users must be able to perceive all information through at least one sense. Provide text alternatives, captions, and adaptable content presentation.
- **Operable** — All interface components must be operable by all users. Ensure keyboard accessibility, sufficient time limits, and clear wayfinding.
- **Understandable** — Information and operation must be understandable. Use readable content, predictable interfaces, and error prevention (especially critical in Bitcoin where mistakes are irreversible).
- **Robust** — Content must work reliably with current and future assistive technologies. Follow standards and write clean, semantic code.

## Core Accessibility Benefit Framework

| Accessibility Feature | Who It Helps First | How It Helps Everyone |
|-----------------------|-------------------|----------------------|
| Captions & Transcripts | Deaf or hard-of-hearing | Quiet/noisy environments, faster parsing |
| Voice Control / Keyboard Nav | Limited mobility | Hands-free convenience, power-user efficiency |
| High Contrast / Text Size | Vision impairments | Sunlight use, aging eyes, readability |
| Simple UI & Terminology | Cognitive impairments | Reduces mistakes, speeds onboarding |
| Colorblind-friendly design | Colorblind users | Clearer and more distinguishable for everyone |
| Larger tap targets / gestures | Motor impairments | Fewer mis-taps on mobile |
| Offline & Low-bandwidth Support | Remote or resource-constrained | Global access, better performance everywhere |

## Visual Accessibility Requirements

1. **Sufficient contrast ratios** — Text and meaningful graphics meet WCAG thresholds (4.5:1 for regular text, 3:1 for large bold text). APCA Lightness Contrast (Lc): 60+ for most text.
2. **Avoid color-only information** — Pair color coding with symbols, font weight, and style for status indicators.
3. **Support text resizing** — Critical content remains visible and readable at 200% zoom; reflows without loss at 400% zoom.
4. **Screen reader semantic structure** — Proper headings, regions, and semantic markup. All controls have explicit name, role, and value attributes.

## Cognitive Accessibility Requirements

1. **Plain language terminology** — Explain complex Bitcoin terms (private key, UTXO, XPUB, block confirmation) in non-technical language.
2. **Contextual support** — Clear instructions alongside address fields and transaction forms.
3. **Simplified complex workflows** — Step-by-step wizards for wallet setup, backup, and sending transactions.
4. **Consistent interface patterns** — Fixed layout and button positions for core actions (send, receive, confirm) across all screens.

## Motor Accessibility Requirements

1. **Adequate touch target sizing** — Minimum 24×24 pixel touch targets for transaction buttons and navigation.
2. **Full keyboard navigation** — Tab through all controls; keyboard shortcuts for common actions.
3. **Gesture alternatives** — Simple tap alternatives for swipe/drag actions (e.g., transaction confirmation).
4. **Irreversible action safeguards** — Review screens and explicit confirmation dialogs before sending funds.

## Hearing Accessibility Requirements

1. **Visual audio alternatives** — Visible notifications for transaction confirmations, payment received alerts.
2. **Haptic feedback** — Vibration patterns for critical confirmations on mobile devices.

## Practical Examples

### Recovery Options
- Seedless recovery options and visual backups (QR codes, visual aids)
- Encrypted cloud sync with client-side encryption
- **Universal benefit**: Reduces risk of permanent fund loss for all users

### Transaction Clarity
- Plain-language transaction summaries ("send" vs. "broadcast raw tx")
- Visual representation of transaction impacts
- Confirmation flows with clear explanations of consequences
- **Universal benefit**: Fewer mistakes, faster cognitive processing

### Privacy Options
- Privacy features on by default with accessible explanations
- Plain-language education on address reuse
- Visual privacy status indicators (color, text labels, icons)
- **Universal benefit**: Stronger privacy with lower barriers

### Interface Design
- High contrast modes and adjustable text sizes
- Larger tap targets reducing error potential
- Full keyboard navigation with visible focus states
- **Universal benefit**: More accurate, inclusive interactions

### Offline & Low-Bandwidth Support
- Progressive web apps that work offline
- Minimal data requirements for core functions
- Alternative communication methods (QR, NFC, Bluetooth)
- **Universal benefit**: More resilient applications with broader usability

## Testing Checklists

### Android
- Enable TalkBack
- Navigate with gestures, Bluetooth keyboard, Voice Access
- Test high contrast, color inversion, large text, magnification
- Run Accessibility Scanner

### iOS
- Enable VoiceOver, rotor navigation, explore by touch
- Test dynamic type, bold text, increased contrast
- Verify Full Keyboard Access, Voice Control, Switch Control

### Desktop
- Keyboard-only navigation (Tab, Shift+Tab, Enter, Space)
- Screen readers: JAWS, NVDA, VoiceOver, Orca
- Zoom to 200% and 400%
- High contrast and grayscale modes

## Testing Tools

| Category | Tools |
|----------|-------|
| Browser | Lighthouse, ARC Toolkit, WAVE, Accessibility Insights |
| Contrast | Stark (Figma), TPGi Colour Contrast Analyzer, APCA |
| Mobile | Accessibility Scanner (Google), Xcode Accessibility Inspector |

## Common Mistakes

- Keyboard traps
- Floating buttons without focus management
- Missing text alternatives
- Unlabeled buttons and icons
- Elements lacking visible focus indicators
- QR-only interactions with no text fallback

## Accessible Design Patterns

- WAI-ARIA Authoring Practices Guide (APG) from W3C
- Dialogs: `role="dialog"`, `aria-modal="true"`, focus trap
- Buttons: `aria-label`, `aria-pressed`
- Landmarks: `<nav>`, `<main>`, `<section>`
- Inclusive Components by Heydon Pickering
- shadcn/ui built on Radix UI primitives

## Universal Design Principles

1. Equitable Use
2. Flexibility in Use
3. Simple and Intuitive Use
4. Perceptible Information
5. Tolerance for Error
6. Low Physical Effort
7. Size and Space for Approach and Use

## Related

- [Privacy Stacks](/concepts/privacy-stacks) — Security and usability trade-offs
- [StartOS](/entities/start-os) — Node OS with UI considerations

## Resources

- [Bitcoin Universal Design Accessibility Guide](https://jason-me.github.io/bitcoin-universal-design/)
- [Bitcoin Design — Accessibility](https://bitcoin.design/guide/designing-products/accessibility/)
- [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)
- [Radix UI](https://www.radix-ui.com/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
