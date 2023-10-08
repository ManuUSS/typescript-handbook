(() => {

    //* Clases abstractas

    // Al declarar la palabra reservada abstract
    // la clase se convierte a ser una clase abstracta
    abstract class Monster {
        constructor(
            public name:string,
            public realName:string,
        ){

        }
    }

    //! Error: no se puede crear una instancia de una clase abstracta
    // const wolv:Monster = new Monster('Wolverine', 'Logan'); 

    // Una clase puede extender de una clase abstracta
    // de esta manera se pueden utilizar de cascarón para crear
    // otro tipo de clases, como un template
    class Character extends Monster {
        public saveWord() {
            return 'Saved'
        }
    }
    class Villian extends Monster {
        public conquerWord() {
            return 'Conquered'
        }
    }

    const mast = new Character("Mast", "Juan");
    console.log( mast );

    const vest = new Villian("Vest", "Said");
    console.log( vest );
})()