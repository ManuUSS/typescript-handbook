(() => {
    //* Desestructuració de arreglos

    const avengers:string[] = ['Cap América', 'Hulk', 'Ironman', 'Manuel'];

    //? Desestructuración normal
    // Con las [] se destructuran los elementos de un array
    // en este tipo de desestructuramiento no importa el nombre, 
    // solamente la posición (debe ser el mismo).
    const [ cap, hulk, iron ] = avengers;
    console.log( cap, hulk, iron );
    // De esta manera me salto posiciones de elementos que no ocupo
    const [ ,,, manu ] = avengers;
    console.log( manu );
})()