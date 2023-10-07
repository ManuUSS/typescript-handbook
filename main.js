"use strict";
const msg = 'Hola mundo!!!!';
console.log(msg);
(() => {
    let hero = 123;
    let exists;
    let power;
    hero = 'Dr Manuel';
    console.log(hero.charAt(0));
    console.log(hero.charAt(0));
    hero = 15.46465;
    console.log(hero.toFixed(2));
    console.log(hero.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayVars = [1, 2, 3, 4, 5, 6, 7, '8', 9, '10'];
    number.push(11);
    arrayVars.push('11');
    arrayVars.push(true);
    console.log(number);
    console.log(arrayVars);
})();
(() => {
    let isSuperman = true;
    isSuperman = true && false;
    console.log({ isSuperman });
    let isUndefinedMan;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel["min"] = "Min";
        AudioLevel["medium"] = "Med";
        AudioLevel["max"] = "Max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Power;
    (function (Power) {
        Power[Power["PowerI"] = 0] = "PowerI";
        Power[Power["PowerII"] = 1] = "PowerII";
        Power[Power["PowerIII"] = 5] = "PowerIII";
        Power[Power["PowerIV"] = 100] = "PowerIV";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.PowerIII;
    const fuerzaSuperman = Power.PowerIV;
    const fuerzaBatman = Power.PowerII;
    const fuerzaAcuaman = Power.PowerI;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const errorHandler = (message) => {
        throw new Error(message);
    };
    errorHandler('Error');
})();
(() => {
    let nothing = null;
    let isActive = undefined;
    console.log(nothing);
})();
(() => {
    const TEN = 10;
    let avengers = 10;
    const villians = 20;
    console.log({ villians });
    avengers = 123;
    console.log({ avengers });
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const juan = "Juan";
    const dog = `Perro`;
    console.log(batman.toUpperCase());
    console.log(juan + 'el mejor');
    console.log(dog.toLowerCase());
    console.log(batman[10].toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay');
})();
(() => {
    const hero = ['Dr Manuel', 100];
    const heroExtra = ['Dr Manuel', 100, false];
})();
(() => {
    function callMe() { }
    ;
    const callMeV = () => { };
    const voidV = callMe();
    console.log(voidV);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || ''}`.toUpperCase();
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Manuel');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Manuel');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const name = fullName('Manuel', 'Ulate', 'Sancho', 'Siu');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Manuel', 'Ulate');
    console.log(name);
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const addNumbers = (numA, numB) => numA + numB;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está a salvo`;
    let myFn;
    myFn = addNumbers;
    console.log(myFn(1, 5));
})();
(() => {
    const hero = 'Manuel';
    function returnName() {
        return hero;
    }
    const activateSignal = () => {
        return 'Activada';
    };
    console.log(typeof activateSignal);
    const heroName = returnName();
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
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
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let myCustomVar = "Manuel";
    console.log(typeof myCustomVar);
    myCustomVar = 20;
    console.log(typeof myCustomVar);
    myCustomVar = {
        name: 'Manuel Ulate',
        age: 20,
        powers: ['Coding']
    };
    console.log(typeof myCustomVar);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superMan = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superMan = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza']
    };
})();
//# sourceMappingURL=main.js.map