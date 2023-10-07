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
})()