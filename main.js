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
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xman extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xman llamado");
        }
        get getFullNameX() {
            return `${this.name} - ${this.realName} - ${this.isMutant}`;
        }
        set setIsMutant(isMutant) {
            this.isMutant = isMutant;
        }
        getFullNameXman() {
            return super.getFullName() + "Xman";
        }
    }
    const wolv = new Xman("Wolverine", "Logan", true);
    console.log(wolv);
    console.log(wolv.getFullNameX);
    const newAv = new Avenger("Manu", "Manuel");
    console.log(newAv);
})();
//# sourceMappingURL=main.js.map