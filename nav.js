document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("stknav-hamburger");
  const overlay = document.getElementById("stknav-overlay");
  const body = document.body;
  const closeBtn = document.getElementById("stknav-close");

  const subToggles = document.querySelectorAll(".stknav-toggle-sub");
  const menuLinks = document.querySelectorAll(
    ".stknav-mobile-link:not(.stknav-toggle-sub), .stknav-mobile-sublink, .stknav-mobile-login",
  );

  // --- Toggle Menu Logic ---
  const toggleMenu = () => {
    const isOpen = overlay.classList.toggle("stknav-open");
    hamburger.classList.toggle("stknav-active");

    // Accessibility
    hamburger.setAttribute("aria-expanded", isOpen);

    // Prevent scrolling
    if (isOpen) {
      body.classList.add("stknav-no-scroll");
    } else {
      body.classList.remove("stknav-no-scroll");
    }
  };

  const closeMenu = () => {
    overlay.classList.remove("stknav-open");
    hamburger.classList.remove("stknav-active");
    body.classList.remove("stknav-no-scroll");
    hamburger.setAttribute("aria-expanded", "false");
  };

  // Event Listeners
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  closeBtn.addEventListener("click", closeMenu);
  // --- Mobile Dropdown Logic ---
  subToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = toggle.closest(".stknav-mobile-item");
      parent.classList.toggle("stknav-expanded");
    });
  });

  // --- Close menu when a simple link is clicked ---
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("stknav-open")) {
      closeMenu();
    }
  });

  // Prevent layout shift on window resize
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 1024 &&
      overlay.classList.contains("stknav-open")
    ) {
      closeMenu();
    }
  });
});
