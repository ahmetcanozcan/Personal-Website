import toggleMenu from "./menu-animations";



// Get Animation links
const menuItems = document.getElementsByClassName("menu-item");

console.log("Items Count", menuItems.length);

// Set animation for all menu links
for (let i = 0; i < menuItems.length; i++) {
  let item = menuItems[i];
  let target = document.getElementById(item.getAttribute("data-target"));
  item.onclick = function () {
    toggleMenu(false);
    setTimeout(() => {
      scrollToElement(target);
    }, 420);
  }
}

/**
 * @param  {HTMLElement}  el: 
 */
function scrollToElement(el) {

  el.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })



}
