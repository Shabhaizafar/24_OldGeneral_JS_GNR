const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET","onOff.html");

    xhttp.onload = function(data){
        document.querySelector('div').innerText = data.target.response;
    }

    xhttp.send();
});