function createSaleChart(graph_data_sales, graph_data_ecommerce, labels) {
    if ($('#SalesChart').length) {
        var ctx = document.getElementById("SalesChart").getContext('2d'),
            gradient = ctx.createLinearGradient(0, 0, 0, 400),
            gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(1, 'rgba(44,173,245,0.1)');
        gradient.addColorStop(0, 'rgba(79,203,251, 1)');
        gradient2.addColorStop(1, 'rgba(154,119,96,0.1)');
        gradient2.addColorStop(0, 'rgba(248,207,105,1)');;
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Sales in the year (Million Dolars)",
                        borderColor: gradient2,
                        borderWidth: "1",
                        backgroundColor: gradient2,
                        pointHighlightStroke: "rgba(245, 23, 66,.5)",
                        data: graph_data_sales
                    },
                    {
                        label: "E-commerce sales in the year (Million Dolars)",
                        borderColor: gradient,
                        borderWidth: "1",
                        backgroundColor: gradient,
                        data: graph_data_ecommerce
                    }


                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }

            }
        });
    }
}
createSaleChart();

