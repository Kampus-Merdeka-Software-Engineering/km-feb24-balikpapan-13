// Inisialisasi peta Leaflet
var map = L.map('map').setView([37.8, -96], 4);

// Menambahkan tiles layer ke peta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Memuat data dari file superstore.json
fetch('superstore.json')
    .then(response => response.json())
    .then(data => {
        // Mengelompokkan data penjualan berdasarkan negara
        const salesByCountry = data.reduce((acc, order) => {
            const country = order['Country'];
            if (!acc[country]) {
                acc[country] = 0;
            }
            acc[country] += order['Sales'];
            return acc;
        }, {});

        // Membuat marker untuk setiap negara dengan data penjualan
        for (const country in salesByCountry) {
            // Mendapatkan koordinat latitude dan longitude untuk negara (Anda dapat menggunakan layanan geocoding)
            const lat = getLatitude(country);
            const lng = getLongitude(country);

            // Membuat marker dengan popup yang menampilkan total penjualan untuk negara tersebut
            L.marker([lat, lng]).addTo(map)
                .bindPopup(`<b>${country}</b><br>Total Sales: $${salesByCountry[country].toFixed(2)}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Fungsi untuk mendapatkan latitude berdasarkan nama negara (implementasi contoh)
function getLatitude(country) {
    // Implementasikan logika untuk mendapatkan latitude berdasarkan nama negara
    // Misalnya, menggunakan layanan geocoding atau data koordinat yang telah didefinisikan sebelumnya
    // Contoh sederhana:
    if (country === 'United States') {
        return 37.0902;
    }

    if (country === 'United States') {
        return 37.0902;
    }
    // Tambahkan kondisi untuk negara lainnya
    return 0;
}

// Fungsi untuk mendapatkan longitude berdasarkan nama negara (implementasi contoh)
function getLongitude(country) {
    // Implementasikan logika untuk mendapatkan longitude berdasarkan nama negara
    // Misalnya, menggunakan layanan geocoding atau data koordinat yang telah didefinisikan sebelumnya
    // Contoh sederhana:
    if (country === 'United States') {
        return -95.7129;
    }
    // Tambahkan kondisi untuk negara lainnya
    return 0;
}