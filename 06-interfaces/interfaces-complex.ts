(() => {

    interface Client {
        name: string;
        age:  number;
        // Cuando la interfaz posee más de un nivel
        // es considerable crear una nueva interfaz
        // de esta manera se mejora la sintaxis
        address: Address;
        getFullAddress( id:string ):void;
        // El ? indica que la propiedad es opcional
        job?: Job;
        alias?: string;
    }

    // Segundo nivel de la interfaz
    interface Address {
        id: number;
        zip: string;
        city: string;        
    }

    interface Job {
        name: string;
        place: string;
        description?: string;
        date: Date;
    }

    const client:Client = {
        name: 'Manuel', 
        age: 20,
        address: {
            id: 212,
            zip: '20201',
            city: 'San Ramón'
        },
        getFullAddress( id: string ) {
            return this.address.zip;
        }
    }

})()