// prototype 
function Main(fname,lname,age){
    var User = Object.create(Main.prototype);
    User.firstname =fname;
    User.lastname = lname;
    User.Age = age;
    return User;
}
Main.prototype = {
        BioData : function(){
            console.log(`My Name is ${this.firstname} ${this.lastname}.and I'm ${this.Age} Years Old.`);
        },
        is18 : function(){
                (this.Age>18)?console.log(true) : console.log(false);
        }
}
var obj1 = Main("Raj","Shah",13);
console.log(obj1);
obj1.BioData();
obj1.is18();
var obj2 = Main("Ajay","Patel",20);
console.log(obj2);
obj2.BioData();
obj2.is18();
