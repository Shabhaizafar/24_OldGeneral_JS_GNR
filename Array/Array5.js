// - Array destructuring : 

//  destructuring :

var Arr1 = [
    [78,88,99],
    [44,55,66],
    [87,90,99],
    [99,99,100]
];
// console.log(Arr1);
// for (const values of Arr1) {
//     console.log(values);
// }

// console.log(Arr1[0]);
// var s1 = Arr1[0];
// var s2 = Arr1[1];
// console.log(s1); //[78, 88, 99]
// console.log(s2); // [44, 55, 66]


var [,s1,...remaining] = Arr1;
console.log(s1);//[78, 88, 99]
// console.log(s2);//[44, 55, 66]
// console.log(remaining);

// console.log(...remaining);
