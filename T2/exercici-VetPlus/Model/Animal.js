export class Animal {

    #id;
    #nom;
    #sexe;
    #num;
    #tipus;


    constructor(id, Nom, Sexe, Num, Tipus) {
        this.#id = id;
        this.#nom = Nom;
        this.#sexe = Sexe;
        this.#num = Num;
        this.#tipus = Tipus;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get sexe() {
        return this.#sexe;
    }

    set sexe(value) {
        this.#sexe = value;
    }

    get num() {
        return this.#num;
    }

    set num(value) {
        this.#num = value;
    }

    get tipus() {
        return this.#tipus;
    }

    set tipus(value) {
        this.#tipus = value;
    }
}