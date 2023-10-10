(() => {

    //* Interfaces implementadas en funciones

    // Se crea una interfaz para definir el tipo que 
    // se espera que tenga la función
    interface AddNumbers {
        // Aquí menciono que recibo dos argumentos
        // de tipo number y retorno de igual manera
        // un number
        ( a: number, b:number ):number;
    }

    // Declaro la función, y le asigno el tipo
    // de igual manera que se realiza con todos
    // los demás tipos de datos
    const addNumbersFunction:AddNumbers = ( a: number, b: number ) => {
        return a + b;
    }

    //? Llamo a la ejecución de la función
    console.log( addNumbersFunction( 5, 5 ) );

})()