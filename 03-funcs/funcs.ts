(() => {
    //* Funciones
    
    const hero:string = 'Manuel';

    // Una función definida de manera normal
    // se recomienda siempre utilizar el valor de retorno
    function returnName():string {
        return hero;
    }

    // Una función de flecha definida de manera normal
    // se recomienda siempre utilizar el valor de retorno
    const activateSignal = ():string => {
        return 'Activada';
    }

    // Los tipos de returnName y activateSignal son diferentes
    console.log( typeof activateSignal );

    // Asignando un valor con el valor de retorno de una función
    const heroName:string = returnName();


})()