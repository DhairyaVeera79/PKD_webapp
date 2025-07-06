# Shrimad Rajchandra Mission Dharampur - Static Website

This is a static website about Shrimad Rajchandraji, built for hosting on GitHub Pages. The website showcases information about the great spiritual luminary, his works, people associated with him, places of significance, and more.

## Project Structure

```
PKD_webapp/
├── docs/                           # Static website files for GitHub Pages
│   ├── index.html                  # Main homepage
│   ├── events.html                 # Events page
│   ├── people.html                 # People page
│   ├── places.html                 # Places page
│   ├── compositions.html           # Compositions page
│   ├── calendar.html               # Calendar page
│   ├── maps.html                   # Interactive maps
│   ├── 404.html                    # Custom 404 page
│   ├── .nojekyll                   # GitHub Pages config
│   ├── css/                        # Stylesheets
│   │   ├── styles.css
│   │   └── pages.css
│   ├── js/                         # JavaScript files
│   │   ├── scripts.js
│   │   └── search.js
│   ├── images/                     # All image assets
│   ├── databases/                  # Data files (CSV, Excel)
│   ├── events/                     # Individual event pages
│   ├── people/                     # Individual people pages
│   ├── places/                     # Individual place pages
│   └── compositions/               # Individual composition pages
├── convert_to_static.py            # Conversion script (for future updates)
├── LICENSE
└── README.md
```

## Technologies Used

- **HTML5**: Semantic markup for all content
- **CSS3**: Custom styling with Bootstrap 4.5.2 framework
- **JavaScript**: Interactive features and search functionality
- **Bootstrap 4.5.2**: Responsive design framework
- **jQuery**: For enhanced interactivity

## Running Locally

### Option 1: Using Python's Built-in Server (Recommended)

Navigate to the `docs` directory and start a local server:

```bash
cd docs
python -m http.server 8000
```

Or with Python 2:
```bash
cd docs
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 2: Using Node.js (if you have it installed)

```bash
cd docs
npx serve .
```

### Option 3: Using PHP (if you have it installed)

```bash
cd docs
php -S localhost:8000
```

### Option 4: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `docs/index.html`
3. Select "Open with Live Server"

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Search**: Search through people, places, events, and compositions
- **Image Galleries**: Visual content with proper optimization
- **Navigation**: Easy-to-use menu system with breadcrumbs
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Optimized**: Proper meta tags and structured content

## GitHub Pages Deployment

This site is ready for GitHub Pages deployment:

1. **Commit the docs folder**:
   ```bash
   git add docs/
   git commit -m "Deploy static site to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/docs"
   - Save

Your site will be live at: `https://yourusername.github.io/repository-name/`

## Development

### Making Changes

If you need to update the site:

1. Edit files directly in the `docs/` folder
2. Test locally using one of the methods above
3. Commit and push changes to deploy

### Converting from Flask (Historical)

This site was originally built with Flask and converted to static files using the `convert_to_static.py` script. The conversion:

- Replaced Flask `url_for()` calls with relative paths
- Generated static HTML from Jinja2 templates
- Copied all assets (CSS, JS, images) to the static structure
- Created GitHub Pages compatible file structure

## Content Areas

- **People**: Biographical information about key figures
- **Places**: Historical and significant locations
- **Events**: Important events and celebrations
- **Compositions**: Literary works and spiritual texts
- **Interactive Maps**: Geographic visualization of important places

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Make your changes in the `docs/` folder
3. Test locally
4. Submit a pull request

## License

See LICENSE file for details.

---

*This website is dedicated to preserving and sharing the legacy of Shrimad Rajchandraji and the Shrimad Rajchandra Mission Dharampur.*