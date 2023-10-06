( () => {

    // Se define el Type
    type Car = {
        carroceria: string,
        modelo: string,
        antibalas: boolean,
        pasajeros: number,
        disparar?: () => void;
    }

    const batimovil:Car = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros:4
    };
        
    const bumblebee:Car = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros:4,
        disparar(){
            console.log("Disparando");
        }
    };

    // Se define el Type
    type Villian = {
        nombre: string;
        mutante: boolean;
        edad?: number;
    }
    const villanos:Villian[] = [
        {
            nombre:"Lex Luthor",
            edad: 54,
            mutante:false
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }
    ];
    
    // Se define el Type
    type Charles = {
        poder: string;
        estatura: number;
    }
    const charles:Charles = {
        poder:"psiquico",
        estatura: 1.78
    };
    

    // Se define el Type
    type Apocalypse = {
        lider: boolean;
        miembros: string[];
    }
    const apocalipsis:Apocalypse = {
        lider:true,
        miembros: ["Magneto","Tormenta","Psylocke","Angel"]
    }
    
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique: Charles | Apocalypse;
    
    mystique = charles;
    mystique = apocalipsis;
})()
  