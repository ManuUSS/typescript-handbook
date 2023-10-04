"use strict";
(() => {
    //* Funciones
    const addNumbers = (numA, numB) => numA + numB;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está a salvo`;
    let myFn;
    myFn = 10;
    console.log(myFn);
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    myFn = addNumbers;
    console.log(myFn(1, 5));
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    myFn = greet;
    console.log(myFn('Manuel'));
    // Pasa por referencia la funcion
    // al no utilizar los () se pasa la referencia
    // además, TS logra infererir el tipo de dato
    myFn = saveTheWorld;
    console.log(myFn());
})();
