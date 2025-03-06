(() => {

    interface Client {
        name: string;
        age?: number;
        address : Address;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const cliente: Client = {
        name: 'CAPS',
        age: 19,
        address: {
            id: 1234,
            zip: 'ZYP.ZYP',
            city: 'BUCARAYORK'
        }
    }

    const cliente2: Client =  {
        name: 'DINO',
        age: 19,
        address: {
            id: 1234,
            zip: 'ZYP.ZYP',
            city: 'BUCARAYORK'
        }
    }

    console.log(cliente);
    console.log(`El cliente se llama ${cliente.name} , tiene ${cliente.age} años y su ID es ${cliente.address.id}`);
    
    

})()