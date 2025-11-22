let decoracionActiva = false;
let intervalo;

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("toggleDecoracion");

    boton.addEventListener("click", () => {
        if (decoracionActiva) {
            detenerDecoracion();
            boton.textContent = "Activar Decoración 🌻❤️";
        } else {
            iniciarDecoracion();
            boton.textContent = "Desactivar Decoración ✖️";
        }
    });
});

// ▼ INICIAR EFECTO
function iniciarDecoracion() {
    decoracionActiva = true;

    intervalo = setInterval(() => {
        crearElemento("girasol");
        crearElemento("corazon");
    }, 4000); // cada 4 segundos se generan nuevas decoraciones
}

// ▼ DETENER EFECTO
function detenerDecoracion() {
    decoracionActiva = false;
    clearInterval(intervalo);

    // Borra todos los girasoles y corazones en pantalla
    document.querySelectorAll(".decoracion").forEach(e => e.remove());
}

// ▼ CREA GIRASOLES O CORAZONES
function crearElemento(tipo) {
    if (!decoracionActiva) return;

    const el = document.createElement("img");
    el.classList.add("decoracion");

    if (tipo === "girasol") {
        el.src = "girasol.png";
        el.classList.add("girasol");
    } else {
        el.src = "corazon.png";  // ❤️ TU IMAGEN DE CORAZÓN
        el.classList.add("corazon");
    }

    // izquierda o derecha
    const lado = Math.random() < 0.5 ? "left" : "right";
    el.style.left = lado === "left" ? "0px" : (window.innerWidth - 50) + "px";

    // tamaño random
    el.style.width = (40 + Math.random() * 40) + "px";

    // duración y caída
    el.style.animationDuration = (20 + Math.random() * 20) + "s";

    document.body.appendChild(el);

    // duración total 15 minutos (900000 ms)
    setTimeout(() => el.remove(), 900000);
}
