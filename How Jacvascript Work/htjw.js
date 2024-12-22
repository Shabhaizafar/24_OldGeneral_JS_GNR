var a = 12;
function Main(){
    console.log("Main1 a : ",a);  //  un   //   1000
    Inner1();
    var a = 100;
    function Inner1(){
        Inner2();
        a = 1000;
        console.log("Inner 1 A-1 : ",a);  // un         //1000  : ritu
        function Inner2(){
            console.log("Inner 2 A-1 : ",a); //1000   // un : ritu
        }
        console.log("Inner 1 A-2 : ",a);   //1000     //un : krish
    }
    console.log("Main 2 A : ",a); //100  
}
Main();
console.log("Outer A :",a); //12   // 1000 : krish
