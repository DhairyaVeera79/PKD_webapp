# Website Architecture

> Memory file documenting the complete technical architecture of the PKD Webapp.
> Updated after Session 6. For external AI agents.

---

## Overview

- **Type**: Static HTML website (no build system, no framework)
- **Hosting**: GitHub Pages from `docs/` folder
- **CSS Framework**: Bootstrap 4.5.2 (CDN)
- **JavaScript**: Vanilla JS (no framework)
- **Subject**: Shrimad Rajchandraji (Param Krupalu Dev) — biography, teachings, compositions, events, places

---

## Directory Structure

```
docs/
├── index.html              # Home page (694 lines — hero, stats, life cards, features, timeline, explore)
├── people.html             # People listing (233 lines — 85 entries, 9 categories)
├── places.html             # Places listing (135 lines — 45 entries, 4 categories)
├── events.html             # Events timeline (721 lines — 54 events, 30+ collapsible year-sections)
├── compositions.html       # Compositions listing (147 lines — 43 entries, 6 categories)
├── calendar.html           # Interactive calendar (714 lines — 95 events, 8 categories, year/month/list views)
├── maps.html               # Leaflet map (815 lines — 28 places, 35 routes, year/all/routes modes)
├── glossary.html           # Dictionary (1130 lines — 108 terms, 5 categories, filterable)
├── search.html             # Search results page (331 lines)
├── 404.html                # Error page
│
├── css/
│   ├── styles.css          # Global styles (1,060 lines)
│   └── pages.css           # Wikipedia-style detail page layout (532 lines)
│
├── js/
│   ├── navbar.js           # Dynamic navbar injection + mobile menu (504 lines)
│   ├── search.js           # Search data (SEARCH_DATA: 45 items) + autocomplete (283 lines)
│   ├── scripts.js          # Legacy map/CSV (45 lines, mostly unused)
│   └── search-data.json    # Orphaned — NOT loaded by any page
│
├── databases/
│   └── places.csv          # 30 place names, 4 empty columns
│
├── images/
│   ├── mission_logo.svg    # Site logo (used in navbar)
│   ├── index_images/       # Home page images (4 files)
│   ├── people_images/      # People portrait images (16 files)
│   ├── places_images/      # Place images (subfolders: mumbai/2, vavaniya/1)
│   ├── events_images/      # Event images (1 file)
│   └── compositions_images/ # Composition images (2 files)
│
├── people/                 # 24 individual person pages
│   ├── ambalalbhai.html
│   ├── bhagvanbhaiModi.html
│   ├── brahmachariji.html
│   ├── chanchalben.html
│   ├── chatrabhujbhaiBechar.html
│   ├── devba.html
│   ├── gandhiji.html
│   ├── janbai.html
│   ├── javalben.html
│   ├── jhabakben.html
│   ├── juthabhai.html
│   ├── lallujiMuni.html
│   ├── maneklalGhelabhai.html
│   ├── popatbhaiJagjivan.html
│   ├── pranjivandas.html
│   ├── pujyaGurudevshri.html
│   ├── ranchodbhai.html
│   ├── ravjibhai.html
│   ├── revashankarJagjivan.html
│   ├── saubhagyabhai.html
│   ├── shankarlalBhatt.html
│   ├── shivkunvarben.html
│   ├── tribhuvanBhanji.html
│   └── vinaychandrabhaiPopatbhaiDaftary.html
│
├── places/                 # 16 individual place pages
│   ├── agas.html
│   ├── ahmedabad.html
│   ├── botad.html
│   ├── dharampur.html
│   ├── idar.html
│   ├── jamnagar.html
│   ├── jetpar.html
│   ├── kavitha.html
│   ├── khambhat.html
│   ├── limbdi.html
│   ├── morbi.html
│   ├── mumbai.html
│   ├── rajkot.html
│   ├── uttarsanda.html
│   ├── vavaniya.html
│   └── wadhwan.html
│
├── events/                 # 2 individual event pages
│   ├── avdhan.html
│   └── chitrapat.html
│
├── compositions/           # 3 individual composition pages
│   ├── atmasiddhi.html
│   ├── bhavnabodh.html
│   └── mokshmala.html
│
└── reference/              # Book reference + website docs (14 .md files)
    ├── MASTER.md           # This index file
    ├── README.md           # Book metadata
    ├── chronology.md       # Year-by-year timeline
    ├── people.md           # 100+ people reference
    ├── places.md           # Places reference
    ├── compositions.md     # Compositions reference
    ├── events.md           # Events reference
    ├── teachings.md        # Teachings/concepts reference
    ├── quotes.md           # Quotes reference
    ├── website-architecture.md    # This file
    ├── website-css-system.md      # CSS documentation
    ├── website-js-interactivity.md # JS documentation
    ├── website-content-inventory.md # Content status
    └── website-page-templates.md   # Page templates
```

---

## Navigation Structure

The navbar is dynamically injected by `navbar.js` on every page. Navigation items:

| Nav Item | Target | Description |
|----------|--------|-------------|
| Home | `index.html` | Landing page with hero, stats, life cards, explore grid |
| Events | `events.html` | Collapsible year-by-year timeline (V.S. 1924–1957) |
| People | `people.html` | 85 entries in 9 categories |
| Places | `places.html` | 45 entries in 4 categories |
| Compositions | `compositions.html` | 43 entries in 6 categories |
| Calendar | `calendar.html` | Interactive 1867–1901 calendar with 95 events |
| Map | `maps.html` | Leaflet.js interactive map with routes |
| Glossary | `glossary.html` | Searchable dictionary (108 terms) |

### Routing Pattern

- **Root pages**: `docs/{pagename}.html` — use `./` path prefix
- **Detail pages**: `docs/{category}/{name}.html` — use `../` path prefix
- **Section deep-links**: Hash anchors `#{section}-section`
- **No server-side routing** — all static HTML files
- **Path detection**: `navbar.js` checks if current path includes `/people/`, `/places/`, `/events/`, or `/compositions/` to set `basePath` to `../` vs `./`

---

## CSS Dependencies

### External
- Bootstrap 4.5.2 CSS: `stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css`

### Internal
| File | Lines | Loaded On | Purpose |
|------|-------|-----------|---------|
| `css/styles.css` | 1,060 | All pages | Global layout, navbar, search, footer, mobile menu, responsive |
| `css/pages.css` | 532 | Detail pages only | Wikipedia-style TOC, info card, sections, images, collapsible UI |

### Inline Styles
- `index.html`: 350+ lines of inline `<style>` for hero, stats, life cards, features, timeline, explore grid
- `calendar.html`: 100+ lines for calendar year-grid, month-card, event-card, modal
- `maps.html`: 100+ lines for map controls, info panel, legend
- `glossary.html`: 100+ lines for dictionary cards, filters
- All listing pages have 15-30 lines of inline `<style>` for category-specific styling

---

## JS Dependencies

### External
| Library | Version | Used On | CDN |
|---------|---------|---------|-----|
| jQuery Slim | 3.5.1 | All pages | code.jquery.com |
| Popper.js | 1.16.1 | All pages | cdn.jsdelivr.net |
| Bootstrap JS | 4.5.2 | All pages | stackpath.bootstrapcdn.com |
| Moment.js | 2.29.1 | calendar.html | cdnjs.cloudflare.com |
| FullCalendar | 3.10.2 | calendar.html | cdnjs.cloudflare.com |
| Leaflet | 1.9.4 | maps.html | unpkg.com |

### Internal
| File | Lines | Loaded On | Purpose |
|------|-------|-----------|---------|
| `js/navbar.js` | 504 | All pages except 404 | Dynamic navbar injection, mobile menu, search bar wiring |
| `js/search.js` | 283 | All pages (in `<head>`) | `window.SEARCH_DATA` (45 items), autocomplete logic |
| `js/scripts.js` | 45 | Some pages (at bottom) | Legacy map/CSV code (mostly unused) |

---

## Search Architecture

Search data is centralized in `js/search.js` as `window.SEARCH_DATA` (45 items). This is the **single source of truth**.

- `navbar.js` reads from `window.SEARCH_DATA` for navbar autocomplete
- `search.html` reads from `window.SEARCH_DATA` for results page
- `search-data.json` is orphaned and NOT loaded

### Search Data Item Schema
```json
{
  "title": "Display Name",
  "url": "relative/path/to/page.html",
  "type": "person|place|event|composition",
  "keywords": "comma, separated, keywords",
  "image": "images/category_images/name.jpg"
}
```

### Search Item Counts
- People: 24
- Places: 16
- Events: 2
- Compositions: 3
- **Total: 45 searchable items**

### Autocomplete Behavior
- Filters by title and keywords (case-insensitive)
- Shows top 5 results in dropdown
- Color-coded type badges: Person=blue, Place=green, Event=yellow, Composition=teal
- On submit, redirects to `search.html?q={query}`

---

## Glossary Architecture

`glossary.html` has its own self-contained data system (independent of search):

- **108 terms** in `glossaryTerms` JS array
- **5 categories**: Person, Place, Concept, Composition, Event
- **Each term**: `{ name, definition, category, letter }`
- **termPageMap**: Maps terms to their detail page URLs (for ↗ link icons)
- **Filter**: By category buttons + real-time search
- **Color scheme**: Matches site accent `#C66A11`

---

## Calendar Architecture

`calendar.html` uses a custom hybrid UI:

- **Data**: 95 events across 8 color-coded categories (birth, family, travel, spiritual, composition, association, teaching, death)
- **Views**: Year (12-month mini-calendar grid), Month (FullCalendar 3.10.2), List (event cards)
- **Year range**: 1867–1901 (35 years, navigable via prev/next buttons)
- **Event sources**: Hardcoded JS array `EVENTS` with `{ title, date, end, category, desc }`
- **Modal**: Click events to see details

---

## Maps Architecture

`maps.html` uses Leaflet.js with OpenStreetMap tiles:

- **Data**: 28 places with coordinates, 35 yearly routes, 90+ events
- **Modes**: Year (slider 1867–1901), All Places, All Routes
- **Info panel**: Slide-in panel showing place details with events list
- **Legend**: Color-coded place categories (birthplace, family, spiritual, business, travel, final)
- **Responsive**: Panel becomes bottom-sheet on mobile (≤576px)

---

## #TODO-LINK System

Listing pages use `<a href="#TODO-LINK">Name</a>` for items that don't have detail pages yet. CSS in `styles.css` ensures these:
- Look like plain text (no blue, no underline, `cursor: default`)
- Have `pointer-events: none` (not clickable)

Items WITH real links get a subtle `›` indicator via CSS:
```css
.content-area ul li > a:not([href="#TODO-LINK"])::after {
    content: " ›";
    font-size: 0.75em;
    color: #C66A11;
    opacity: 0.6;
}
```

### Current #TODO-LINK Counts
| File | Count |
|------|-------|
| people.html | 61 |
| places.html | 29 |
| events.html | 54 |
| compositions.html | 39 |
| Detail pages (7 files) | 15 |
| **Total** | **198** |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤1024px | TOC becomes static, reduced font sizes, smaller padding |
| ≤992px | Explore grid → 3 columns (homepage) |
| ≤768px | Desktop nav hidden → hamburger menu, info card full-width, image cards full-width, main padding reduced, wiki-title/section-header font shrink |
| ≤576px | Calendar controls shrink, map legend moves to top, map info panel becomes bottom-sheet |
| ≤480px | Full-width mobile menu, tighter padding, timeline steps compact, hero image smaller, fullscreen image overlay full-height |
| ≤400px | Explore grid → 1 column |

---

## Image Inventory

### Available Images (24 files, excluding .DS_Store)
```
images/mission_logo.svg
images/index_images/Shrimad_Rajchandraji.jpg
images/index_images/gandhiji-shrimadji.webp
images/index_images/gurudev-shrimadji.webp
images/index_images/literary-works.jpeg
images/people_images/devba.jpg
images/people_images/gandhiji.jpg
images/people_images/javalben.jpg
images/people_images/jhabakben.jpg
images/people_images/juthabhai.jpg
images/people_images/pujyaGurudevshri.jpg (11MB)
images/people_images/ravjibhai.jpg
images/people_images/saubhagyabhai.jpg
images/people_images/vinaychandrabhaiPopatbhaiDaftary.jpg
images/events_images/firstChitrapat.JPG
images/compositions_images/Screenshot 2025-03-29 at 18.39.36 (2).JPG
images/compositions_images/Screenshot 2025-03-29 at 18.39.48 (2).JPG
images/places_images/mumbai/manibhavan.jpg
images/places_images/mumbai/mumbai-1893.jpg
images/places_images/vavaniya/vavaniya.jpg
```

### Pages That Reference Images Not On Disk
Some detail pages reference images (e.g., `bhagvanbhaiModi.jpg`, `brahmachariji.jpg`) in their HTML `src` attributes but these files don't exist on disk. The `<img>` tags will fail silently with broken images.

---

## Footer Structure

All pages share the same footer (injected by each page's HTML):
```
┌─────────────────────────────────────────────────────┐
│ About           │ Quick Links  │ Other Websites │ App│
│ Mission desc    │ Home         │ Website 1      │ iOS│
│                 │ About        │ Website 2      │And │
│                 │ Events       │ Website 3      │    │
│                 │ Contact      │                │    │
├─────────────────────────────────────────────────────┤
│     © 2026 Shrimad Rajchandra Mission Dharampur     │
└─────────────────────────────────────────────────────┘
```
Note: Footer quick links and other website links are `#` placeholders.

---

## Known Technical Debt

| Issue | Severity | Notes |
|-------|----------|-------|
| `scripts.js` mostly unused | Low | London coords, broken CSV fetch — legacy code |
| `search-data.json` orphaned | Low | Not loaded by any page |
| `databases/places.csv` sparse | Low | 30 names, 4 empty columns |
| Footer links are `#` placeholders | Medium | All footer nav links nonfunctional |
| 404 page has no navbar | Low | Missing navbar.js injection |
| ~10 image `src` attrs reference nonexistent files | Low | Broken image placeholders |
| 198 #TODO-LINK placeholders | Medium | Entries needing detail page creation |
| `pujyaGurudevshri.jpg` is 11MB | Medium | Should be compressed for web |

---

*Last updated: Session 6.*
