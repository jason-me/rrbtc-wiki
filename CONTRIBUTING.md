# Contributing to the Round Rock Bitcoiners Wiki

This wiki is built with [Docusaurus](https://docusaurus.io/) and deployed automatically via GitHub Actions to GitHub Pages.

## Quickstart for Contributors

1. Fork `jason-me/rrbtc-wiki` on GitHub.
2. Clone your fork locally.
3. Edit files in `docs/` using standard Markdown.
4. Commit and open a Pull Request against `main`.

Once merged, the site rebuilds and deploys automatically within ~2 minutes.

## Content Conventions

### Links
Use standard Markdown links only:
```markdown
[Link text](url)
```

For internal wiki pages:
```markdown
[UTXO Model](/concepts/utxo-model)
[Bitcoin Core](/entities/bitcoin-core)
```

Do **not** use wikilink syntax (`[[...]]`). It will not render.

### Frontmatter
Every doc should include at minimum:
```yaml
---
title: Page Title
---
```

### No Raw HTML
Avoid raw HTML in Markdown. Docusaurus uses MDX, which can fail on unclosed or malformed tags.

### Images and Static Assets
Place images in `static/img/`. Reference them from docs as `/img/filename.png`.

## Local Development (Optional)

```bash
git clone https://github.com/jason-me/rrbtc-wiki.git
cd rrbtc-wiki
npm install
npm run start
```

The dev server runs at `http://localhost:3000`.

## Deployment

You do not need to deploy anything. Merges to `main` trigger the GitHub Action at `.github/workflows/deploy.yml`, which builds the site and publishes to the `gh-pages` branch.

## Where This Fits in the Bigger Picture

- **GitHub (`rrbtc-wiki`)**: Canonical source for the public wiki. Open contributions via PRs. Automated build + deploy.
- **Radicle (`roundrock-meetup-wiki`)**: Sovereign/decentralized mirror for governance records and pseudonymous development. Updates are pushed periodically by a maintainer, not by automated CI.
