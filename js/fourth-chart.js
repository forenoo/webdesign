const fourthChart = document.getElementById("fourth-chart");
const fourthChartInstance = new Chart(fourthChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        pointStyle: "circle",
        label: "Perempuan",
        backgroundColor: "#F8A23E",
        data: [133, 221, 570, 600],
      },
      {
        pointStyle: "circle",
        label: "Laki-Laki",
        backgroundColor: "#ADDE34",
        data: [408, 547, 675, 734],
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
  },
});
