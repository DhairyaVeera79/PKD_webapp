# PKD Webapp — Master Project Memory

> **Single source of truth for the entire project.**  
> Read this file first to understand the project and find any reference you need.
> This file is designed for external AI agents to have full project context.

---

## Project Summary

| Field | Value |
|-------|-------|
| **Project** | Param Krupalu Dev (PKD) Webapp |
| **Purpose** | Informational website about Shrimad Rajchandraji's life, teachings, compositions, associated people, places, and events |
| **Tech Stack** | Static HTML, CSS, vanilla JS, Bootstrap 4.5.2 (CDN) |
| **Hosting** | GitHub Pages from `docs/` folder |
| **Subject** | Shrimad Rajchandraji (1867–1901), also referred to reverently as Param Krupalu Dev in narrative text |
| **Source Material** | "Shrimad Rajchandra – Saga of Spirituality" by Pujya Gurudevshri Rakeshbhai |
| **Workspace** | `/Users/dhairyaveera/SRMD/PKD_webapp/` |
| **Copyright** | © 2026 Shrimad Rajchandra Mission Dharampur |

---

## Naming Convention (CRITICAL)

When referring to Shrimad Rajchandraji in **narrative/biographical text** (actions, meetings, travels, descriptions), use **"Param Krupalu Dev"** out of reverence and respect. Example: "Param Krupalu Dev travelled to Mumbai" or "Param Krupalu Dev composed Atma Siddhi."

**Preserve the full formal name** in these cases:
- Full name references: "Shrimad Rajchandraji" or "Shrimad Rajchandra"
- Organization name: "Shrimad Rajchandra Mission Dharampur"
- Book titles: "Shrimad Rajchandra – Saga of Spirituality"
- Copyright/footer text: "© 2026 Shrimad Rajchandra Mission Dharampur"
- Page titles where it's the formal name

When referring to Him in third person, capitalize pronouns: **He, Him, His** (not he, him, his). Lowercase he/him/his is only for other people (Juthabhai, Gandhiji, etc.).

Bhakt Ratnas (close devotees) are addressed as **"Pujyashree"** (not "Pujyashri").

---

## Reference File Index

All reference/memory files are in `docs/reference/`. This is the complete index:

### Book Reference (Ground Truth)

These files contain extracted and organized information from the source PDF book.
**Every fact on the website must be verified against these files.**

| File | Contents | Use When |
|------|----------|----------|
| [README.md](README.md) | Book metadata, quick overview of Param Krupalu Dev, chapter structure, key terminology | Need book-level context, key dates/facts, or terminology definitions |
| [chronology.md](chronology.md) | Complete year-by-year timeline V.S. 1924–1957 (1867–1901 AD) | Need to know what happened in a specific year, verify dates, populate calendar |
| [people.md](people.md) | 100+ people — family, devotees, associates, historical figures, with family tree | Writing content for any person page, verifying relationships/roles |
| [places.md](places.md) | All places with significance, events that occurred there, institutions | Writing content for any place page, verifying locations |
| [compositions.md](compositions.md) | All literary works — date, location, content summary, significance | Writing content for any composition page |
| [events.md](events.md) | Key events and incidents organized by theme | Writing content for any event page, populating events timeline |
| [teachings.md](teachings.md) | Core spiritual concepts, philosophical terms, teachings | Writing glossary definitions, adding conceptual context |
| [quotes.md](quotes.md) | Direct quotes from Param Krupalu Dev and about Him, with sources | Adding authentic quotes to any page |

### Website Documentation

These files document the existing website's architecture, patterns, and content.
**Consult before making any changes to ensure consistency.**

| File | Contents | Use When |
|------|----------|----------|
| [website-architecture.md](website-architecture.md) | Complete site structure, directory tree, navigation, CSS/JS dependencies, search architecture | Need to understand how the site works, what files exist |
| [website-css-system.md](website-css-system.md) | Color palette, typography, layout system, all CSS classes, responsive breakpoints | Styling any element, creating new pages, debugging layout |
| [website-js-interactivity.md](website-js-interactivity.md) | All JS modules, navbar injection logic, search system, detail page inline scripts | Adding interactivity, understanding navigation, modifying search |
| [website-content-inventory.md](website-content-inventory.md) | Content status of every page, cross-reference map, image inventory | Deciding what to work on next, finding content gaps |
| [website-page-templates.md](website-page-templates.md) | Exact HTML templates for detail pages and listing pages, info card fields, section ID conventions | Creating any new page, following the right structure |

---

## Quick Reference

### Color Scheme
| Token | Hex |
|-------|-----|
| Accent (active/hover) | `#C66A11` |
| Background (header/hero) | `#EFEDE7` |
| Text | `#333` |
| Footer | `#333` bg, `#fff` text |
| Section tag | `#C66A11` |
| Hero gradient | `#EFEDE7` → `#e8e2d8` |

### Key Dimensions
| Element | Value |
|---------|-------|
| Navbar height | 80px (70px on mobile) |
| TOC width | 140px (static below 1024px) |
| Info card width | 350px (full-width below 768px) |
| Mobile breakpoint | 768px |
| Tablet breakpoint | 1024px |
| Small phone breakpoint | 480px |

### Page Counts (Current)
| Category | Detail Pages | Listed on Main Page | #TODO-LINK Placeholders |
|----------|-------------|---------------------|------------------------|
| People | 24 | 85 entries in 9 categories | 61 on listing, 3 in detail pages |
| Places | 16 | 45 entries in 4 categories | 29 on listing, 12 in detail pages |
| Events | 2 | ~54 events across 30+ year sections | 54 on listing |
| Compositions | 3 | 43 entries in 6 categories | 39 on listing |
| **Total** | **45** | **~227** | **183 listing + 15 detail = 198** |

### Navigation Items (order)
Home → Events → People → Places → Compositions → Calendar → Map → Glossary

---

## External Dependencies

| Library | Version | Used On | CDN |
|---------|---------|---------|-----|
| Bootstrap CSS | 4.5.2 | All pages | stackpath.bootstrapcdn.com |
| jQuery Slim | 3.5.1 | All pages | code.jquery.com |
| Popper.js | 1.16.1 | All pages | cdn.jsdelivr.net |
| Bootstrap JS | 4.5.2 | All pages | stackpath.bootstrapcdn.com |
| FullCalendar | 3.10.2 | calendar.html | cdnjs.cloudflare.com |
| Moment.js | 2.29.1 | calendar.html | cdnjs.cloudflare.com |
| Leaflet | 1.9.4 | maps.html | unpkg.com |
| OpenStreetMap | — | maps.html (tiles) | tile.openstreetmap.org |

---

## Critical Rules

1. **Ground Truth**: All content must be verified against the book reference files. The PDF book is the authoritative source.

2. **Naming**: Use "Param Krupalu Dev" in narrative text. Keep "Shrimad Rajchandraji" in formal names, org names, book titles, and copyright. See Naming Convention section above.

3. **Template Consistency**: All detail pages must follow the Wikipedia-style template (TOC + info card + collapsible sections). See [website-page-templates.md](website-page-templates.md).

4. **Search Data**: When adding new pages, update `window.SEARCH_DATA` array in `js/search.js` (single source of truth). navbar.js and search.html consume from this. See [website-js-interactivity.md](website-js-interactivity.md).

5. **Path Convention**: Root pages use `./` paths, subdirectory pages use `../` paths. The navbar handles this automatically via `basePath` detection.

6. **Section IDs**: Always end with `-section`, use kebab-case, must be unique within a page.

7. **Image Organization**: `images/{category}_images/{pagename}/` subdirectories.

8. **#TODO-LINK Convention**: Listing pages use `<a href="#TODO-LINK">Name</a>` for items without detail pages. CSS makes these look like plain text (no blue, no underline, no pointer). Items with real links get a subtle › indicator via CSS.

9. **Bhakt Ratna Prefix**: Close devotees are prefixed "Pujyashree" (e.g., "Pujyashree Juthabhai").

---

## Known Technical Debt

| Issue | Severity | Location | Notes |
|-------|----------|----------|-------|
| scripts.js mostly unused | Low | js/scripts.js | London coords, broken CSV fetch — legacy code |
| search-data.json orphaned | Low | js/search-data.json | Not loaded by any page |
| databases/places.csv sparse | Low | databases/places.csv | 30 names, 4 empty columns |
| Footer links point to # | Medium | All pages | Footer nav links are placeholders |
| 404 page has no navbar | Low | 404.html | Missing navbar.js injection |
| Some images referenced but missing | Low | Various detail pages | Image src points to files that don't exist yet |
| 198 #TODO-LINK placeholders | Medium | Listing + detail pages | Entries that need detail page creation |

---

## Change Log

### Session 1: Listing Page Rewrites
**Scope**: Rewrote all 4 listing pages for completeness and accuracy from the book.

| Page | Before | After |
|------|--------|-------|
| events.html | 24 sparse year-sections | 30+ sections, ~54 events with collapsible UI |
| people.html | 3 categories, 38 items | 9 categories, 85 entries |
| places.html | Flat list, 30 items | 4 categories, 45 entries |
| compositions.html | 1 flat list, 17 items | 6 categories, 43 entries |

### Session 2: Place Detail Pages (16 complete)
Full rewrites (8), new pages (4: khambhat, kavitha, uttarsanda, agas), brief rewrites (4). All info cards replaced with place-specific data.

### Session 3: People Detail Pages (21 → 24 complete)
Full rewrites (7), moderate (5), brief (9+2). All Morbi placeholder info cards replaced. 3 new pages added (ambalalbhai, lallujiMuni, pujyaGurudevshri).

### Session 4: Events + Compositions Pages
2 event pages (avdhan, chitrapat) fully rewritten. 1 new composition page (atmasiddhi) created. Cross-links resolved across site. Glossary expanded to 98 terms.

### Session 5: Site-wide Cleanup
54 #TODO-LINK placeholders resolved across 8 files. Memory files created for all reference docs.

### Session 6: Major Feature Updates
| Change | Detail |
|--------|--------|
| **Search centralization** | `window.SEARCH_DATA` (45 items) now in search.js as single source of truth. navbar.js and search.html consume it. |
| **Calendar rewrite** | 714 lines, 95 events, 8 color-coded categories, year/month/list views, date range 1867–1901 |
| **Maps rewrite** | 815 lines, Leaflet.js with OpenStreetMap, 28 places, 35 yearly routes, 90+ events, year/all/routes modes |
| **Homepage rewrite** | 694 lines, hero with image, stats bar (33 years, 1000s lives, 142 verses, 900+ letters), 6 life cards, literary works feature, Gandhiji feature, Pujya Gurudevshree section, timeline preview, 8 explore cards |
| **Naming convention** | "Shrimadji" and standalone "Shrimad" → "Param Krupalu Dev" in all narrative text (599 replacements, 54 files). Formal names preserved. |
| **Copyright update** | "Copyright 2025" → "Copyright 2026" (54 files) |
| **Glossary expansion** | 98 → 108 terms (added terms for new compositions, events, concepts) |
| **Pujya Gurudevshree image** | Added 11MB photo to info card on pujyaGurudevshri.html |
| **CSS: Whitespace fix** | `display: flow-root` on `.wiki-content` to fix info card float gap |
| **CSS: TODO-LINK styling** | `a[href="#TODO-LINK"]` has no blue/underline/pointer — looks like plain text |
| **CSS: Linked indicators** | `.content-area ul li > a:not([href="#TODO-LINK"])::after` shows subtle › arrow |
| **Mobile responsiveness** | Added 480px breakpoint to pages.css, fixed main padding at 768px/480px, image-card width reset, timeline-steps responsive, explore-grid 992px breakpoint, calendar/maps mobile fixes |

---

## Workflow for Content Updates

### Adding Content to an Existing Page
1. Look up facts in the relevant book reference file (people.md, places.md, etc.)
2. Check [website-content-inventory.md](website-content-inventory.md) for current page status
3. Follow the existing section structure and HTML patterns
4. Use "Param Krupalu Dev" in narrative text (see Naming Convention)
5. Verify cross-links point to valid pages
6. Test hash-based deep links

### Creating a New Detail Page
1. Follow the complete checklist in [website-page-templates.md](website-page-templates.md)
2. Research content from multiple reference files (chronology + people + places + events)
3. Create page-specific info card data
4. Update `window.SEARCH_DATA` in `js/search.js`
5. Update glossary.html if new terms introduced
6. Update listing page: change `#TODO-LINK` to real path
7. Add cross-links from related existing pages

### Fixing Template Content
1. Identify pages with wrong content using [website-content-inventory.md](website-content-inventory.md)
2. Look up correct content in book reference files
3. Replace templated sections with accurate, page-specific content
4. Keep the HTML structure and CSS classes intact
5. Update info card with correct data; use "Param Krupalu Dev" in narrative

---

*Last updated: Session 6. This file should be updated whenever significant structural changes are made to the website.*
