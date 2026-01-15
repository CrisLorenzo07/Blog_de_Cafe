document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});
