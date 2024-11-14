import {Animal} from "../Model/Animal.js";

export class AnimalService{

    #URL = "https://theteacher.codiblau.com/public/vetplus"
    async getAnimals() {
        const respnse = await fetch(this.#URL + "/getAnimals");
        const dataAnimals = await respnse.json();
        return dataAnimals.map(jsonanimals=>this.#fromJSON(jsonanimals));
    }

    getAnimalById(id){
        const animals = this.getAnimals();
        return animals.find((animal)=> animal.id === id);
    }

    async saveAnimal(animal){
        const respnse = await fetch(this.#URL + "/save" , {
            method: 'POST',
            headers: new Headers({
                "Content-Type" : "application/json"
            }),
            body: JSON.stringify({
                animal:{
                    idanimal: animal.id,
                    nom: animal.nom,
                    sexe: animal.sexe,
                    numregistre: animal.num,
                    tipus: animal.tipus
                }
            })
        });
    }

    #fromJSON(jsonAnimal){
        return new Animal(
            jsonAnimal.idanimal,
            jsonAnimal.nom,
            jsonAnimal.sexe,
            jsonAnimal.numregistre,
            jsonAnimal.tipus
        );
    }


}



