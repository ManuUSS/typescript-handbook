(() => {

    // Funciones Básicas
    function sumar( a:number, b:number ){
        return a + b;
    }

    const contar = ( heroes ) => {
    return heroes.length;
    }
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);

    //Parametros por defecto
    const llamarBatman = ( llamar ) => {
    if( llamar ){
        console.log("Batiseñal activada");
    }
    }

    llamarBatman();

    // Rest?
    const unirheroes = ( personas ) => {
    return personas.join(", ");
    }


    // Tipo funcion
    const noHaceNada = ( numero, texto, booleano, arreglo )=> {}

    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada


})()