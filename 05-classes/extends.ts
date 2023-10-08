(() => {
    //* Extends




    class Avenger {
        constructor (
            public name:string,
            public realName: string
        ){
            console.log('Constructor Avenger')
        }
    
        protected getFullName() {
            return `${ this.name } ${ this.realName }`
        }

    }

    // Extends
    class Xman extends Avenger {

        constructor(
            name:string,
            realName: string,
            public isMutant:boolean
        ) {
            super( name, realName );
            console.log( "Constructor Xman llamado" );
        }

        public getFullNameXman():string {
            return super.getFullName() + "Xman"; 
        }

    }

    const wolv: Xman = new Xman("Wolverine", "Logan", true);
    console.log( wolv );

    const newAv: Avenger = new Avenger("Manu", "Manuel");
    console.log( newAv );

})()