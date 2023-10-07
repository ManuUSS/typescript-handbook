(() => {

    //* Clases en JS

    // Se utiliza la palabra reservada class
    // luego, se definen las propiedades de la clase
    // y se inicializan mediante el constructor
    // el problema radica en el tipado, no se tiene
    // una forma de tipar los atributos con los que se espera
    // que trabaje la capa
    class Avenger {
        name;
        power;
        
        constructor( name = 'No name', power = 1500 ) {
            this.name = name;
            this.power = power;
        }
    
    }

    class FlyingAvenger extends Avenger {
        canFly;

        constructor( name, power ) {
            super( name, power );
            this.canFly = true;
        }
    }

    const hulk = new Avenger( 'Manuel', 1500 );
    const falcon = new FlyingAvenger('Manuel - Falcon', 4561310);

    console.log( hulk );
    console.log( falcon );
})()