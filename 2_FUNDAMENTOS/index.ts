// 1 - numbers
let x: number = 10;
console.log(x);

x = 17;
console.log(typeof x);

const y: number = 15.873456;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));

// 2 - string
const firstName: string = "Kaline";
console.log(firstName.toUpperCase());

let fullName: string;
const lastName: string = "Kelly";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

// 3 - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);

// 4 - inference e annotation
let ann: string = "Chocolate";
let inf = "Chocolate";

// ann = 1
// inf = 1

console.log("Bolo de Morango");
console.log("Vitor, gostoso");
console.log("amo vitor, e chocolate");