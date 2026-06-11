# Round Rock Bitcoiners Wiki — Maintainer Workflow

## Repo Topology

| Repo | Platform | Purpose | Who Writes | How It Updates |
|---|---|---|---|---|
| `rrbtc-wiki` | GitHub | **Canonical** public wiki | Anyone via PR | GitHub Actions auto-deploys to Pages on every merge to `main` |
| `roundrock-meetup-wiki` | Radicle | **Sovereign mirror** | Maintainer only | Manual push by maintainer |
| `roundrock-meetup` | Radicle/GitHub | **Meetup governance** | Core organizers | Manual, as needed |

## Content Change Flow

```
Contributor opens PR on GitHub
        ↓
You review + merge to main
        ↓
GitHub Action fires: npm ci → npm run build → publish to gh-pages
        ↓
Site updates at wiki.roundrockbitcoiners.com (~2 min)
        ↓
[Periodic] You push merged content to Radicle mirror
```

## How to Sync to Radicle (Sovereign Mirror)

This is a manual step performed by the maintainer after significant merges.

```bash
# 1. Pull latest canonical content
cd ~/rrbtc-wiki-src
git pull origin main

# 2. Copy docs/ to your Radicle working directory
cp -r docs/* ~/roundrock-meetup-wiki/docs/

# 3. Commit and push to Radicle
cd ~/roundrock-meetup-wiki
git add .
git commit -m "sync: mirror wiki updates from GitHub $(date +%Y-%m-%d)"
rad push
```

## Docusaurus-Specific Notes

### What NOT to do
- Do not commit `build/`, `node_modules/`, or `.docusaurus/` to `main`. They are in `.gitignore`.
- Do not edit files in the `gh-pages` branch directly. It is auto-generated.
- Do not use wikilink syntax (`[[...]]`). Use `[Text](/path)` standard Markdown links.
- Do not use raw HTML tags in Markdown without testing locally first. MDX is strict.

### What changed from MkDocs
| MkDocs | Docusaurus |
|---|---|
| `[[wikilink]]` | `[Text](/path)` |
| `README.md` per folder | `index.md` per folder (sidebar config handles it) |
| `extra_css:` in `mkdocs.yml` | `src/css/custom.css` (Infima variable overrides) |
| `plugins:` (search, roamlinks, minify) | `@easyops-cn/docusaurus-search-local` (installed) |
| Manual `mkdocs build` + tarball | Automated `npm run build` via GitHub Actions |

### When to Edit Config
- `docusaurus.config.js`: Site metadata, navbar, footer, URL, baseUrl, plugins
- `sidebars.js`: Navigation order and hierarchy
- `src/css/custom.css`: Colors, contrast, focus states (light/dark mode)

### Known Gotchas
| Problem | Fix |
|---|---|
| Link color too light in light mode | Check `--ifm-color-primary` in `custom.css` (should be `#A8640D` or darker) |
| Search placeholder invisible | Check `::placeholder` opacity/color in `custom.css` |
| Focus ring black in dark mode | Check `html[data-theme='dark'] :focus` outline color |
| Logo touches orange circle edge | Verify SVG `viewBox` has negative origin padding (e.g., `-20 -20 280 280`) |
| Prev/next stuck between categories | Remove `link` properties from sidebar category objects in `sidebars.js` |
| `gh-pages` branch not created | Ensure Pages Settings → Source is "GitHub Actions", push to `main`, wait for Action green check |

### Emergency: Manual Deploy Without Actions
If GitHub Actions is broken and you need the site live NOW:

```bash
# On agentorange or local machine with source
cd rrbtc-wiki
npm run build
cd build
git init
git add .
git commit -m "manual deploy $(date)"
git push --force git@github.com:jason-me/rrbtc-wiki.git main:gh-pages
```

Then switch Pages Settings → Source → "Deploy from a branch" → `gh-pages` / root.
