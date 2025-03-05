(() => {

    class Apocalipsis {

        static instace: Apocalipsis;

        private constructor( public name: string ){}

            static callApocalipsis() {
                if ( !Apocalipsis.instace ) {
                    Apocalipsis.instace = new Apocalipsis ('Soy el apocalipsis');
                }

                return Apocalipsis.instace;
            }

            changeName( newName: string ){
                this.name = newName;
            }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName( 'CAPS' )

    console.log(apocalipsis1,apocalipsis2,apocalipsis3);
    

})()