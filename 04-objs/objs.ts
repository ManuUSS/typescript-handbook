(() => {

    //* Objetos

    // Se crea un objeto de similar manera,
    // se recomienda definir su tipo para respetar el tipado
    let flash: { name: string, age: number, powers: string[] } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    // Da error al no reconocer la nueva propiedad que se desea agregar
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza']
        /* 
        getName(){
            return this.name;
        } 
        */
    }

})()