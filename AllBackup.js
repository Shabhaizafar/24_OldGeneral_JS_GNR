// using id  : 
// console.log(document.getElementById('heading'));
// using class  : 
// console.log(document.getElementsByClassName('h1'));
// console.log(document.getElementsByClassName('h1')[0]);
// console.log(document.getElementsByClassName('h1')[1]);


// using element  : 
// console.log(document.getElementsByTagName('h1')[0]);

// using querySelector  : 
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.h1'));
// console.log(document.querySelector('#heading'));



// using querySelectorAll  : 

// console.log(document.querySelectorAll('.h1')[0]);
// console.log(document.querySelectorAll('#heading')[0]);



///
// innerHTML 
// innerText
// textContent

// console.log(document.querySelector('div'));
// console.log(document.querySelector('div').innerHTML);
// console.log(document.querySelector('div').innerText);
// console.log(document.querySelector('div').textContent);



///////////////////////////////
const btn = document.querySelector('button');
// How to Add Style Using JS 
document.querySelector('h1').style.backgroundColor = "red";
var size= 32;
btn.onclick = function(){
    document.querySelector('h1').style.fontSize = `${size}px`;
    size+=10;
}
