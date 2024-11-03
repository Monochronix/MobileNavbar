document.addEventListener("DOMContentLoaded", function () {
  // Define the elements we will reference later
  const expandNav = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");
  const navbarContent = document.querySelector(".navbar-expanded-content");
  const navbarSection = document.querySelector(".navbar-section");

  // When the website loads up, add the first-load class to prevent the hamburger animation from playing on load.
  expandNav.classList.add("first-load");

  const toggleMenu = () => {
    // The animate-menu-btn class is toggled on button clicked. It helps the hamburger icon know when to animate.
    expandNav.classList.toggle("animate-menu-btn");
    // The reveal-nav-content class tells the clip-path on the nav content know when to animate.
    navbarContent.classList.toggle("reveal-nav-content");
    // Remove the first-load class when the button is clicked.
    expandNav.classList.remove("first-load");
    // The main functionality of toggleMenu, toggling the expanded-nav class to adjust the height of the navbar
    navbar.classList.toggle("expanded-nav");
    // If the navbar is expanded, give the button aria-expanded for accessbility
    expandNav.setAttribute(
      "aria-expanded",
      navbar.classList.contains("expanded-nav")
    );
  };

  // When clicked, trigger the toggleMenu function
  expandNav.addEventListener("click", toggleMenu);

  // When a key is pressed, trigger an anonymous function with the parameter "event"
  expandNav.addEventListener("keydown", function (event) {
    // Condition: If the key that was pressed was the enter or space key,
    if (event.key === "Enter" || event.key === " ") {
      // Don't trigger the default effects of the key, like scrolling
      event.preventDefault();
      // Trigger the toggleMenu function
      toggleMenu();
    }
  });

  // Functionality of hiding navbar on scroll

  // This variable stores the y position of the scroll
  let lastScrollY = window.scrollY;
  // If scrolled, start the arrow function inside
  window.addEventListener("scroll", () => {
    // If the user scrolls down, move the navbarSection up. If not, do nothing.
    if (window.scrollY > lastScrollY) {
      navbarSection.style.top = "-130px";
    } else {
      navbarSection.style.top = "0";
    }
    // Update the lastscrollY variable to keep it accurate.
    lastScrollY = window.scrollY;
  });
});
