const thirdChart = document.getElementById("third-chart");
const thirdChartInstance = new Chart(thirdChart, {
  type: "bar",
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [
      {
        pointStyle: "circle",
        label: "Mahasiswa Aktif",
        backgroundColor: "#ADDE34",
        data: [133, 221, 570, 600],
      },
      {
        pointStyle: "circle",
        label: "Mahasiswa Non Aktif",
        backgroundColor: "#E6E6E6",
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

const menuButtonThirdChart = document.getElementById("menu-button-third-chart");
const dropdownMenuYearThirdChart = document.getElementById(
  "dropdown-menu-third-chart"
);

menuButtonThirdChart.addEventListener("click", () => {
  const isExpanded =
    menuButtonThirdChart.getAttribute("aria-expanded") === "true";
  menuButtonThirdChart.setAttribute("aria-expanded", !isExpanded);
  dropdownMenuYearThirdChart.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !menuButtonThirdChart.contains(event.target) &&
    !dropdownMenuYearThirdChart.contains(event.target)
  ) {
    dropdownMenuYearThirdChart.classList.add("hidden");
    menuButtonThirdChart.setAttribute("aria-expanded", "false");
  }
});

jurusan.forEach((item, index) => {
  const newMenu = document.createElement("button");
  newMenu.setAttribute("class", "block px-4 py-2 text-sm text-gray-700 w-full");
  newMenu.setAttribute("role", "menuitem");
  newMenu.setAttribute("tabindex", "-1");
  newMenu.setAttribute("id", `button-third-${index}`);
  newMenu.textContent = item;

  newMenu.addEventListener("click", () => {
    const label = document.getElementById("menu-button-label-prodi");
    label.textContent = item;
  });
  dropdownMenuYearThirdChart.appendChild(newMenu);
});
