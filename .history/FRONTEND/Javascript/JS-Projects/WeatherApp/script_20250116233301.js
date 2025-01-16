document.getElementById('DOMContentLoaded', ()=>{
    const cityInput= document.getElementById("city-input");
    const weatherButton= document.getElementById("get-weather-button");
    const weatherInfo= document.getElementById("weather-info");
    const cityName= document.getElementById("city-name");
    const temperature= document.getElementById("temperature");
    const description= document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const api_key="9adf311b23e052c36c640c60c25c583f";

    weatherButton.addEventListener('click',async ()=>{
        const city= cityInput.value.trim();
        if(!city) return;
        //imp- it may throw an error
        // it takes some time to load since the databases fetching the api's are in another continent
        try {
           const weatherData= await fetchData(city);
           displayData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchData(city){ //gets the data
        const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}`
        const response= await fetch(url);
        console.log(typeof response);
        console.log("response",response);
        if(!response.ok){
            throw new Error('City not found');
        }
        const data=await response.json();
        return data
    }

    function displayData(weatherData){ //displays data
        console.log(data);
        const{name, main, weather}=data
        cityName.textContent=name;
    }

    function showError(){
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
})