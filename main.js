"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarAlMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        conquitarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('wolverine', 'logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.salvarAlMundo());
    console.log(magneto.conquitarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const iroman = new Avenger('IroMan', 'Tony', 'Tony Stark');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!!!!!!');
        }
        getFullName() {
            return ` ${this.name} ${this.realName} `;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamdo!!');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return ` ${this.name} - ${this.realName} `;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("Debe ser mayor a 3 caracteres");
            }
            this.name = name;
        }
    }
})();
//# sourceMappingURL=main.js.map