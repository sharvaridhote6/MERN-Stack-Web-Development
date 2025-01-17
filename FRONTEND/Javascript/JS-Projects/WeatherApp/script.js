document.addEventListener('DOMContentLoaded', ()=>{
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

    async function fetchData(city){ //gets the data,A JavaScript method to make HTTP requests. Returns a promise that resolves to a Response object.
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
        const response= await fetch(url);
        console.log(typeof response);
        console.log("Response status:", response.status, "Response OK:", response.ok);
        console.log("response",response);
        if(!response.ok){
            throw new Error('City not found');
        }
        const data=await response.json();
        return data
    }

    function displayData(weatherData){ //displays data
        console.log(weatherData);
        const{name, main, weather}=weatherData
        cityName.textContent=name;
        temperature.textContent=`Temperature:${main.temp}`
        description.textContent=`Weather:${weather[0].description}`;

        //unlocking the display
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden");
        
    }

    function showError(){
        console.log(error);
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
})