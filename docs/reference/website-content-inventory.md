# Website Content Inventory

> Complete content status of every page in the PKD Webapp.
> Updated after Session 6. For external AI agents.

---

## Summary

| Metric | Count |
|--------|-------|
| Total HTML pages | 55 |
| Root pages | 10 (index, people, places, events, compositions, calendar, maps, glossary, search, 404) |
| People detail pages | 24 |
| Places detail pages | 16 |
| Events detail pages | 2 |
| Compositions detail pages | 3 |
| Searchable items | 45 |
| Glossary terms | 108 |
| #TODO-LINK placeholders | 198 (183 listing + 15 detail) |

---

## Root Pages

### index.html (Home Page) — ✅ COMPLETE
- **Lines**: 694
- **Content**: Hero section with Param Krupalu Dev portrait, stats bar (33 years / 1000s lives / 142 verses / 900+ letters), 6 life milestone cards, literary works feature section, Gandhiji feature section, Pujya Gurudevshree section, timeline preview (8 key dates), 8 explore category cards
- **Status**: Fully written from book. Mobile responsive with breakpoints at 992px, 768px, 480px, 400px.

### people.html — ✅ COMPLETE
- **Lines**: 233
- **Structure**: 9 categories: Immediate Family, Wife & Children, In-Laws, Bhakt Ratnas, Close Devotees & Associates, Religious Scholars, Business Associates, Historical Figures, Other
- **Entries**: 85 total. 24 have detail page links, 61 are #TODO-LINK
- **Styling**: `.people-relation` grey descriptor spans, serif h3 headers

### places.html — ✅ COMPLETE
- **Lines**: 135
- **Structure**: 4 categories: Birth & Family Places, Cities of Spiritual Activities, Places of Teaching & Stay, Institutions & Ashrams
- **Entries**: 45 total. 16 have detail page links, 29 are #TODO-LINK
- **Styling**: `.place-detail` grey descriptor spans

### events.html — ✅ COMPLETE
- **Lines**: 721
- **Structure**: 30+ collapsible year-sections (V.S. 1924–1957), plus Pre-Birth and Post-Death sections
- **Entries**: ~54 linked events plus many descriptive entries
- **Styling**: `.events-section` collapsible with collapse-icon, `.section-content` toggle

### compositions.html — ✅ COMPLETE
- **Lines**: 147
- **Structure**: 6 categories: Major Philosophical Works, Devotional Compositions, Prose Works, Letters, Miscellaneous, Posthumous Publications
- **Entries**: 43 total. 3 have detail page links (atmasiddhi, mokshmala, bhavnabodh), 39 are #TODO-LINK
- **Styling**: `.comp-detail` grey descriptor spans

### calendar.html — ✅ COMPLETE (Session 6)
- **Lines**: 714
- **Features**: Year grid (12 mini-month calendars), Month view (FullCalendar), List view (event cards). Year navigation 1867–1901. 8 color-coded categories. Event modal with details. Category filter checkboxes.
- **Events**: 95 historical events from the book
- **Dependencies**: FullCalendar 3.10.2, Moment.js 2.29.1

### maps.html — ✅ COMPLETE (Session 6)
- **Lines**: 815
- **Features**: Interactive Leaflet.js map with OpenStreetMap tiles. 28 places with coordinates. 35 yearly routes (polylines). Year slider 1867–1901. Three modes: Year View, All Places, All Routes. Side info panel with place details/events. Legend with 6 place categories.
- **Dependencies**: Leaflet 1.9.4

### glossary.html — ✅ COMPLETE
- **Lines**: 1130
- **Terms**: 108 terms in 5 categories (Person, Place, Concept, Composition, Event)
- **Features**: Category filter buttons, real-time search, linked terms (↗ to detail pages via termPageMap)

### search.html — ✅ COMPLETE
- **Lines**: 331
- **Features**: Full search results page, reads from `window.SEARCH_DATA`, shows categorized results with images

### 404.html — MINIMAL
- Basic error page, no navbar injection

---

## People Detail Pages (24)

### Full Pages (with TOC + multiple sections)

| Page | Person | Sections | Image | Notes |
|------|--------|----------|-------|-------|
| juthabhai.html | Pujyashree Juthabhai Ujamshibhai | 7 | ✅ | First devotee. Full TOC. |
| saubhagyabhai.html | Shri Saubhagyabhai | 7 | ✅ | Business partner. Full TOC. |
| gandhiji.html | Mahatma Gandhi | 6 | ✅ | Separate from Bhakt Ratnas. Full TOC. |
| revashankarJagjivan.html | Shri Revashankarbhai Jagjivan | 5 | ✅ (missing on disk) | Business partner. Full TOC. |
| devba.html | Smt. Devbai (Devba) | 5 | ✅ | Mother. Full TOC. Has 2 #TODO-LINK. |
| ravjibhai.html | Shri Ravjibhai | 4 | ✅ | Father. Full TOC. Has 1 #TODO-LINK. |
| jhabakben.html | Smt. Jhabakben | 5 | ✅ | Wife. Full TOC. |
| ambalalbhai.html | Shri Ambalalbhai | 5 | ❌ (missing) | Key devotee. Full TOC. |
| lallujiMuni.html | Pujyashree Lalluji Muni | 6 | ❌ (missing) | Key monk devotee. Full TOC. |
| pujyaGurudevshri.html | Pujya Gurudevshri Rakeshbhai | 5 | ✅ (11MB) | Modern spiritual leader. Full TOC. |
| maneklalGhelabhai.html | Shri Maneklal Ghelabhai | 4 | ✅ (missing on disk) | Scholar. Moderate TOC. |
| vinaychandrabhaiPopatbhaiDaftary.html | Shri Vanechand Daftary | 3 | ✅ | Devotee. Moderate TOC. |

### Lead-Only Pages (no TOC, info card + lead paragraph only)

| Page | Person | Image | Notes |
|------|--------|-------|-------|
| bhagvanbhaiModi.html | Shri Bhagvanbhai Modi | ✅ (missing on disk) | Childhood friend |
| brahmachariji.html | Brahmachari Govardhandas | ✅ (missing on disk) | Religious scholar |
| chanchalben.html | Smt. Chanchalben | ✅ (missing on disk) | Granddaughter |
| chatrabhujbhaiBechar.html | Shri Chatrabhuj Bechar | ✅ (missing on disk) | Brother-in-law (Jetpar) |
| janbai.html | Smt. Janbai | ✅ (missing on disk) | Grandmother |
| javalben.html | Smt. Javalben | ✅ | Daughter |
| popatbhaiJagjivan.html | Shri Popatlalbhai Mehta | ✅ (missing on disk) | Father-in-law |
| pranjivandas.html | Dr. Pranjivandas Mehta | ✅ (missing on disk) | Wife's uncle, introduced Gandhiji |
| ranchodbhai.html | Shri Ranchodbhai | ✅ (missing on disk) | Son |
| shankarlalBhatt.html | Shri Shankarlal Bhatt | ✅ (missing on disk) | Family priest |
| shivkunvarben.html | Smt. Shivkunvarben | ✅ (missing on disk) | Eldest sister |
| tribhuvanBhanji.html | Shri Tribhuvanbhai Manekchand | ✅ (missing on disk) | Apprentice |

**Note**: "missing on disk" means the HTML references an image path but the image file doesn't exist in the `images/people_images/` directory. The page will show a broken image or blank space.

---

## Places Detail Pages (16)

All place pages have TOC + info card + multiple collapsible sections. All info cards have been rewritten with place-specific data.

| Page | Place | Status | Notes |
|------|-------|--------|-------|
| vavaniya.html | Vavaniya | ✅ Full | Birthplace. Most detailed. Has 4 #TODO-LINK. |
| morbi.html | Morbi | ✅ Full | Marriage, early married life |
| mumbai.html | Mumbai (Bombay) | ✅ Full | Major business/spiritual center. Has 1 #TODO-LINK. |
| ahmedabad.html | Ahmedabad | ✅ Full | First devotees, spiritual activities. Has 3 #TODO-LINK. |
| rajkot.html | Rajkot | ✅ Full | Avdhan performances. Has 2 #TODO-LINK. |
| idar.html | Idar | ✅ Full | Final years, health decline. Has 2 #TODO-LINK. |
| dharampur.html | Dharampur | ✅ Full | Final pilgrimage place |
| wadhwan.html | Wadhwan | ✅ Full | Business connections |
| khambhat.html | Khambhat (Cambay) | ✅ Full | Session 2 new page |
| kavitha.html | Kavitha | ✅ Full | Session 2 new page |
| uttarsanda.html | Uttarsanda | ✅ Full | Session 2 new page |
| agas.html | Agas | ✅ Full | Ashram location. Session 2 new page |
| jetpar.html | Jetpar | ✅ Brief | Sister's place, 0-2 sections |
| botad.html | Botad | ✅ Brief | 0-2 sections |
| jamnagar.html | Jamnagar | ✅ Brief | 0-2 sections |
| limbdi.html | Limbdi | ✅ Brief | 0-2 sections |

---

## Events Detail Pages (2)

| Page | Event | Status | Notes |
|------|-------|--------|-------|
| avdhan.html | Avdhan (Simultaneous Composition) | ✅ Full | Fully rewritten in Session 4. Multiple avdhan performances documented. |
| chitrapat.html | Chitrapat (Visual Art) | ✅ Full | Fully rewritten in Session 4. |

---

## Compositions Detail Pages (3)

| Page | Composition | Status | Notes |
|------|-------------|--------|-------|
| atmasiddhi.html | Atma Siddhi Shastra | ✅ Full | Created in Session 4. 142 verses. Most significant work. |
| mokshmala.html | Mokshmala | ✅ Full | First published work |
| bhavnabodh.html | Bhavnabodh | ✅ Full | Devotional composition |

---

## Cross-Reference Map

These pages link to each other. Use this to understand connections.

### Most Connected Pages
- **juthabhai.html**: Links to ahmedabad, mokshmala, ambalalbhai, lallujiMuni
- **gandhiji.html**: Links to pranjivandas, mumbai, rajkot
- **mumbai.html**: Links to juthabhai, saubhagyabhai, revashankarJagjivan, gandhiji
- **index.html**: Links to all listing pages, calendar, maps, glossary

### #TODO-LINK in Detail Pages
| File | Count | Missing Links |
|------|-------|---------------|
| devba.html | 2 | Raghavjibhai (grandfather), family members |
| ravjibhai.html | 1 | Panchanbhai (grandfather) |
| ahmedabad.html | 3 | Various associates |
| vavaniya.html | 4 | Family/community members |
| mumbai.html | 1 | Associate |
| idar.html | 2 | Associates |
| rajkot.html | 2 | Associates |

---

## CSS/JS Files Status

| File | Lines | Status | Notes |
|------|-------|--------|-------|
| css/styles.css | 1,060 | ✅ Updated | Has TODO-LINK styling, linked indicators, mobile fixes |
| css/pages.css | 532 | ✅ Updated | Has `display: flow-root` fix, 480px breakpoint added |
| js/navbar.js | 504 | ✅ Updated | Reads from `window.SEARCH_DATA` |
| js/search.js | 283 | ✅ Updated | `window.SEARCH_DATA` (45 items) — single source of truth |
| js/scripts.js | 45 | ⚠️ Legacy | Mostly unused, London coords, broken CSV path |
| js/search-data.json | — | ❌ Orphaned | Not loaded by any page |

---

## What to Work On Next (Priority Order)

1. **Create more detail pages** — 198 #TODO-LINK items need pages. Priority: events (54 TODOs, only 2 pages), compositions (39 TODOs, only 3 pages), then people (61 TODOs).
2. **Add missing images** — ~12 people pages reference images that don't exist on disk.
3. **Compress pujyaGurudevshri.jpg** — 11MB is too large for web.
4. **Footer links** — All footer quick links are `#` placeholders.
5. **Clean up scripts.js** — Remove unused London coordinates and broken CSV fetch.
6. **Remove search-data.json** — Orphaned file, not loaded anywhere.

---

*Last updated: Session 6.*
