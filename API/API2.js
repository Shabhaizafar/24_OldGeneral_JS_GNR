const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    fetch(`https://restcountries.com/v3.1/name/${document.querySelector('input').value}`).then((response)=>{  
        response.json().then((data)=>{
            document.body.style.backgroundImage = `url(${data[0].flags.svg})`;
        },()=>{
            console.log("Error");
        });
    },()=>{
        console.log("Reject");
    });
});



/*
    fetch("API URL")
        return Promise 


        fetch("API URL").then(success,reject);

        success ,reject : Anonymouse Function


        fetch("API URL").then(()=>{successcode},()=>{rejectcode});

*/