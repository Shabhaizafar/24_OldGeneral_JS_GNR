// 2) Multi Level Inheritance : 
/*

Base 1 Class :          A  (Parent class)
                        |
                        |
Base 2 Class :          B (inherit class A)  (parent of class C)
                        |
                        |
Child Class :           C (Inherit class B)

*/

class grandFather{
    constructor(gname){
        this.grandFathername = gname;
    }
    gold(){
        console.log("1000kg Gold");
    }
}

class Father extends grandFather{
    constructor(fname,gname){
        super(gname);
        this.fathername = fname;
    }
    property(){
        console.log("1000viga");
    }
}

class Child extends Father{
    constructor(cname,fname,gname){
        super(fname,gname);
        this.childname=cname;
    }
    candy(){
        console.log("5 Candy");
    }
}





const c1 = new Child("Raj","Rajeshbhai","RakeshBhai");
console.log(c1);

c1.candy();
c1.property();
c1.gold();




// A Vehicle class has a method start().
// A Car class inherits from Vehicle and adds a method drive().
// A SportsCar class inherits from Car and adds a method turboBoost().