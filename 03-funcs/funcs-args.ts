(() => {
    //* Argumentos de las funciones

    // Se definen los tipos de argumentos que espera la funcion
    const fullName = ( firstName: string, lastName: string ):string => {
        return `${ firstName } ${ lastName }`;
    }

    // Se deben respetar los tipos de datos que espera,
    // caso contrario muestra un error
    const name = fullName('Manuel', 'Ulate');
    console.log( name );


})();