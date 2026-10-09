document.addEventListener('DOMContentLoaded', function () {
    // moviles
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
                bsCollapse.hide();
            }
        });
    });

    //  contacto
    const formContacto = document.getElementById('formularioContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombreContacto').value;
            if (nombre.trim() !== "") {
                alert('¡Gracias ' + nombre + '! Tu mensaje ha sido registrado exitosamente.');
                formContacto.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
});