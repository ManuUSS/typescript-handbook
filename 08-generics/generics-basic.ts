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

})()