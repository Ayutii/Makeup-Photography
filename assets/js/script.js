'use strict';



//add event on element


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


//navbar toggle


const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



// header sticky & back top btn active


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



//scroll reveal effect


const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


//dymnamic year change

document.getElementById("year").textContent = new Date().getFullYear();


//autoscroll
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".has-scrollbar");

  if (!slider) return; // Exit if no element found

  const scrollStep = slider.offsetWidth; // Scroll by the width of one item
  const intervalTime = 4000; // Time between each scroll (in milliseconds)

  let currentScrollPosition = 0;

  function autoScroll() {
    // Calculate the maximum scroll position
    const maxScrollPosition = slider.scrollWidth - slider.clientWidth;

    if (currentScrollPosition >= maxScrollPosition) {
      // Reset to the beginning when reaching the end
      currentScrollPosition = 0;
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Scroll to the next position
      currentScrollPosition += scrollStep;
      slider.scrollTo({ left: currentScrollPosition, behavior: "smooth" });
    }
  }

  // Start the auto-scroll
  setInterval(autoScroll, intervalTime);
});
