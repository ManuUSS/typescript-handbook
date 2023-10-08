(() => {
    //* Extends




    class Avenger {
        constructor (
            public name:string,
            public realName: string
        ){
            console.log('Constructor Avenger')
        }
    
        private getFullName() {
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

    }

})()