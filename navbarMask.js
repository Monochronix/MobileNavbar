document.addEventListener("DOMContentLoaded", function() {
    const expandNav = document.getElementById("expandNav");
    const mobileNavbarExpandedContent = document.getElementById("mobileNavbarExpandedContent");
    expandNav.addEventListener("click", function() {
        if (mobileNavbarExpandedContent.classList.contains("show")) {
            mobileNavbarExpandedContent.classList.add("fade-out");
            setTimeout(() => {
                mobileNavbarExpandedContent.classList.remove("show");
                mobileNavbarExpandedContent.classList.remove("fade-out"); 
            }, 0); 
        } else {
            mobileNavbarExpandedContent.classList.add("show");
            setTimeout(() => {
                mobileNavbarExpandedContent.classList.remove("fade-out"); 
            }, 0); 
        }
    });
});
