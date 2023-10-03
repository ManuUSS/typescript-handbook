"use strict";
(() => {
    var _a;
    //* Strings
    //Hay tres formas diferentes de definir variables de tipo string
    const batman = 'Batman';
    const juan = "Juan";
    const dog = `Perro`;
    //Es importante usar tipado, ya que ayuda al intellisense
    console.log(batman.toUpperCase());
    console.log(juan + 'el mejor');
    console.log(dog.toLowerCase());
    //Sin embargo, hay que tener cuidado con el código que se escribe
    //ya que Typescript no puede controlarlo todo
    console.log(batman[10].toUpperCase()); //En este ejemplo la posicion 10 no existe
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay'); //Se puede solucionar con el null check (?)
})();
