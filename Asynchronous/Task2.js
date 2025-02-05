const box1 = document.querySelector('.box1');const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
var v1 = 25;var v2 = 25;var id;
box1.onclick  = function (){
    clearInterval(id);
    id = setInterval(() => {
        v1+=10;
        document.querySelector('main').style.top = `calc(50vh - ${v1}px)`;
    }, 1000);
}
box2.onclick  = function (){
    console.log("wert");
}
box3.onclick  = function (){
    console.log("wert");
}
box4.onclick  = function (){
    clearInterval(id);
    id = setInterval(() => {
        v2+=10;
        document.querySelector('main').style.left = `calc(50vw + ${v2}px)`;
    }, 1000);
}
box5.onclick  = function (){
    console.log("wert");
}