(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado!!!!!!');
        }

        protected getFullName() {
            return ` ${this.name} ${this.realName} `;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super( name, realName  )
            console.log('Constructor Xmen llamdo!!');
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
        }

        get fullName() {
            return ` ${this.name} - ${this.realName} `;
        }

        set fullName( name: string ) {

            if (name.length < 3) {
                throw new Error("Debe ser mayor a 3 caracteres");
            }

            this.name = name;

        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();
    // console.log('////////////////////////////////////////////////////');

    // const nuevoAvenger = new Avenger( 'Iroman', 'Tony Stark');
    // console.log(nuevoAvenger);
    // console.log('////////////////////////////////////////////////////');

    // wolverine.fullName = 'Caps'
    // console.log(wolverine.fullName);
    
    
    
    
    

})()