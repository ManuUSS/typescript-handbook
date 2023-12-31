(() => {
    //* Never
    // El never no es undefined o void, son tipos distintos
    
    // En esta caso significaría que la función no puede 
    // llegar a un punto de final, no es un punto alcanzable
    const errorHandler = ( message:string ):never => {
        throw new Error( message );
    }

    errorHandler('Error');

})()