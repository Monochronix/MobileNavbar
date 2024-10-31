document.addEventListener("DOMContentLoaded", function() {
    const expandNav = document.querySelector(".menu-btn");
    const mobileNavbarExpandedContent = document.getElementById("mobileNavbarExpandedContent");

    const toggleNavbar = () => {
        if (mobileNavbarExpandedContent.classList.contains("show")) {
            mobileNavbarExpandedContent.classList.remove("show");
            mobileNavbarExpandedContent.classList.remove("fade-out");
        } else {
            mobileNavbarExpandedContent.classList.add("show");
            mobileNavbarExpandedContent.classList.remove("fade-out");
        }
        expandNav.setAttribute("aria-expanded", mobileNavbarExpandedContent.classList.contains("show"));
    };

    expandNav.addEventListener("click", toggleNavbar);

    expandNav.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleNavbar();
        }
    });
});
