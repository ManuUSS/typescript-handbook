"use strict";
(() => {
    //* Void
    // El valor de void significa vacio
    // es decir, no hay nada en ese valor
    function callMe() { }
    ;
    const callMeV = () => { };
    const voidV = callMe();
    console.log(voidV);
})();
