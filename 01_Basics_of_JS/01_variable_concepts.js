const accId = 222141
let accEmail = "abhiske@google.com"
var accPassword = "12345"
accCity = "Jaunpur"  // also a valid only to initialise a string
let accState;

// accountId = 2 // not allowed

accEmail = "abc@xyz.com"
accPassword = "1234"
accCity = "NOida"

console.log(accId);

/*
Prefer not to use var
because of issue in block scope and functional scope
redundancy of declaration
*/

console.table([accId, accEmail, accPassword, accCity, accState]);