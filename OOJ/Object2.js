//Multiple Object
// How to Create an Object Using Function :
function Main(fname,lname,age){
    var User = {};
    User.firstname =fname;
    User.lastname = lname;
    User.Age = age;
    User.BioData = function(){
        console.log(`My Name is ${User.firstname} ${User.lastname}.and I'm ${User.Age} Years Old.`);
    }
    User.is18 = function(){
            (User.Age>18)?console.log(true) : console.log(false);
    }
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


