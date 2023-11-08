const apikey= "2054ea41adc9a8803e7d99be32b1dc3a";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function getWeatherByLocation(city){
    const response= await fetch(apiurl+city +`&appid=${apikey}` );
    let data= await response.json();

 document.getElementById("city").innerText= data.name;

   
    document.getElementById("temp").innerText= Math.round(data.main.temp) + "°C";
    document.getElementById("wind").innerText= data.wind.speed + "km/h";
    document.getElementById('humid').innerText=data.main.humidity + "%";

    let icon= document.getElementById('icon');

    let i= data.weather[0].main;
    

    switch (i){
        case "Clear":
            icon.src="/images/clear.png";
            break;
        case "Clouds":
            icon.src='/images/clouds.png';
            break;
        case "Rain":
            icon.src="/images/rain.png";
            break;
        case "mist":
            icon.src="/images/mist.png";
            break;
        case "Snow":
            icon.src="/images/snow.png";
            break;
        case "drizzle":
            icon.src="/images/drizzle.png";
            break;
        default:
            break;
     }

  
    

    
}
document.querySelector('button').addEventListener('click', () =>{
    let city= document.querySelector('input').value;

    getWeatherByLocation(city);
});
