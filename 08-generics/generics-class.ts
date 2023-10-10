(() => {

    //* Genéricos

    // De igual manera se pueden crear clases genéricas
    // es importante saber que no se pueden crear 
    // enums o namespaces genéricos
    class GenericNumber<NumType> {
        
        // public static arg:NumType; //! Error: las propiedades estáticas no pueden ser genéricas
        constructor ( public zeroValue:NumType ) {}

        add: (x: NumType, y: NumType) => NumType;
    }
       
    let myGenericNumber = new GenericNumber<number>( 20 );

    // Infiere que los parámetros que recibe la función 
    // son de tipo number, ya que es el tipo que le declaro a mi clase
    myGenericNumber.add = function ( x, y ) {
        return x + y;
    };

    console.log( myGenericNumber.add( 10, 20 ) ); // 30

})()