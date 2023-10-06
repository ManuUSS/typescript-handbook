"use strict";
(() => {
    //* Multiples Types en objetos
    let myCustomVar = "Manuel";
    console.log(typeof myCustomVar);
    myCustomVar = 20;
    console.log(typeof myCustomVar);
    myCustomVar = {
        name: 'Manuel Ulate',
        age: 20,
        powers: ['Coding']
    };
    console.log(typeof myCustomVar);
})();
