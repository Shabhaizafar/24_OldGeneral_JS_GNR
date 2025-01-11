const btn = document.querySelector('button');
const allimg = ["bulb.png","on.png"]

btn.onclick = function(){
    // console.log(btn.innerHTML);
    // if(btn.innerHTML == "ON"){
    //     document.querySelector('img').attributes[0].value = `${allimg[1]}`;
    //     btn.innerHTML = "OFF";
    // }else if(btn.innerHTML == "OFF"){
    //     document.querySelector('img').attributes[0].value = `${allimg[0]}`;
    //     btn.innerHTML = "ON";
    // }

    console.log(parseInt(Math.random()*5));
}