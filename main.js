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
//# sourceMappingURL=main.js.map