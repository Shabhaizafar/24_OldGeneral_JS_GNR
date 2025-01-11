// How to Change CSS using JS : 
// document.querySelector('.click').style.color = "red";

//=>  Event Types :
//-> JavaScript supports a variety of event types. Common categories include:

//1. Mouse Events: click, dblclick, mousemove, mouseover, mouseout
//2. Keyboard Events: keydown, keypress, keyup
//3. Form Events: submit, change, focus, blur
//4. Window Events: load, resize, scroll

// Mouse Events : 

// click : 
// var h1 = document.querySelector('h1');
// h1.onclick = function (){
//     document.querySelector('h1').style.color = "white";
//     document.querySelector('h1').style.backgroundColor = "black";

// }

//----------------------------------
// dblclick : 
// var h2 = document.querySelector('h2');
// h2.ondblclick = function (){
//     document.querySelector('h2').style.color = "gray";
//     document.querySelector('h2').style.backgroundColor = "darkred";
//     console.log("Double Clicked");
// }
// h2.onclick = function(){
//     console.log("Clicked");
// }
//----------------------------------
// mousemove :
// var h3 = document.querySelector('h3');
// h3.onmouseout = function (){
//     h3.style.backgroundColor = "lime";
// }
//-----------------------------------------------
// mouseover :
var h4 = document.querySelector('h4');
h4.onmouseover = function (){
    h4.style.backgroundColor = "purple";
}
h4.onmouseout = function (){
    h4.style.backgroundColor = "lime";
}
//-----------------------------------------------
//  mouseout : 
// var h5 = document.querySelector('h5');
// h5.onmouseout = function (){
//     h5.style.backgroundColor = "lime";
// }




/*
Image : width: 300px /Height : 300px

click : image 1.5        scale(1.5)

dblclick : image 2/3     scale(2,3)



move :   image : 0.5     scale(0.5)

over :   image : 1.2,0.5   scale()

out :  image  : 1.1        scale(1.1)
*/