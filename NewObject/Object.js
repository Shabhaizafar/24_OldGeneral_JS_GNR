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
// var obj = { 
//     //key + value       =   property
//     fname : "Raj",
//     lname : "Shah",
//     age : 20,
//     gender : "Male"
// }
// console.log(obj);
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

///////////////////////////////////////////////////////////////////////
// ✅ Dot vs Bracket Notation. : 

// var obj  = {
//     "first name" : "Raj",
//     lname : "Shah",
//     Age : 12
// };
// console.log(obj);
// console.log(obj.Age);
// console.log(obj['Age']);

// console.log(obj.first name);  // error
// console.log(obj["first name"]);  // Valid

// ✅ Iterate objects.

// not Working : 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// while (condition) {

// }

// do {
    
// } while (condition);

// array.forEach(element => {
    
// });

// for (const element of obj) {
//     console.log(element);
// }

// How to Access Property Key : 
// for (const key in obj) {
//     // console.log(key);
//     // console.log(key,obj.key);
//     console.log(key,obj[key]);
// }

// ✅ Computed properties.  : []
// var key1 = "Email";
// var key2 = "Age";
// var value1 = "A@gmail.com";
// var value2 = 13;
// var obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);
// {Email : "A@gmail.com",Age : 13}


// ✅ Spread operator in objects. : 
// var obj1 = {
//     "first name" : "Raj",
//     lname : "Shah",
//     Age : 12
// };
// var obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.Gender = "Male";
// console.log(obj1);
// console.log(obj2);

// var obj2 ={...obj1};
// console.log(obj1);
// console.log(obj2);
// obj2.Gender = "Male";
// console.log(obj1);
// console.log(obj2);

// ✅ Object Destructuring.
// ✅ Objects inside Array.
// ✅ Nested Destructuring.
////////////////////////////////////////////////////////
// 1. **Basic Object Creation and Access:**
//- Create an object `person` with properties `name`, `age`, and `city`. Access and print each property using both dot and bracket notation.

// 2. **Iterating over Object Properties:**
//    - Create an object `car` with properties `brand`, `model`, and `year`. Use a `for...in` loop to iterate over all the properties of the `car` object and print them.

// 3. **Computed Properties and Methods:**
//    - Create an object `user` with a property `username`. Prompt the user for a property name and assign a value using computed property syntax (`user[propertyName] = propertyValue`). Print the updated `user` object.

// 4. **Spread Operator in Objects:**
//    - Create two objects: `person1` with properties `name` and `age`, and `person2` with properties `city` and `country`. Use the spread operator to create a third object `person3` that combines properties from both `person1` and `person2`. Print `person3`.
