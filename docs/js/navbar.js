// Navbar component for PKD webapp - Renovated Clean UI
// This file creates a modern, clean reusable navbar

function createNavbar() {
    // Determine the base path based on current location and deployment environment
    const currentPath = window.location.pathname;
    const hostname = window.location.hostname;
    
    // Debug logging for GitHub Pages
    console.log('Debug - Current Path:', currentPath);
    console.log('Debug - Hostname:', hostname);
    
    // Check if we're on GitHub Pages
    const isGitHubPages = hostname.includes('github.io');
    console.log('Debug - Is GitHub Pages:', isGitHubPages);
    
    let basePath;
    
    if (isGitHubPages) {
        // Simplified and more reliable GitHub Pages logic
        // If the current path contains any of these subdirectories, we need to go up one level
        const inSubdirectory = currentPath.includes('/people/') || 
                              currentPath.includes('/places/') || 
                              currentPath.includes('/events/') || 
                              currentPath.includes('/compositions/');
        
        console.log('Debug - In Subdirectory (simplified):', inSubdirectory);
        console.log('Debug - Path includes /people/:', currentPath.includes('/people/'));
        console.log('Debug - Path includes /places/:', currentPath.includes('/places/'));
        console.log('Debug - Path includes /events/:', currentPath.includes('/events/'));
        console.log('Debug - Path includes /compositions/:', currentPath.includes('/compositions/'));
        
        if (inSubdirectory) {
            // We're in a subdirectory, need to go up one level
            basePath = '../';
        } else {
            // We're at the root level of the repository
            basePath = './';
        }
    } else {
        // Local development - use existing logic
        const isRootLevel = currentPath.includes('/docs/') && !currentPath.includes('/docs/people/') && 
                           !currentPath.includes('/docs/places/') && !currentPath.includes('/docs/events/') && 
                           !currentPath.includes('/docs/compositions/');
        
        basePath = isRootLevel ? './' : '../';
    }
    
    console.log('Debug - Final Base Path:', basePath);
    
    return `
    <header class="modern-navbar">
        <div class="navbar-container">
            <!-- Logo Section -->
            <div class="navbar-brand">
                <a href="${basePath}index.html" class="brand-link">
                    <img src="${basePath}images/mission_logo.svg" alt="SRMD Logo" class="brand-logo">
                </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="navbar-nav-desktop">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="${basePath}index.html" class="nav-link" data-page="index.html">
                            <span class="nav-text">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}events.html" class="nav-link" data-page="events.html">
                            <span class="nav-text">Events</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}people.html" class="nav-link" data-page="people.html">
                            <span class="nav-text">People</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}places.html" class="nav-link" data-page="places.html">
                            <span class="nav-text">Places</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}compositions.html" class="nav-link" data-page="compositions.html">
                            <span class="nav-text">Compositions</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}calendar.html" class="nav-link" data-page="calendar.html">
                            <span class="nav-text">Calendar</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}maps.html" class="nav-link" data-page="maps.html">
                            <span class="nav-text">Map</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}glossary.html" class="nav-link" data-page="glossary.html">
                            <span class="nav-text">Glossary</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Search Section -->
            <div class="navbar-search">
                <form class="search-form" onsubmit="return handleSearch ? handleSearch(event) : true">
                    <div class="search-input-wrapper">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input 
                            type="search" 
                            class="search-input" 
                            placeholder="Search..." 
                            aria-label="Search"
                            autocomplete="off"
                        >
                        <button type="submit" class="search-submit">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>

            <!-- Mobile Navigation -->
            <nav class="navbar-nav-mobile">
                <div class="mobile-nav-header">
                    <img src="${basePath}images/mission_logo.svg" alt="SRMD Logo" class="mobile-logo">
                    <button class="mobile-close" aria-label="Close menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <ul class="mobile-nav-list">
                    <li><a href="${basePath}index.html" class="mobile-nav-link" data-page="index.html">Home</a></li>
                    <li><a href="${basePath}events.html" class="mobile-nav-link" data-page="events.html">Events</a></li>
                    <li><a href="${basePath}people.html" class="mobile-nav-link" data-page="people.html">People</a></li>
                    <li><a href="${basePath}places.html" class="mobile-nav-link" data-page="places.html">Places</a></li>
                    <li><a href="${basePath}compositions.html" class="mobile-nav-link" data-page="compositions.html">Compositions</a></li>
                    <li><a href="${basePath}calendar.html" class="mobile-nav-link" data-page="calendar.html">Calendar</a></li>
                    <li><a href="${basePath}maps.html" class="mobile-nav-link" data-page="maps.html">Map</a></li>
                    <li><a href="${basePath}glossary.html" class="mobile-nav-link" data-page="glossary.html">Glossary</a></li>
                </ul>
                <div class="mobile-search">
                    <form class="mobile-search-form" onsubmit="return handleSearch ? handleSearch(event) : true">
                        <input type="search" class="mobile-search-input" placeholder="Search..." aria-label="Search">
                        <button type="submit" class="mobile-search-btn">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    </header>
    `;
}

// Enhanced function to load navbar with mobile functionality
function loadNavbar() {
    const navbarHTML = createNavbar();
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Set active navigation item
    setActiveNavItem();
    
    // Initialize mobile menu functionality
    initializeMobileMenu();
    
    // Initialize search functionality
    initializeSearchEffects();
}

// Enhanced active navigation detection
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Remove existing active classes
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage || 
            (currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPath.endsWith('/') && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.navbar-nav-mobile');
    const mobileClose = document.querySelector('.mobile-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!mobileToggle || !mobileNav) return;
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
    });
    
    // Close mobile menu
    const closeMobileMenu = () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    };
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking on links
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// Enhanced search functionality integration
function initializeSearchEffects() {
    const searchInput = document.querySelector('.search-input');
    const searchWrapper = document.querySelector('.search-input-wrapper');
    const mobileSearchInput = document.querySelector('.mobile-search-input');
    
    if (!searchInput || !searchWrapper) return;
    
    // Focus effects
    searchInput.addEventListener('focus', () => {
        searchWrapper.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', () => {
        if (!searchInput.value) {
            searchWrapper.classList.remove('focused');
        }
    });
    
    searchInput.addEventListener('input', () => {
        if (searchInput.value) {
            searchWrapper.classList.add('has-value');
        } else {
            searchWrapper.classList.remove('has-value');
        }
    });
    
    // Initialize autocomplete functionality
    initializeAutocomplete();
}

// Autocomplete functionality
function initializeAutocomplete() {
    const searchInput = document.querySelector('.search-input');
    const mobileSearchInput = document.querySelector('.mobile-search-input');
    const navbarSearch = document.querySelector('.navbar-search');
    const mobileSearch = document.querySelector('.mobile-search');
    
    if (!searchInput || !navbarSearch) return;
    
    // Search data — uses centralized data from search.js
    const searchData = window.SEARCH_DATA || [];
    
    // Create autocomplete container for desktop
    const autocompleteContainer = document.createElement('div');
    autocompleteContainer.className = 'autocomplete-results';
    navbarSearch.appendChild(autocompleteContainer);
    
    // Create autocomplete container for mobile if mobile search exists
    let mobileAutocompleteContainer;
    if (mobileSearch && mobileSearchInput) {
        mobileAutocompleteContainer = document.createElement('div');
        mobileAutocompleteContainer.className = 'mobile-autocomplete-results';
        mobileSearch.appendChild(mobileAutocompleteContainer);
    }
    
    // Handle desktop search input
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        handleAutocompleteInput(query, autocompleteContainer, searchData);
    });
    
    // Handle mobile search input
    if (mobileSearchInput && mobileAutocompleteContainer) {
        mobileSearchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            handleAutocompleteInput(query, mobileAutocompleteContainer, searchData);
        });
    }
    
    // Handle form submissions
    document.querySelector('.search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleSearchSubmit(searchInput.value.trim());
    });
    
    if (document.querySelector('.mobile-search-form')) {
        document.querySelector('.mobile-search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            handleSearchSubmit(mobileSearchInput.value.trim());
        });
    }
    
    // Hide autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarSearch.contains(e.target)) {
            hideAutocomplete(autocompleteContainer);
        }
        if (mobileSearch && !mobileSearch.contains(e.target)) {
            hideAutocomplete(mobileAutocompleteContainer);
        }
    });
}

function handleAutocompleteInput(query, container, searchData) {
    if (query.length > 0) {
        const results = searchData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(query))
        ).sort((a, b) => {
            const aTitle = a.title.toLowerCase();
            const bTitle = b.title.toLowerCase();
            
            // Priority sorting
            const aStartsWithQuery = aTitle.startsWith(query);
            const bStartsWithQuery = bTitle.startsWith(query);
            if (aStartsWithQuery && !bStartsWithQuery) return -1;
            if (!aStartsWithQuery && bStartsWithQuery) return 1;
            
            const aWordsStartWithQuery = aTitle.split(' ').some(word => word.startsWith(query));
            const bWordsStartWithQuery = bTitle.split(' ').some(word => word.startsWith(query));
            if (aWordsStartWithQuery && !bWordsStartWithQuery) return -1;
            if (!aWordsStartWithQuery && bWordsStartWithQuery) return 1;
            
            const aContainsQuery = aTitle.includes(query);
            const bContainsQuery = bTitle.includes(query);
            if (aContainsQuery && !bContainsQuery) return -1;
            if (!aContainsQuery && bContainsQuery) return 1;
            
            return aTitle.localeCompare(bTitle);
        }).slice(0, 5);
        
        showAutocomplete(results, query, container);
    } else {
        hideAutocomplete(container);
    }
}

function showAutocomplete(results, query, container) {
    if (results.length === 0) {
        hideAutocomplete(container);
        return;
    }
    
    container.innerHTML = '';
    
    results.forEach(result => {
        const item = document.createElement('a');
        item.href = adjustUrl(result.url);
        item.className = 'autocomplete-item';
        
        const highlightedTitle = highlightMatch(result.title, query);
        const badge = `<span class="badge" style="background-color: ${getBadgeColor(result.type)}; color: white;">${result.type}</span>`;
        
        item.innerHTML = highlightedTitle + badge;
        
        item.addEventListener('click', () => {
            hideAutocomplete(container);
        });
        
        container.appendChild(item);
    });
    
    container.style.display = 'block';
}

function hideAutocomplete(container) {
    if (container) {
        container.style.display = 'none';
    }
}

function handleSearchSubmit(query) {
    if (query) {
        const currentPath = window.location.pathname;
        const hostname = window.location.hostname;
        const isGitHubPages = hostname.includes('github.io');
        
        let searchPath = './search.html';
        
        if (isGitHubPages) {
            // For GitHub Pages, check if we're in a subdirectory
            const inSubdirectory = currentPath.includes('/people/') || 
                                  currentPath.includes('/places/') || 
                                  currentPath.includes('/events/') || 
                                  currentPath.includes('/compositions/');
            
            if (inSubdirectory) {
                searchPath = '../search.html';
            }
        } else {
            // Local development logic
            if (currentPath.includes('/people/') || currentPath.includes('/places/') || 
                currentPath.includes('/events/') || currentPath.includes('/compositions/')) {
                searchPath = '../search.html';
            }
        }
        
        const targetUrl = `${searchPath}?q=${encodeURIComponent(query)}`;
        window.location.href = targetUrl;
    }
}

function adjustUrl(url) {
    const currentPath = window.location.pathname;
    const hostname = window.location.hostname;
    const isGitHubPages = hostname.includes('github.io');
    
    if (isGitHubPages) {
        // For GitHub Pages, check if we're in a subdirectory
        const inSubdirectory = currentPath.includes('/people/') || 
                              currentPath.includes('/places/') || 
                              currentPath.includes('/events/') || 
                              currentPath.includes('/compositions/');
        
        if (inSubdirectory) {
            return url.replace('./', '../');
        }
        return url;
    } else {
        // Local development logic
        if (currentPath.includes('/people/') || currentPath.includes('/places/') || 
            currentPath.includes('/events/') || currentPath.includes('/compositions/')) {
            return url.replace('./', '../');
        }
        return url;
    }
}

function highlightMatch(text, query) {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const start = lowerText.indexOf(lowerQuery);
    
    if (start === -1) return text;
    
    const end = start + query.length;
    return text.substring(0, start) + 
           `<mark>${text.substring(start, end)}</mark>` + 
           text.substring(end);
}

function getBadgeColor(type) {
    const typeColors = {
        'person': '#007bff',
        'place': '#28a745',
        'event': '#ffc107',
        'composition': '#17a2b8'
    };
    return typeColors[type] || '#6c757d';
}

// Auto-load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('header')) {
        loadNavbar();
    } else {
        setActiveNavItem();
    }
});