// this.a = 12;
// this.b = 13;
// var c = 14;
// function Main(){
//     Inner();
//     console.log("Main 1 : A",a);
//     console.log("Main 2 : B",b);
//     console.log("Main 3 : C",c);
//     function Inner(){
//         console.log("inner 1 : A",a);
//         console.log("inner 2 : B",b);
//         console.log("inner 3 : C",c);
//         var a = 100;
//         var b = 200;
//         c = 300;
//     }
// }
// Main();
// console.log(window);


const a = 13;
this.b = 100;

function Main(){
    console.log("Main 1 : A",a);
    console.log("Main 2 : B",b);
    function Inner(){
        console.log("inner 1 : A",a);
        this.a = 300;
        console.log("inner 1 : A",a);
        var a = 1000;
        console.log("inner 1 : A",a);
        console.log("Main 2 : B",b);

    }
    console.log("Main 2 : A",a);
}

Main();