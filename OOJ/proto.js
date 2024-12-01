// const obj1 = {
//     firstname : "Raj",
//     lastname : "Shah"
// };
// const obj2 = {
//     Age : 23
// };

// console.log("Obj 1 : ",obj1);
// console.log("Obj 2 : ",obj2);


// console.log(obj1.firstname);
// console.log(obj2.firstname);   //Undefined
/////////////////////////////////
const obj1 = {
    firstname : "Raj",
    lastname : "Shah"
};
const obj2 = Object.create(obj1);

obj2.bark = function(){
    
};
console.log("Obj 1 : ",obj1);
console.log("Obj 2 : ",obj2);
// console.log(obj1.firstname);
// console.log(obj2.firstname);   //Undefined


// proto :   empty space   : Object  ; empty Object {}


// [[Prototype]] == proto

// How to Access Proto : 

// Syntax : __proto__ :   {}

// console.log(obj2.__proto__);


// Note :  Proto : always available with object

