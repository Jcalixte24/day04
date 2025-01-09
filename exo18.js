const ville = "Abidjan";
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=5.3600&longitude=-4.0083&hourly=temperature_2m`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {A
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const temperature = data.hourly.temperature_2m[0]; // This example gets the first hour's temperature
    console.log(`la temperature a abidjan est : ${ville}: ${temperature}°C`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
