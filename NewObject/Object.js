// ✅ Intro to objects.
// what is an Object ? 
// it's Collection of Properties and Methods.
// Properties : Keys and Values Pair
// Method : specific Functionality //function 


// how to Create an Empty Object : 
// var obj1 = {};
// console.log(obj1);
// console.log(typeof obj1);   


// How to Access Object : 
var obj = { 
    //key + value       =   property
    fname : "Raj",
    lname : "Shah",
    age : 20,
    gender : "Male"
}
console.log(obj);
// console.log(typeof obj);


// How to Access specific Property Value : 
// // 1) dot Notation :    . 
// console.log(obj.fname);
// // 2) Bracket Notation :  []
// // console.log(obj[fname]); // Uncaught ReferenceError: fname is not defined
// console.log(obj['age']);
// console.log(obj["age"]);
// console.log(obj[`age`]);


// How to Modify/Change specific Property Value : 
// // 1) dot Notation :    . 
// obj.fname = "Ajay";
// console.log(obj);
// // 2) Bracket Notation :  []
// obj['age'] = 22;
// console.log(obj);


// How to Add new Property(key+value) : 
// // 1) dot Notation :    . 
// obj.mname = "Rakeshbhai";
// console.log(obj);
// // 2) Bracket Notation :  []
// obj['ContactNo'] = 1234567890;
// console.log(obj);


// How to Delete specific Property(key+value)  : 
// // 1) dot Notation :    . 
// delete obj.fname;
// console.log(obj);
// // 2) Bracket Notation :  []
// delete obj['gender'];
// console.log(obj);


// it's Possible to Delete full Object data ? 
// -> No,it's not Possible.........
// delete obj;
// console.log(obj);
////////////////////////////////////////
/////////////////////////////////////
 
 
 // let car = {
 //     brand: "Toyota",
 //     model: "Camry",
 //     year: 2022,
 //     color: "Silver"
 //   };
 
 
 
 // Print full object: How would you log the entire car object to the console?
 
 // dot notation   bracket notation
 // Access property value: Using dot notation, how do you access the brand of the car?
 
 // Modify property value: If you wanted to update the year of the car to 2023, how would you do it?
 
 // Add new property: What steps would you take to add a mileage property with a value of 15000 to the car object?
 
 // Delete property: How can you remove the color property from the car object?





 //////////////////////////

 //Dhruv
//  How would you log the entire "person" object to the console?

// Using dot notation, how do you access the "name" of the person?

// How would you update the "age" property of the person object from 30 to 31?

// What steps would you take to add an "address" property with a value of "123 Main St" to the person object?


















// ✅ Dot vs Bracket Notation.
// ✅ Iterate objects.
// ✅ Computed properties.
// ✅ Spread operator in objects.
// ✅ Object Destructuring.
// ✅ Objects inside Array.
// ✅ Nested Destructuring.