"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Manu', 'UCR', 'Manuel');
    console.log(antMan);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map