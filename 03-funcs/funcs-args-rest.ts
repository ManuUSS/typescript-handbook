(() => {
    //* Argumentos de las funciones

    // Se definen los tipos de argumentos que espera la funcion
    // para definir un argumento que no es obligatorio se utiliza
    // el caracter ? el cual indica que es opcional
    // el caracter = indica que el argumente tiene un valor por defecto
    // en caso que un valor no sea enviado
    // al tener un valor por defecto se considerada opcional
    const fullName = ( firstName: string, lastName?: string, upper:boolean = false ):string => {
        // El operador || indica si no se tiene valor en lastName
        // entonces que utilize ''
        if( upper )
            return  `${ firstName } ${ lastName || '' }`.toUpperCase();
        
        return `${ firstName } ${ lastName || '' }`;
    }

    // Se deben respetar los tipos de datos que espera,
    // caso contrario muestra un error
    const name = fullName('Manuel');
    console.log( name );


})();