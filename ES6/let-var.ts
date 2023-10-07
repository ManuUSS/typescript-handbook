(() => {

    // Evitar el uso del var
    /* 
        console.log( a );
        var a = 'Manuel';
    */

    // Se recomienda siempre trabajar con constantes
    // al menos que uno sepa que la asignación va a cambiar entonces usar let
    const nombre = 'Manuel';
    type Hero = {
        a: number;
        b: number;
    }
    const hero: Hero = {
        a: 1,
        b: 2
    }
    hero.a = 3;

})()