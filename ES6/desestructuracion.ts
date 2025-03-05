(() => {

    type Avengers = {
        dino: string;
        regalk: string;
        age: number;
        isEvil: boolean;
    };

    const avengers: Avengers = {
        dino: 'caps',
        regalk: 'Juan',
        age: 22.121111,
        isEvil: false
    }

    // const { dino, age} = avengers;
    // console.log(dino.toUpperCase(), age.toFixed(2));

    const printAvenger = ({ dino, ...resto}:Avengers) => {
        
        console.log(dino, resto.age);
        
    }
    
    printAvenger(avengers);

    const avengersArr: [string, boolean, number] = ['Caps', true, 19];

    const [dino, rapido, age] = avengersArr;
    console.log({dino, rapido, age});
    


})()