// ✅ Intro to arrays. : 
// in Other Programming Languages : 
// - Array is a Collection of Multiple Data with Same Datatype.
// - Indexing : starting with 0,1,2,3,....
// in C : 
// int ArrayName[] = {data};

// in a Javascript : 
// - Array is Collection of Multiple Data with Same or Different Datatype.
// - Indexing : starting with 0,1,2,3,....
// - Type of Array : Object
// in JS : 
// var/let/const 
// var Arrayname = [];



//////////////////////////////////////////////////////

// How to Create a Empty Array in a JS ? 
// var Arr = []; //Empty  Array
// console.log(Arr);
// console.log(typeof Arr);

// //Object : Object ,Array,null,Set,Map....

// // how to Check Given Object is an Array or Not ? 

// var obj = {};
// console.log(obj);
// console.log(typeof obj);

// console.log(Array.isArray(Arr));
// console.log(Array.isArray(obj));

//////////////////////////////////////////////////////
// Create an Array with Same Datatype : 
// var Arr1 = [1,2,3,4,5];
// var Arr2 = ["Zafar","Raj"];
// console.log(Arr1);
// console.log(Arr2);
// // Create an Array with Different Datatype : 
// var Arr3 = [1,2,3,4,"Zafar","Raj"];
// console.log(Arr3);

//////////////////////////////////////////////////////
// Basic Methods of Array: 
// ✅ Push pop shift unshift.
// var Arr = [11,12,13,14,15,"Royal","Techno",true,false,12n];
// console.log(Arr);
//1) Push Method :  
// - Add a New Element at the Last Point of Array/Last Index of Array.
// - We cann't Store Added Value in a new Variable.
//Single Value : 
// Arr.push("Zafar");
// console.log(Arr);
// console.log(AddedValue);

//Multi Values
// Arr.push(1000,2000,3000);
// console.log(Arr);



//2) Pop Method : 
// - Remove a Last Element of Array.
// - we cann't Remove a Specific Value.
// - we cann't Remove Multiple Value at a Time.
// - it's Return a Remove Value.
//Single Value : 
// Arr.pop();
// var RemovedValue = Arr.pop();  // store removed value
// console.log(Arr);
// console.log(RemovedValue);


// var Arr = [11,12,13,14,15,"Royal","Techno",true,false,12n];
// console.log(Arr);
//3) Shift Method :
// - Remove a First Element of Array.
// - we cann't Remove a Specific Value.
// - we cann't Remove Multiple Value at a Time.
// - it's Return a Remove Value.
// Arr.shift();
// var RemovedValue = Arr.shift();// store removed Value
// console.log(Arr);
// console.log(RemovedValue);


//4) Unshift Method :
// - Add a New Element at the Starting Point of Array/Zero Index of Array.
// - We cann't Store Added Value in a new Variable.
//Single Value : 
// Arr.unshift(1000);
// console.log(Arr);

//Multi Values
// Arr.unshift(1000,2000,3000);
// console.log(Arr);


//////////////////////////////////////////////////////
// Type of Data in a JS : 
// 1) Number 
// 2) String
// 3) Boolean
// 4) undefined
// 5) function
// 6) Object
// 7) BigInt

//////////////////////////////////////////////////////
// ✅ Primitive vs reference data types.

// In C : 
// Primitive :  int,float,char,double......
// UserDefined : struct,union ....
//----------------------
// In JS: 
// Primitive :
// Number,String,Boolean


// var n1 =12;
// var n2 =n1;
// console.log("Before : ");
// console.log("Value of N1 : ",n1);
// console.log("Value of N2 : ",n2);
// n1++;
// console.log("After : ");
// console.log("Value of N1 : ",n1); //13 
// console.log("Value of N2 : ",n2); //12



// Reference:
// Object,Array.....

// var Arr1 = [1,2,3];
// var Arr2 = Arr1;
// console.log("Before : ");
// console.log("Value of Arr1 : ",Arr1);
// console.log("Value of Arr2 : ",Arr2);
// Arr1.push(100);
// Arr2.push("Royal");
// console.log("Before : ");
// console.log("Value of Arr1 : ",Arr1);
// console.log("Value of Arr2 : ",Arr2);
















//////////////////////////////////////////////////////
// ✅ Clone array & spread operator.
// ✅ For loop.
// ✅ use const for creating arrays.
// ✅ While loop in array.
// ✅ For of loop.
// ✅ For in loop.
// ✅ Array destructuring.