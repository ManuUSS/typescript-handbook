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
            public realName:string,
            avgAge: number = 35 
        ) {
            Avenger.avgAge = avgAge;
        }

    }

    const antMan: Avenger = new Avenger( 'Manu', 'UCR', 'Manuel' );
    console.log( antMan );
    console.log( Avenger.avgAge );

})()