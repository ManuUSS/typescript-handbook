"use strict";
(() => {
    //* Arrays
    // Para definir arreglos se usan los []
    // Generalmente se suelen utilizar de un solo tipo específico
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Sin embargo también puede aceptar varios valores
    const arrayVars = [1, 2, 3, 4, 5, 6, 7, '8', 9, '10'];
    // Al decir el tipo de elementos que acepta el array
    // cualquier tipo que no haga match con el mecionado
    // saltará un error
    number.push(11);
    arrayVars.push('11');
    arrayVars.push(true);
    console.log(number);
    console.log(arrayVars);
})();
//# sourceMappingURL=arrays.js.map