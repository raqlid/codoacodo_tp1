document.addEventListener("DOMContentLoaded", async () => {
    try {
      const position = await getCurrentLocation();
      const weatherData = await getWeatherData(position.coords.latitude, position.coords.longitude);
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
    const temperature = data.main.temp;
    const city = data.name;
  
    const weatherInfoElement = document.getElementById('weather-info');
    weatherInfoElement.innerHTML = `Clima en ${city}: ${temperature}°C`;
  }
  