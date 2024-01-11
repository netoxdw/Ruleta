let jugadorActual = 1;
let tiempoRestante = 30; // Tiempo en segundos
let intervaloCronometro;

function girarRuleta() {
    const ruleta = document.getElementById('ruleta');
    const turnoElement = document.getElementById('turno');
    const resultadoElement = document.getElementById('resultado');
    const cronometroElement = document.getElementById('cronometro');

    // Detener el cronómetro anterior si existe
    clearInterval(intervaloCronometro);

    // Iniciar el nuevo cronómetro
    tiempoRestante = 30;
    actualizarCronometro();

    // Deshabilitar clics mientras gira
    ruleta.style.pointerEvents = 'none';

    // Generar un número aleatorio para la rotación
    const grados = Math.floor(Math.random() * 45) + 45 * Math.floor(Math.random() * 8);

    // Determinar el castigo según la sección de la ruleta
    const castigo = determinarCastigo(grados);

    // Aplicar rotación a la ruleta
    ruleta.style.transform = `rotate(${grados}deg)`;

    // Después de un tiempo, reactivar clics y mostrar el resultado
    setTimeout(() => {
        ruleta.style.pointerEvents = 'auto';
        turnoElement.innerHTML = `Turno de Jugador ${jugadorActual}`;
        resultadoElement.innerHTML = `Castigo para Jugador ${jugadorActual === 1 ? 2 : 1}: ${castigo}`;
        cambiarJugador();
    }, 3000); // Tiempo de duración de la animación

    // Iniciar el cronómetro
    intervaloCronometro = setInterval(() => {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(intervaloCronometro);
            cronometroElement.innerHTML = 'Tiempo agotado';
        } else {
            actualizarCronometro();
        }
    }, 1000);
}

function determinarCastigo(grados) {
    // Determina el castigo según la sección de la ruleta
    const seccion = Math.floor(grados / 45) + 1;
    switch (seccion) {
        case 1:
            return "Bésame y tócame sensualmente tratando de no pasar a mayores";
        case 2:
            return "Quítame una prenda usando solo tu boca";
        case 3:
            return "Ponte una venda y besa la parte del cuerpo que ponga frente a tu boca";
        case 4:
            return "Quítate los calzoncillos y entrégamelo";
        case 5:
            return "Susurra algo en mi oreja que creas que me va a excitar";
        case 6:
            return "Elige una posición de un video xxx y recréenla";
        case 7:
            return "Sin castigo";
        case 8:
            return "Lleva mi mano a la parte de tu cuerpo que más sensitiva es";
        default:
            return "Sin castigo";
    }
}

function cambiarJugador() {
    // Cambia al siguiente jugador
    jugadorActual = jugadorActual === 1 ? 2 : 1;
}

function actualizarCronometro() {
    const cronometroElement = document.getElementById('cronometro');
    cronometroElement.innerHTML = `Tiempo restante: ${tiempoRestante} segundos`;
}




