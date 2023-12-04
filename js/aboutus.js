document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.href.split("/").pop();
  const navLinks = document.querySelectorAll(".primary-nav a");

  navLinks.forEach((link) => {
    console.log(link.getAttribute("href").includes(currentPage));
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active-link");
    }
  });
});
