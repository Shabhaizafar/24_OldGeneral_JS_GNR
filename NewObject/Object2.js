// ✅ Object Destructuring.
// ✅ Nested Destructuring.


// var obj = {
//     fname  : "Raj",
//     lname : "Shah",
//     Age : 12,
//     Address : {
//         city : "GNR",
//         State : "Gujarat",
//         Nation : "India"
//     }
// }

// console.log(obj);

// var {fname : firstname,Address:{city}} = obj;

// console.log(obj.fname);
// console.log(firstname);



// console.log(Address);
// console.log(city);


// ✅ Objects inside Array.
var Arr = [
    {fname :"Raj",lname:"Shah"},
    {fname :"Ajay",lname:"Patel"},
    {fname :"Divya",lname:"S"},
    {fname :"Vijay",lname:"M"},
    {fname :"Shrey",lname:"k"}
];


// console.log(Arr);
// console.log(...Arr);

var i = 1;
for (const element of Arr) {
    console.log(`Object ${i++}`);
    for (const key in element) {
        console.log(key,element[key]);
    }
}



// Here are the practice questions:

// ### 1. **Computed Properties**
// - **a)** Create an object where the key is computed dynamically from a variable, and its value is a string.
// - **b)** Write a function that takes a property name and a value as arguments and returns an object with the computed property.
// - **c)** Using a loop, create an object with computed property keys where the keys are the elements of an array.
// - **d)** How would you dynamically update an existing object's property using a computed property name?

// ### 2. **Spread Operator in Objects**
// - **a)** Create two objects and use the spread operator to combine them into one.
// - **b)** Write a function that takes an object as a parameter and returns a copy of it using the spread operator.
// - **c)** Use the spread operator to update a specific property in an object while keeping the other properties intact.
// - **d)** How would you merge multiple objects with the same keys using the spread operator, keeping the last object's values?

// ### 3. **Object Destructuring**
// - **a)** Given an object with multiple properties, use object destructuring to extract specific properties into variables.
// - **b)** Write a function that takes an object and uses destructuring inside the function parameter to extract its properties.
// - **c)** How would you use default values with object destructuring for missing properties?
// - **d)** Given a nested object, how would you extract a deeply nested property using object destructuring?

