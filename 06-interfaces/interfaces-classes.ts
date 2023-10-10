(() => {

    //* Interfaces en clases

    // Se crea una interfaz normal
    interface Coke {
        flavor: string;
        sugar: number;
        createFlavor( name:string ):void;
    }
    
    // Se crea una interfaz normal
    interface Fanta {
        price: number;
    }


    //? Se usa la palabra reservada implements
    class Soda implements Coke, Fanta {

        constructor ( 
            public flavor:string, 
            public sugar: number, 
            public price: number 
        ) {}

        createFlavor( name: string ): void {
            console.log(`Nuevo sabor ${ name } en creación`)
        }
        
    }

    const coke:Coke = new Soda("Vainilla", 500, 15800 );
    const fanta:Fanta = new Soda("Vainilla", 500, 15800 );
    coke.createFlavor("Chocolate");
    // fanta.createFlavor("Juanilama") //! Error: interfaz Fanta no tiene metodo createFlavor
    console.log( fanta.price );
    // console.log( coke.price ) //! Error: interfaz COke no tiene propiedad price


})()