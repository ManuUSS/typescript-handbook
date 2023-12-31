(() => {
    //* Argumentos de las funciones

    // Se definen los tipos de argumentos que espera la funcion
    // para definir un argumento que no es obligatorio se utiliza
    // el caracter ? el cual indica que es opcional
    const fullName = ( firstName: string, lastName?: string ):string => {
        // El operador || indica si no se tiene valor en lastName
        // entonces que utilize ''
        return `${ firstName } ${ lastName || '' }`;
    }

    // Se deben respetar los tipos de datos que espera,
    // caso contrario muestra un error
    const name = fullName('Manuel');
    console.log( name );


})();