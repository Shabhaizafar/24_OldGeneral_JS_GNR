const Arr = [11,12,13,14,15];
console.log(Arr);
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
// 2) Create a 2D array (matrix) and use fill() to populate each row with the value 0.

// Splice : 

// 3) Using splice(), write a program that reverses the order of elements in an array.
// 4) Using splice(), add the value 'apple' at the beginning of an array.


// reduce : 
// 5) Write a program that finds the longest string in an array of strings using reduce().
// 6)Create a program that finds the maximum number in an array using reduce().