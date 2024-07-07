// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
    the working of comparision and equality(==) works differently in js
    may produce some unexpected outputs
*/

// === (strict comparision, which considers the data type also)

console.log("2" === 2);  // false, data type is not same
console.log("2" == 2);  // true, checks the values only, which will be printed on console