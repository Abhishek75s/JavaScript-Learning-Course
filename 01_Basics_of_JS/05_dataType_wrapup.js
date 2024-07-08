// I. Primitive:
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(`is same: ` + (id === anotherId));  // false, coz symbol creates always a unique value which is of not same in equlaity check
console.log(`is equal: ` + (id == anotherId));  // not the value is same not its type, its totally a unique element now.

// const bigNumber = 3456543576654356754n  

// II. Reference (Non primitive) types

// Array, Objects, Functions

const heros = ["aman", "abhishek", "Srivastava"]; // aman is my nickname :))
let myObj = {
    name: "aman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(`type: ` + typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3