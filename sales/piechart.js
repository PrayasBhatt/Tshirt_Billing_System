let pieChart;

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        console.log("Loaded JSON:", data);

        const labels = data.map(item => item.name);
        const values = data.map(item => item.sales);



        const ctxPie = document.getElementById('pieChart').getContext('2d');

        pieChart = new Chart(ctxPie, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sales',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    })
    .catch(err => console.error("Error loading JSON:", err));

    function handleProductClick(name) {
    if (!pieChart) return; 

    pieChart.data.datasets[0].backgroundColor = pieChart.data.datasets[0].backgroundColor.map((color, index) => {
        const originalColors = [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
        ];
        return originalColors[index % originalColors.length];
    });

    const index = pieChart.data.labels.indexOf(name);
    if (index !== -1) {
        pieChart.data.datasets[0].backgroundColor[index] = 'rgba(0, 0, 0, 1)';
    }

    pieChart.update(); 
}