const Arr = [11,2,13,1,14];
// const Arr = [11,54,12,36,80,10];
console.log(Arr);
// - Sort.
// console.log(Arr.sort());

// console.log(Arr.sort(function(a,b){
//     return a-b;
// }));
// console.log(Arr.sort(function(a,b){
//     return b-a;
// }));

// - Find.
// var n = 13;
// console.log(Arr.find(function(a){
//     if(a==n){
//         return a;
//     }
// }));


// - Every.
// console.log(Arr.every(function(a){
//     if(a>1){
//         console.log(a);
//         return true;
//     }
// }));


// - Some.
// console.log(Arr.some(function(a){
//     if(a>=13){
//         console.log(a);
//         return true;
//     }
// }));





// - Fill method.
// - Splice method.
// - Reduce.





///////////////////////////////////////////////////////////
// 1. sort() Method:
// Question: You have an array of numbers:
// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Write a function that sorts the array in ascending order without modifying the original array.

// Expected Output: The sorted array: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// 2. find() Method:
// Question: You have an array of objects representing users:

// javascript
// Copy code
// let users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];
// Write a function to find the first user whose age is greater than 28.

// Expected Output: The first user with age > 28: { id: 2, name: 'Bob', age: 30 }

// 3. every() Method:
// Question: You have an array of numbers:
// let numbers = [2, 4, 6, 8, 10];

// Write a function to check if all elements in the array are even numbers using the every() method.

// Expected Output: true (since all numbers are even)

// 4. some() Method:
// Question: You have an array of numbers:
// let numbers = [1, 3, 5, 7, 8, 9];

// Write a function to check if there is at least one even number in the array using the some() method.

// Expected Output: true (since 8 is an even number)