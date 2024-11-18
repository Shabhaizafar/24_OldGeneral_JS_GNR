// const Arr = [11,12,13,14,15];
// console.log(Arr);
// - Fill method.
// - changed Actual Data. 

// console.log(Arr.fill("Zafar"));
    //              value  starting-index
// console.log(Arr.fill("Zafar",2));
//                              ending-point
// console.log(Arr.fill("Zafar",2,4));
// console.log(Arr);
/////////////////////////////////////////////////////////
// - Splice method.
// - Effect on Actual Data. 


// console.log(Arr.splice());
// console.log("Deleted Values of Array : ",Arr.splice(2));

                                //starting-index      count 
// console.log("Deleted Values of Array : ",Arr.splice(2,2));

// console.log("Ori : ",Arr);


// delete Arr[2];   ///remove value , space occupie

// console.log(Arr);
//////////////////////////////////////////////
// - Reduce.


// Arr.reduce(function(previousValue,currentValue){
//     console.log("previousValue : ",previousValue,"currentValue : ",currentValue);
//     return currentValue;
// },0);


// var ans = Arr.reduce(function(previousValue,currentValue){
//     return previousValue+currentValue;
// },0);
// console.log(ans);



/////////////////
// Fill : 
// 1) Write a program to create an array with undefined values and use fill() to replace them with a default string.
// var n = 10;
// var Arr = [];
// for (let i = 0; i < n; i++) {
//     Arr[i] = undefined;
// }
// console.log(Arr);
// Arr.fill("Zafar");
// console.log(Arr);

// 2) Create a 2D array (matrix) and use fill() to populate each row with the value 0.
// var n = 3;
// var newArr = [];

// for (let i = 0; i <n; i++) {
//     var temp = [];
//     for (let j = 0; j < n; j++) {
//         temp[j] = `${i}${j}`;
//     }
//     newArr[i] = temp;
// }
// console.log(...newArr);

// for (let i = 0; i < n; i++) {
//     newArr[i].fill(0);
// }
// console.log(...newArr);



// Splice : 

// 3) Using splice(), write a program that reverses the order of elements in an array.

// var Arr = [11,12,13,14,15];
// console.log(Arr);

// console.log(Arr.splice(0).reverse());

// 4) Using splice(), add the value 'apple' at the beginning of an array..
// Arr.unshift("Apple");
// console.log(Arr.splice(0,3));


// reduce : 
// 5) Write a program that finds the longest string in an array of strings using reduce().

// var Arr = ["Royal","Technosoft","pvt","ltd"];
// console.log(Arr);
// console.log(Arr.reduce(function(c,n){
//     if(c.length>n.length)
//         return c;
//     else 
//         return n;
// }));

// 6)Create a program that finds the maximum number in an array using reduce().


// var Arr = [100,30,333,10,400,5];
// console.log(Arr);
// console.log(Arr.reduce(function(c,n){
//     if(c>n)
//         return c;
//     else 
//         return n;
// }));
