(() => {

    //* Genericos

    // Declarando una función de flecha generica
    const identity = <Type>(arg: Type): Type => {
        return arg;
    }
    
    // Declarando una función normal generica
    function identityN<Type>(arg: Type): Type {
        return arg;
    }

    // Infiere que es de tipo string
    let myOutpout = identity("siu");
    console.log( myOutpout.toUpperCase() );
    let myOutpoutNumber = identityN( 5.154545 );
    console.log( myOutpoutNumber.toFixed( 2 ));

})()