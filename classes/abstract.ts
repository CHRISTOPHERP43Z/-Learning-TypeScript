(() => {
    // clases abstractas no me sirve para crear instancias, es mas como un modelo de lo que quiero que sean las otras clases 
    abstract class Mutante {
        constructor (
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarAlMundo(){
            return 'Mundo a salvo';
        }
    }

    class Villian extends Mutante {
        conquitarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolverine: Xmen = new Xmen('wolverine', 'logan');

    // puede ser de tipo villian o mutante al sert una clase extendida pero si es de tipo mutante no me va a permitir llamar el metodo que tengo en la class villian 
    const magneto: Villian = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarAlMundo());
    // console.log(magneto.conquitarMundo());

    const printName = ( character: Mutante ) => {
        console.log(character.realName);
    }

    // printName(wolverine);
    // printName(magneto);
    
    

})()