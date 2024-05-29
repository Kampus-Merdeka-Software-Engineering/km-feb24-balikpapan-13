document.addEventListener('DOMContentLoaded', (event) => {
    // Pie Chart
    var xValues = ["Technology", "Office Supplies", "Furniture"];
    var yValues = [37.5, 28.5, 33.9];
    var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
    
    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Discount Rate / Category (%)"
            }
        }
    });

    // Bar Chart
    var xValuesBar = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValuesBar = [55, 49, 44, 24, 15];
    var barColorsBar = ["red", "green", "blue", "orange", "brown"];

    new Chart("barChart", {
        type: "bar",
        data: {
            labels: xValuesBar,
            datasets: [{
                backgroundColor: barColorsBar,
                data: yValuesBar
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Sales & Profit By Category"
            }
        }
    });

    // Doughnut Chart
    var xValuesDoughnut = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValuesDoughnut = [55, 49, 44, 24, 15];
    var barColorsDoughnut = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
    
    new Chart("doughnutChart", {
        type: "doughnut",
        data: {
            labels: xValuesDoughnut,
            datasets: [{
                backgroundColor: barColorsDoughnut,
                data: yValuesDoughnut
            }]
        },
        options: {
            title: {
                display: true,
                text: "Profit by Region (%)"
            }
        }
    });
});
