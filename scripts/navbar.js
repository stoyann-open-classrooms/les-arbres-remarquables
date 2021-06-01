const btnNav = document.querySelector(".responsive-nav-btn");

const listeNav = document.querySelector("nav ul");

let imgBtn = document.querySelector(".responsive-nav-btn img");

imgBtn.addEventListener("click", () => {
  listeNav.classList.toggle("active-nav");

  if (imgBtn.src.includes("menu")) {
    imgBtn.src = "../sources/svg/croix.svg";
    imgBtn.getElementsByClassName.width = "30px";
    imgBtn.getElementsByClassName.height = "30px";
  } else {
    // imgBtn.src = "../sources/svg/menu.svg";
    imgBtn.getElementsByClassName.width = "40px";
    imgBtn.getElementsByClassName.height = "40px";
  }
});
