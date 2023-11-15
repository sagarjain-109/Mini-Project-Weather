const inputbox =  document.querySelector('.input-box');
const button =  document.getElementById('searchbutton');
const weather_image = document.querySelector('.weather-image');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidi = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');

async function checkweather(city){
	const api = "65387c781238a71e4e3d916bee671c2c";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

	const weather_data = await fetch(`${url}`).then(response =>response.json())

	temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C`; 
	humidi.innerHTML = `${weather_data.main.humidity}%`;
	windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;
	description.innerHTML = `${weather_data.weather[0].description}`


	

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_image.src = "/Weather/photos/cloud.png"
			break
		case 'Clear':
			weather_image.src = "/Weather/photos/clear.png"
			break
		case 'Mist':
			weather_image.src = "/Weather/photos/mist.png"
			break
		case 'Rain':
			weather_image.src = "/Weather/photos/rain.png"
			break
		case 'Snow':
			weather_image.src = "/Weather/photos/snow.png"
			break
	}

	console.log(weather_data);
}

button.addEventListener('click' ,()=>{
	checkweather(inputbox.value)
})


