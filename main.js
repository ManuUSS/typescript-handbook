"use strict";
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
    console.log(active, nick, power);
})();
//# sourceMappingURL=main.js.map