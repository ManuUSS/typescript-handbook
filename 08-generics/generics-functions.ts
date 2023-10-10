(() => {

    //* Genéricos

    // Como vimos anteriormente, se pueden definir interfaces para 
    // cualquier tipo, entre ellas funciones
    interface GenericGetData {
        <Type>(arg: Type): Type;
    }
    
    const myData = <Type>(arg: Type): Type => {
        return arg;
    }
    
    let myIdentity: GenericGetData = myData;
    //? Al definir el tipo de parámetro como un 10
    //? TS infiere que es de tipo number, ofreciendo el intellisense
    console.log( myIdentity( 10 ).toExponential( 2 ) );

    // Otra forma de definir una interfaz genérica
    interface GenericProps<T> {
        ( arg: T ) : T;
    }
    // Defino que trabajaré con números
    let myGenericProps: GenericProps<number> = myData;
    // console.log( myGenericProps('10')) //! Error: parámetro de tipo string no es asignable a number
    console.log( myGenericProps( 5 ) );
})()