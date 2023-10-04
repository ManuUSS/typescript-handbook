(() => {
    //* Argumentos de las funciones

    // El argumento rest indica que se pueden enviar x cantidad
    // de argumentos no obligatorios, se define con los ...
    // esto es un arreglo de tipo de args
    const fullName = ( firstName: string, ...rest:string[] ):string => {
        return `${ firstName } ${ rest.join(' ') }`;
    }

    const name = fullName('Manuel', 'Ulate', 'Sancho', 'Siu');
    console.log( name );


})();