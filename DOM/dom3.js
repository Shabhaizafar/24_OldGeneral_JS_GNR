// How to change CSS/Style using Js.
var size = 32;


document.querySelector('button').onclick = function (){
    document.querySelector('h1').style.fontSize = `${size+=10}px`;
    document.querySelector('h1').style.color = "yellow";
    document.querySelector('p').style.color = "lime";
}