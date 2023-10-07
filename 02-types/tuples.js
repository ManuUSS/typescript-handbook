"use strict";
(() => {
    //* Tuples
    // Las tuplas se definen igual que los conocidos arrays
    // sin embargo, su parte aquí en TS es diferente a JS
    const hero = ['Dr Manuel', 100];
    // También se pueden definir más posiciones
    // Se podría ver de manera literal como definir el tipo en las posiciones del array 
    const heroExtra = ['Dr Manuel', 100, false];
    // Este código marca un error, ya que no respeta los valores en las posiciones
    /*
    hero[0] = 10;
    hero[1] = 'Juan';
    */
})();
//# sourceMappingURL=tuples.js.map