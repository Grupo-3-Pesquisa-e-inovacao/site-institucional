let ctx = document.querySelector('#myChart')

const labels = ['time1', 'time2', 'time3', 'time4'];

const points = [100, 121, 300, 290];
const color = '#03fa6e';

let grafico = new Chart(ctx, {
type: "bar",
data: {
    labels: labels,
    datasets: [
        {
            label: "Acompanhamento dos votos:",
            data: points,
            backgroundColor: [`${color}`,
            `${color}`,
            `${color}`,
            `${color}`],
            borderWidth: 1,
        },
    ],
},
options: {
    scales: {
        responsive: true,
        y: {
            beginAtZero: true,
        },
    },
},
});