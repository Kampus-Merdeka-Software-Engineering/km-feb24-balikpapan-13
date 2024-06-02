// Initialize the map
var map = L.map('map').setView([39.8283, -98.5795], 4);  // Center of the US

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to fetch and plot data
fetch('superstore.json')
    .then(response => response.json())
    .then(data => {
        var locations = data.map(item => ({
            country: item.Country,
            city: item.City,
            state: item.State,
            postalCode: item['Postal Code'],
            region: item.Region
        }));

        // Filter locations to be in the United States
        locations = locations.filter(location => location.country === "United States");

        // Geocode each location and add markers to the map
        locations.forEach(location => {
            var address = `${location.city}, ${location.state}, ${location.country}`;

            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var latlng = [data[0].lat, data[0].lon];
                        L.marker(latlng)
                            .addTo(map)
                            .bindPopup(`<b>${location.city}, ${location.state}</b><br>${location.region}`);
                    }
                })
                .catch(error => {
                    console.error('Error fetching geocode data:', error);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
