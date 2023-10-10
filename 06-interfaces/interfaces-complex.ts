(() => {

    interface Client {
        name: string;
        age:  number;
        // Cuando la interfaz posee más de un nivel
        // es considerable crear una nueva interfaz
        // de esta manera se mejora la sintaxis
        address: Address;
        // El ? indica que la propiedad es opcional
        alias?: string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;        
    }

    const client:Client = {
        name: 'Manuel', 
        age: 20,
        address: {
            id: 212,
            zip: '20201',
            city: 'San Ramón'
        }
    }

})()