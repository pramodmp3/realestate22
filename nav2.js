const navbar = document.getElementById("navbar");
const logoImg = document.getElementById("logo-img");
const hamburger = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");
const mobileHomeToggle = document.getElementById("mobileHomeToggle");
const mobileHomeSub = document.getElementById("mobileHomeSub");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logoImg.src = logoImg.src.replace("white", "black");
  } else {
    navbar.classList.remove("scrolled");
    logoImg.src = logoImg.src.replace("black", "white");
  }
});

const openMenu = () => {
  mobileOverlay.classList.add("active");
  document.body.classList.add("menu-open");
};

const closeMenu = () => {
  mobileOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
};

hamburger.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);

mobileHomeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  mobileHomeSub.classList.toggle("active");
  mobileHomeToggle.textContent = mobileHomeSub.classList.contains("active")
    ? "Home -"
    : "Home +";
});

document
  .querySelectorAll(".mobile-menu-link, .mobile-submenu-link")
  .forEach((link) => {
    if (link.id !== "mobileHomeToggle") {
      link.addEventListener("click", closeMenu);
    }
  });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

window.addEventListener("click", (e) => {
  if (e.target === mobileOverlay) closeMenu();
});
