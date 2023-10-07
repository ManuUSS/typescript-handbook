(() => {

    //* Clases en TS

    // Se utiliza la palabra reservada class
    // luego, se definen las propiedades de la clase
    // y se inicializan mediante el constructor
    // el problema radica en el tipado, no se tiene
    // una forma de tipar los atributos con los que se espera
    // que trabaje la capa
    class Avenger {
        name:string;
        power:number;
        
        constructor( name:string , power:number ) {
            this.name = name;
            this.power = power;
        }

        getName():string {
            return this.name;
        }
    
    }

    class FlyingAvenger extends Avenger {
        canFly;

        constructor( name:string, power:number ) {
            super( name, power );
            this.canFly = true;
        }
    }

    const hulk = new Avenger( 'Manuel', 1500 );
    const falcon = new FlyingAvenger('Manuel - Falcon', 4561310);

    console.log( hulk );
    console.log( falcon.getName() );

    /* <-------------------------------------------------------> */

    //? Clases con Interfaces 
    interface IPerson {
        name: string;
        display():void;
    }
    
    interface IEmployee {
        empCode: number;
    }
    
    class Employee implements IPerson, IEmployee {
        empCode: number;
        name: string;
        
        constructor( empcode: number, name:string ) {
            this.empCode = empcode;
            this.name = name;
        }
        
        display(): void {
            console.log( "Name = " + this.name +  ", Employee Code = " + this.empCode );
        }
    }
    
    let per:IPerson = new Employee( 100, "Bill" );
    per.display(); // Name = Bill, Employee Code = 100
    
    let emp:IEmployee = new Employee( 100, "Bill" );
    // emp.display(); //! Error: la propiedad display no existe en el tipo IEmployee




    /* <-------------------------------------------------------> */

    //? Clases y el Overriding 
    class Car {
        name: string;
            
        constructor( name: string ) {
            this.name = name;
        }
        
        run( speed:number = 0 ) {
            console.log("A " + this.name + " is moving at " + speed + " mph!");
        }
    }
    
    class Mercedes extends Car {
        
        constructor( name: string ) {
            super( name );
        }
        
        run( speed = 150 ) {
            console.log( 'A Mercedes started' );
            super.run( speed );
        }
    }
    
    class Honda extends Car {
        
        constructor( name: string ) {
            super( name );
        }
        
        run() {
            console.log( 'A Honda started' );
        }
    }
    
    let mercObj = new Mercedes( "Mercedes-Benz GLA" );
    let hondaObj = new Honda( "Honda City" )
    
    mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
    hondaObj.run(); // A Honda started

})()