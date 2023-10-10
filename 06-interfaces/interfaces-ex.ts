(() => {

    interface Car {
        encender:        boolean,
        velocidadMaxima: number,
        acelear():       void;
    }


    const conducirBatimovil = ( auto:Car ):void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    }

    const batimovil:Car = {
        encender:false,
        velocidadMaxima:0,
        acelear(){
            console.log("...... gogogo!!!");
        }
    }

    // Cree una interfaz con que permita utilzar el siguiente objeto
    // utilizando propiedades opcionales

    interface Joker {
        reir:  boolean,
        comer: boolean,
        llorar:boolean
    }

    const guason:Joker = {
        reir: true,
        comer:true,
        llorar:false
    }

    const reir = ( guason:Joker ):void => {
        if( guason.reir ){
            console.log("JAJAJAJA");
        }
    }


    interface Citiziens {
        ( citizens:string[] ): number;
    }

    const ciudadGotica:Citiziens = ( ciudadanos:string[] ):number => {
        return ciudadanos.length;
    }

    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos

    interface Person {
        nombre: string;
        edad: number;
        sexo: Gender;
        estadoCivil: string;
        imprimirBio(): void;
    }
    enum Gender {
        F = 'Femenino',
        M = 'Masculino'
    }
    class Persona implements Person {

        constructor (
            public nombre: string,
            public edad: number,
            public sexo:Gender,
            public estadoCivil:string
        ){}

        public imprimirBio(): void {
             console.log(
                `${ this.nombre } - ${ this.edad } - ${ this.estadoCivil }`
            )
        }

    }

})()