document.addEventListener('DOMContentLoaded', function() {
    const expandNav = document.querySelector('.menu-btn');
    const mobileNavbarContent = document.querySelector('.mobile-navbar-expanded-content');
    function toggleMenu() {
        expandNav.classList.toggle('active');
        mobileNavbarContent.classList.toggle('active');
        expandNav.setAttribute('aria-expanded', expandNav.classList.contains('active'));
    }
    expandNav.addEventListener('click', toggleMenu);
    expandNav.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
    expandNav.setAttribute('tabindex', '0');
});
