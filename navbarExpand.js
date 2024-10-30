document.addEventListener("DOMContentLoaded", function() {
    const expandNav = document.getElementById("expandNav");
    const navbar = document.getElementById("navbar");
    const navbarExpandIcon = document.getElementById("navbarExpandIcon");
    expandNav.onclick = function() {
        navbar.classList.toggle("expandedNav");
        const isExpanded = navbar.classList.contains("expandedNav");
        navbarExpandIcon.classList.remove("spin");
        void navbarExpandIcon.offsetWidth; 
        navbarExpandIcon.classList.add("spin");
        if (isExpanded) {
            navbarExpandIcon.src = "/assets/icons/close.svg";
        } else {
            navbarExpandIcon.src = "/assets/icons/menu.svg"; 
        }
        console.log("Toggled.");
    }
});
