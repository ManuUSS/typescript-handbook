(() => {

    //* Objetos

    // Se crea un objeto de similar manera,
    // se recomienda definir su tipo para respetar el tipado
    // esto se conoce como definición en línea
    let flash: { name: string, age: number, powers: string[], getName?():string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'], 
        getName(){
            return this.name;
        } 
        
    }

})()