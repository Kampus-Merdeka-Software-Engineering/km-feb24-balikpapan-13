// Chart 1
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var years = [2014, 2015, 2016, 2017];
    var profitData = [];
    var salesData = [];
    years.forEach(year => {
      var filteredData = data.filter(item => item.Year === year);
      var totalProfit = filteredData.reduce((sum, item) => sum + item.Profit, 0);
      var totalSales = filteredData.reduce((sum, item) => sum + item.Sales, 0);
      profitData.push(totalProfit);
      salesData.push(totalSales);
    });

    var data1 = {
      labels: years.map(String),
      datasets: [{
        label: "profit",
        borderColor: "#6B8A7A",
        data: profitData,
        fill: false
      }, {
        label: "sales",
        borderColor: "#A79277",
        data: salesData,
        fill: false
      }]
    };

    var options1 = {
      responsive: true,
      title: {
        display: true,
        text: 'Tren Sales & Profit All Years'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'line',
      data: data1,
      options: options1
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

// Chart 2
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var regions = ["West", "South", "East", "Central"];
    var technologyData = [];
    var furnitureData = [];
    var officeSuppliesData = [];

    regions.forEach(region => {
      var filteredData = data.filter(item => item.Region === region);
      var technologySales = filteredData.filter(item => item.Category === "Technology").reduce((sum, item) => sum + item.Sales, 0);
      var furnitureSales = filteredData.filter(item => item.Category === "Furniture").reduce((sum, item) => sum + item.Sales, 0);
      var officeSuppliesSales = filteredData.filter(item => item.Category === "Office Supplies").reduce((sum, item) => sum + item.Sales, 0);
      technologyData.push(technologySales);
      furnitureData.push(furnitureSales);
      officeSuppliesData.push(officeSuppliesSales);
    });

    var data2 = {
      labels: regions,
      datasets: [{
        label: "Technology",
        backgroundColor: "#E4C59E",
        data: technologyData
      }, {
        label: "Furniture",
        backgroundColor: "#AF8260",
        data: furnitureData
      }, {
        label: "Office Supplies",
        backgroundColor: "#803D3B",
        data: officeSuppliesData
      }]
    };

    var options2 = {
      responsive: true,
      title: {
        display: true,
        text: 'Top Sales by Region/Category'
      },
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }]
      },
      animation: {
        animateRotate: false,
        animateScale: true
      }
    };

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'bar',
      data: data2,
      options: options2
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });




// Chart 3
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var categories = ["Technology", "Office Supplies", "Furniture"];
    var salesData = [];
    var profitData = [];

    categories.forEach(category => {
      var categorySales = data.filter(item => item.Category === category).reduce((sum, item) => sum + (item.Sales || 0), 0);
      var categoryProfit = data.filter(item => item.Category === category).reduce((sum, item) => sum + (item.Profit || 0), 0);
      salesData.push(categorySales);
      profitData.push(categoryProfit);
    });

    var data3 = {
      labels: categories,
      datasets: [{
        label: 'Sales',
        data: salesData,
        borderColor: "#ECB176",
        backgroundColor: "#ECB176"
      }, {
        label: 'Profit',
        data: profitData,
        borderColor: "#A67B5B",
        backgroundColor: "#A67B5B"
      }]
    };

    var options3 = {
      responsive: true,
      title: {
        display: true,
        text: "Sales & Profit by Category"
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Category'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Amount'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += context.raw.toLocaleString();
              return label;
            }
          }
        }
      }
    };

    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx3, {
      type: 'bar',
      data: data3,
      options: options3
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });




// Chart 4
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var categories = ["Technology", "Office Supplies", "Furniture"];
    var discountData = [];

    categories.forEach(category => {
      var categoryData = data.filter(item => item.Category === category);
      var totalDiscount = categoryData.reduce((sum, item) => sum + item.Discount, 0);
      var averageDiscount = totalDiscount / categoryData.length;
      discountData.push(averageDiscount * 100);
    });

    var data4 = {
      labels: categories,
      datasets: [{
        label: 'Discount',
        data: discountData,
        borderColor: ["#A7727D", "#BE7B72", "#FDAF7B"],
        backgroundColor: ["#A7727D", "#BE7B72", "#FDAF7B"]
      }]
    };

    var options4 = {
      responsive: true,
      title: {
        display: true,
        text: "Discount Rate/Category (%)"
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += context.raw.toFixed(2) + '%';
              return label;
            }
          }
        },
        datalabels: {
          display: true,
          formatter: (value, context) => {
            return context.dataset.data[context.dataIndex] * 100 + '%';
          },
          color: '#fff',
          font: {
            weight: 'bold'
          }
        }
      }
    };

    var ctx4 = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx4, {
      type: 'pie',
      data: data4,
      options: options4
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

// Chart 5
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var regions = ["West", "East", "South", "Central"];
    var profitData = [];
    regions.forEach(region => {
      var regionProfit = data.filter(item => item.Region === region).reduce((sum, item) => sum + item.Profit, 0);
      profitData.push(regionProfit);
    });

    var totalProfit = profitData.reduce((sum, profit) => sum + profit, 0);
    var profitPercentages = profitData.map(profit => (profit / totalProfit) * 100);

    var data5 = {
      labels: regions,
      datasets: [{
        label: 'Profit',
        data: profitPercentages,
        borderColor: ["#B0C5A4", "#D37676", "#EBC49F", "#F1EF99"],
        backgroundColor: ["#B0C5A4", "#D37676", "#EBC49F", "#F1EF99"]
      }]
    };

    var options5 = {
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      },
      title: {
        display: true,
        text: "Profit by Region (%)"
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    var ctx5 = document.getElementById('myChart5').getContext('2d');
    var myChart5 = new Chart(ctx5, {
      type: 'doughnut',
      data: data5,
      options: options5
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

// Chart 6
fetch('superstore.json')
  .then(response => response.json())
  .then(data => {
    var segments = ["Consumer", "Corporate", "Home Office"];
    var salesData = [];

    segments.forEach(segment => {
      var segmentSales = data.filter(item => item.Segment === segment).reduce((sum, item) => sum + item.Sales, 0);
      salesData.push(segmentSales);
    });

    var data6 = {
      labels: segments,
      datasets: [{
        label: 'Sales',
        data: salesData,
        borderColor: ["#9B4444", "#C68484", "#A3C9AA"],
        backgroundColor: ["#9B4444", "#C68484", "#A3C9AA"]
      }]
    };

    var options6 = {
      title: {
        display: true,
        text: "Top Sales by Segment"
      },
      scales: {
        y: {
          beginAtZero: true
        }
      },
      legend: {
        display: false
      }
    };

    var ctx6 = document.getElementById('myChart6').getContext('2d');
    var myChart6 = new Chart(ctx6, {
      type: 'bar',
      data: data6,
      options: options6
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
//scatter plot

 // Membaca data dari file superstore.json
fetch('superstore.json')
.then(response => response.json())
.then(data => {
  // Memisahkan data berdasarkan kategori
  var technologyData = data.filter(item => item.Category === 'Technology');
  var furnitureData = data.filter(item => item.Category === 'Furniture');
  var officeSuppliesData = data.filter(item => item.Category === 'Office Supplies');

  // Mengambil data Discount dan Profit untuk setiap kategori
  var technologyPoints = technologyData.map(item => ({ x: item.Discount, y: item.Profit }));
  var furniturePoints = furnitureData.map(item => ({ x: item.Discount, y: item.Profit }));
  var officeSuppliesPoints = officeSuppliesData.map(item => ({ x: item.Discount, y: item.Profit }));

  var data = {
    datasets: [{
      label: "Technology",
      borderColor: "#81A263",
      backgroundColor: "#81A263",
      data: technologyPoints,
    }, {
      label: "Furniture",
      borderColor: "#B19470",
      backgroundColor: "#B19470",
      data: furniturePoints,
    }, {
      label: "Office Supplies",
      borderColor: "#76453B",
      backgroundColor: "#76453B",
      data: officeSuppliesPoints,
    }]
  };

  var options = {
    responsive: true,
    title: {
      display: true,
      text: 'Relationship Between Discount on Profit By Category'
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Discount'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Profit'
        }
      }
    }
  };

  var ctx7 = document.getElementById('myChart7').getContext('2d');
  var myChart = new Chart(ctx7, {
    type: 'scatter',
    data: data,
    options: options
  });
})
.catch(error => {
  console.error('Error fetching JSON data:', error);
});
