(() => {
     
    // class Avenger {
    //     private name: string = 'scott lang';
    //     private team: string;
    //     public realName?: string;
    //     static avgAge: number = 35;

    //     constructor ( name: string, team: string, realName?: string ) {
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }
    // }

    // const antman: Avenger = new Avenger('Antam', 'Capi')
    // console.log(antman);
    // console.log(Avenger.avgAge); //para acceder a la propiedad statica

    class Avenger {

        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor ( 
        private name: string,
        private team: string,
        public realName: string 
    ) {}

    bio() {
        return `${ this.name } (${ this.team })`;
    }

    }

    const iroman = new Avenger ('IroMan', 'Tony', 'Tony Stark')
    // console.log(iroman);
    // console.log(Avenger.avgAge);

    // console.log(iroman.bio());
    // console.log(Avenger.getAvgAge());
    
    
    
    
    
        
    

})()