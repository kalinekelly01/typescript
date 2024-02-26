// 1 - arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

const nomes: string[] = ["Helena", "Hazel"];
console.log(nomes);

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("bola");
console.log(nums[0]);

// 3 - any
const arr1: any = [1, "bolo", true, [],];
console.log(arr1);

// 4 - parametro tipados
function soma(a: number, b: number) {
    console.log(a + b);
};

soma(4, 5);

// 5 retorno da função
function greeting(name: string): string {
    return `Olá ${name}`
};
console.log(greeting("Kaline"));

// 6 - funções anonimas
setTimeout(function() {
    const sallary: number = 1000;
   // console.log(sallary);
},2000);

// 7 - tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
const objCoord = {x: 329, y: 83.9};

passCoordinates(objCoord);

const passoaObj: {nome: string, surname: string} = {nome: "Helena", surname: "Hazel"};

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if(c) {
        console.log("C: " + c);
    }
};
showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - valiidando argumento opcional
function advanceGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
      return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
};
console.log(advanceGreeting("João", "Vitor"));
console.log(advanceGreeting("Luke"));

// 10 - union type 
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`);
};
showBalance(100);
showBalance("500");

// 11 - mais de union type 
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado";
    };
    return `A função do usuário é: ${role}`;
};
console.log(showUserRole(false));
console.log(showUserRole("admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
    console.log(`O ID é: ${id}`);
};
showId(1);
showId("200");

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
};

function showCoords(obj: Point) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
};

const coordObj: Point = {
 x: 10,
 y: 23,
 z: 50
};
showCoords(coordObj);

// 14 - interface x type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {
    name: "Kaline", age: 21
}
console.log(somePerson);

// Não tem como modificar o type alias.

// 15 - literal types
function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`);
};
showDirection("center");

// 16 non-null assertion operator
const p = document.getElementById("some-p");

console.log(p!.innerText);

// 17 - bigint
let n: bigint

n = 1000n

console.log(n);
console.log(typeof n);
console.log(n + 100n);

// 18 - symbol
let symbolA: symbol  = Symbol("a");
let symbolB: symbol  = Symbol("b");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

