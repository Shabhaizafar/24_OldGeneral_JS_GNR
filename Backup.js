const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    
    // How to Create a XHTTPREQUEST Object

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET","Javascript.txt");

    xhttp.onload = function(data){
        document.querySelector('div').innerHTML =  data.target.response;
    }

    xhttp.send();
});