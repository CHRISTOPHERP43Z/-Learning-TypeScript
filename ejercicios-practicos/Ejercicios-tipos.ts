(() => {

    // 🔹 Boolean, Number y String
    // Declara una variable isActive de tipo boolean y asígnale true.
    let isActive: boolean = true;

    // Declara una variable price de tipo number e inicialízala con 99.99.
    let price: number = 99.99;

    // Declara una variable username de tipo string e inicialízala con tu nombre.
    let userName: string = 'Caps';

    // Crea una función isEven que reciba un number y devuelva boolean.
    const isEven = (numero: number): boolean => {
        return numero % 2 === 0;
    };
    console.log('el numero si puede dividir por 2', isEven(6));

    //Crea una función isMultipleOfThree que reciba un número y devuelva un boolean, indicando si el número es múltiplo de 3.

    const isMultipleOfThree = (numero: number): boolean => {
        return numero % 3 === 0;
    };
    console.log(isMultipleOfThree(15));

    // Crea una función toUpperCase que reciba un string y devuelva el mismo texto en mayúsculas.

    const toUpperCase = (message:string):string => {
        return message.toUpperCase();
    };
    console.log(toUpperCase('dino rapido muy rapido'));
    

    // 🔹 Any, Null y Undefined
    // Declara una variable data de tipo any y asígnale un valor de cualquier tipo.
    let data: any = 13.141592;

    // Declara una variable emptyValue de tipo null.
    let emptyValue: null;

    // Declara una variable notAssigned de tipo undefined.
    let notAssigned: undefined;

    // Crea una función getValueOrNull que retorne un string | null.
    const getValueOrNull = ():string|null => {
        return Math.random() > 0.5? 'Hola caps' : null;
    };
    console.log(getValueOrNull());
    

    // Crea una función findUser que pueda devolver un User | undefined.
    type User = string;
    const findUser = ():User | undefined  => {
        return  Math.random() > 0.2? 'Es un usuario' : undefined;
    };
    console.log(findUser());
    

    // 🔹 Arrays y Tuples
    // Declara un array de numbers llamado ages con valores[25, 30, 35].
    const ages: number[] = [25, 30, 35];

    // Declara un array de strings llamado colors con valores["red", "blue", "green"].
    const colors: string[] = [ 'red','blue','green' ];

    // Crea una función getFirstElement que reciba un array y retorne el primer elemento.
    const getFirstElement = (names:string[]):string => {
        return names[0];
        
    };
    console.log(getFirstElement(['DINO','CAPS','REGALK']));

    const getFirstElement2 = (names:string[]): string | undefined => {
        return names.length > 0 ? names[0] : undefined; 
    }
    console.log(getFirstElement2([]));
    console.log(getFirstElement2(['CAPS','DINO','REGALK']));
    
    // Declara una tupla person con[string, number] representando un nombre y una edad.
    const person: [string, number] = ['CAPS', 19];
    console.log(person);
    
    // Crea una función getPersonInfo que reciba una tupla[string, number] y retorne un string.
    const getPersonInfo = (nameAndAge:[string, number]):string => {
        return `${nameAndAge[0]} tiene ${nameAndAge[1]} años`;
    };
    console.log(getPersonInfo(['christopher', 19]));
    
    // 🔹 Enum y Union Types
    // Declara un enum llamado Role con valores "Admin", "User" y "Guest".
    enum Role {
        admin,
        user,
        guest
    }

    // Declara una variable userRole que solo pueda ser "Admin" | "User" | "Guest".
    let userRole: Role;


    // Crea una función getRolePermissions que reciba un Role y retorne un mensaje según el rol.
    const getRolePermissions = (rol:Role):string => {
        return `Usted tiene rol de:  ${rol}`;
    };
    userRole = Role.admin;
    console.log(getRolePermissions(userRole));
    
    


    // 🔹 Void, Never y Type Assertions
    // Crea una función logMessage que reciba un string y retorne void.
    const logMessage = (message: string): void => { };
    
    // Crea una función throwError que reciba un message: string y retorne never.
    const throwError = (message: string): never => {
        throw new Error(message);
    }


})()