// Typing animation (Home page)
if (document.querySelector(".typing")) {
    var typed = new Typed(".typing", {
        strings: ["Python Developer", "Web Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
}

// Mobile nav toggle
const navTogglerBtn = document.querySelector(".nav-toggler"),
      asideEl = document.querySelector(".aside");

if (navTogglerBtn && asideEl) {
    navTogglerBtn.addEventListener("click", () => {
        asideEl.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    });

    // Close mobile nav automatically when a nav link is clicked
    document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1200) {
                asideEl.classList.remove("open");
                navTogglerBtn.classList.remove("open");
            }
        });
    });
}
