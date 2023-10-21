(() => {
    //* Awaited

    //Este tipo está diseñado para modelar operaciones como await en funciones asíncronas 
    //o el método .then() en Promesas

    type AwaitedString = Awaited<Promise<string>>;
    type AwaitedNumber = Awaited<Promise<Promise<number>>>;
})