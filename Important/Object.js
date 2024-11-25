// - Object.assign.
// var obj1 = {
//     firstname : "Raj",
//     lastname : "Shah",
//     age : 12
// };
// console.log(obj1);

// Method :  
// create a new object
// concatination 
// target : modification

// var obj2 = Object.assign({});
// var obj2 = Object.assign({},obj1,{"Gender":"Male"});


// console.log(obj2);
// console.log(obj1);

///////////////////////////////////////////////
// - Optional chaining.    : ( ? . )
// var obj1 = {
//     firstname : "Raj",
//     lastname : "Shah",
//     age : 12,
//     // address : {
//     //     city : "GNR",
//     //     state : "Gujarat"
//     // }
// };

// // console.log(obj1);
// // console.log(obj1.firstname);// "Raj"
// // console.log(obj1.Gender);// undefined

// console.log(obj1.address); // un
// // console.log(obj1.address.city); // error


// console.log(obj1?.address?.city); // undefined


/////////////////////////


// const user = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     postalCode: "12345",
//   },
// };


// 1. Write a statement to safely access the user's postal code using optional chaining.
// 2. Modify the object to remove the `address` property, and then attempt to access the postal code using the same statement. What will be the result?
// 3. Extend the object to include a `contact` property with a nested `phone` property. Write a statement to safely access the phone number using optional chaining.
// 4. What happens if you try to access `user.contact.email?.domain` without adding an `email` property? Explain the behavior. 

