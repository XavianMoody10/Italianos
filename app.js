"use strict";
const exitIcon = document.querySelector("#responsive-header i");
const openIcon = document.querySelector("#fixed-header i");
const responsiveHeader = document.querySelector("#responsive-header");
const fixedHeader = document.querySelector("#fixed-header");

// Toggle responsive header
function toggleResponsiveHeader() {
  if (
    !responsiveHeader.classList.contains("responsive-header-open") &&
    !responsiveHeader.classList.contains("responsive-header-close")
  ) {
    responsiveHeader.classList.add("responsive-header-open");
  } else {
    responsiveHeader.classList.toggle("responsive-header-open");
    responsiveHeader.classList.toggle("responsive-header-close");
  }
}

// Change fixed header background
function changeFixedHeaderBackground() {
  let scroll = window.scrollY;

  if (scroll === 0) {
    fixedHeader.style.backgroundColor = "transparent";
  } else {
    fixedHeader.style.backgroundColor = "black";
  }
}

// Eventlisteners
exitIcon.addEventListener("click", toggleResponsiveHeader);
openIcon.addEventListener("click", toggleResponsiveHeader);
window.addEventListener("scroll", changeFixedHeaderBackground);
