(() => {
    //* Records
    // Construye un tipo de objeto cuyas claves de propiedad son 'Keys' y cuyos valores de propiedad son de tipo 'Type'. 
    // Esta utilidad se puede utilizar para asignar las propiedades de un tipo a otro tipo.

    // Se crea un interfaz
    interface CatInfo {
        age: number;
        breed: string;
    }
       
    // Se crean unas keys
    type CatName = "miffy" | "boris" | "mordred";
       
    // Uso de la utilidad
    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: "Persian" },
        boris: { age: 5, breed: "Maine Coon" },
        mordred: { age: 16, breed: "British Shorthair" },
    };
       
    console.log( cats.boris );
})()