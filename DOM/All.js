// How to Access Class and add or remove using JS : 
const btn = document.querySelector('button');

btn.onclick = function (){
    var allclass = document.querySelector('h1').classList;
    if(!allclass.contains('newOne')){
        document.querySelector('h1').classList.add("newOne");
    }else if(allclass.contains('newOne')){
        document.querySelector('h1').classList.remove("newOne");
    }
}