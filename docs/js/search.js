// Global search handler function
function handleSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.trim() : '';
    
    console.log('handleSearch called with query:', query);
    
    if (query) {
        // Determine correct path based on current location
        let searchPath = './search.html';
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('/people/') || currentPath.includes('/places/') || 
            currentPath.includes('/events/') || currentPath.includes('/compositions/')) {
            searchPath = '../search.html';
        }
        
        const targetUrl = `${searchPath}?q=${encodeURIComponent(query)}`;
        console.log('Navigating to:', targetUrl);
        window.location.href = targetUrl;
    }
    
    return false;
}

// Simple and robust search functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search script loaded');
    
    // Find search elements
    const searchInput = document.querySelector('.search-bar input[type="search"]');
    const searchForm = document.querySelector('.search-bar form');
    
    if (!searchInput || !searchForm) {
        console.error('Search elements not found');
        return;
    }
    
    console.log('Search elements found');
    
    // Create autocomplete container
    const autocompleteContainer = document.createElement('div');
    autocompleteContainer.className = 'autocomplete-results';
    autocompleteContainer.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        z-index: 1000;
        display: none;
        max-height: 300px;
        overflow-y: auto;
    `;
    
    // Make search bar container relative for positioning
    const searchBar = document.querySelector('.search-bar');
    searchBar.style.position = 'relative';
    searchBar.appendChild(autocompleteContainer);
    
    // Enhanced search data with images
    const searchData = [
        { title: "Juthabhai", url: "./people/juthabhai.html", type: "person", image: "./images/people_images/juthabhai.jpg", keywords: ["juthabhai", "father", "parent", "family"] },
        { title: "Devba", url: "./people/devba.html", type: "person", image: "./images/people_images/devba.jpg", keywords: ["devba", "mother", "parent", "family"] },
        { title: "Saubhagyabhai", url: "./people/saubhagyabhai.html", type: "person", image: "./images/people_images/saubhagyabhai.jpg", keywords: ["saubhagyabhai", "brother", "family"] },
        { title: "Ravjibhai", url: "./people/ravjibhai.html", type: "person", image: "./images/people_images/ravjibhai.jpg", keywords: ["ravjibhai", "brother", "family"] },
        { title: "Javalben", url: "./people/javalben.html", type: "person", image: "./images/people_images/javalben.jpg", keywords: ["javalben", "sister", "family"] },
        { title: "Bhagvanbhai Modi", url: "./people/bhagvanbhaiModi.html", type: "person", image: "./images/people_images/bhagvanbhaiModi.jpg", keywords: ["bhagvanbhai", "modi", "disciple"] },
        { title: "Ranchodbhai", url: "./people/ranchodbhai.html", type: "person", image: "./images/people_images/ranchodbhai.jpg", keywords: ["ranchodbhai", "devotee"] },
        { title: "Brahmachariji", url: "./people/brahmachariji.html", type: "person", image: "./images/people_images/brahmachariji.jpg", keywords: ["brahmachariji", "monk", "disciple"] },
        { title: "Chanchalben", url: "./people/chanchalben.html", type: "person", image: "./images/people_images/chanchalben.jpg", keywords: ["chanchalben", "devotee"] },
        { title: "Pranjivandas", url: "./people/pranjivandas.html", type: "person", image: "./images/people_images/pranjivandas.jpg", keywords: ["pranjivandas", "devotee"] },
        { title: "Janbai", url: "./people/janbai.html", type: "person", image: "./images/people_images/janbai.jpg", keywords: ["janbai", "devotee"] },
        { title: "Shivkunvarben", url: "./people/shivkunvarben.html", type: "person", image: "./images/people_images/shivkunvarben.jpg", keywords: ["shivkunvarben", "devotee"] },
        { title: "Jhabakben", url: "./people/jhabakben.html", type: "person", image: "./images/people_images/jhabakben.jpg", keywords: ["jhabakben", "devotee"] },
        { title: "Vinaychandra Popatbhai Daftary", url: "./people/vinaychandrabhaiPopatbhaiDaftary.html", type: "person", image: "./images/people_images/vinaychandrabhaiPopatbhaiDaftary.jpg", keywords: ["vinaychandra", "popatbhai", "daftary", "devotee"] },
        { title: "Maneklal Ghelabhai", url: "./people/maneklalGhelabhai.html", type: "person", image: "./images/people_images/maneklalGhelabhai.jpg", keywords: ["maneklal", "ghelabhai", "jeweller", "business", "partner"] },
        { title: "Revashankar Jagjivan", url: "./people/revashankarJagjivan.html", type: "person", image: "./images/people_images/revashankarJagjivan.jpg", keywords: ["revashankar", "jagjivan", "business", "partner", "company"] },
        { title: "Tribhuvan Bhanji", url: "./people/tribhuvanBhanji.html", type: "person", image: "./images/people_images/tribhuvanBhanji.jpg", keywords: ["tribhuvan", "bhanji", "devotee"] },
        { title: "Mahatma Gandhi", url: "./people/gandhiji.html", type: "person", image: "./images/people_images/gandhiji.jpg", keywords: ["gandhi", "gandhiji", "mahatma", "disciple", "spiritual", "guide"] },
        { title: "Vavaniya", url: "./places/vavaniya.html", type: "place", image: "./images/places_images/vavaniya/vavaniya.jpg", keywords: ["vavaniya", "birthplace", "birth", "village", "home"] },
        { title: "Morbi", url: "./places/morbi.html", type: "place", image: "./images/places_images/morbi/morbi.jpg", keywords: ["morbi", "city", "residence"] },
        { title: "Jamnagar", url: "./places/jamnagar.html", type: "place", image: "./images/places_images/jamnagar/jamnagar.jpg", keywords: ["jamnagar", "city"] },
        { title: "Wadhwan", url: "./places/wadhwan.html", type: "place", image: "./images/places_images/wadhwan/wadhwan.jpg", keywords: ["wadhwan", "city"] },
        { title: "Limbdi", url: "./places/limbdi.html", type: "place", image: "./images/places_images/limbdi/limbdi.jpg", keywords: ["limbdi", "city"] },
        { title: "Botad", url: "./places/botad.html", type: "place", image: "./images/places_images/botad/botad.jpg", keywords: ["botad", "city"] },
        { title: "Jetpar", url: "./places/jetpar.html", type: "place", image: "./images/places_images/jetpar/jetpar.jpg", keywords: ["jetpar", "city"] },
        { title: "Ahmedabad", url: "./places/ahmedabad.html", type: "place", image: "./images/places_images/ahmedabad/ahmedabad.jpg", keywords: ["ahmedabad", "city"] },
        { title: "Rajkot", url: "./places/rajkot.html", type: "place", image: "./images/places_images/rajkot/rajkot.jpg", keywords: ["rajkot", "city"] },
        { title: "Mumbai", url: "./places/mumbai.html", type: "place", image: "./images/places_images/mumbai/mumbai-1893.jpg", keywords: ["mumbai", "bombay", "business", "shatavdhan", "avdhan"] },
        { title: "Idar", url: "./places/idar.html", type: "place", image: "./images/places_images/idar/idar.jpg", keywords: ["idar", "city"] },
        { title: "Dharampur", url: "./places/dharampur.html", type: "place", image: "./images/places_images/dharampur/dharampur.jpg", keywords: ["dharampur", "ashram", "mission"] },
        { title: "Avdhan", url: "./events/avdhan.html", type: "event", image: "./images/events_images/avdhan.jpg", keywords: ["avdhan", "shatavdhan", "performance", "memory", "concentration"] },
        { title: "Chitrapat", url: "./events/chitrapat.html", type: "event", image: "./images/events_images/firstChitrapat.JPG", keywords: ["chitrapat", "photo", "photograph", "image"] },
        { title: "Mokshmala", url: "./compositions/mokshmala.html", type: "composition", image: "./images/compositions_images/mokshmala.jpg", keywords: ["mokshmala", "moksha", "liberation", "composition", "writing"] },
        { title: "Bhavnabodh", url: "./compositions/bhavnabodh.html", type: "composition", image: "./images/compositions_images/bhavnabodh.jpg", keywords: ["bhavnabodh", "bhavna", "bodh", "composition", "writing", "spiritual"] }
    ];
    
    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const query = searchInput.value.trim();
        console.log('Form submitted with query:', query);
        
        if (query) {
            // Determine correct path based on current location
            let searchPath = './search.html';
            const currentPath = window.location.pathname;
            
            if (currentPath.includes('/people/') || currentPath.includes('/places/') || 
                currentPath.includes('/events/') || currentPath.includes('/compositions/')) {
                searchPath = '../search.html';
            }
            
            const targetUrl = `${searchPath}?q=${encodeURIComponent(query)}`;
            console.log('Navigating to:', targetUrl);
            window.location.href = targetUrl;
        }
        
        return false;
    });
    
    // Handle input for autocomplete
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length > 0) {
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query) ||
                item.keywords.some(keyword => keyword.toLowerCase().includes(query))
            ).sort((a, b) => {
                const aTitle = a.title.toLowerCase();
                const bTitle = b.title.toLowerCase();
                
                // Priority 1: Title starts with the query
                const aStartsWithQuery = aTitle.startsWith(query);
                const bStartsWithQuery = bTitle.startsWith(query);
                if (aStartsWithQuery && !bStartsWithQuery) return -1;
                if (!aStartsWithQuery && bStartsWithQuery) return 1;
                
                // Priority 2: Any word in title starts with the query
                const aWordsStartWithQuery = aTitle.split(' ').some(word => word.startsWith(query));
                const bWordsStartWithQuery = bTitle.split(' ').some(word => word.startsWith(query));
                if (aWordsStartWithQuery && !bWordsStartWithQuery) return -1;
                if (!aWordsStartWithQuery && bWordsStartWithQuery) return 1;
                
                // Priority 3: Title contains the query
                const aContainsQuery = aTitle.includes(query);
                const bContainsQuery = bTitle.includes(query);
                if (aContainsQuery && !bContainsQuery) return -1;
                if (!aContainsQuery && bContainsQuery) return 1;
                
                // Final: Alphabetical order
                return aTitle.localeCompare(bTitle);
            }).slice(0, 5);
            
            showAutocomplete(results, query);
        } else {
            hideAutocomplete();
        }
    });
    
    // Hide autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target)) {
            hideAutocomplete();
        }
    });
    
    function showAutocomplete(results, query) {
        if (results.length === 0) {
            hideAutocomplete();
            return;
        }
        
        autocompleteContainer.innerHTML = '';
        
        results.forEach(result => {
            const item = document.createElement('a');
            item.href = adjustUrl(result.url);
            item.style.cssText = `
                display: block;
                padding: 10px 12px;
                color: #333;
                text-decoration: none;
                border-bottom: 1px solid #eee;
            `;
            
            const highlightedTitle = highlightMatch(result.title, query);
            
            // Get the correct badge color based on type
            const badgeColor = getBadgeColor(result.type);
            const badge = `<span style="background-color: ${badgeColor}; color: white; font-size: 0.7em; padding: 2px 6px; border-radius: 3px; margin-left: 8px;">${result.type}</span>`;
            
            item.innerHTML = highlightedTitle + badge;
            
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });
            
            autocompleteContainer.appendChild(item);
        });
        
        autocompleteContainer.style.display = 'block';
    }
    
    function hideAutocomplete() {
        autocompleteContainer.style.display = 'none';
    }
    
    function adjustUrl(url) {
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('/people/') || currentPath.includes('/places/') || 
            currentPath.includes('/events/') || currentPath.includes('/compositions/')) {
            return url.replace('./', '../');
        }
        
        return url;
    }
    
    function highlightMatch(text, query) {
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const start = lowerText.indexOf(lowerQuery);
        
        if (start === -1) return text;
        
        const end = start + query.length;
        return text.substring(0, start) + 
               `<mark style="background-color: yellow; padding: 0;">${text.substring(start, end)}</mark>` + 
               text.substring(end);
    }
    
    function getBadgeColor(type) {
        const typeColors = {
            'person': '#007bff',    // Blue
            'place': '#28a745',     // Green
            'event': '#ffc107',     // Yellow
            'composition': '#17a2b8' // Teal
        };
        return typeColors[type] || '#6c757d'; // Default gray
    }
    
    console.log('Search functionality initialized');
});

// Export search data for use in search.html
window.getSearchData = function() {
    return [
        { title: "Juthabhai", url: "./people/juthabhai.html", type: "person", image: "./images/people_images/juthabhai.jpg", keywords: ["juthabhai", "father", "parent", "family"] },
        { title: "Devba", url: "./people/devba.html", type: "person", image: "./images/people_images/devba.jpg", keywords: ["devba", "mother", "parent", "family"] },
        { title: "Saubhagyabhai", url: "./people/saubhagyabhai.html", type: "person", image: "./images/people_images/saubhagyabhai.jpg", keywords: ["saubhagyabhai", "brother", "family"] },
        { title: "Ravjibhai", url: "./people/ravjibhai.html", type: "person", image: "./images/people_images/ravjibhai.jpg", keywords: ["ravjibhai", "brother", "family"] },
        { title: "Javalben", url: "./people/javalben.html", type: "person", image: "./images/people_images/javalben.jpg", keywords: ["javalben", "sister", "family"] },
        { title: "Bhagvanbhai Modi", url: "./people/bhagvanbhaiModi.html", type: "person", image: "./images/people_images/bhagvanbhaiModi.jpg", keywords: ["bhagvanbhai", "modi", "disciple"] },
        { title: "Ranchodbhai", url: "./people/ranchodbhai.html", type: "person", image: "./images/people_images/ranchodbhai.jpg", keywords: ["ranchodbhai", "devotee"] },
        { title: "Brahmachariji", url: "./people/brahmachariji.html", type: "person", image: "./images/people_images/brahmachariji.jpg", keywords: ["brahmachariji", "monk", "disciple"] },
        { title: "Chanchalben", url: "./people/chanchalben.html", type: "person", image: "./images/people_images/chanchalben.jpg", keywords: ["chanchalben", "devotee"] },
        { title: "Pranjivandas", url: "./people/pranjivandas.html", type: "person", image: "./images/people_images/pranjivandas.jpg", keywords: ["pranjivandas", "devotee"] },
        { title: "Janbai", url: "./people/janbai.html", type: "person", image: "./images/people_images/janbai.jpg", keywords: ["janbai", "devotee"] },
        { title: "Shivkunvarben", url: "./people/shivkunvarben.html", type: "person", image: "./images/people_images/shivkunvarben.jpg", keywords: ["shivkunvarben", "devotee"] },
        { title: "Jhabakben", url: "./people/jhabakben.html", type: "person", image: "./images/people_images/jhabakben.jpg", keywords: ["jhabakben", "devotee"] },
        { title: "Vinaychandra Popatbhai Daftary", url: "./people/vinaychandrabhaiPopatbhaiDaftary.html", type: "person", image: "./images/people_images/vinaychandrabhaiPopatbhaiDaftary.jpg", keywords: ["vinaychandra", "popatbhai", "daftary", "devotee"] },
        { title: "Maneklal Ghelabhai", url: "./people/maneklalGhelabhai.html", type: "person", image: "./images/people_images/maneklalGhelabhai.jpg", keywords: ["maneklal", "ghelabhai", "jeweller", "business", "partner"] },
        { title: "Revashankar Jagjivan", url: "./people/revashankarJagjivan.html", type: "person", image: "./images/people_images/revashankarJagjivan.jpg", keywords: ["revashankar", "jagjivan", "business", "partner", "company"] },
        { title: "Tribhuvan Bhanji", url: "./people/tribhuvanBhanji.html", type: "person", image: "./images/people_images/tribhuvanBhanji.jpg", keywords: ["tribhuvan", "bhanji", "devotee"] },
        { title: "Mahatma Gandhi", url: "./people/gandhiji.html", type: "person", image: "./images/people_images/gandhiji.jpg", keywords: ["gandhi", "gandhiji", "mahatma", "disciple", "spiritual", "guide"] },
        { title: "Vavaniya", url: "./places/vavaniya.html", type: "place", image: "./images/places_images/vavaniya/vavaniya.jpg", keywords: ["vavaniya", "birthplace", "birth", "village", "home"] },
        { title: "Morbi", url: "./places/morbi.html", type: "place", image: "./images/places_images/morbi/morbi.jpg", keywords: ["morbi", "city", "residence"] },
        { title: "Jamnagar", url: "./places/jamnagar.html", type: "place", image: "./images/places_images/jamnagar/jamnagar.jpg", keywords: ["jamnagar", "city"] },
        { title: "Wadhwan", url: "./places/wadhwan.html", type: "place", image: "./images/places_images/wadhwan/wadhwan.jpg", keywords: ["wadhwan", "city"] },
        { title: "Limbdi", url: "./places/limbdi.html", type: "place", image: "./images/places_images/limbdi/limbdi.jpg", keywords: ["limbdi", "city"] },
        { title: "Botad", url: "./places/botad.html", type: "place", image: "./images/places_images/botad/botad.jpg", keywords: ["botad", "city"] },
        { title: "Jetpar", url: "./places/jetpar.html", type: "place", image: "./images/places_images/jetpar/jetpar.jpg", keywords: ["jetpar", "city"] },
        { title: "Ahmedabad", url: "./places/ahmedabad.html", type: "place", image: "./images/places_images/ahmedabad/ahmedabad.jpg", keywords: ["ahmedabad", "city"] },
        { title: "Rajkot", url: "./places/rajkot.html", type: "place", image: "./images/places_images/rajkot/rajkot.jpg", keywords: ["rajkot", "city"] },
        { title: "Mumbai", url: "./places/mumbai.html", type: "place", image: "./images/places_images/mumbai/mumbai-1893.jpg", keywords: ["mumbai", "bombay", "business", "shatavdhan", "avdhan"] },
        { title: "Idar", url: "./places/idar.html", type: "place", image: "./images/places_images/idar/idar.jpg", keywords: ["idar", "city"] },
        { title: "Dharampur", url: "./places/dharampur.html", type: "place", image: "./images/places_images/dharampur/dharampur.jpg", keywords: ["dharampur", "ashram", "mission"] },
        { title: "Avdhan", url: "./events/avdhan.html", type: "event", image: "./images/events_images/avdhan.jpg", keywords: ["avdhan", "shatavdhan", "performance", "memory", "concentration"] },
        { title: "Chitrapat", url: "./events/chitrapat.html", type: "event", image: "./images/events_images/firstChitrapat.JPG", keywords: ["chitrapat", "photo", "photograph", "image"] },
        { title: "Mokshmala", url: "./compositions/mokshmala.html", type: "composition", image: "./images/compositions_images/mokshmala.jpg", keywords: ["mokshmala", "moksha", "liberation", "composition", "writing"] },
        { title: "Bhavnabodh", url: "./compositions/bhavnabodh.html", type: "composition", image: "./images/compositions_images/bhavnabodh.jpg", keywords: ["bhavnabodh", "bhavna", "bodh", "composition", "writing", "spiritual"] }
    ];
};