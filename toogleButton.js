// Funkcia na prepínanie medzi svetlým a tmavým režimom
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Uložíme aktuálny režim do localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Obsluha udalosti pre tlačidlo prepnutia temy
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", toggleDarkMode);

// Načítanie aktuálneho režimu pri načítaní stránky
document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode") === "true";
  if (darkMode) {
    document.body.classList.add("dark-mode");
  }
});
