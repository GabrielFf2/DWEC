// Cambia el fondo del documento a una imagen específica
function chancheBackground() {
    const img = "https://img.freepik.com/free-vector/hand-drawn-children-s-day-spanish-background_23-2149299339.jpg?t=st=1729149891~exp=1729153491~hmac=262c86aff140952a9549a59fac02c5a37a76c83d1b7e4d764479c8eb7b6cdd1e&w=2000";
    const body = document.querySelector("body");
    body.style.backgroundImage = `url(${img})`; // Establece la imagen de fondo
    body.style.backgroundSize = 'cover'; // Hace que la imagen cubra todo el fondo
    body.style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    body.style.backgroundAttachment = 'fixed'; // Fija la imagen de fondo al scroll
}

// Crea un input numérico y un label asociado
function createInput(title, idClock, idInput, min, max) {
    const label = document.createElement('label'); // Crea un elemento de etiqueta
    label.for = idInput; // Asocia la etiqueta con el input
    label.innerHTML = title; // Establece el texto de la etiqueta
    label.style.color = 'black'; // Cambia el color del texto de la etiqueta

    const picker = document.createElement('INPUT'); // Crea un input de tipo número
    picker.id = idInput; // Asigna un ID al input
    picker.type = 'number'; // Establece el tipo de input a número
    picker.placeholder = '0'; // Establece un texto de marcador de posición

    // Añade un evento que se activa al cambiar el valor del input
    picker.addEventListener('input', function () {
        const inupuValue = document.querySelector('#' + idInput).value; // Obtiene el valor del input

        // Verifica si el valor está fuera de los límites
        if (inupuValue < min || inupuValue > max) {
            document.querySelector('#' + idInput).style.backgroundColor = 'red'; // Cambia el fondo a rojo si el valor es inválido
            alert(`ERROR ! Nomes s'admeten valors entre ${min} i ${max}`); // Muestra un mensaje de error
            return; // Sale de la función si el valor es inválido
        } else {
            picker.style.backgroundColor = 'white'; // Restaura el fondo a blanco si el valor es válido
        }

        // Actualiza el valor correspondiente en el objeto del reloj
        document.querySelector('#' + idClock).value = document.querySelector('#' + idInput).value;
        drawClock(); // Llama a la función para dibujar el reloj
    });

    document.querySelector('body').appendChild(picker); // Añade el input al cuerpo del documento
}

// Crea los botones para iniciar y detener un cronómetro
function createCorno(crono) {
    const playButton = document.createElement('button'); // Crea un botón para iniciar el cronómetro
    playButton.id = 'play'; // Asigna un ID al botón
    playButton.textContent = "Play Crono"; // Establece el texto del botón
    // Añade un evento para iniciar el cronómetro
    playButton.addEventListener('click', function () {
        if (crono !== undefined) {
            clearInterval(crono); // Limpia cualquier cronómetro existente
        }

        crono = setInterval(function () { // Inicia un nuevo cronómetro que se ejecuta cada segundo
            const dataActual = new Date(); // Obtiene la fecha y hora actuales
            const hour = dataActual.getHours(); // Extrae las horas
            const minites = dataActual.getMinutes(); // Extrae los minutos
            const seconds = dataActual.getSeconds(); // Extrae los segundos

            // Actualiza los campos ocultos con la hora actual
            document.querySelector('#hours').value = hour;
            document.querySelector('#minutes').value = minites;
            document.querySelector('#seconds').value = seconds;

            // Actualiza los selectores de horas, minutos y segundos en la vista
            document.querySelector('#hoursPicker').value = hour;
            document.querySelector('#minutesPicker').value = minites;
            document.querySelector('#secondsPicker').value = seconds;

            drawClock(); // Dibuja el reloj con los nuevos valores
        }), 1000; // Ejecuta cada segundo

        return crono; // Retorna el cronómetro
    });

    const stopButton = document.createElement('button'); // Crea un botón para detener el cronómetro
    stopButton.id = 'stop'; // Asigna un ID al botón
    stopButton.textContent = "Stop Crono"; // Establece el texto del botón
    // Añade un evento para detener el cronómetro
    stopButton.addEventListener('click', function () {
        if (crono !== undefined) {
            clearInterval(crono); // Limpia el cronómetro si está en ejecución
        }
    });

    // Añade los botones al cuerpo del documento
    document.querySelector('body').appendChild(playButton);
    document.querySelector('body').appendChild(stopButton);

    // Crea un botón para cerrar la ventana
    const buttonCloseWindow = document.createElement('BUTTON');
    buttonCloseWindow.textContent = 'Close Window'; // Establece el texto del botón
    buttonCloseWindow.addEventListener('click', function () {
        window.close(); // Cierra la ventana al hacer clic
    });
    document.querySelector('body').appendChild(buttonCloseWindow); // Añade el botón al cuerpo del documento
}

// Inicializa la vista y configura el cronómetro
let crono; // Variable para almacenar el cronómetro
function initView() {
    chancheBackground(); // Cambia el fondo de la página
    // Crea los inputs para horas, minutos y segundos
    createInput('Hores', 'hours', 'hoursPicker', 1, 12);
    createInput('Minuts', 'minutes', 'minutesPicker', 0, 59);
    createInput('Segons', 'seconds', 'secondsPicker', 0, 59);

    createCorno(crono); // Crea los botones para el cronómetro
}
