// var a = 12;
// let b = 13;
// const c = 14;
// function Main(){
//     console.log("Main 1 : ",a);
//     console.log("Main 1 : ",b);
//     console.log("Main 1 : ",c);
//     var a = 100;
//     b = 300;
//     var c = 200;
//     console.log("Main 2 : ",a);
//     console.log("Main 2 : ",b);
//     console.log("Main 2 : ",c);
//     this.a  = 2000;
//     this.b  = 3000;
//     this.c  = 3000;
// }
// Main();
// console.log("Value of A : ",a);
// console.log("Value of B : ",b);
// console.log("Value of C : ",c);



Main();
console.log("Outer Value of A : ",a);
console.log("Outer Value of B : ",b);
console.log("Outer Value of C : ",c);

var a = 100;
var b = 200;
var c = 300;

function Main(){
    console.log("Main 1 : ",a);
    console.log("Main 1 : ",b);
    console.log("Main 1 : ",c);     
    var a = 1000;
    var b = 2000;
    c = 3000;
    
    console.log("Main 2 : ",a);
    console.log("Main 2 : ",b);
    console.log("Main 2 : ",c);

    this.b = 212;
}


console.log("Value of A : ",a);
console.log("Value of B : ",b);
console.log("Value of C : ",c);