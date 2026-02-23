# Website CSS System

> Complete documentation of the CSS architecture for the PKD Webapp.
> Updated after Session 6.

---

## Files

| File | Lines | Scope |
|------|-------|-------|
| `css/styles.css` | 1,060 | Global: navbar, search, footer, mobile menu, responsive, TODO-LINK styling |
| `css/pages.css` | 532 | Detail pages: Wikipedia-style TOC, info card, sections, images, collapsible UI |
| Inline `<style>` | Varies | Page-specific: index.html (~350 lines), calendar.html (~100), maps.html (~100), glossary.html (~100), each listing page (15-30) |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Accent | `#C66A11` | Active nav, hover, buttons, links, section tags, legends |
| Accent dark | `#A55A0E` / `#a85500` | Button hover states |
| Background | `#EFEDE7` | Header, hero gradient start |
| Background dark | `#e8e2d8` | Hero gradient end |
| Text primary | `#333` | Body text, headings |
| Text secondary | `#72777d` | TOC links, collapse icons, descriptors |
| Text muted | `#666` / `#888` | Image captions, listing descriptors, stats labels |
| Borders | `#a2a9b1` | Section headers, info card, wiki borders |
| Borders light | `#e0e0e0` / `#ddd` | HR lines, light separators |
| Card bg | `#f8f9fa` | Info cards, image cards, wiki background |
| Card bg alt | `#f1f1f1` | Info table even rows |
| Info card header | `#e6e6e6` | Info card header row |
| Footer bg | `#333` | Footer background |
| Footer text | `#fff` | Footer text |
| Link default | `#3366cc` | Wiki content links |
| Link hover | `#004182` | Wiki content links hover |
| Search badge (person) | `#007bff` | Blue |
| Search badge (place) | `#28a745` | Green |
| Search badge (event) | `#ffc107` | Yellow |
| Search badge (composition) | `#17a2b8` | Teal |

---

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | Helvetica Neue, Arial, sans-serif | 400 | 1rem |
| Wiki titles | Linux Libertine, Georgia, Times, serif | normal | ~2rem |
| Section headers | Linux Libertine, Georgia, Times, serif | normal | 1.5em (1.2em on mobile) |
| Listing h3 | Linux Libertine, Georgia, Times, serif | normal | default |
| Nav links | inherited | 400 (bold effect via text-shadow on hover) | 1rem (0.9rem tablet) |
| Info card | inherited | — | 0.875em |
| Descriptors (.people-relation, .place-detail, .comp-detail) | inherited | — | 0.9em / 0.92em |

---

## Layout System

### Global Layout (styles.css)
```
┌──────────────────── header (fixed, 80px, bg: #EFEDE7) ──────────────────┐
│ logo | nav links (desktop) | search bar | hamburger (mobile)           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  main (padding-top: 90px; padding-left/right: 25px)                    │
│  ┌─── container (max-width: 100%) ───────────────────────────────┐     │
│  │ Page-specific content                                          │     │
│  └────────────────────────────────────────────────────────────────┘     │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ footer (bg: #333, 4-column layout)                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

### Detail Page Layout (pages.css)
```
┌────────────────────────────────────────────────────────┐
│ wiki-toc (fixed left, 140px)  │  wiki-main (flex: 1)   │
│ ┌──────────────────┐          │  ┌──────────────────┐  │
│ │ Contents         │          │  │ wiki-title        │  │
│ │ • Section 1      │          │  ├──────────────────┤  │
│ │ • Section 2      │          │  │ wiki-info-card   │←float:right
│ │ • Section 3      │          │  │ (350px)          │  │
│ │ ...              │          │  ├──────────────────┤  │
│ └──────────────────┘          │  │ wiki-content     │←display:flow-root
│                               │  │ (flows beside    │  │
│                               │  │  info card)      │  │
│                               │  │ wiki-section 1   │  │
│                               │  │ wiki-section 2   │  │
│                               │  │ ...              │  │
│                               │  └──────────────────┘  │
└────────────────────────────────────────────────────────┘
```

Key: `.wiki-content { display: flow-root; }` creates a block formatting context so content sits properly beside the floated info card without whitespace gaps.

---

## Key CSS Classes

### Navbar (styles.css)
| Class | Purpose |
|-------|---------|
| `.navbar-container` | Flex container for the header |
| `.navbar-brand` | Logo container |
| `.navbar-nav-desktop` | Desktop nav links list |
| `.navbar-search` | Desktop search bar container |
| `.mobile-menu-toggle` | Hamburger button (visible ≤768px) |
| `.navbar-nav-mobile` | Slide-in mobile menu panel |
| `.mobile-nav-link` | Individual mobile nav items |
| `.mobile-search` | Mobile search form |

### Search (styles.css)
| Class | Purpose |
|-------|---------|
| `.search-input-wrapper` | Search input container with icon |
| `.autocomplete-results` | Desktop search dropdown |
| `.autocomplete-item` | Individual search result in dropdown |
| `.search-result-card` | Result card on search.html |
| `.mobile-autocomplete-results` | Mobile search dropdown |

### Detail Pages (pages.css)
| Class | Purpose |
|-------|---------|
| `.wiki-toc` | Fixed left table of contents |
| `.wiki-toc-link` | TOC navigation link |
| `.wiki-toc-link.active` | Currently scrolled-to section |
| `.wiki-container` | Flex row: toc + main |
| `.wiki-main` | Main content area (flex: 1) |
| `.wiki-title` | Page title (h1, serif, border-bottom) |
| `.wiki-info-card` | Right-floated info card (350px) |
| `.info-card-header` | Info card header row |
| `.info-table` | Info card data table |
| `.info-label` | Bold left column (40% width) |
| `.card-image` | Info card image (width: 100%, auto height) |
| `.wiki-content` | Content wrapper (display: flow-root) |
| `.wiki-lead` | First paragraph (intro text) |
| `.wiki-section` | Collapsible section container |
| `.section-header` | Section h2 with collapse toggle |
| `.collapse-icon` | Rotatable › arrow |
| `.section-content` | Collapsible section body |
| `.image-card` | Inline image with caption (350px, floatable) |
| `.image-card.left-aligned` | Float left |
| `.image-card.right-aligned` | Float right |
| `.expandable-image` | Click-to-fullscreen image |
| `.fullscreen-image-overlay` | Fullscreen lightbox overlay |

### Listing Pages (inline styles)
| Class | Page | Purpose |
|-------|------|---------|
| `.people-relation` | people.html | Grey descriptor text for person entries |
| `.place-detail` | places.html | Grey descriptor text for place entries |
| `.comp-detail` | compositions.html | Grey descriptor text for composition entries |
| `.events-section` | events.html | Collapsible year section |
| `.content-area` | All listing pages | Main content wrapper |

### TODO-LINK & Indicators (styles.css)
| Selector | Purpose |
|----------|---------|
| `a[href="#TODO-LINK"]` | Plain text style — no blue, no underline, no pointer, no click |
| `.content-area ul li > a:not([href="#TODO-LINK"])::after` | Subtle › indicator for linked items |

---

## Responsive Breakpoints

### styles.css breakpoints
| Breakpoint | Changes |
|------------|---------|
| `≤1024px` | Navbar padding reduced, search input narrower, nav links smaller |
| `≤768px` | Desktop nav/search hidden, hamburger shown, main padding 80px 15px, scroll-padding-top 80px |
| `≤480px` | Full-width mobile menu, main padding 75px 10px, container padding 12px |

### pages.css breakpoints
| Breakpoint | Changes |
|------------|---------|
| `≤1024px` | TOC becomes static (not fixed), wiki-container margin-left: 0 |
| `≤768px` | Wiki-container column layout, info card full-width (no float), image cards centered + full-width, title 1.5rem, section-header 1.2em |
| `≤480px` | Wiki-container padding 10px, info-table cells smaller (4px 6px, 0.8rem), fullscreen overlay full-height |

### index.html breakpoints
| Breakpoint | Changes |
|------------|---------|
| `≤992px` | Explore grid → 3 columns |
| `≤768px` | Hero stacks vertically, stats → 2 columns, life cards → 1 column, features stack, explore → 2 columns, timeline steps smaller |
| `≤480px` | Hero image 200px, hero h1 1.6rem, stat numbers 1.8rem, timeline steps 33% width |
| `≤400px` | Explore grid → 1 column |

### calendar.html breakpoints
| Breakpoint | Changes |
|------------|---------|
| `≤992px` | Year grid → 3 columns |
| `≤576px` | Year grid → 2 columns, year-nav compact, FullCalendar toolbar wraps, event cards stack |

### maps.html breakpoints
| Breakpoint | Changes |
|------------|---------|
| `≤768px` | Info panel → 280px, controls bar tighter, map height adjusted |
| `≤576px` | Info panel → full-width bottom-sheet, legend moves top-left, controls stack vertically |

---

## z-index Layers

| z-index | Element |
|---------|---------|
| 100 | `.wiki-toc`, `.toc-collapse-button` |
| 999 | Map legend (mobile) |
| 1000 | `header` (fixed navbar), `.fullscreen-image-overlay` |
| 1001 | `.navbar-nav-mobile` (slide-in panel) |
| 1002 | `.mobile-autocomplete-results` |

---

## Animations & Transitions

| Element | Effect | Duration |
|---------|--------|----------|
| Nav links | translateY(-1px) + text-shadow on hover | 0.3s ease |
| Collapse icon | rotate(90deg) when section active | 0.2s ease |
| Mobile menu | slide from right (-100% → 0) | 0.4s cubic-bezier |
| Mobile overlay | fadeIn opacity 0→1 | 0.3s ease |
| Image cards | opacity 0.9 on hover | 0.3s |
| Calendar month cards | translateY(-2px) + box-shadow on hover | 0.15s / 0.2s |
| Search cards | translateY(-4px) + box-shadow on hover | 0.3s |

---

*Last updated: Session 6.*
