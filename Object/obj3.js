// - Computed properties.     :  [variable name]
// var key1 = "Fname";
// var key2 = "Email";
// var value1 = "Raj";
// var value2 = "z@gmail.com";


// var obj1 = {
//     [key1] : value1,
//     [key2] : value2
// };
// console.log(obj1);

//////////////////////////////////////////////

// How to create a Clone of Object : 
// - Spread operator in objects.   "..."

// var obj1 = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// };
// console.log(obj1);

// var obj2 = {...obj1};

// console.log(obj2);
//////////////////////////////////////////////
// - Object Destructuring.
// var obj1 = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// };

// console.log(obj1);
// console.log(obj1.fname);

// console.log(obj1.lname);


// var {fname:firstname,...newObj} = obj1;

// // console.log(fname);//error
// console.log(firstname);
// console.log(newObj);




/////////////////////////////////////////////
// - Objects inside Array.
// - Nested Destructuring.


/////////////////////////////////////////////

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

