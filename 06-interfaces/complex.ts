(() => {

    interface Client {
        name: string;
        age:  number;
        addres: {
            id: number;
            zip: string;
            city: string;
        }
        // El ? indica que la propiedad es opcional
        alias?: string;
    }

    const client:Client = {
        name: 'Manuel', 
        age: 20,
        addres: {
            id: 212,
            zip: '20201',
            city: 'San Ramón'
        }
    }

})()