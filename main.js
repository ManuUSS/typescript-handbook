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
    for (const avenger of avengers) {
        console.log(avenger);
    }
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