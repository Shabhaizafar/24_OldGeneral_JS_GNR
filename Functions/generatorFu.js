// Generator Function : 
// Syntax : 
/*
valid method :
1) function * functionname(){

}

2) function* functionname(){

}

3) function *functionname(){

}

4) function*functionname(){

}
*/

function *Generatorfu(){
    yield "Hello,Everyone !!";
    yield "Welcome to Javascript !!";
    yield "Have a Good Day.";
    yield "Bye Bye";
}

var functionrunner = Generatorfu();

// next method  :   

// console.log(functionrunner.next().value); //Hello,Everyone !!
// console.log(functionrunner.next().value); //Welcome to Javascript !!
// console.log(functionrunner.next().value); //Have a Good Day.
// console.log(functionrunner.next().value); //Bye Bye
// console.log(functionrunner.next().value); //undefined


// console.log(functionrunner.next());
// console.log(functionrunner.next());
// console.log(functionrunner.next());
// console.log(functionrunner.next());
// console.log(functionrunner.next());



// Create a generator that yields the characters of a given string one by one.


// "Zafar"
// Z
// a
// f 
// a 
// r 
