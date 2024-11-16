const Arr = [11,12,13,14,15,16,17];
console.log(Arr);

//Function : 
// => Foreach method. : 
// - work as a loop.
// - there are 3 perameters
    // value,index,self Array
// - no return   
// Arr.forEach(
//     function (values,index,selfArr){
//         // console.log(values,index,selfArr);
//     }
// );
///////////////
// => Foreach method : 
console.log("Foreach method : ");
var ans = Arr.forEach(function (values,index,selfArr){
    // console.log(values,index,selfArr);
    if(values>13){
        return values;
    }
});
console.log(ans);
// - map method.
console.log("Map method : ");
// return Same Array : different Value 
var ans2 = Arr.map(function (values,index,selfArr){
    // console.log(values,index,selfArr);
    if(values>13){
        return values;
    }
});
console.log(ans2);


// - Filter.
console.log("Filter method : ");
// filter value return 
var ans3 = Arr.filter(function (values,index,selfArr){
    // console.log(values,index,selfArr);
    if(values>13){
        return values;
    }
});
console.log(ans3);


// console.log(ans);


