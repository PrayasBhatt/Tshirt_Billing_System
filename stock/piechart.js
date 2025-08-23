let pieChart;

    fetch('products.json')  
      .then(response => response.json())
      .then(data => {
        console.log("Loaded JSON:", data); 

        const labels = data.map(item => item.name);
        const values = data.map(item => item.qty);

        const ctxPie = document.getElementById('pieChart').getContext('2d');

        pieChart = new Chart(ctxPie, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: 'Stocks',
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
            plugins: {
              legend: {
                position: 'bottom',
              }
            }
          }
        });
      })
      .catch(err => console.error("Error loading JSON:", err));