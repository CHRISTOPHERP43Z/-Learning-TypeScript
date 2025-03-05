(() => {

    type Avenger = {
        name: string;
        weapon: string
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'Rayo lazer'
    }

    const capAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo De America'
    }

    const hulk: Avenger = {
        name: 'Hulk',
        weapon: 'Super Fuerza'
    }

    const avengers: Avenger[] = [iroman, hulk, capAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
        console.log(iroman.name, hulk.name, capAmerica.name);
        console.log(iroman.weapon, capAmerica.weapon, hulk.weapon);
    }


})()