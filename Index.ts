let namee: string ='Juan';
let age: number = 12;
let esMayor: boolean = true;
let array: string[] = ['Apple'];

function sayHi (name: string): string {
    return `Hi, ${name}`
}

console.log(sayHi(namee));

//Interfaces

interface User {
    name: string,
    id: number
}

let user: User = {
    name: 'Pedro',
    id: 12
}

class UserAccount {
    name: string;
    id: number;

    constructor(name:string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Andres", 1);

// unions

type myBool = true | false;
const myBoolean: boolean = true;

function getLength(obj: string | string[]){
    return obj.length;
}

//Generics
type StringArray = Array<string>;
let myArray1: StringArray;
let myArray2: StringArray = ['Apple'];

type ObjectWithNameArray = Array<{name: string}>

interface User  {
    name: string,
    id: number
}

const data: User = {
        name: 'spiderman',
        id: 12
}


