document.addEventListener("DOMContentLoaded", () => {
  // HANDLING THE MOBILE DISPLAY OF THE NAV

  const primaryNav = document.querySelector(".primary-nav");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    let visible = primaryNav.getAttribute("data-visible");

    if (visible === "true") {
      primaryNav.setAttribute("data-visible", false);
    } else {
      primaryNav.setAttribute("data-visible", true);
    }

    console.log(visible);
  });

  // HANDLING HAMBURGER MENU ROTATION
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  toggleButton.addEventListener("click", () => {
    const icon = toggleButton.querySelector(".fa-bars");
    icon.classList.toggle("rotate-icon");
  });

  // ADDING CHECK WHENEVER USER CLIKS A TRIAL BOX

  const trialBoxes = document.querySelectorAll(".trial");

  trialBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      trialBoxes.forEach((box) => {
        box.setAttribute("data-selected", "false");
        box.querySelector(".fa-check").setAttribute("data-visible", "false");
      });

      box.setAttribute("data-selected", "true");
      box.querySelector(".fa-check").setAttribute("data-visible", "true");
    });
  });
});

/*
const checkbox = document.querySelector(".trial");
const checkmark = document.querySelector(".fa-solid");

function handleCheckbox(evt) {
  console.log(evt);
}

 checkbox.addEventListener("click", () => {
 let visible = primaryNav.getAttribute("data-visible");
   console.log(visible);
 }); */
