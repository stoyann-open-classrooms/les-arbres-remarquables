const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".btn-toggle-container");

// navigation

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});
