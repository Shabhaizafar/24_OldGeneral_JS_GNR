// function sayHello(){
//     console.log("Hello Everyone!!");
//     sayHello();
// }

// sayHello();


// while(1){
//     console.log("Hello Everyone!!");
// }

// Fact : 5! 5*4*3*2*1 = 120 
// var n=5;
// var fact = 1;

// function factorial(a){
//     if(a<=0)
//         return fact;
//     fact*=a;
//     return factorial(a-1);
// }
// var ans = factorial(n);
// console.log(ans);



// Binary Search : using recurssion 

                                // [13,5,10,15,1]
                                //  0          4
                                //     4+0/2    = 2

                                // [13,5] [10] [15,1]
                                //  0  1                                   
                                // [13][5] [10]  [15][1]
                                // [5][13]  [10]   [1][15]
                                // [5,13]  [10]  [1,15]
                                // [5,10,13] [1,15]
                                // [1,5,10,13,15]