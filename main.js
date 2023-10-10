"use strict";
(() => {
    let superMan = {
        id: 12254,
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Soda {
        constructor(flavor, sugar, price) {
            this.flavor = flavor;
            this.sugar = sugar;
            this.price = price;
        }
        createFlavor(name) {
            console.log(`Nuevo sabor ${name} en creación`);
        }
    }
    const coke = new Soda("Vainilla", 500, 15800);
    const fanta = new Soda("Vainilla", 500, 15800);
    coke.createFlavor("Chocolate");
    console.log(fanta.price);
})();
(() => {
    const client = {
        name: 'Manuel',
        age: 20,
        address: {
            id: 212,
            zip: '20201',
            city: 'San Ramón'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
})();
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    let Gender;
    (function (Gender) {
        Gender["F"] = "Femenino";
        Gender["M"] = "Masculino";
    })(Gender || (Gender = {}));
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`${this.nombre} - ${this.edad} - ${this.estadoCivil}`);
        }
    }
})();
(() => {
    const addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(5, 5));
})();
//# sourceMappingURL=main.js.map