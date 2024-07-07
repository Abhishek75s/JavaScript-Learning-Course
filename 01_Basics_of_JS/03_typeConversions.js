let score = "aman"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // passing score to Number class to convert its type to 'number'
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "yes"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false          // empty string will be false, otherwise true
// "yes" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "Ramesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");  //associatiity is left -> right. and priority is given to string in case of stirng and number occurence 
// NOte: '+' operator is overloaded in js for string and number type both

// number + number = will be number
// string + number = string  // number will be automatically converted to string implicitly
// number + string = string 
// string + string = string 

// console.log( (3 + 4) * 5 % 3);  // study operator precedence and its associativity

//------**********-----------*************-----------*********--------*********-------

// console.log(+true);  // 1
// console.log(-true);  // -1
// console.log(+false);  // 0
// console.log(-false);  // -0
// console.log(+"");  // 0   //converts to its integer euivalent if you put '+' or '-' before it.
// console.log(-"");  // -0   //converts to its integer euivalent
// empty string means 0, otherwise 1

// console.log(true+) // not valid syntax, will through some error

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

/*
    a++ = post increment/ use then increment
    ++a = pre increment/ increment then use
*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion   // actual documentation