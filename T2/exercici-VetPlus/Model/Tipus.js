export class Tipus{
    #Nom;

    constructor(Nom) {
        this.#Nom = Nom;
    }

    get Nom() {
        return this.#Nom;
    }

    set Nom(value) {
        this.#Nom = value;
    }
}