class Pokemon {
    #name = '';
    #type = '';
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    
    }

    set name (name){
        this.#name = name;
    }
    set type(type) {
        this.#type = type;
    }
    set evolutions(evolutions) {
        this.#evolutions = evolutions
    }

    get name() {
        return this.#name;
    }
    get type() {
        return this.#type;
    }
    get evolutions() {
        return this.#evolutions;
    }

    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = 'No se hizo';

        if(EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }


}
const Charmander = new Pokemon('Charmander', 'Fire', ['Charmaleon', '']);
const Squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise'])

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));

class TypeFire extends Pokemon {
    constructor(name, evolutions) {
        super(name, 'fire', evolutions);
    }
    message() {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const charmander = new TypeFire('Charmander', ['Charmaleon', 'Charizar']);
console.log(charmander.message());
charmander.name = 'Perro';
console.log(charmander.message());
