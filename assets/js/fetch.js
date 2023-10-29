document.addEventListener("DOMContentLoaded", function () {
  // Obtiene la geolocalización y luego realiza la consulta fetch
  getLocationAndFetchData();
});

function getLocationAndFetchData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Obtiene la latitud y longitud del navegador
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Realiza la consulta fetch con la latitud y longitud
        fetchDataAndDisplay(latitude, longitude);
      },
      function (error) {
        console.error("Error getting location:", error);
        // Si hay un error al obtener la geolocalización, puedes manejarlo aquí
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function fetchDataAndDisplay(latitude, longitude) {
  const url = `https://api.weatherapi.com/v1/current.json?key=d97f0bedbd2344ff840153722232410&q=${latitude},${longitude}&aqi=no`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Llama a la función displayData para mostrar los resultados
      displayData(data);

      // Mostrar el icono del clima
      const imgElement = document.getElementById('climaIcono');
      imgElement.src = `http:${data.current.condition.icon}`;
    })
    .catch((error) => console.error('Error:', error));
}
function displayData(data) {
  // Accede al div por su id
  const resultadoDiv = document.getElementById('resultado');

  // Construye el contenido HTML con los datos del JSON
  const htmlContent = `
      <h2>Ubicación</h2>
      <ul>
          <li><strong>Nombre:</strong> ${data.location.name}</li>
      </ul>
      <ul>
          <li><strong>Última Actualización:</strong> ${data.current.last_updated}</li>
          <li><strong>Temperatura (C):</strong> ${data.current.temp_c}</li>
      </ul>
  `;

  // Inserta el contenido HTML en el div
  resultadoDiv.innerHTML = htmlContent;
}
