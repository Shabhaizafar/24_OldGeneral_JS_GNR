const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var heading = prompt('Enter the heading : ');
    var url = prompt('Enter the URL : ');
    var content = prompt('Enter the content : ');

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET","xhttps2.html");
    xhttp.onload = function(){
        var h1 = document.createElement('h1');
        var img = document.createElement('img');
        var p = document.createElement('p');
        h1.innerHTML = heading;
        img.attributes.src = url;
        console.log(img.attributes.src);
        p.innerHTML = content; 

        document.querySelector('div').appendChild(h1);
        document.querySelector('div').appendChild(img);
        document.querySelector('div').appendChild(p);


    }

    xhttp.send();
});