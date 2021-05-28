const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".btn-toggle-container");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});
