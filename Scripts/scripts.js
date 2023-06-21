// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// Add shadow on header scroll
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    document.querySelector(".header-div").classList.add("shadow");
  } else {
    document.querySelector(".header-div").classList.remove("shadow");
  }
});