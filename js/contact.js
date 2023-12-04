document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.href.split("/").pop();
  const navLinks = document.querySelectorAll(".primary-nav a");

  navLinks.forEach((link) => {
    if (currentPage.includes(link.getAttribute("href"))) {
      link.classList.add("active-link");
    }
  });
});
