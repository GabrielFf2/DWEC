// Constructor de la clase Paraula
function Paraula(lletres) {
    this.lletres = lletres; // Array de objetos 'Lletra' que forman la palabra

    // Metodo para pintar la palabra, mostrando las letras acertadas y guiones bajos para las no acertadas
    this.pintar = function() {
        const result = []; // Array para almacenar el resultado final de la palabra

        // Recorrer las letras de la palabra
        for (let i = 0; i < this.lletres.length; i++) {
            // Si la letra ha sido adivinada (estado 'OK'), se añade al resultado
            if (this.lletres[i].estat === 'OK') {
                result.push(this.lletres[i].valor);
            } else {
                // Si la letra no ha sido adivinada, se añade un guion bajo "__"
                result.push("__");
            }
        }
        // Retorna la palabra formada por las letras acertadas o guiones bajos, separadas por espacios
        return result.join(" ");
    }
}
// Constructor de la clase Lletra
function Lletra(valor, estat) {
    this.valor = valor; // Valor de la letra (por ejemplo, 'a', 'b', etc.)
    this.estat = estat; // Estado de la letra ('NO_SELECCIONAT', 'OK', 'KO')

    // Metodo que se ejecuta al seleccionar una letra, llamando a la función 'jugar' del juego
    this.jugar = function() {
        // Llama a la función jugar del objeto penjat, pasando el valor de la letra seleccionada
        penjat.jugar(valor);
    }
}
