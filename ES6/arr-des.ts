(() => {
    //* Desestructuració de arreglos

    const avengers:string[] = ['Cap América', 'Hulk', 'Ironman', 'Manuel'];

    //? Desestructuración normal
    // Con las [] se destructuran los elementos de un array
    // en este tipo de desestructuramiento no importa el nombre, 
    // solamente la posición (debe ser el mismo).
    const [ cap, hulk, iron ] = avengers;
   
    // De esta manera me salto posiciones de elementos que no ocupo
    const [ ,,, manu ] = avengers;

    //? Ejemplo con una tupla
    const tuple:[ string, boolean, number, string ] = ['Cap América', false, 20.454, 'Manuel'];
    // La desestructuración es la misma, lo importante es ver el 
    // tipado que ofrece TS para mejorar el desarrollo
    const [ capSecond, bool, num, me ] = tuple;
})()