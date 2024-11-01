document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu-btn');
    const toggleMenu = () => {
        menuBtn.classList.toggle('open');
    };
    menuBtn.addEventListener('click', toggleMenu);
    menuBtn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); 
            toggleMenu(); 
        }
    });
});
