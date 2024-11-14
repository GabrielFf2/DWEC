import {AnimalService} from "../Service/AnimalService.js";

class AnimalList {

    #animalService;


    constructor(animalService) {
        this.#animalService = animalService;
    }

    get animalService() {
        return this.#animalService;
    }

    #paintAnimalsTable(animals){
        const headers = ["Nom","Sexe","Tipus","Accions"];
        const table = document.createElement('table');
        const trHeader = document.createElement('tr');
        for (const header of headers){
            const thHeader = document.createElement('th');
            thHeader.innerHTML= header;
            trHeader.appendChild(thHeader);
        }
        table.appendChild(trHeader);
        for (const animal of animals){
            const trAnimal = document.createElement('tr');

            const tdNom = document.createElement("td");
            tdNom.innerHTML = animal.nom;

            const tdSexe = document.createElement("td");
            tdSexe.innerHTML = animal.sexe;

            const tdtipus = document.createElement("td");
            tdtipus.innerHTML = animal.tipus;

            const tdActions = document.createElement("td");
            tdActions.innerHTML = `<button>Update</button><button>Delete</button>`;


            trAnimal.appendChild(tdNom);
            trAnimal.appendChild(tdSexe);
            trAnimal.appendChild(tdtipus);
            trAnimal.appendChild(tdActions);

            table.appendChild(trAnimal);

        }

        document.querySelector("#app").appendChild(table);
    }

    async init(){
        console.log('init')
        // const animalService = new AnimalService();
        // animalService.getAnimals();
        const animals = await this.animalService.getAnimals();

        this.#paintAnimalsTable(animals);
    }
}

//IIFE
(async ()=>{
    console.log('IIFE')
    const animalService = new AnimalService();
    const animalList = new AnimalList(animalService);
    await animalList.init();
})()








