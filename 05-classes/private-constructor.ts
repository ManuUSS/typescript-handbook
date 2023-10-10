(() => {

    //* Constructor privado

    // Se puede utilizar para controlar la manera en la que
    // las instancias son ejecutadas
    // uso similar al patron Singleton

    class Apocalypse {

        // Comumente se define instance, _instance, ...
        // pero todas son del mismo tipo de la clase y estaticas
        public static instance: Apocalypse;

        // Se utiliza la palabra reservada private
        private constructor ( public name:string ) {}

        static callApocalypse ():Apocalypse {
            if( !Apocalypse.instance ) {
                // Aquí se puede llamar al constructor ya que se está
                // dentro del escope de la clase
                Apocalypse.instance = new Apocalypse('Apocalipsis único') 
            }

            return Apocalypse.instance;

        }

    }

    //? Cada una de estas es una nueva instancia a la clase
    // const apo = new Apocalypse('Apocalipsis...1'); //! Error: Constructor es privado
    // const apo2 = new Apocalypse('Apocalipsis...2'); //! Error: Constructor es privado
    // const apo3 = new Apocalypse('Apocalipsis...3'); //! Error: Constructor es privado
    
    //? Cada una de estas es la misma instancia a la clase
    const apo1 = Apocalypse.callApocalypse();
    const apo2 = Apocalypse.callApocalypse();
    const apo3 = Apocalypse.callApocalypse();

    console.log( apo1 );
    console.log( apo2 );
    console.log( apo3 );
})()