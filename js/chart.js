// Chart 1
var data1 = {
    labels: ["2014", "2015", "2016", "2017"],
    datasets: [{
        label: "profit",
        borderColor: "#82CAFF",
        data: [49, 61, 81, 93],
        fill: false
    }, {
        label: "sales",
        borderColor: "#79BAEC",
        data: [484, 470, 609, 733],
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

// Chart 2
var data2 = {
    labels: ["200", "400", "600", "800"],
    datasets: [{
        label: "Technology",
        borderColor: "#5CB3FF",
        backgroundColor: "#5CB3FF",
        data: [252, 148, 265, 170],
        fill: false
    }, {
        label: "Furniture",
        borderColor: "#79BAEC",
        backgroundColor: "#79BAEC",
        data: [252, 117, 208, 163],
        fill: false
    }, {
        label: "Office Supplies",
        borderColor: "#82CAFF",
        backgroundColor: "#82CAFF",
        data: [220, 125, 205, 167],
        fill: false
    }]
};

var options2 = {
    responsive: true,
    title: {
        display: true,
        text: 'Top Sales by Region/Category'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: options2
});

// Chart 3
var data3 = {
    labels: ["Technology", "Office Supplies", "Furniture"],
    datasets: [{
        label: 'Sales',
        data: [836, 719, 742],
        borderColor: ["#5CB3FF", "#79BAEC", "#82CAFF"],
        backgroundColor: ["#5CB3FF", "#79BAEC", "#82CAFF"]
    }]
};

var options3 = {
    title: {
        display: true,
        text: "Sales & Profit by Category"
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

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: data3,
    options: options3
});

// Chart 4
var data4 = {
    labels: ["Technology", "Office Supplies", "Furniture"],
    datasets: [{
        label: 'Discount',
        data: [28.5, 33.9, 37.5],
        borderColor: ["#5CB3FF", "#79BAEC", "#82CAFF"],
        backgroundColor: ["#5CB3FF", "#79BAEC", "#82CAFF"]
    }]
};

var options4 = {
    title: {
        display: true,
        text: "Discount Rate/Category %"
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

var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: data4,
    options: options4
});

// Chart 5
var data5 = {
    labels: ["West", "East", "South", "Central"],
    datasets: [{
        label: 'Profit',
        data: [37.9, 32, 16.3, 13.9],
        borderColor: ["#5CB3FF", "#79BAEC", "#82CAFF", "#38ACEC"],
        backgroundColor: ["#5CB3FF", "#79BAEC", "#82CAFF", "#38ACEC"]
    }]
};

var options5 = {
    title: {
        display: true,
        text: "Profit by Region %"
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

var ctx5 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: data5,
    options: options5
});

// Chart 6
var data6 = {
    labels: ["Consumer", "Corporate", "Home Office"],
    datasets: [{
        label: 'Sales',
        data: [1161, 706, 429],
        borderColor: ["#5CB3FF", "#79BAEC", "#82CAFF"],
        backgroundColor: ["#5CB3FF", "#79BAEC", "#82CAFF"]
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
