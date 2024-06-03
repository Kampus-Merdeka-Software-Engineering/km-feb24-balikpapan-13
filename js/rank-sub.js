fetch('superstore.json')
        .then(response => response.json())
        .then(data => {
            // Menghitung total penjualan untuk setiap sub-kategori
            const salesBySubCategory = data.reduce((acc, order) => {
                const category = order['Category'];
                const subCategory = order['Sub-Category'];
                const key = `${category}-${subCategory}`;
                if (!acc[key]) {
                    acc[key] = {
                        category: category,
                        subCategory: subCategory,
                        sales: 0,
                        quantity: 0,
                        discount: 0,
                        orders: []
                    };
                }
                acc[key].sales += order['Sales'];
                acc[key].quantity += order['Quantity'];
                acc[key].discount += order['Discount'];
                acc[key].orders.push(order);
                return acc;
            }, {});

            // Mengurutkan sub-kategori berdasarkan total penjualan
            const sortedSubCategories = Object.values(salesBySubCategory).sort((a, b) => b.sales - a.sales);

            // Menampilkan ranking sub-kategori dalam tabel
            const rankTableBody = document.getElementById('rankTableBody');
            let totalSales = 0, totalQuantity = 0, totalDiscount = 0;
            const orderIds = new Set();
            const productIds = new Set();
            const categories = new Set();
            const subCategories = new Set();

            sortedSubCategories.forEach(item => {
                item.orders.forEach(order => {
                    const row = document.createElement('tr');

                    const categoryCell = document.createElement('td');
                    categoryCell.textContent = item.category;
                    row.appendChild(categoryCell);

                    const subCategoryCell = document.createElement('td');
                    subCategoryCell.textContent = item.subCategory;
                    row.appendChild(subCategoryCell);

                    const orderIdCell = document.createElement('td');
                    orderIdCell.textContent = order['Order ID'];
                    row.appendChild(orderIdCell);
                    orderIds.add(order['Order ID']);

                    const productIdCell = document.createElement('td');
                    productIdCell.textContent = order['Product ID'];
                    row.appendChild(productIdCell);
                    productIds.add(order['Product ID']);

                    const salesCell = document.createElement('td');
                    salesCell.textContent = order['Sales'].toFixed(2);
                    row.appendChild(salesCell);

                    const quantityCell = document.createElement('td');
                    quantityCell.textContent = order['Quantity'];
                    row.appendChild(quantityCell);

                    const discountCell = document.createElement('td');
                    discountCell.textContent = order['Discount'].toFixed(2);
                    row.appendChild(discountCell);

                    rankTableBody.appendChild(row);

                    totalSales += order['Sales'];
                    totalQuantity += order['Quantity'];
                    totalDiscount += order['Discount'];
                    categories.add(order['Category']);
                    subCategories.add(order['Sub-Category']);
                });
            });

            // Menampilkan total keseluruhan dalam tabel
            document.getElementById('totalSales').textContent = totalSales.toFixed(2);
            document.getElementById('totalQuantity').textContent = totalQuantity;
            document.getElementById('totalDiscount').textContent = totalDiscount.toFixed(2);

            // Menampilkan total keseluruhan dalam card
            document.getElementById('totalSalesCard').textContent = totalSales.toFixed(2);
            document.getElementById('totalQuantityCard').textContent = totalQuantity;
            document.getElementById('totalDiscountCard').textContent = totalDiscount.toFixed(2);

            // Menampilkan jumlah kategori, sub-kategori, Order ID, dan Product ID dalam card
            document.getElementById('totalCategoriesCard').textContent = categories.size;
            document.getElementById('totalSubCategoriesCard').textContent = subCategories.size;
            document.getElementById('totalOrderIDsCard').textContent = orderIds.size;
            document.getElementById('totalProductIDsCard').textContent = productIds.size;
        })
        .catch(error => {
            console.error('Error:', error);
        });