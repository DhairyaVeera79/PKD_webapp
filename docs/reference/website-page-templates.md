# Website Page Templates

> HTML templates and conventions for creating new pages in the PKD Webapp.
> Updated after Session 6.

---

## Template 1: Detail Page (Wikipedia-style)

This template is used for all pages in `people/`, `places/`, `events/`, and `compositions/` subdirectories.

### Required CSS/JS
- `../css/styles.css` (global styles)
- `../css/pages.css` (detail page layout — TOC, info card, sections)
- Bootstrap 4.5.2 CSS (CDN)
- `../js/search.js` (search data, loaded in `<head>`)
- `../js/navbar.js` (navbar injection, loaded in `<head>`)
- jQuery Slim 3.5.1, Popper.js 1.16.1, Bootstrap 4.5.2 JS (CDN, at bottom)

### Key Naming Convention
Use "Param Krupalu Dev" in all narrative/biographical text. Keep "Shrimad Rajchandraji" only in formal names, org names, book titles, copyright. Capitalize He/Him/His when referring to Param Krupalu Dev.

### Full Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Page Title}</title>
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/pages.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="../js/search.js"></script>
  <script src="../js/navbar.js"></script>
</head>
<body>
  <!-- Navbar is injected automatically by navbar.js -->

  <!-- TABLE OF CONTENTS (fixed left sidebar, becomes static on mobile) -->
  <nav class="wiki-toc">
    <div class="wiki-toc-title">Contents</div>
    <hr>
    <ul class="wiki-toc-list">
      <li class="wiki-toc-item"><a href="#section1-section" class="wiki-toc-link">Section 1 Title</a></li>
      <li class="wiki-toc-item"><a href="#section2-section" class="wiki-toc-link">Section 2 Title</a></li>
      <li class="wiki-toc-item"><a href="#section3-section" class="wiki-toc-link">Section 3 Title</a></li>
    </ul>
  </nav>

  <!-- FULLSCREEN IMAGE OVERLAY (hidden by default) -->
  <div class="fullscreen-image-overlay" style="display: none;">
    <span class="close-fullscreen">&times;</span>
    <img class="fullscreen-image-content" src="" alt="Fullscreen view">
    <div class="image-caption-fullscreen"></div>
  </div>

  <!-- MAIN CONTENT AREA -->
  <div class="wiki-main">
    <button class="toc-collapse-button" style="display: none;" aria-label="Show table of contents"></button>
    <h1 class="wiki-title">{Page Title}</h1>

    <!-- INFO CARD (right-floated sidebar, 350px, full-width on mobile) -->
    <div class="wiki-info-card">
      <div class="info-card">
        <div class="card-image-container">
          <img src="../images/{category}_images/{name}.jpg" 
               alt="{Alt text}" 
               class="card-image expandable-image">
          <div class="image-caption">{Image caption}</div>
        </div>
        <table class="info-table">
          <tr>
            <th colspan="2" class="info-card-header">{Short Title}</th>
          </tr>
          <tr>
            <td class="info-label">Born</td>
            <td class="info-value">{Birth date}</td>
          </tr>
          <tr>
            <td class="info-label">Residence</td>
            <td class="info-value"><a href="../places/{place}.html">{Place}</a></td>
          </tr>
          <tr>
            <td class="info-label">Relation</td>
            <td class="info-value">{Relation to Param Krupalu Dev}</td>
          </tr>
          <!-- More rows as needed — see Info Card Fields below -->
        </table>
      </div>
    </div>

    <!-- CONTENT (display: flow-root — sits beside info card without gap) -->
    <div class="wiki-content">
      <p class="wiki-lead"><strong>{Full Name}</strong> {introductory paragraph about the subject.
      This text sits beside the info card on desktop. Should be 2-4 sentences providing a
      concise overview. Use "Param Krupalu Dev" in narrative.}</p>

      <!-- COLLAPSIBLE SECTIONS -->
      <div class="wiki-section collapsible active" id="section1-section">
        <h2 class="section-header">
          <span class="collapse-toggle">
            <span class="collapse-icon">›</span>
            Section 1 Title
          </span>
        </h2>
        <div class="section-content" style="display: block;">
          <p>{Section content text. Use "Param Krupalu Dev" for narrative references.}</p>
          
          <!-- Optional: Inline image (left or right aligned) -->
          <div class="image-card left-aligned">
            <div class="image-card-inner">
              <img src="../images/{category}_images/{name}/{image}.jpg" 
                   alt="{Alt text}" class="expandable-image">
            </div>
            <div class="image-card-caption">{Caption}</div>
          </div>
          
          <p>{More text that wraps around the image.}</p>
          
          <!-- Cross-links to other pages -->
          <p>He met <a href="../people/{person}.html">{Person Name}</a> in
          <a href="../places/{place}.html">{Place Name}</a>.</p>
        </div>
      </div>

      <div class="wiki-section collapsible active" id="section2-section">
        <h2 class="section-header">
          <span class="collapse-toggle">
            <span class="collapse-icon">›</span>
            Section 2 Title
          </span>
        </h2>
        <div class="section-content" style="display: block;">
          <p>{Section content}</p>
        </div>
      </div>

      <!-- Add more sections as needed -->
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-dark text-white py-4 mt-5">
    <!-- Footer content (same across all pages) -->
    <div class="text-center">
      <p class="mb-0">&copy; 2026 Shrimad Rajchandra Mission Dharampur</p>
    </div>
  </footer>

  <!-- SCRIPTS (Bootstrap dependencies) -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <!-- INLINE JAVASCRIPT (required for all detail pages) -->
  <script>
    // 1. Section collapse/expand
    const sections = document.querySelectorAll('.wiki-section.collapsible');
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');
        header.addEventListener('click', () => {
            section.classList.toggle('active');
            content.style.display = section.classList.contains('active') ? 'block' : 'none';
        });
    });

    // 2. Fullscreen image overlay
    const overlay = document.querySelector('.fullscreen-image-overlay');
    const overlayImg = overlay.querySelector('.fullscreen-image-content');
    const captionEl = overlay.querySelector('.image-caption-fullscreen');
    
    document.querySelectorAll('.expandable-image').forEach(img => {
        img.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImg.src = img.src;
            captionEl.textContent = img.closest('.wiki-info-card, .image-card')
                ?.querySelector('.image-caption, .image-card-caption')?.textContent || '';
        });
    });
    overlay.querySelector('.close-fullscreen').addEventListener('click', () => {
        overlay.style.display = 'none';
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.style.display = 'none';
    });

    // 3. TOC scroll spy
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

    // 4. TOC collapse button (for tablet/mobile)
    const tocCollapseButton = document.querySelector('.toc-collapse-button');
    const wikiToc = document.querySelector('.wiki-toc');
    if (window.innerWidth <= 1024) {
        tocCollapseButton.style.display = 'block';
        wikiToc.style.display = 'none';
    }
    tocCollapseButton.addEventListener('click', () => {
        wikiToc.style.display = wikiToc.style.display === 'none' ? 'block' : 'none';
    });

    // 5. Hash-based section scrolling
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
  </script>
</body>
</html>
```

---

## Info Card Fields by Page Type

### People Pages
| Field | Example |
|-------|---------|
| Born | Kartik Purnima, V.S. 1924 (Nov 10, 1867) |
| Passed away | Chaitra Vad 5, V.S. 1957 |
| Residence | Vavaniya, Gujarat |
| Relation | First devoted disciple of Param Krupalu Dev |
| Title from Param Krupalu Dev | 'Satyaparayan' (devoted to truth) |
| Family | Sthanakvasi Jain |
| Letters from Param Krupalu Dev | ~20 available |
| Significance | First devotee; attained samyaktva |

### Place Pages
| Field | Example |
|-------|---------|
| Country | India |
| State | Gujarat |
| District | Amreli |
| Region | Saurashtra |
| Significance | Birthplace of Param Krupalu Dev |
| Period of stay | V.S. 1924–1930 (1867–1874) |
| Key events | Birth, Jatismaran, first composition |

### Event Pages
| Field | Example |
|-------|---------|
| Type | Performance / Exhibition |
| First occurred | V.S. 1941 (1884 AD) |
| Location | Morbi, Gujarat |
| Age at first | 16 years |
| Significance | Demonstrated extraordinary memory powers |

### Composition Pages
| Field | Example |
|-------|---------|
| Composed | Maha Vad 14, V.S. 1953 (Feb 1897) |
| Age at composition | 29 years |
| Location | Nadiad, Gujarat |
| Language | Gujarati |
| Verses | 142 |
| Theme | Six fundamental truths of the soul |
| Significance | Most important philosophical work |

---

## Template 2: Listing Page

Listing pages are in the root `docs/` folder. They use `css/styles.css` but NOT `css/pages.css`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Category Name}</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="js/search.js"></script>
  <script src="js/navbar.js"></script>
  <style>
    .content-area { padding-top: 0 !important; padding-left: 0 !important; }
    section { margin-bottom: 2rem; }
    h3 {
      margin-bottom: 1rem;
      font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
      font-weight: normal;
      border-bottom: 1px solid #a2a9b1;
      padding-bottom: 0.25em;
    }
    ul { padding-left: 1.5rem; }
    .detail-desc { color: #72777d; font-size: 0.9em; }
  </style>
</head>
<body>
  <!-- Navbar injected by JS -->
  
  <main class="container mt-5">
    <div class="content-area">
      <h2>{Page Title}</h2>
      <p>{Brief introduction paragraph.}</p>
      <hr>

      <section>
        <h3>{Sub-category Name}</h3>
        <ul>
          <!-- Linked item (has detail page) — will get subtle › indicator via CSS -->
          <li><a href="./people/{pagename}.html">{Display Name}</a> <span class="detail-desc">— {Description}</span></li>
          <!-- Unlinked item (no detail page yet) — will look like plain text via CSS -->
          <li><a href="#TODO-LINK">{Display Name}</a> <span class="detail-desc">— {Description}</span></li>
        </ul>
      </section>

      <section>
        <h3>{Another Sub-category}</h3>
        <ul>
          <li>...</li>
        </ul>
      </section>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-5">
    <div class="text-center">
      <p class="mb-0">&copy; 2026 Shrimad Rajchandra Mission Dharampur</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
```

---

## Section ID Convention

**Pattern**: `{descriptive-name}-section`  
**Rules**:
1. Must end with `-section`
2. Must be unique within the page
3. Use kebab-case (lowercase, hyphens)
4. Be descriptive enough to identify from deep links

### Common Section IDs Used
```
#background-section
#birth-section
#childhood-section
#schooling-section
#marriage-section
#first-meeting-section
#first-composition-section
#business-section
#spiritual-journey-section
#later-years-section
#legacy-section
#current-times-section
#dehvilay-section
```

---

## Cross-Linking Convention

### From Root Page → Detail Page
```html
<a href="./people/juthabhai.html">Juthabhai</a>
<a href="./places/vavaniya.html#birth-section">Birth at Vavaniya</a>
```

### From Detail Page → Detail Page (same or different category)
```html
<a href="../people/juthabhai.html">Juthabhai</a>
<a href="../places/rajkot.html#dehvilay-section">Dehvilay in Rajkot</a>
```

### From Detail Page → Root Page
```html
<a href="../events.html">Events</a>
```

### Items Without Detail Pages
```html
<a href="#TODO-LINK">{Name}</a>
```

---

## Checklist: Adding a New Detail Page

1. [ ] Create `docs/{category}/{pagename}.html` using the detail page template above
2. [ ] Add page-specific info card data (appropriate to page type — see Info Card Fields)
3. [ ] Write lead text: 2-4 sentence overview using "Param Krupalu Dev" in narrative
4. [ ] Create collapsible sections with unique IDs ending in `-section`
5. [ ] Set up TOC entries matching section IDs exactly
6. [ ] Add cross-links to related people, places, events, compositions
7. [ ] Place images in `docs/images/{category}_images/` (or `{pagename}/` subdirectory)
8. [ ] Add entry to `window.SEARCH_DATA` in `js/search.js`:
   ```javascript
   { title: "Full Name", url: "{category}/{pagename}.html", type: "{type}", keywords: "keyword1, keyword2", image: "images/{category}_images/{name}.jpg" }
   ```
9. [ ] Add to `glossary.html` → `glossaryTerms` array + `termPageMap` if applicable
10. [ ] Update listing page: change `#TODO-LINK` to `"./{category}/{pagename}.html"` path
11. [ ] Add deep links from `events.html` if subject appears in events
12. [ ] Test: hash-based deep links, fullscreen image, responsive layout at 768px, navbar active state

---

*Last updated: Session 6.*
