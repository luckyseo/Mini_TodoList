function onGeoOk(position){
    const lon=position.coords.longitude;
    const lat = position.coords.latitude;
    const API_KEY = "a47f27ccb22df30f1431418ae517dd33";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")

        city.innerText = data.name 
        weather.innerText = `${data.weather[0].main} ${data.main.temp}`
    })
}
function onGeoError(){
    alert("Can't find you. No Weather for You ㅜㅠ")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)