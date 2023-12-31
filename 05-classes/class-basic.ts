(() => {

    //* Clases

    class Avenger {
        // ? Forma de definir el constructor estandar
        // La propiedad solo es visible dentro de la clase
        // private name:string;
        // La propiedad es visible fuera de la clase
        // public team:string;
        // public realName:string;
        // Solo puede ser accedida mediante la instacia de la clase
        static avgAge: number = 35;
        static getAvgAge():number {
            return this.avgAge;
        }
        // Se crea un constructor de igual manera
        /*
            constructor ( name:string, team:string, realName:string ) {
                this.name = name;
                this.team = team;
                this.realName = realName;
            }
        */

        //? Forma más conocida
        constructor ( 
            private name:string, 
            public team:string, 
            public realName:string
        ) {}
        
        // Definición de un método
        // el public es opcional ponerlo
        // esto en JS ES6 no se puede hacer
        public bio():string {
            return `${ this.name } (${ this.team } - ${ this.realName })`
        }
        
        private bioV():string {
            return `${ this.name } (${ this.team } - ${ this.realName })`
        }

    }

    const antMan: Avenger = new Avenger( 'Manu', 'UCR', 'Manuel' );
    console.log( antMan );
    console.log( antMan.bio() );
    // console.log( antMan.bioV() ); //!Error
    console.log( Avenger.avgAge );

})()