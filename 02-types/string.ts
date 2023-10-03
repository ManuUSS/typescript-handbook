(() => {
    //* Strings
    //Hay tres formas diferentes de definir variables de tipo string
    const batman:string = 'Batman';
    const juan:string = "Juan";
    const dog:string = `Perro`;

    //Es importante usar tipado, ya que ayuda al intellisense
    console.log( batman.toUpperCase() );
    console.log( juan + 'el mejor' );
    console.log( dog.toLowerCase() );

    //Sin embargo, hay que tener cuidado con el código que se escribe
    //ya que Typescript no puede controlarlo todo
    console.log( batman[10].toUpperCase()); //En este ejemplo la posicion 10 no existe
    console.log( batman[10]?.toUpperCase() || 'No hay'); //Se puede solucionar con el null check (?)


})()