const sixthChart = document.getElementById("sixth-chart");
const sixthChartInstance = new Chart(sixthChart, {
  type: "bar",
  data: {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        pointStyle: "circle",
        label: "Perempuan",
        barThickness: 30,
        backgroundColor: "rgba(57, 121, 104, 0.5)",
        borderColor: "#397968",
        borderWidth: 1,
        data: [600, 300, 350, 500],
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
