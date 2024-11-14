export class Animal {

    #id;
    #Nom;
    #Sexe;
    #Num;
    #Tipus;


    constructor(id, Nom, Sexe, Num, Tipus) {
        this.#id = id;
        this.#Nom = Nom;
        this.#Sexe = Sexe;
        this.#Num = Num;
        this.#Tipus = Tipus;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get Nom() {
        return this.#Nom;
    }

    set Nom(value) {
        this.#Nom = value;
    }

    get Sexe() {
        return this.#Sexe;
    }

    set Sexe(value) {
        this.#Sexe = value;
    }

    get Num() {
        return this.#Num;
    }

    set Num(value) {
        this.#Num = value;
    }

    get Tipus() {
        return this.#Tipus;
    }

    set Tipus(value) {
        this.#Tipus = value;
    }
}