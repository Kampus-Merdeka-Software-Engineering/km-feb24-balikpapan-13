fetch('superstore.json')
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector('#dataTable tbody');

    // Menampilkan data dalam tabel
    data.forEach((order, index) => {
        const row = document.createElement('tr');

        const no = document.createElement('td');
        no.textContent = index + 1;
        row.appendChild(no);

        const orderId = document.createElement('td');
        orderId.textContent = order['Order ID'];
        row.appendChild(orderId);

        const orderDate = document.createElement('td');
        orderDate.textContent = order['Order Date'];
        row.appendChild(orderDate);

        const customerName = document.createElement('td');
        customerName.textContent = order['Customer Name'];
        row.appendChild(customerName);

        const city = document.createElement('td');
        city.textContent = order['City'];
        row.appendChild(city);

        const state = document.createElement('td');
        state.textContent = order['State'];
        row.appendChild(state);

        const sales = document.createElement('td');
        sales.textContent = order['Sales'];
        row.appendChild(sales);

        const profit = document.createElement('td');
        profit.textContent = order['Profit'];
        row.appendChild(profit);

        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error('Error:', error);
});