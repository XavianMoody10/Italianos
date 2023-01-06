"use strict";

const navOpenIcon = document.querySelector("header i");
const navCloseIcon = document.querySelector(".navigation i");
const navigation = document.querySelector(".navigation");
const leftArrow = document.querySelector("#landing i:nth-of-type(1)");
const rightArrow = document.querySelector("#landing i:nth-of-type(2)");
const landingBackgroundImg = document.querySelector("#landing img");
const landingImage = [
  "./images/landing_bg_1.jpg",
  "./images/landing_bg_2.jpg",
  "./images/landing_bg_3.jpg",
];

let landingSlide = 0;

// Toggle navigation
function toggleNavigation() {
  if (
    !navigation.classList.contains("navigationOpen") &&
    !navigation.classList.contains("navigationClose")
  ) {
    navigation.classList.add("navigationOpen");
  } else {
    navigation.classList.toggle("navigationOpen");
    navigation.classList.toggle("navigationClose");
  }
}

// Preload images
function preloadImages() {
  let backgroundImage1 = new Image();
  let backgroundImage2 = new Image();
  let backgroundImage3 = new Image();
  backgroundImage1.src = "./images/landing_bg_1.jpg";
  backgroundImage2.src = "./images/landing_bg_2.jpg";
  backgroundImage3.src = "./images/landing_bg_3.jpg";
}

// Next slide
function prevSlide() {
  landingBackgroundImg.src = landingImage[(landingSlide -= 1)];
}

// Previous slide
function nextSlide() {
  landingBackgroundImg.src = landingImage[(landingSlide += 1)];
}

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);
navOpenIcon.addEventListener("click", toggleNavigation);
navCloseIcon.addEventListener("click", toggleNavigation);
preloadImages();
