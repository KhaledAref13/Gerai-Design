let toggleIcon = document.querySelector(".toggle-icon-menu");
let header = document.querySelector("header");

toggleIcon.onclick = function () {
  header.classList.toggle("header-visible");
};

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let navLink = document.querySelectorAll(".nav-items-links");
navLink.forEach(function (el) {
  el.onclick = function () {
    navLink.forEach(function (el) {
      el.classList.remove("active-item");
    });
    el.classList.add("active-item");
    setTimeout(() => {
      header.classList.remove("header-visible");
    }, 200);
  };
});

let icon = document.querySelector(".mode-box");
let faMoon = document.querySelector(".fa-moon");
let faSun = document.querySelector(".fa-sun");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
};
