document.addEventListener("DOMContentLoaded", async () => {
    try {
      console.log("Fetching location...");
      const position = await getCurrentLocation();
      console.log("Position:", position);
      
      console.log("Fetching weather data...");
      const weatherData = await getWeatherData(position.coords.latitude, position.coords.longitude);
      console.log("Weather Data:", weatherData);
  
      console.log("Displaying weather info...");
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });
  }
  
  async function getWeatherData(latitude, longitude) {
    const apiKey = '51a1570ccc8b61d41f4aecdec8f861cd'; // Reemplaza con tu clave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    return response.json();
  }
  
  function displayWeatherInfo(data) {
    const weatherInfoElement = document.getElementById('weather-info');
    
    if (data && data.main && data.name) {
      const temperature = data.main.temp;
      const city = data.name;
      weatherInfoElement.innerHTML = `Clima en ${city}: ${temperature}°C`;
      console.log("Weather info displayed successfully.");
    } else {
      weatherInfoElement.innerHTML = "Información no disponible";
      console.log("Weather info not available.");
    }
  }
  