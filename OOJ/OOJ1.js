// JS : Object Based Propgraming Language 
//  HTML /CSS / JS  : Object


//1) Object  literal :  {}
var obj1 = {
    Firstname : "Zafar",
    Lastname : "Shabhai"
};
console.log(obj1);

//2) Using Object Constructor : 
var obj2 = new Object();
obj2.Firstname = "Raj";
obj2.Lastname = "Shah";
console.log(obj2);

// 3) Using Object.create() :    //method
var obj3 = Object.create({});
obj3.Firstname = "Dhruv";
obj3.Lastname = "Prajapati";
console.log(obj3);

// 4) Using Object.assign() : 
var obj4 = Object.assign({});
obj4.Firstname = 'Ajay';
obj4.Lastname = "Patel";
console.log(obj4);

// 5) Using Function : 

function Main(){
    var User = {};
    User.Firstname = "Rakesh";
    User.Lastname = "Sharma";
    return User;
}

// var obj5 = Main();

console.log(Main());

