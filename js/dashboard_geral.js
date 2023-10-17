// Gráfico de Linha
var lineData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
        {
            label: "Usos",
            data: [40, 20, 150, 100, 40, 260, 356, 200, 170, 160, 190, 340],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }
    ]
};

var lineCtx = document.getElementById('myLineChart').getContext('2d');
var lineChart = new Chart(lineCtx, {
    type: 'line',
    data: lineData
});

// Gráfico de Rosca
var doughnutData = {
    // labels: ["Operação Normal", "Operação em Alerta", "Operação em Risco"],
    datasets: [
        {
            data: [18, 4, 8],
            backgroundColor: ['#109A68', '#DAC617', '#FF0000'],
            borderRadius: 5,
        }
    ]
};

var doughnutCtx = document.getElementById('myDoughnutChart').getContext('2d');
var doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: doughnutData,
});


var horizontalBarCtx = document.getElementById('myHorizontalBarChart').getContext('2d');

var horizontalBarData = {
    labels: [""],
    datasets: [
        {
            label: "Em uso",
            data: [30],
            backgroundColor: '#108456',
            barThickness: 20,
            borderRadius: 10,
            barPercentage: 1,
        },
        {
            label: "Desligados",
            data: [13],
            backgroundColor: '#7ACBAD',
            barThickness: 20,
            borderRadius: 10,
            barPercentage: 1,
        }
    ]
};

var horizontalBarChart = new Chart(horizontalBarCtx, {
    type: 'bar',
    data: horizontalBarData,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false // Remove a grade de fundo no eixo X
                }
            },

            y: {
                beginAtZero: true,
                grid: {
                    display: false // Remove a grade de fundo no eixo Y
                }

            }
        }
    }
});

// CARROSSEL
