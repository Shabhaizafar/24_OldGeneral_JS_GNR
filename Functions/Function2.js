// User-defined Function  : 
// Syntax : 
//function declaration /initialization 
// function functionname(){

// }

// function calling : invoked
// functionname(); // invoked 

// 1) Name Function : 
//   i.without arg and without rtn type
//declaration //initialization 
// function sayHello(){
//     console.log("Hello Eveyone,Welcome to Javascript 😀!!! ");
// }

//invoked
// sayHello();

//  ii.with arg and without rtn type
// function Addition(n1,n2){  //n1,n2 is a Parameter
//     console.log(`${n1} + ${n2} : ${n1+n2}`);
// }
// Addition(12,13); // 12,13 Argument

// iii.without arg and with rtn type
// function Addition(){
//     return 12+13; //return statment
// }

// var ans = Addition();
// console.log(ans);

//  vi.with arg and with rtn type
function result(marks){
    if(marks>33){
        return "You have cleared this exam.Give me Party.";
    }
    else{
        return "You haven't cleared this exam.Better luck next time.";
    }
}

var ans = result(5);
console.log(ans);



////
// print 1 to 100 : using without arg without rtn
// check number is prime or Not : using with arg and without rtn
// print "Royal Technosoft p ltd" : using without arg with rtn
// check user is eligable for vating or not  : using with arg with rtn