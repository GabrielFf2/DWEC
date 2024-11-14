// Función para generar un número entero aleatorio entre min y max (ambos inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Clase principal del juego "Penjat" (ahorcado)
function Penjat() {

    let numErrors = 0; // Contador de errores cometidos por el jugador
    this.paraula; // Variable que almacenará la palabra actual
    this.lletresArray = []; // Array que contendrá las letras del alfabeto

    // Metodo para inicializar el juego
    this.init = function() {
        const lletres = "abcdefghijklmnopqrstuvwxyz".split(""); // Crear array con todas las letras del alfabeto
        // Recorrer cada letra y crear un objeto Lletra, añadiéndolo a lletresArray
        for (let i = 0; i < lletres.length; i++) {
            let lletra = new Lletra(lletres[i], "NO_SELECCIONAT");
            this.lletresArray.push(lletra);
        }

        // Definir una lista de palabras posibles y seleccionar una al azar
        const paraules = ["linux", "windows", "macox", "javascript"];
        const index = randomInt(0, paraules.length - 1); // Índice aleatorio de la palabra
        const paraula = paraules[index]; // Seleccionar la palabra aleatoria

        const lletresParaula = []; // Array para almacenar las letras de la palabra seleccionada

        // Comparar las letras de la palabra seleccionada con las del alfabeto y guardarlas
        for (let i = 0; i < paraula.length; i++) {
            for (let j = 0; j < this.lletresArray.length; j++) {
                if (paraula[i] === this.lletresArray[j].valor) {
                    lletresParaula.push(this.lletresArray[j]);
                }
            }
        }

        // Crear un objeto Paraula con las letras de la palabra seleccionada
        this.paraula = new Paraula(lletresParaula);
    }

    // Metodo para verificar si el jugador ha acertado todas las letras
    this.estatJoc = () => {
        return this.paraula.lletres.every((item) => item.estat === "OK"); // Retorna true si todas las letras están correctas
    }

    // Metodo que se ejecuta cuando el jugador selecciona una letra
    this.jugar = function(lletra) {
        let lletraSeleccionada;

        // Buscar la letra seleccionada en el array de letras
        for (let i = 0; i < this.lletresArray.length; i++) {
            if (this.lletresArray[i].valor === lletra) {
                lletraSeleccionada = this.lletresArray[i];
                break;
            }
        }

        // Si la letra ya ha sido seleccionada, el jugador ha cometido 6 errores o ha ganado, no hacer nada
        if (lletraSeleccionada.estat === "OK" || lletraSeleccionada.estat === "KO" || numErrors >= 6 || this.estatJoc()) {
            return;
        }

        // Verificar si la letra seleccionada está en la palabra
        let trobat = false;
        for (let i = 0; i < this.paraula.lletres.length; i++) {
            if (this.paraula.lletres[i].valor === lletraSeleccionada.valor) {
                trobat = true;
                break;
            }
        }

        // Si la letra está en la palabra, marcarla como correcta; si no, aumentar el contador de errores
        if (trobat) {
            lletraSeleccionada.estat = "OK"; // Marcar como correcta
            lletraCorrecta(lletra); // Cambiar la apariencia de la letra a "correcta"
        } else {
            lletraSeleccionada.estat = "KO"; // Marcar como incorrecta
            lletraIncorrecta(lletra); // Cambiar la apariencia de la letra a "incorrecta"
            numErrors++; // Incrementar el número de errores
        }

        // Actualizar la visualización de las letras reveladas y la imagen del ahorcado
        paralesRevelades(this.paraula.lletres);
        penjatView(numErrors + 1);

        // Si se han cometido 6 errores, mostrar mensaje de derrota
        if (numErrors >= 6) {
            lose();
        }

        // Si se ha adivinado toda la palabra, mostrar mensaje de victoria
        if (this.estatJoc()) {
            win();
        }
    }

    // Metodo para pintar las letras en la interfaz como botones
    this.imp = function() {
        this.lletresArray.forEach(item => {
            pintarLletres(item);
        });
    }

    // Metodo para pintar la imagen del ahorcado y la palabra
    this.pintarImgParaula = function() {

        // Crear un contenedor div para la imagen del ahorcado y asignar su ID como "imatge"
        let a = document.createElement("div");
        a.id = "imatge";

        // Crear otro contenedor div para la palabra a adivinar y asignar su ID como "paraula"
        let b = document.createElement("div");
        b.id = "paraula";

        // Establecer el estilo del contenedor de la palabra
        b.style.display = "flex"; // Hacer que los elementos internos se dispongan en una fila flexible
        b.style.placeItems = "center"; // Centrar los elementos internamente
        b.style.justifyContent = "center"; // Centrar los elementos horizontalmente
        b.style.flexWrap = "wrap"; // Permitir que los elementos se ajusten en varias líneas si es necesario

        // Crear un tercer contenedor div para las letras disponibles y asignar su ID como "lletres"
        let c = document.createElement("div");
        c.id = "lletres";

        // Añadir los contenedores recién creados al elemento principal con ID "app"
        document.querySelector("#app").appendChild(a); // Añadir el contenedor para la imagen del ahorcado
        document.querySelector("#app").appendChild(b); // Añadir el contenedor para la palabra
        document.querySelector("#app").appendChild(c); // Añadir el contenedor para las letras

        // Inicializar el número de errores como 1
        let numErrors = 1;

        // Recorrer las letras seleccionadas y aumentar el contador de errores si la letra ha sido marcada como incorrecta (KO)
        for (let i = 0; i < this.lletresArray.length; i++) {
            if (this.lletresArray[i].estat === "KO") {
                numErrors++;
            }
        }

        // Actualizar la imagen del ahorcado según el número de errores
        penjatView(numErrors);

        // Mostrar la palabra en la interfaz con las letras reveladas (o guiones bajos si no se han adivinado)
        paralesRevelades(this.paraula.lletres);
    }


}


const penjat = new Penjat();
penjat.init();
penjat.pintarImgParaula();
penjat.imp();

