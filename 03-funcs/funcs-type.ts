(() => {

    //* Funciones

    const addNumbers = ( numA: number, numB: number): number => numA + numB;
    const greet = ( name:string ): string => `Hola ${ name }`;
    const saveTheWorld = (): string => `El mundo está a salvo`;

    // Se define que es de tipo función
    // let myFn: Function;

    // Se define que es de tipo función
    // que espera dos argumentos de tipo number y retorna un number
    let myFn: ( a: number, b: number ) => number;

    // Esto da un error por el tipado myFn = 10;
    // console.log( myFn );
    
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    myFn = addNumbers;
    console.log( myFn( 1, 5 ) );
    
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    //! Esto da error por el tipado: myFn = greet;
    //! Esto da error por el tipado: console.log( myFn( 'Manuel' ) );
    
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    //! Esto da error por el tipado: myFn = saveTheWorld;
    //! Esto da error por el tipado: console.log( myFn() );



})()