class Father {
    constructor(fname,lname,age){
        this.Fathername = fname;
        this.Lastname = lname;
        this.Age = age;
    }
    // getter
    get getName(){
        console.log(`My name is ${this.Fathername}.`);
    }
    //setter 
    set setName(newname){
        return this.Fathername = newname;
    }
}

const f1 = new Father("Raj","Shah",40);

console.log(f1);

//get Father Name
f1.getName;

//set Father Name 
f1.setName = "Rakesh";
console.log(f1);
f1.getName;

