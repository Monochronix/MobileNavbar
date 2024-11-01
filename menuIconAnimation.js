document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.add('firstLoad');
    const toggleMenu = () => {
        menuBtn.classList.toggle('open');
        menuBtn.classList.remove('firstLoad');
    };
    menuBtn.addEventListener('click', toggleMenu);
    menuBtn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); 
            toggleMenu(); 
        }
    });
});