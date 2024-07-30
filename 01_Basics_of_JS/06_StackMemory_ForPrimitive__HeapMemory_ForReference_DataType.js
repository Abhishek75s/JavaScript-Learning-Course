// reference data types are: Array, Object, Function

// stack gives a copy of the value, changes made in copy variable will not reflect in original variablen (ex: let)
// while heap gives a reference of value, changes made in copy variable will also change original variable(ex: object)

/*-------------- #UNDERSTANDING STACK MEMORY -------------*/

    let originalVar = "Aman";
    let copyVar = originalVar;
    copyVar = "Abhishek";

    console.log(originalVar);  // Aman
    console.log(copyVar);    //  Abhishek

/*-------------- #UNDERSTANDING HEAP MEMORY --------------*/

    let obj1 = {
        name: "Aman",
        age: 20        
    };

    let obj2 = obj1;   // reference is passed

    obj2.name = "Abhishek";     
    obj2.age = 32;

    console.log(obj1.name);  // Abhishek
    console.log(obj1.age);  // 32
    console.log(obj2.name);  // Abhishek
    console.log(obj2.age);  // 32