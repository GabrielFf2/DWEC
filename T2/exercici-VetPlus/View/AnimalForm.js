import {AnimalService} from "../Service/AnimalService.js";
import {Animal} from "../Model/Animal.js";

class AnimalForm {

    #animalService;

    constructor(animalService) {
        this.#animalService = animalService;
    }


    async init() {
        const formulari = document.querySelector("form");
        formulari.addEventListener("submit", (event) => {
            event.preventDefault(); //evitar el default del form , es a dir no recarrega la pagina ni fa get
            const nom = document.querySelector("#nom").value;
            const sexe = document.querySelector("[name='sexe']").value;
            const numRegistre = document.querySelector("#numreg").value;
            const tipus = document.querySelector("#tipus").value;

            const animal = new Animal(null, nom, sexe, numRegistre, tipus);

            console.log(nom, sexe, numRegistre, tipus);

            this.#animalService.saveAnimal(animal);
        })
    }


}


(async () => {
    console.log('IIFE')
    const animalService = new AnimalService();
    const animalList = new AnimalForm(animalService);
    await animalList.init();
})()
