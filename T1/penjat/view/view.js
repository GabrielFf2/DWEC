// Función que pinta las letras en la interfaz como botones interactivos
function pintarLletres(lletra) {
    // Crear un botón para cada letra
    const nodeLletra = document.createElement("BUTTON");
    nodeLletra.textContent = lletra.valor; // Asignar el valor de la letra como texto del botón
    nodeLletra.style.margin = '5px'; // Añadir margen entre los botones

    // Añadir un evento click al botón, que ejecutará la función asociada 'jugar'
    nodeLletra.addEventListener('click', lletra.jugar);

    // Asignar un ID único al botón basado en el valor de la letra
    nodeLletra.id = `lletra-${lletra.valor}`;

    // Añadir el botón al cuerpo del documento HTML
    document.querySelector("body").appendChild(nodeLletra);
}

// Función que marca una letra como correcta, cambiando su color a verde
function lletraCorrecta(lletra) {
    // Seleccionar el botón de la letra correcta
    let selectorLletra = document.querySelector(`#lletra-${lletra}`);

    // Cambiar el color de fondo del botón a verde
    selectorLletra.style.backgroundColor = "rgb(9, 255, 0)";
}

// Función que marca una letra como incorrecta, cambiando su color a rojo
function lletraIncorrecta(lletra) {
    // Seleccionar el botón de la letra incorrecta
    let selectorLletra = document.querySelector(`#lletra-${lletra}`);

    // Cambiar el color de fondo del botón a rojo
    selectorLletra.style.backgroundColor = "red";
}

// Función que actualiza las letras reveladas de la palabra en la interfaz
this.paralesRevelades = function(paraula) {
    const domParaula = document.querySelector("#paraula"); // Seleccionar el contenedor de la palabra

    // Ajustar el estilo de la palabra en la interfaz
    document.querySelector("#paraula").style.float = "left";

    // Eliminar las letras anteriores (si las hay)
    while (domParaula.firstChild) {
        domParaula.removeChild(domParaula.firstChild);
    }

    // Añadir cada letra de la palabra a la interfaz (letras correctas o guiones)
    paraula.forEach(item => {
        let a = document.createElement("p");
        a.textContent = item.estat === "OK" ? item.valor : "_"; // Mostrar letra si es correcta, sino un guion
        domParaula.appendChild(a);
    });
}

// Función que actualiza la imagen del "penjat" según los errores cometidos
this.penjatView = function(errors) {
    const domDiv = document.querySelector("#imatge"); // Seleccionar el contenedor de la imagen del ahorcado
    const penjat = document.querySelector("#penjat"); // Verificar si ya existe una imagen del ahorcado

    if (!penjat) {
        // Si no existe, crear una nueva imagen con la cantidad de errores
        let img = document.createElement("img");
        img.id = "penjat"; // Asignar un ID único
        img.src = `./img/${errors}.PNG`; // Cargar la imagen correspondiente al número de errores
        domDiv.appendChild(img); // Añadir la imagen al contenedor
    } else {
        // Si la imagen ya existe, simplemente actualizar la fuente de la imagen
        penjat.src = `./img/${errors}.PNG`;
    }
}

// Función que muestra un mensaje de victoria en la interfaz
function win() {
    const domWord = document.querySelector("body"); // Seleccionar el cuerpo del documento
    const createText = document.createElement("h2"); // Crear un elemento de encabezado
    createText.textContent = "has guanyat"; // Asignar el texto "has ganado"
    createText.style.textAlign = "center"; // Centrar el texto en la pantalla
    domWord.appendChild(createText); // Añadir el mensaje al cuerpo del documento
}

// Función que muestra un mensaje de derrota en la interfaz
function lose() {
    const domWord = document.querySelector("body"); // Seleccionar el cuerpo del documento
    const createText = document.createElement("h2"); // Crear un elemento de encabezado
    createText.textContent = "has perdut"; // Asignar el texto "has perdido"
    createText.style.textAlign = "center"; // Centrar el texto en la pantalla
    domWord.appendChild(createText); // Añadir el mensaje al cuerpo del documento
}
