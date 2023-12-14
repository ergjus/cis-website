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

  // VALIDATING FORM AND SHOWING THANK YOU SCREEN

  const sendFormBtn = document.querySelector(".submit-btn");
  const resubmitFormBtn = document.querySelector(".resubmit-btn");

  const thankYouForm = document.querySelector(".thankyou-form");
  const form = document.querySelector(".form");

  resubmitFormBtn.addEventListener("click", () => {
    thankYouForm.setAttribute("data-visible", false);
    form.setAttribute("data-visible", true);
  });

  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var isValid = true;
    var name = document.getElementById("input-name").value;
    var phone = document.getElementById("input-phone").value;
    var email = document.getElementById("input-email").value;

    // Name validation
    if (name.trim() === "") {
      alert("Please enter your name.");
      isValid = false;
    }

    // Phone number validation (basic example)
    if (phone.trim() !== "" && !/^\d+$/.test(phone)) {
      alert("Please enter a valid phone number.");
      isValid = false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      thankYouForm.setAttribute("data-visible", true);
      form.setAttribute("data-visible", false);
    }
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
