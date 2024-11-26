//Single Object
// How to Create an Object Using Function :
function Main(){
    var User = {};
    User.firstname ="Raj";
    User.lastname = "Shah";
    User.Age = 13;
    User.BioData = function(){
        console.log(`My Name is ${User.firstname} ${User.lastname}.and I'm ${User.Age} Years Old.`);
    }

    return User;
}

var obj1 = Main();

console.log(obj1);
obj1.BioData();


