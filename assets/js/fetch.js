document.addEventListener("DOMContentLoaded", function () {
  // Realiza la consulta fetch y muestra el resultado en el div con id "resultado"
  fetchDataAndDisplay();
});

function fetchDataAndDisplay() {
  const url = 'https://api.weatherapi.com/v1/current.json?key=d97f0bedbd2344ff840153722232410&q=Buenos aires&aqi=no';
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
      // Llama a la función displayData para mostrar los resultados
      displayData(data);

      // Mostrar el icono del clima
      const imgElement = document.getElementById('climaIcono');
      imgElement.src = `http:${data.current.condition.icon}`;
  })
  .catch(error => console.error('Error:', error));
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
