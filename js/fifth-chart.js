const fifthChart = document.getElementById("fifth-chart");
const fifthChartData = [10, 20, 10, 50, 30, 40];

const fifthChartInstance = new Chart(fifthChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun"],
    datasets: [
      {
        pointStyle: "circle",
        label: "Mahasiswa Baru Yang Daftar",
        backgroundColor: "#397968",
        borderColor: "#397968",
        data: fifthChartData,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 60,
      },
    },
  },
});
