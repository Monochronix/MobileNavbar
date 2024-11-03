document.addEventListener("DOMContentLoaded", function() {

    const expandNav = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navbarContent = document.querySelector('.navbar-expanded-content');
    const navbarSection = document.querySelector('.navbar-section');

    expandNav.classList.add('firstLoad');
    const toggleMenu = () => {
        expandNav.classList.toggle('active');
        expandNav.classList.toggle('open');
        expandNav.classList.remove('firstLoad');
        if (navbar) {
            navbar.classList.toggle('expandedNav');
        }
        if (navbarContent) {
            navbarContent.classList.toggle('active');
        }
        expandNav.setAttribute('aria-expanded', expandNav.classList.contains('active'));
    };
    expandNav.addEventListener('click', toggleMenu);
    expandNav.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
    expandNav.setAttribute('tabindex', '0');

    // Functionality of hiding navbar on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            navbarSection.style.top = '-130px';
        } else {
            navbarSection.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });
});
