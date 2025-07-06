# Shrimad Rajchandra Mission Dharampur - Static Website

This is a static website about Shrimad Rajchandraji (Param Krupalu Dev), built for hosting on GitHub Pages. The website showcases comprehensive information about the great spiritual luminary, his literary works, people associated with him, places of significance, events in his life, and more.

## Project Structure

```
PKD_webapp/
├── docs/                           # Static website files for GitHub Pages
│   ├── index.html                  # Main homepage
│   ├── events.html                 # Events timeline page
│   ├── people.html                 # People directory page
│   ├── places.html                 # Places directory page
│   ├── compositions.html           # Compositions directory page
│   ├── calendar.html               # Interactive calendar with events
│   ├── maps.html                   # Interactive maps
│   ├── search.html                 # Search functionality page
│   ├── glossary.html               # Glossary of terms and definitions
│   ├── 404.html                    # Custom 404 error page
│   ├── .nojekyll                   # GitHub Pages Jekyll bypass
│   ├── css/                        # Stylesheets
│   │   ├── styles.css              # Main stylesheet
│   │   └── pages.css               # Page-specific styles
│   ├── js/                         # JavaScript files
│   │   ├── scripts.js              # Main JavaScript functionality
│   │   ├── search.js               # Search functionality and data
│   │   ├── navbar.js               # Navigation bar functionality
│   │   └── search-data.json        # Search index data
│   ├── images/                     # All image assets organized by category
│   │   ├── index_images/           # Homepage images
│   │   ├── people_images/          # People photographs
│   │   ├── places_images/          # Location photographs
│   │   ├── events_images/          # Event-related images
│   │   ├── compositions_images/    # Composition-related images
│   │   └── mission_logo.svg        # SRMD logo
│   ├── databases/                  # Data files (CSV, Excel)
│   │   ├── people.xlsx
│   │   ├── places.xlsx
│   │   ├── places.csv
│   │   ├── events.xlsx
│   │   └── composition.xlsx
│   ├── events/                     # Individual event pages
│   │   ├── avdhan.html             # Avdhan performances
│   │   └── chitrapat.html          # Photography events
│   ├── people/                     # Individual biography pages (21 people)
│   │   ├── bhagvanbhaiModi.html
│   │   ├── brahmachariji.html
│   │   ├── chanchalben.html
│   │   ├── chatrabhujbhaiBechar.html
│   │   ├── devba.html              # Param Krupalu Dev's mother
│   │   ├── gandhiji.html           # Mahatma Gandhi
│   │   ├── janbai.html
│   │   ├── javalben.html
│   │   ├── jhabakben.html          # Param Krupalu Dev's wife
│   │   ├── juthabhai.html          # Param Krupalu Dev's father
│   │   ├── maneklalGhelabhai.html
│   │   ├── popatbhaiJagjivan.html
│   │   ├── pranjivandas.html
│   │   ├── ranchodbhai.html
│   │   ├── ravjibhai.html          # Param Krupalu Dev's brother
│   │   ├── revashankarJagjivan.html
│   │   ├── saubhagyabhai.html      # Param Krupalu Dev's brother
│   │   ├── shankarlalBhatt.html
│   │   ├── shivkunvarben.html
│   │   ├── tribhuvanBhanji.html
│   │   └── vinaychandrabhaiPopatbhaiDaftary.html
│   ├── places/                     # Individual location pages (12 places)
│   │   ├── ahmedabad.html
│   │   ├── botad.html
│   │   ├── dharampur.html          # SRMD headquarters
│   │   ├── idar.html
│   │   ├── jamnagar.html
│   │   ├── jetpar.html
│   │   ├── limbdi.html
│   │   ├── morbi.html
│   │   ├── mumbai.html
│   │   ├── rajkot.html             # Place of dehvilay
│   │   ├── vavaniya.html           # Birthplace
│   │   └── wadhwan.html
│   └── compositions/               # Individual composition pages
│       ├── bhavnabodh.html         # 12 Bhavnas composition
│       └── mokshmala.html          # 108-chapter masterpiece
├── add_search_script.py            # Script to add search functionality
├── comprehensive_path_fix.py       # Path fixing utility
├── convert_to_static.py            # Flask to static conversion script
├── fix_paths.py                    # Path correction utility
├── refactor_navbar.py              # Navigation refactoring script
├── LICENSE                         # Proprietary license
└── README.md                       # This documentation
```

## Key Features

### Core Content Areas
- **People**: 21 biographical pages covering family members, devotees, and notable figures
- **Places**: 12 significant locations in Param Krupalu Dev's life journey
- **Events**: Chronological timeline of major life events
- **Compositions**: Literary works including Mokshmala and Bhavnabodh
- **Glossary**: Comprehensive definitions of spiritual and historical terms

### Interactive Features
- **Advanced Search**: Full-text search across all content categories
- **Interactive Calendar**: Events displayed with Vikram Samvat dates
- **Image Galleries**: Expandable images with detailed captions
- **Table of Contents**: Dynamic navigation for long-form content
- **Cross-references**: Interconnected links between related content

### Technical Features
- **Responsive Design**: Mobile-first approach with Bootstrap 4.5.2
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Performance Optimized**: Compressed images and minified assets
- **Accessibility**: ARIA labels, semantic markup, and keyboard navigation

## Technologies Used

- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Bootstrap 4.5.2**: Responsive design framework
- **JavaScript/jQuery**: Interactive features and search functionality
- **Git**: Version control and deployment workflow

## Running Locally

### Option 1: Python HTTP Server (Recommended)

```bash
cd docs
python -m http.server 8000
# For Python 2: python -m SimpleHTTPServer 8000
```

Open: `http://localhost:8000`

### Option 2: Node.js Serve

```bash
cd docs
npx serve .
```

### Option 3: PHP Development Server

```bash
cd docs
php -S localhost:8000
```

### Option 4: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `docs/index.html`
3. Select "Open with Live Server"

## GitHub Pages Deployment

This site is configured for GitHub Pages deployment:

1. **Deploy to GitHub Pages**:
   ```bash
   git add docs/
   git commit -m "Update website content"
   git push origin main
   ```

2. **GitHub Pages Settings**:
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/docs"

Site will be available at: `https://username.github.io/repository-name/`

## Content Management

### Adding New Content

1. **People**: Create new HTML file in `docs/people/` using existing templates
2. **Places**: Add to `docs/places/` with location information
3. **Events**: Update `docs/events.html` timeline and create detail pages
4. **Images**: Organize in appropriate `docs/images/` subdirectories

### Search Index

The search functionality uses `docs/js/search.js` which contains:
- Indexed content from all pages
- Keyword associations
- Category classifications
- Direct links to content

Update the search data when adding new content.

### Data Files

Excel/CSV files in `docs/databases/` contain structured data:
- `people.xlsx`: Biographical information
- `places.xlsx`: Location details
- `events.xlsx`: Historical events
- `composition.xlsx`: Literary works

## Development Utilities

The repository includes several Python scripts for maintenance:

- `convert_to_static.py`: Original Flask-to-static conversion
- `add_search_script.py`: Search functionality integration
- `comprehensive_path_fix.py`: Path correction across all files
- `fix_paths.py`: URL and link correction utility
- `refactor_navbar.py`: Navigation structure updates

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: Graceful degradation for older browsers

## Performance

- **Optimized Images**: Compressed JPEG/PNG files
- **Lazy Loading**: Images load as needed
- **Minimal JavaScript**: Progressive enhancement approach
- **CDN Assets**: Bootstrap and jQuery from CDN

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes in `docs/` folder
4. Test locally using local server
5. Commit changes: `git commit -m "Description"`
6. Push and create pull request

## License

This project is under a proprietary license. See `LICENSE` file for detailed terms and restrictions. Content is owned by Shrimad Rajchandra Mission Dharampur.

---

**About**: This website preserves and shares the legacy of Shrimad Rajchandraji (Param Krupalu Dev) and the spiritual teachings of Shrimad Rajchandra Mission Dharampur. Built with reverence and dedication to the great spiritual luminary.