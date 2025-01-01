
// How to Select Element : 

// 4) using querySelector():

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.heading2'));
// console.log(document.querySelector('p.heading2'));

// console.log(document.querySelector('#heading1'));


// // 5) using querySelectorAll();
// console.log(document.querySelectorAll('h3'));
// console.log(document.querySelectorAll('h3')[0]);
// console.log(document.querySelectorAll('h3')[1]);
// console.log(document.querySelectorAll('.heading2'));
// console.log(document.querySelectorAll('.heading2')[0]);
// console.log(document.querySelectorAll('.heading2')[1]);






// #heading1{

// }

// .heading1{

// }
// h2.heading2{
    
// }

////////////////////////////////
// how to Access Inner Content of Element : 

// innerHTML 
console.log("InnerHTML : ");
console.log(document.querySelector('div').innerHTML);

// innerText
console.log("InnerText : ");
console.log(document.querySelector('div').innerText);

// textContent
console.log("TextContent : ");
console.log(document.querySelector('div').textContent);
