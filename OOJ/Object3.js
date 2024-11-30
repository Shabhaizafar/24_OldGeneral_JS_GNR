//Multiple Object
const AllMethods = {
    BioData : function(){
        console.log(`My Name is ${this.firstname} ${this.lastname}.and I'm ${this.Age} Years Old.`);
    },
    is18 : function(){
            (this.Age>18)?console.log(true) : console.log(false);
    }
}

// How to Create an Object Using Function :
function Main(fname,lname,age){
    var User = Object.create(AllMethods);
    User.firstname =fname;
    User.lastname = lname;
    User.Age = age;
    return User;
}

var obj1 = Main("Raj","Shah",13);
console.log(obj1);
obj1.BioData();
obj1.is18();


var obj2 = Main("Ajay","Patel",20);
console.log(obj2);
obj2.BioData();
obj2.is18();

///////////////
// var obj1 = {
//     firstname : "Raj",
//     lastname : "Shah"
// };

// var obj2 = {
//     age : 13
// };
// var obj2 = Object.create(obj1);
// obj2.Age = 13;

// console.log(obj1);
// console.log(obj2);

// console.log(obj1.firstname);
// console.log(obj2.firstname);


