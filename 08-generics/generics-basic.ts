(() => {

    //* Genéricos

    // Los genéricos permiten generar interfaces
    // más ajustables a diferentes tipos, se tiene un tipado
    // un poco menos estricto, para agrega mucha flexibilidad

    // Declarando una función de flecha genérica
    const identity = <Type>(arg: Type): Type => {
        return arg;
    }
    
    // Declarando una función normal genérica
    function identityN<Type>(arg: Type): Type {
        return arg;
    }

    //? Infiere que es de tipo string
    let myOutput = identity("siu");
    
    console.log( myOutput.toUpperCase() );
    //? Infiere que es de tipo number
    let myOutputNumber = identityN( 5.154545 );
    console.log( myOutputNumber.toFixed( 2 ));

})()