var obj = {
    "first name" : "Raj",
    // firstname : "Raj",
    lastname : "Shah",
    Age : 24
};
console.log(obj);
//    - Dot vs Bracket Notation.

// console.log(obj.firstname);
// console.log(obj['firstname']);

// console.log(obj.lastname);  //error
// console.log(obj['first name']);
// console.log(obj["first name"]);


//    - Iterate objects.
// basic for loop (not working)
// for (let index = 0; index < obj.length; index++) {
//     console.log(index);
// }

// while loop (not working)


// do-while loop (not working)
// foreach (not working)

// for of ((not working))
// for (const element of obj) {
//     console.log(element);
// }

//for in
// for (const key in obj) {
//     // console.log(obj.key);   // undefined
//     console.log(obj[key]);   //right
// }

/////////////////////////////
// Dot vs Bracket Notation
// Accessing Properties

// Question: Create an object car with properties make, model, and year. Use both dot notation and bracket notation to access and print each property.


// Basic Iteration with for...in

// Question: Write a for...in loop to iterate over the properties of an object person with properties name, age, and city, and print each property’s name and value.