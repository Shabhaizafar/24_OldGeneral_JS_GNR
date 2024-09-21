// - Intro to objects. : 

// In a Javascript, object is a collection of key's value's pairs.
// Object : Property,Method(soon)


// How to Create an Empty Object : 
// const obj1  = {};

// console.log(obj1);
// console.log(typeof obj1);


// what is a key,value,Property
var obj1 = {
    // key     value        =   property
     fname : "Raj",
     lname : "Shah"
 };
 
 // How to Print Object Data : 
 console.log(obj1);
 // console.log(typeof obj1);
 
 //How to Access Property Value.
 // // 1) dot notation :    .
 // console.log(obj1.fname);
 // // 2) bracket notation :    []
 // console.log(obj1['fname']);
 
 
 // How to Change/Modify/Update Property Value : 
 // // 1) dot notation :    .
 // obj1.fname = "Ajay";
 // // 2) bracket notation :    []
 // obj1["lname"] = "Patel";
 // console.log(obj1);
 
 
 // How to Add new Property : 
 // // 1) dot notation :    .
 // obj1.Age = 15;
 // // 2) bracket notation :    []
 // obj1["Gender"] = "Male";
 // console.log(obj1);
 
 
 // How to Delete/remove Property :
 // // 1) dot notation :    .
 // delete obj1.fname;
 // // // 2) bracket notation :    []
 // delete obj1['lname'];
 
 // console.log(obj1);
 
 
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