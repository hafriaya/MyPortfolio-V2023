function updateActiveNavItem() {
    const sections = document.querySelectorAll("section[data-nav]");
    sections.forEach((section) => {
      const navItem = document.querySelector(`nav a[href="#${section.id}"]`);
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveNavItem);
  window.addEventListener("load", updateActiveNavItem);

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }