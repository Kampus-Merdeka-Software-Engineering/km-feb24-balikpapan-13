// Inisialisasi peta
var map = L.map('map').setView([37.8, -96], 4);

// Menambahkan tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Membaca data dari file superstore.json
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    // Mengelompokkan data berdasarkan kota
    var cityData = {};
    data.forEach(item => {
      var city = item.City;
      if (city in cityData) {
        cityData[city].sales += item.Sales;
        cityData[city].profit += item.Profit;
      } else {
        cityData[city] = {
          sales: item.Sales,
          profit: item.Profit,
          lat: item.Latitude,
          lng: item.Longitude
        };
      }
    });

    // Menampilkan marker untuk setiap kota
    for (var city in cityData) {
      var marker = L.marker([cityData[city].lat, cityData[city].lng]).addTo(map);
      marker.bindPopup(`
        <b>${city}</b><br>
        Sales: ${cityData[city].sales}<br>
        Profit: ${cityData[city].profit}
      `);
    }
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });