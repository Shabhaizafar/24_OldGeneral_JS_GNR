// - Call , apply and bind method.
    //    - Some warnings.

function All(){
    console.log("Hello");
}
All();


// All.call();
// All.apply();

// var ans =  All.bind();
// ans();


var obj1 =  { 
    fname : "Raj",
    lname : "Shah",
    age : 12,
    bioData : function(hobby1,hobby2){
        console.log(`My name is ${this.fname} ${this.lname}. and my Age is ${this.age}.${hobby1},${hobby2}`);
    }
}
var obj2 =  { 
    fname : "Ajay",
    lname : "Sharma",
    age : 30
}

console.log(obj1);
// obj1.bioData();
console.log(obj2);
// obj2.bioData();

//call : 
var ans3 = obj1.bioData.call(obj1,"Cricket","Football");
obj1.bioData.call(obj2,"Cricket","Football");

//apply : 
obj1.bioData.apply(obj1,["Cricket","Football"]);
obj1.bioData.apply(obj2,["Cricket","Football"]);


//bind : 
var ans1 = obj1.bioData.bind(obj1,"Cricket","Football");
var ans2 = obj1.bioData.bind(obj2,"Cricket","Football");
ans1();
ans2();

