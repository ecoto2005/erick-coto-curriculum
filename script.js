// Animación de aparición al scrollear
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Animación de barras de progreso
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
            bar.style.width = `${percent}%`;
        }, 500);
    });
});

// Inicialización de partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});

// Actualizar fecha y hora en el footer
function updateFooterTime() {
    const footer = document.querySelector('footer p');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Costa_Rica' };
    const time = now.toLocaleTimeString('en-US', options).toLowerCase().replace(' ', '');
    const date = now.toLocaleDateString('es-CR', { day: '2-digit', month: 'long', year: 'numeric' });
    footer.textContent = `Generado el: ${time}, ${date}`;
}
updateFooterTime();
setInterval(updateFooterTime, 60000);