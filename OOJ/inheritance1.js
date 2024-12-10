// 1) Single Level Inheritance : 
/*
Base class :         A     parent class
                     |
                     |
                     |
                     |
Child Class:         B      Child class   (inherit class A)
*/

// parent Class :
// class Father{
//     constructor(fathername){
//         this.fathername = fathername;
//     }
//     Lastname = "Shah";
// }
// // Child Class :
// class Child extends Father{
//     constructor(Childname,fathername){
//         super(fathername);
//         this.Childname = Childname;
//     }
//     bioData(){
//         console.log(`My Full name is ${this.Childname} ${this.fathername} ${this.Lastname}.`);
//     }
// }

// const child1 = new Child("Raj","RakeshBhai");
// console.log(child1);
// child1.bioData();

// const f = new Father("Ajay");
// console.log(f);
// f.bioData();




/*
company class 
        company name 
        portfolio >  _____________________


employee inherit company 
        name
        salary 
        position

        description  method > 
                my name is _______. and i'm ______ of ____cmpnyname_____.our company _portfolio__.

obj > name,salary,postion,com........
*/ 


// 2) Multi Level Inheritance : 