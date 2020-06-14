

const menuElement = document.getElementById("menu");


let isMenuOpen = false;

const menuButton = document.querySelector(".menu-button-wrapper");
const hamburger = document.getElementById("nav-icon2");

menuButton.onclick = function () {

  isMenuOpen = !isMenuOpen;

  toggleMenu(isMenuOpen);

}

function toggleMenu(isOpen) {
  if (isOpen) {
    menuElement.classList.add("active");
    hamburger.classList.add("open");

  } else {
    menuElement.classList.remove("active");
    hamburger.classList.remove("open");

  }
  isMenuOpen = isOpen;


}

export default toggleMenu;