document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 // Activa la animación cuando el 50% del elemento es visible
    });

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});