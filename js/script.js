document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var headerOffset = 80;  // hauteur de la barre de navigation
        var elementPosition = document.querySelector(this.getAttribute('href')).offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
