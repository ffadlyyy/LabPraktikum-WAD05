console.log("Dashboard Shell loaded");

const appName = "Dashboard Shell";
let userCount = 128;

function formatCurrency(amount) {
  return "Rp" + amount.toLocaleString("id-ID");
}

console.log(appName, "- Total users:", userCount);
console.log(formatCurrency(421000));

const statUsers = document.querySelector("#stat-users");
const statTransactions = document.querySelector("#stat-transactions");
const statAverage = document.querySelector("#stat-average");

console.log(statUsers, statTransactions, statAverage);

function displayData() {
  statUsers.textContent = userCount;
  statTransactions.textContent = 54;
  statAverage.textContent = formatCurrency(421000);
}

displayData();

const menuToggle = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    event.currentTarget.classList.add("active");
  });
});

const btnRefresh = document.querySelector("#btn-refresh");

btnRefresh.addEventListener("click", () => {
  userCount = Math.floor(Math.random() * 500);
  displayData();
});

const visitorNameInput = document.querySelector("#visitor-name");
const greetingOutput = document.querySelector("#greeting-output");

// UNSAFE — innerHTML akan menjalankan tag/script apapun di dalam input
document.querySelector("#btn-greet-unsafe").addEventListener("click", () => {
  greetingOutput.innerHTML = "Hello, " + visitorNameInput.value + "!";
});

// SAFE — textContent memperlakukan input sebagai teks biasa
document.querySelector("#btn-greet-safe").addEventListener("click", () => {
  greetingOutput.textContent = "Hello, " + visitorNameInput.value + "!";
});