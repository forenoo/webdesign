const firstChart = document.getElementById("first-chart");
const firstChartData = [10, 20, 10, 50, 30, 40];
const firstChartYears = ["2020", "2021", "2022", "2023", "2024", "2025"];
const firstChartInstance = new Chart(firstChart, {
  type: "line",
  data: {
    labels: firstChartYears,
    datasets: [
      {
        pointStyle: "circle",
        label: "Mahasiswa Baru",
        backgroundColor: "#ADDE34",
        borderColor: "#ADDE34",
        data: firstChartData,
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

const calendarBtn = document.getElementById("calendar-btn");
const calendarFull = document.getElementById("calendar-full");
const yearStart = document.getElementById("year-start");
const yearEnd = document.getElementById("year-end");
const changeBeforeYearStart = document.getElementById(
  "change-before-year-start"
);
const changeAfterYearStart = document.getElementById("change-after-year-start");
const changeBeforeYearEnd = document.getElementById("change-before-year-end");
const changeAfterYearEnd = document.getElementById("change-after-year-end");
const monthsStart = document.getElementById("months-start");
const monthsEnd = document.getElementById("months-end");
const selectedRangeText = document.getElementById("selected-range");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const fullName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let selectedStartMonth = null;
let selectedEndMonth = null;

// Toggle calendar visibility on button click
calendarBtn.addEventListener("click", () => {
  calendarFull.classList.toggle("hidden");
  calendarFull.classList.toggle("flex");
});

// Decrement the start year
changeBeforeYearStart.addEventListener("click", () => {
  yearStart.textContent = parseInt(yearStart.textContent) - 1;
});

// Increment the start year and adjust the end year if necessary
changeAfterYearStart.addEventListener("click", () => {
  yearStart.textContent = parseInt(yearStart.textContent) + 1;
  if (parseInt(yearEnd.textContent) < parseInt(yearStart.textContent)) {
    yearEnd.textContent = yearStart.textContent;
  }
});

// Decrement the end year with a check to not go below the start year
changeBeforeYearEnd.addEventListener("click", () => {
  if (parseInt(yearEnd.textContent) > parseInt(yearStart.textContent)) {
    yearEnd.textContent = parseInt(yearEnd.textContent) - 1;
  }
});

// Increment the end year
changeAfterYearEnd.addEventListener("click", () => {
  yearEnd.textContent = parseInt(yearEnd.textContent) + 1;
});

const generateMonthButtons = (container, isStart) => {
  months.forEach((month, index) => {
    const button = document.createElement("button");
    button.classList.add("padding-clndr-btn", "transition-all");
    button.textContent = month;

    button.addEventListener("click", () => {
      if (isStart) {
        selectedStartMonth = index;
      } else {
        selectedEndMonth = index;
      }
      highlightSelectedRange();
    });

    container.appendChild(button);
  });
};

// Highlight the selected range of months and update the display text
const highlightSelectedRange = () => {
  const startButtons = monthsStart.querySelectorAll("button");
  const endButtons = monthsEnd.querySelectorAll("button");

  // Remove existing highlights
  startButtons.forEach((btn) => btn.classList.remove("bg-primary-highlight"));
  endButtons.forEach((btn) => btn.classList.remove("bg-primary-highlight"));

  // Highlight the selected range if both start and end months are chosen
  if (selectedStartMonth !== null && selectedEndMonth !== null) {
    for (let i = selectedStartMonth; i <= selectedEndMonth; i++) {
      if (startButtons[i])
        startButtons[i].classList.add("bg-primary-highlight");
      if (endButtons[i]) endButtons[i].classList.add("bg-primary-highlight");
    }

    // Update the selected range text
    selectedRangeText.textContent = `${fullName[selectedStartMonth]} - ${fullName[selectedEndMonth]} ${yearEnd.textContent}`;
  }
};

// Initialize month buttons
generateMonthButtons(monthsStart, true);
generateMonthButtons(monthsEnd, false);
