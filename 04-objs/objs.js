"use strict";
(() => {
    //* Objetos
    // Al crear un objeto de esta manera TS infiere el tipo de dato
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    // Da error al no reconocer la nueva propiedad que se desea agregar
    flash = {
        lastName: 'Robertson'
    };
})();
