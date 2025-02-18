// event bubbling 
// const body = document.body;
// const div = document.querySelector('div');
// const h1 = document.querySelector('h1');

// body.addEventListener('click',function(){
//     console.log("Body !!!!!");
// });

// div.addEventListener('click',function(){
//     console.log("Div !!!!!");
// });

// h1.addEventListener('click',function(){
//     console.log("h1 !!!!!");
// });



// event capturing 
// const body = document.body;
// const div = document.querySelector('div');
// const h1 = document.querySelector('h1');


// body.addEventListener('click',function(){
//     console.log("Body !!!!!");
// },true);

// div.addEventListener('click',function(){
//     console.log("Div !!!!!");
// },true);

// h1.addEventListener('click',function(){
//     console.log("h1 !!!!!");
// });



// const body = document.body;
// const div = document.querySelector('div');
// const h1 = document.querySelector('h1');
// var a = 0;


// body.addEventListener('click',function(){
//     // console.log("Body !!!!!");
//     a = "Body";
// },true);

// div.addEventListener('click',function(){
//     // console.log("Div !!!!!");
//     a = "Div";
// },true);

// h1.addEventListener('click',function(){
//     // console.log("h1 !!!!!");
//     console.log(a);
// });



// event delegation
// const body = document.body;

// body.addEventListener('click',function(event){
//     console.log(event.target);
// });


// table > tr > td > img    : bubbling ,  print
// table > tr > td > img    : capturing , print
// table > tr > td > img    : delegation , target