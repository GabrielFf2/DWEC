import {AnimalService} from "../Service/AnimalService.js";

class AnimalList {

    #animalService;


    constructor(animalService) {
        this.#animalService = animalService;
    }

    get animalService() {
        return this.#animalService;
    }

    init(){
        console.log('init')
        // const animalService = new AnimalService();
        // animalService.getAnimals();
        this.animalService.getAnimals();
    }
}

//IIFE
(()=>{
    console.log('IIFE')
    const animalService = new AnimalService();
    const animalList = new AnimalList(animalService);
    animalList.init();
})()








