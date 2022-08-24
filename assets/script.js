const hamburgerButton = document.querySelector(".hamburger-button input");
const nav = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

