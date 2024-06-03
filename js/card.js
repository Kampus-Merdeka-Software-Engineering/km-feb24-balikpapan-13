fetch('superstore.json')
.then(response => response.json())
.then(data => {
    // Menghitung total profit
    const totalProfit = data.reduce((sum, order) => sum + order['Profit'], 0);
    document.getElementById('totalProfit').textContent = `$${totalProfit.toFixed(2)} rb`;

    // Menghitung total sales
    const totalSales = data.reduce((sum, order) => sum + order['Sales'], 0);
    document.getElementById('totalSales').textContent = `$${totalSales.toFixed(2)} jt`;

    // Menghitung total order
    const totalOrders = data.length;
    document.getElementById('totalOrders').textContent = `${totalOrders} rb`;

    // Menghitung unit terjual
    const unitsSold = data.reduce((sum, order) => sum + order['Quantity'], 0);
    document.getElementById('unitsSold').textContent = `${unitsSold.toFixed(1)} rb`;

    // Menghitung jumlah customer
    const totalCustomers = new Set(data.map(order => order['Customer ID'])).size;
    document.getElementById('totalCustomers').textContent = totalCustomers;

    // Menghitung total diskon
    const totalDiscount = data.reduce((sum, order) => sum + order['Discount'], 0);
    const averageDiscount = totalDiscount / data.length * 100;
    document.getElementById('totalDiscount').textContent = `${averageDiscount.toFixed(0)}%`;
})
.catch(error => {
    console.error('Error:', error);
});