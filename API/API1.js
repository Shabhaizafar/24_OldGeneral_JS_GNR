const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var cityInput = "tokyo";
    fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityInput}`).then((data) => {
        data.json().then((data2)=>{
            document.querySelector('img').attributes.src.value = 'https:'+data2.current.condition.icon;
            // console.log(document.querySelector('img').attributes.src.value);
        },()=>{
        console.log("Error");

        });
    }, () => {
        console.log("Error");
    }); //json // promise  => then 2function
});