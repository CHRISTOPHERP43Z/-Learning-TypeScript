"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const cliente = {
        name: 'CAPS',
        age: 19,
        address: {
            id: 1234,
            zip: 'ZYP.ZYP',
            city: 'BUCARAYORK'
        }
    };
    const cliente2 = {
        name: 'DINO',
        age: 19,
        address: {
            id: 1234,
            zip: 'ZYP.ZYP',
            city: 'BUCARAYORK'
        }
    };
    console.log(cliente);
    console.log(`El cliente se llama ${cliente.name} , tiene ${cliente.age} años y su ID es ${cliente.address.id}`);
})();
//# sourceMappingURL=main.js.map