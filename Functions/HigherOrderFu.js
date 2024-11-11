function Main(){
    var choice = prompt("1) 'num' for Number.\n2) 'str' for String.\n\nEnter your Choice : ");
    switch (choice) {
        case 'num': AllNumbers();
            break;
        case 'str': AllStrings();
            break;
        default: console.log("Please Enter Valid Choice !!!");
            break;
    }
}
Main();


function AllNumbers(){
    var n1 = +prompt("Enter the Value of N1: ");
    var n2 = +prompt("Enter the Value of N2: ");
    var choice = prompt("1) '+' for Addition.\n2) '-' for Subtraction.\n\nEnter your Choice : ");
    console.log("Value of N1 : ",n1);
    console.log("Value of N2 : ",n2);
    switch (choice) {
        case '+': Addition(n1,n2);
            break;
        case '-': Subraction(n1,n2);
            break;
        // division,multiplication/modulor
        default: console.log("Please Enter Valid Choice !!!");
            break;
    }
    
}
function AllStrings(){
    console.log("!@");
    //enter Two String 
    // choice : 1) uppercase 2)lowercase 3) concatination
    //             2 : upper     2: lower       2 + concate
}

function Addition(a,b){
    console.log("Addition is : ",a+b);
}
function Subraction(a,b){
    console.log("Subtraction is : ",a-b);
}