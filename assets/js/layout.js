// Page scroll event

let scrolling = false;

window.addEventListener("scroll", () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    handleShrinkNavbar();
  }
}, 100);

// Burger menu

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("page-navbar");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("burger-menu--close");
  overlay.classList.toggle("page-navbar--menu-open");
});

// Header shrink

const handleShrinkNavbar = () => {
  const pageNavbar = document.getElementById("page-navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    pageNavbar.classList.add("page-navbar--shrink");
  } else {
    pageNavbar.classList.remove("page-navbar--shrink");
  }
};
