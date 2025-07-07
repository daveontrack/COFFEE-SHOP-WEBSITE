/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll("nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});
closeicon.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]");
  });
});
/*~~~~~~~~~~~~~~~ STICKY HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const stickyMenu = document.getElementById("sticky-menu");

  if (this.scrollY >= 150) {
    stickyMenu.classList.remove("lg:top-[-100%]");
    stickyMenu.classList.add("bg-black/80");
  } else {
    stickyMenu.classList.add("lg:top-[-100%]");
    stickyMenu.classList.remove("bg-black/80");
  }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
//========================================================================== 5058 SCROLL UP ==================*/

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  // Show button when scrolled 255px or more, hide otherwise
  if (window.scrollY >= 255) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.remove("bottom-4");
    scrollUpBtn.classList.add("-bottom-1/2");
  }
};

window.addEventListener("scroll", scrollUp);
/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
// Active link functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  let lastClickedLink = null;

  // Function to set active link based on scroll position
  function setActiveLink() {
    // If a link was recently clicked, don't override with scroll detection for a short time
    if (lastClickedLink && Date.now() - lastClickedLink.time < 1000) {
      return;
    }

    const scrollPosition = window.scrollY;
    let foundActive = false;

    // Loop through each section to check if it's in view
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to corresponding link
        const activeLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
          foundActive = true;
        }
      }
    });

    // If no section is in view (like at the very top), keep the last clicked link active
    if (!foundActive && lastClickedLink) {
      navLinks.forEach((link) => link.classList.remove("active"));
      lastClickedLink.element.classList.add("active");
    }
  }

  // Set active link on initial load
  setActiveLink();

  // Update active link on scroll
  window.addEventListener("scroll", setActiveLink);

  // Handle click events for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // Store the clicked link
      lastClickedLink = {
        element: this,
        time: Date.now(),
      };

      // Smooth scroll to target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
