// function searchFunction() {
//     const searchRes = document.getElementById('searchResults')
//     searchRes.innerHTML = '<p> tes</p>'
//     // const input = document.getElementById('searchInput').value.toLowerCase();
//     // fetch('superstore.json')
//     //     .then(response => response.json())
//     //     .then(data => {

//     //         document.querySelector('.cardBox').innerHTML = '';
//     //         console.log(data)
          
//     //         const filteredData = data.filter(item => {
                
//     //             return item['Customer Name'].toLowerCase().includes(input);
//     //         });

            
//     //         filteredData.forEach(item => {
//     //             const card = document.createElement('div');
//     //             card.classList.add('card');
//     //             const cardContent = `
//     //                 <div>
//     //                     <div class="numbers">${item['Sales']}</div>
//     //                     <div class="cardName">${item['Customer Name']}</div>
//     //                 </div>
//     //                 <div class="iconbox">
//     //                     <ion-icon name="cart-outline"></ion-icon>
//     //                 </div>`;
//     //             card.innerHTML = cardContent;
//     //             document.querySelector('.cardBox').appendChild(card);
//     //         });
//     //     })
//     //     .catch(error => console.error('Error:', error));
// }

function searchSuperstore() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    // Kosongkan hasil pencarian sebelumnya
    resultsContainer.innerHTML = '';

    // Fetch data JSON
    fetch('superstore.json')
      .then(response => response.json())
      .then(data => {
        // Filter data berdasarkan search term
        const filteredData = data.filter(item =>
            item['Customer Name'].toLowerCase().includes(searchTerm) ||
            item['Product Name'].toLowerCase().includes(searchTerm)
          );

        
        // Tampilkan hasil pencarian
        if (filteredData.length > 0 && searchTerm != "") {
            console.log(filteredData);
          filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `
              <p>Order ID: ${item['Order ID']}</p>
              <p>Customer Name: ${item['Customer Name']}</p>
              <p>Product Name: ${item['Product Name']}</p>
              <!-- Tambahkan field lainnya sesuai kebutuhan -->
            `;
            resultsContainer.appendChild(resultItem);
          });
        } else {
          resultsContainer.innerHTML = '<p>Tidak ada hasil yang ditemukan.</p>';
        }

        // Tampilkan modal
        $('#searchModal').modal('show');
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  }

  // Tambahkan event listener pada tombol search
  document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();
    searchSuperstore();
  });