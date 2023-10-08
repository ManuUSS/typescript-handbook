"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team} - ${this.realName})`;
        }
        bioV() {
            return `${this.name} (${this.team} - ${this.realName})`;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Manu', 'UCR', 'Manuel');
    console.log(antMan);
    console.log(antMan.bio());
    console.log(Avenger.avgAge);
})();
(() => {
})();
//# sourceMappingURL=main.js.map