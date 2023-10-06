(() => {

    //* Types en objetos

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?:() => string;
    }

    // Se crea un objeto de similar manera,
    // se recomienda definir su tipo para respetar el tipado
    // de esta manera se utiliza un tipo y el código es más limpio
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    // Se crea un objeto de similar manera,
    // se recomienda definir su tipo para respetar el tipado
    // de esta manera se utiliza un tipo y el código es más limpio
    let superMan: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [ 'Super fuerza' ],
        getName() {
            return this.name;
        }
    }

})()