// This file contains JavaScript code for interactivity on the website, including map integration.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize map when the map.html is loaded
    if (document.getElementById('map')) {
        initMap();
    }

    fetch('/static/data.csv')
        .then(response => response.text())
        .then(data => {
            const parsedData = parseCSV(data);
            document.title = parsedData.title;
            document.getElementById('header-title').textContent = parsedData.header;
            document.getElementById('about-title').textContent = parsedData.about_title;
            document.getElementById('about-description').textContent = parsedData.about_description;
            document.querySelector('footer p').textContent = parsedData.footer;
        })
        .catch(error => console.error('Error fetching data:', error));
});

function initMap() {
    // Example of initializing a map using Leaflet
    var map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
}

function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const values = lines[1].split(',');
    const result = {};
    headers.forEach((header, index) => {
        result[header] = values[index];
    });
    return result;
}