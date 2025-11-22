function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lot').value;
    const apiKey = 'myapikey';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );