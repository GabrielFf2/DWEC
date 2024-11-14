// Variable global para almacenar el identificador del intervalo de la cuenta regresiva
let crono;

function inputs() {

    // Crear el campo de entrada donde el usuario introduce los segundos
    const inputC = document.createElement("input");
    inputC.id = "inputTime";
    inputC.type = "number"; // Solo permitir números
    inputC.placeholder = 0; // Texto de marcador de posición

    // Crear el botón "Play" para iniciar la cuenta regresiva
    const playButton = document.createElement('button');
    playButton.id = 'play';
    playButton.textContent = "Play Count Down";

    // Evento al hacer clic en el botón "Play"
    playButton.addEventListener('click', function () {
        // Si ya existe un intervalo activo, lo detiene
        if (crono !== undefined) {
            clearInterval(crono);
        }

        // Obtener el valor ingresado por el usuario
        const inputSelect = document.querySelector("#inputTime").value;

        // Validar si el valor ingresado es un número válido
        if (!parseInt(inputSelect) || inputSelect === null) {
            document.querySelector("#resultInput").textContent = "Error!! Ingresa un número válido";
        } else {
            // Si es válido, inicializar el tiempo restante con el valor ingresado
            tiempoRestante = parseInt(inputSelect);
            document.querySelector("#resultInput").textContent = tiempoRestante;
            cuentaAtras(); // Iniciar la cuenta regresiva
        }
    });

    // Crear el botón "Pause" para pausar la cuenta regresiva
    const pauseButton = document.createElement('button');
    pauseButton.id = 'pause';
    pauseButton.textContent = "Pausar";
    pauseButton.addEventListener('click', function () {
        // Detener la cuenta regresiva sin restablecer el tiempo
        clearInterval(crono);
    });

    // Crear el botón "Continue" para reanudar la cuenta regresiva
    const continueButton = document.createElement('button');
    continueButton.id = 'continue';
    continueButton.textContent = "Continuar";
    continueButton.addEventListener('click', function () {
        // Reanudar la cuenta regresiva desde donde se pausó
        cuentaAtras();
    });

    // Crear el botón "Reset" para reiniciar la cuenta regresiva
    const resetButton = document.createElement('button');
    resetButton.id = 'reset';
    resetButton.textContent = "Reiniciar";
    resetButton.addEventListener('click', function () {
        // Detener cualquier intervalo activo
        clearInterval(crono);

        // Obtener nuevamente el valor ingresado por el usuario
        const inputSelect = document.querySelector("#inputTime").value;

        // Validar si el valor es válido
        if (!parseInt(inputSelect) || inputSelect === null) {
            document.querySelector("#resultInput").textContent = "Error!!";
        } else {
            // Reiniciar el tiempo restante con el valor original
            tiempoRestante = parseInt(inputSelect);
            document.querySelector("#resultInput").textContent = tiempoRestante;
            cuentaAtras(); // Reiniciar la cuenta regresiva
        }
    });

    // Crear el elemento <h1> donde se mostrará el tiempo restante o los mensajes
    const result = document.createElement("h1");
    result.id = "resultInput";
    result.textContent = 0; // Valor inicial mostrado

    // Añadir todos los elementos creados al body del documento HTML
    document.querySelector("body").appendChild(inputC);
    document.querySelector("body").appendChild(playButton);
    document.querySelector("body").appendChild(pauseButton);
    document.querySelector("body").appendChild(continueButton);
    document.querySelector("body").appendChild(resetButton);
    document.querySelector("body").appendChild(result);
}

// Función que maneja la cuenta regresiva
function cuentaAtras() {
    // Crear un intervalo que se ejecuta cada segundo
    crono = setInterval(function () {
        // Si el tiempo restante es mayor que 0, reducirlo en 1 cada segundo
        if (tiempoRestante > 0) {
            tiempoRestante--;
            // Actualizar el texto con el tiempo restante
            document.querySelector("#resultInput").textContent = tiempoRestante;
        } else {
            // Si el tiempo llega a 0, detener el intervalo y mostrar el mensaje
            clearInterval(crono);
            document.querySelector("#resultInput").textContent = "¡Tiempo terminado!";
        }
    }, 1000); // El intervalo se ejecuta cada 1000 milisegundos (1 segundo)
}

// Función que inicializa la vista al cargar la página
function initView() {
    inputs(); // Llamar a la función que genera los elementos de la interfaz
}





