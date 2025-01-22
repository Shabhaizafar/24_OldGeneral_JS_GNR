const div = document.querySelector('div');
var s = "";var count = 0;
var v = 0;
var c = 0;
document.body.onkeypress = function(event){
    if(count<10){
        if(event.key == " "){
            s= " ";
        }else{
            if(event.key == 'a' || event.key == 'A' || event.key == 'e' || event.key == 'E' || event.key == 'i' || event.key == 'I' || event.key == 'o' || event.key == 'O' || event.key == 'u' || event.key == 'U'){
                v++;
            }else if(event.key.charCodeAt()>=64 && event.key.charCodeAt()<=90){
                    c++;
            }else if(event.key.charCodeAt()>=97 && event.key.charCodeAt()<=122){    
                c++;
            }
            div.innerText += s+event.key;
            document.querySelector('.c').innerText = c;
            document.querySelector('.v').innerText = v;
            if(s == " "){
                count++;
            }
            s = "";
        }
    }
    console.log(count);
}