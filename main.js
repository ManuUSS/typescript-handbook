"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = ['Cap América', 'Hulk', 'Ironman', 'Manuel'];
    const [cap, hulk, iron] = avengers;
    const [, , , manu] = avengers;
    const tuple = ['Cap América', false, 20.454, 'Manuel'];
    const [capSecond, bool, num, me] = tuple;
})();
(() => {
    class Avenger {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
        getName() {
            return this.name;
        }
    }
    class FlyingAvenger extends Avenger {
        constructor(name, power) {
            super(name, power);
            this.canFly = true;
        }
    }
    const hulk = new Avenger('Manuel', 1500);
    const falcon = new FlyingAvenger('Manuel - Falcon', 4561310);
    console.log(hulk);
    console.log(falcon.getName());
    class Employee {
        constructor(empcode, name) {
            this.empCode = empcode;
            this.name = name;
        }
        display() {
            console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
        }
    }
    let per = new Employee(100, "Bill");
    per.display();
    let emp = new Employee(100, "Bill");
    class Car {
        constructor(name) {
            this.name = name;
        }
        run(speed = 0) {
            console.log("A " + this.name + " is moving at " + speed + " mph!");
        }
    }
    class Mercedes extends Car {
        constructor(name) {
            super(name);
        }
        run(speed = 150) {
            console.log('A Mercedes started');
            super.run(speed);
        }
    }
    class Honda extends Car {
        constructor(name) {
            super(name);
        }
        run(speed = 100) {
            console.log('A Honda started');
        }
    }
    let mercObj = new Mercedes("Mercedes-Benz GLA");
    let hondaObj = new Honda("Honda City");
    mercObj.run();
    hondaObj.run();
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const capAmerica = {
        name: 'Capitan America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, capAmerica, thor];
    const getAvengers = () => {
        for (const avenger of avengers) {
            console.log(avenger);
        }
    };
})();
(() => {
    const nombre = 'Manuel';
    const hero = {
        a: 1,
        b: 2
    };
    hero.a = 3;
})();
(() => {
    const avengers = {
        nick: 'Samuel L Jackson',
        ironMan: 'Robert Downey Jr',
        vision: 'Paul Bettan',
        active: true,
        power: 1500
    };
    const { active, nick, power } = avengers;
    const printAvenger = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(rest);
    };
})();
//# sourceMappingURL=main.js.map