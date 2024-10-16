const secondChart = document.getElementById("second-chart");
const secondChartProv = [
  "Kec. Purwodadi",
  "Kec. Gondang Wetan",
  "Kec. Wonorejo",
  "Kec Bangodua",
  "Kec. Kejayan",
  "Kec. Lekok",
  "Kec. Pasrepan",
  "Kec. Sukorejo",
];
const secondChartInstance = new Chart(secondChart, {
  type: "polarArea",
  data: {
    labels: secondChartProv,
    datasets: [
      {
        label: "Mahasiswa Baru",
        pointStyle: "circle",
        data: [50, 30, 40, 60, 80, 40, 90, 60],
        backgroundColor: [
          "#ADDE34",
          "#F8A23E",
          "#397968",
          "#E97474",
          "#ADDE34",
          "#F8A23E",
          "#397968",
          "#E97474",
        ],
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          padding: 10,
        },
        display: true,
        position: "right",
        align: "center",
      },
    },
  },
});

const menuButton = document.getElementById("menu-button");
const dropdownMenuYear = document.getElementById("dropdown-menu");
const year = ["2020", "2021", "2022", "2023", "2024", "2025"];
const jurusan = [
  "Teknik Industri",
  "Teknik Informatika",
  "Desain Komunikasi Visual",
  "Teknik Sipil",
  "Teknik Mesin",
  "Teknik Kimia",
];

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  dropdownMenuYear.classList.toggle("hidden");
});

year.forEach((item, index) => {
  const newMenu = document.createElement("button");
  newMenu.setAttribute("class", "block px-4 py-2 text-sm text-gray-700 w-full");
  newMenu.setAttribute("role", "menuitem");
  newMenu.setAttribute("tabindex", "-1");
  newMenu.setAttribute("id", `button-${index}`);
  newMenu.textContent = item;

  newMenu.addEventListener("click", () => {
    const label = document.getElementById("menu-button-label-year");
    label.textContent = item;
    dropdownMenuYear.classList.add("hidden");
  });

  dropdownMenuYear.appendChild(newMenu);
});
