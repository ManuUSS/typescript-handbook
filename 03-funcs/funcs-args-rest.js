"use strict";
(() => {
    //* Argumentos de las funciones
    // El argumento rest indica que se pueden enviar x cantidad
    // de argumentos no obligatorios, se define con los ...
    // esto es un arreglo de tipo de args
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const name = fullName('Manuel', 'Ulate', 'Sancho', 'Siu');
    console.log(name);
})();
//# sourceMappingURL=funcs-args-rest.js.map