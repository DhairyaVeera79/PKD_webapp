# Website JS Interactivity

> Complete documentation of all JavaScript in the PKD Webapp.
> Updated after Session 6.

---

## Files Overview

| File | Lines | Loaded On | Purpose |
|------|-------|-----------|---------|
| `js/search.js` | 283 | All pages (`<head>`) | `window.SEARCH_DATA` (45 items) — single source of truth for search |
| `js/navbar.js` | 504 | All pages (`<head>`) | Dynamic navbar injection, mobile menu, search bar, autocomplete wiring |
| `js/scripts.js` | 45 | Some pages (bottom) | Legacy — mostly unused London map coords + CSV fetch |

---

## 1. search.js — Search Data & Autocomplete

### What It Does
1. Defines `window.SEARCH_DATA` — the centralized array of 45 searchable items
2. Provides autocomplete filtering logic
3. Exports `window.getSearchData()` function for backward compatibility

### SEARCH_DATA Schema
```javascript
window.SEARCH_DATA = [
    {
        title: "Display Name",           // e.g., "Pujyashree Juthabhai Ujamshibhai"
        url: "people/juthabhai.html",     // relative path (no ./ prefix)
        type: "person",                   // person | place | event | composition
        keywords: "comma, separated",     // search keywords
        image: "images/.../name.jpg"      // optional image path
    },
    // ... 45 total items
];
```

### Search Item Counts
- People: 24 (all detail pages)
- Places: 16 (all detail pages)
- Events: 2 (avdhan, chitrapat)
- Compositions: 3 (atmasiddhi, mokshmala, bhavnabodh)

### How to Add a New Searchable Item
Add an entry to the `window.SEARCH_DATA` array in `js/search.js`. No other files need updating — `navbar.js` and `search.html` consume from this array.

---

## 2. navbar.js — Dynamic Navbar + Mobile Menu

### What It Does
1. **Navbar injection**: On `DOMContentLoaded`, generates and injects the full navbar HTML into the page
2. **Path detection**: Checks if current URL contains `/people/`, `/places/`, `/events/`, or `/compositions/` to set `basePath` (`../` for detail pages, `./` for root pages)
3. **Active page highlighting**: Sets `.active` class on the current page's nav link
4. **Desktop search**: Creates search input with autocomplete dropdown, reads from `window.SEARCH_DATA`
5. **Mobile menu**: Creates hamburger toggle, slide-in panel with nav links and search, handles open/close/overlay/escape-key/outside-click

### Key Functions

| Function | Purpose |
|----------|---------|
| `generateNavbar()` | Main entry — builds and injects navbar HTML |
| `setupSearch()` | Wires desktop autocomplete: input → filter SEARCH_DATA → show dropdown |
| `setupMobileMenu()` | Wires hamburger toggle, close button, overlay, escape key |
| `performSearch(query)` | Redirects to `search.html?q={query}` |

### Navigation Items (hardcoded in navbar.js)
```javascript
const navItems = [
    { name: 'Home', page: 'index.html' },
    { name: 'Events', page: 'events.html' },
    { name: 'People', page: 'people.html' },
    { name: 'Places', page: 'places.html' },
    { name: 'Compositions', page: 'compositions.html' },
    { name: 'Calendar', page: 'calendar.html' },
    { name: 'Map', page: 'maps.html' },
    { name: 'Glossary', page: 'glossary.html' }
];
```

### Logo & Branding
- Logo image: `{basePath}images/mission_logo.svg`
- Links to: `{basePath}index.html`

---

## 3. scripts.js — Legacy (Mostly Unused)

Contains:
- London map coordinates (51.505, -0.09) — wrong location
- Fetch from `/static/data.csv` — file doesn't exist
- PlotMap function — never called
- **Should be removed or refactored**

---

## 4. Inline Scripts — Detail Pages

Every detail page (`people/*.html`, `places/*.html`, etc.) contains inline `<script>` at the bottom with these behaviors:

### Collapsible Sections
```javascript
// Toggle section visibility
const sections = document.querySelectorAll('.wiki-section.collapsible');
sections.forEach(section => {
    const header = section.querySelector('.section-header');
    const content = section.querySelector('.section-content');
    header.addEventListener('click', () => {
        section.classList.toggle('active');
        content.style.display = section.classList.contains('active') ? 'block' : 'none';
    });
});
```

### Expand/Collapse All
```javascript
document.getElementById('expand-all').addEventListener('click', () => {
    document.querySelectorAll('.wiki-section').forEach(s => {
        s.classList.add('active');
        s.querySelector('.section-content').style.display = 'block';
    });
});
document.getElementById('collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.wiki-section').forEach(s => {
        s.classList.remove('active');
        s.querySelector('.section-content').style.display = 'none';
    });
});
```

### TOC Scroll Spy
```javascript
// Highlights current section in TOC based on scroll position
window.addEventListener('scroll', () => {
    const allSections = document.querySelectorAll('.wiki-section');
    let currentSection = '';
    allSections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });
    document.querySelectorAll('.wiki-toc-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
    });
});
```

### TOC Collapse Button (for mobile/tablet)
```javascript
const tocCollapseButton = document.querySelector('.toc-collapse-button');
const wikiToc = document.querySelector('.wiki-toc');
if (window.innerWidth <= 1024) {
    tocCollapseButton.style.display = 'block';
    wikiToc.style.display = 'none';
}
tocCollapseButton.addEventListener('click', () => {
    wikiToc.style.display = wikiToc.style.display === 'none' ? 'block' : 'none';
});
```

### Fullscreen Image Lightbox
```javascript
// Click expandable images to show fullscreen overlay
document.querySelectorAll('.expandable-image').forEach(img => {
    img.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImg.src = img.src;
        captionEl.textContent = img.closest('.wiki-info-card, .image-card')
            ?.querySelector('.image-caption, .image-card-caption')?.textContent || '';
    });
});
```

### Hash Scroll on Load
```javascript
// If URL has a hash, scroll to that section and expand it
if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
        const section = target.closest('.wiki-section');
        if (section) {
            section.classList.add('active');
            section.querySelector('.section-content').style.display = 'block';
        }
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
}
```

---

## 5. Inline Scripts — Calendar (calendar.html)

### Data Structure
```javascript
const EVENTS = [
    { title: "Event Name", date: "1867-11-10", end: null, category: "birth", desc: "Description" },
    // ... 95 events
];
const CATEGORIES = {
    birth: { label: "Birth & Early Life", color: "#C66A11" },
    family: { label: "Family Events", color: "#8B4513" },
    travel: { label: "Travel & Journeys", color: "#2E86C1" },
    spiritual: { label: "Spiritual Milestones", color: "#7D3C98" },
    composition: { label: "Compositions", color: "#27AE60" },
    association: { label: "Key Associations", color: "#D4AC0D" },
    teaching: { label: "Teaching Activities", color: "#E74C3C" },
    death: { label: "Final Days & Legacy", color: "#566573" }
};
```

### Views
1. **Year View**: 12 mini-month calendars in a grid. Days with events get colored dots. Click month → Month view.
2. **Month View**: FullCalendar 3.10.2 integration. Events shown on calendar cells. Click event → modal.
3. **List View**: Simple chronological event cards with date + category badge + title + description.

### Year Navigation
- Prev/Next buttons to change year (1867–1901 range)
- Year label shows both CE and V.S. dates

---

## 6. Inline Scripts — Maps (maps.html)

### Data Structure
```javascript
const PLACES = [
    { name: "Vavaniya", lat: 23.007, lng: 70.610, category: "birth", desc: "..." },
    // ... 28 places
];
const ROUTES = {
    1867: [{ from: "Vavaniya", to: "Morbi", events: [...] }],
    // ... 35 years of routes
};
```

### Modes
1. **Year View**: Slider 1867–1901. Shows places visited that year + routes (polylines).
2. **All Places**: Shows all 28 places at once.
3. **All Routes**: Shows all 35 years of routes simultaneously.

### Info Panel
- Slide-in panel (right side, 320px) showing place details
- Becomes bottom-sheet on mobile (≤576px)
- Shows place name, category, description, events list

### Map Features
- Leaflet.js with OpenStreetMap tiles
- Custom markers with colored circles matching category
- Polylines for routes (blue, dashed)
- Legend showing 6 category colors
- Zoom to Gujarat region by default

---

## 7. Inline Scripts — Listing Pages

### events.html
Collapsible year-sections using same pattern as detail pages:
```javascript
document.querySelectorAll('.events-section .section-header').forEach(header => {
    header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('active');
        const content = section.querySelector('.section-content');
        content.style.display = section.classList.contains('active') ? 'block' : 'none';
    });
});
```

### glossary.html
- Category filter buttons (All, Person, Place, Concept, Composition, Event)
- Real-time search filtering
- `termPageMap` object mapping term names to page URLs for ↗ link icons
- Alphabet letter filtering

---

## 8. Inline Scripts — search.html

### Query Processing
```javascript
// Read query from URL parameter
const params = new URLSearchParams(window.location.search);
const query = params.get('q');

// Filter SEARCH_DATA
const results = window.SEARCH_DATA.filter(item => {
    const q = query.toLowerCase();
    return item.title.toLowerCase().includes(q) || 
           item.keywords.toLowerCase().includes(q);
});
```

### Result Display
- Groups results by type (People, Places, Events, Compositions)
- Shows result cards with image, title, type badge, keywords
- Links to detail pages
- "No results" state with category browse links

---

*Last updated: Session 6.*
