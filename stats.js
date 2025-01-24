
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    const cart = JSON.parse(savedCart);

    const tableData = [];

    cart.forEach((item) => {

        const rowData = {

            'Назва': item.pizza.name,
            'Розмір': item.size,
            'Кількість': item.quantity,
            'Ціна за одну': item.size === 'small' ? item.pizza.smallPrice : item.pizza.bigPrice,
            'Загальна ціна': (item.size === 'small' ? item.pizza.smallPrice : item.pizza.bigPrice) * item.quantity,
            'Вага': item.size === 'small' ? item.pizza.smallWeight : item.pizza.bigWeight

        };
        tableData.push(rowData);
    });


    new WebDataRocks({
        container: "#wdr-component",
        height: 400,
        toolbar: true,
        report: {
            "dataSource": {
                "data": tableData
            },
            "options": {
                "grid": {
                    "type": "classic",
                }
            }
        }
    });


    const smallPizzaPrices = cart
        .filter(item => item.size === 'small')
        .map(item => ({ name: item.pizza.name, price: item.pizza.smallPrice * item.quantity }));

    const smallData = [['Назва', 'Ціна']];
    smallPizzaPrices.forEach(item => {
        smallData.push([item.name, item.price]);
    });

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawSmallChart);

    function drawSmallChart() {
        const smallChartData = google.visualization.arrayToDataTable(smallData);

        const options = {
            title: 'Ціна маленьких піц',
            pieHole: 0.4,
            pieSliceText: 'none'
        };

        const chart = new google.visualization.PieChart(document.getElementById('small-chart-container'));
        chart.draw(smallChartData, options);
    }


    const largePizzaPrices = cart
        .filter(item => item.size === 'big')
        .map(item => ({ name: item.pizza.name, price: item.pizza.bigPrice * item.quantity }));

    const data = [['Назва', 'Ціна']];
    largePizzaPrices.forEach(item => {
        data.push([item.name, item.price]);
    });


    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        const chartData = google.visualization.arrayToDataTable(data);

        const options = {
            title: 'Ціна великих піц',
            pieHole: 0.4,
            pieSliceText: 'none'
        };

        const chart = new google.visualization.PieChart(document.getElementById('big-chart-container'));
        chart.draw(chartData, options);
    }

}


function MenuPage() {
    window.location.href = 'test.html';
}
