const seventhChart = document.getElementById("seventh-chart");
const dataMahasiswaPendaftar = 150;
const dataMahasiswaTerdaftar = 450;

const seventhChartInstance = new Chart(seventhChart, {
  type: "doughnut",
  data: {
    labels: ["Mahasiswa Terdaftar", "Mahasiswa Pendaftar"],
    datasets: [
      {
        pointStyle: "circle",
        data: [dataMahasiswaPendaftar, dataMahasiswaTerdaftar],
        backgroundColor: ["#F8A23E", "#ADDE34"],
        hoverOffset: 4,
        borderWidth: 0,
        borderColor: ["#F8A23E", "#ADDE34"],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
