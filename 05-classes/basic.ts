(() => {

    //* Clases

    class Avenger {
        // La propiedad solo es visible dentro de la clase
        private name:string;
        // La propiedad es visible fuera de la clase
        public team:string;
        public realName:string;
        // Solo puede ser accedida mediante la instacia de la clase
        static avgAge: number = 35;

        // Se crea un constructor de igual manera
        constructor ( name:string, team:string, realName:string ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antMan: Avenger = new Avenger( 'Manu', 'UCR', 'Manuel' );

    console.log( Avenger.avgAge );

})()