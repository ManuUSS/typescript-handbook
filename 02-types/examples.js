"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=examples.js.map