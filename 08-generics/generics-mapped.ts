(() => {

    //* Tipos mapeados

    // Estos tipos son muy útiles cuando se está construyendo 
    // una interfaz en la cual, al momento de su derrasollo no se
    // posee con claridad las propiedades que posea
    interface MyMapped {
        name: string;
        age: number;
        // Defino una llave de tipo string que apunta a un valor string o number
        [ x: string ] : ( string | number )
    }

    const myObj:MyMapped = {
        // Propiedades definidas en la interfaz
        name: "Manuel",
        age: 20,
        
        //? Propiedades no definidas explicitamente en la interfaz
        // Como podemos ver en la interface MyMapped no se definieron las properties
        // de name o age, sin embargo pueden ser definidas al momento de crear el objeto
        desc: "Un chico normal",
        city: "San Ramón"
        
        // isMarried: false //! Error: solo acepta propiedades de tipo string o number
        
    }

    console.log( myObj ); 


})()