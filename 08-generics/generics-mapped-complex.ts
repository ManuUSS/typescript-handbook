(() => {

    //* Tipos mapeados


    // En ciertos escenarios es posible que queramos hacer tipos, más complejos
    // como por ejemplo, dado un tipo mapear sus llaves y valores posibles
    type MyInput<T> = {
        // En este ejemplo
        [ prop in keyof T ]: T[ prop ]
    }

})()