document.addEventListener("DOMContentLoaded", function() {
    const expandNav = document.querySelector(".menu-btn");
    const navbar = document.getElementById("navbar");

    const toggleNavbar = () => {
        navbar.classList.toggle("expandedNav");
        console.log("Toggled.");
    };

    expandNav.onclick = toggleNavbar;

    expandNav.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault(); 
            toggleNavbar(); 
        }
    });
});
