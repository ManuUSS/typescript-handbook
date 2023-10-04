"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Power;
    (function (Power) {
        Power[Power["PowerI"] = 0] = "PowerI";
        Power[Power["PowerII"] = 1] = "PowerII";
        Power[Power["PowerIII"] = 5] = "PowerIII";
        Power[Power["PowerIV"] = 100] = "PowerIV";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.PowerIII;
    const fuerzaSuperman = Power.PowerIV;
    const fuerzaBatman = Power.PowerII;
    const fuerzaAcuaman = Power.PowerI;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
