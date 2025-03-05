
// btn.addEventListener('click',function(){
//     if(typeof(w)=='undefined'){
//         w = new Worker('myWorker.js');
//     }
// });

var w;
const div = document.querySelector('div');

div.addEventListener('click', function (event) {
    if (event.target.innerHTML == 'start') {
        if (typeof (w) == 'undefined') {
            w = new Worker('myWorker.js');
        }
    }
    else if(event.target.innerHTML == 'end'){
        w.terminate();
    }
});