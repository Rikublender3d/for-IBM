function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    const apiKey = 'Your_api_key';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          throw new Error(data.message || "APIエラー");
        }
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} ℃</p>
          <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('天気情報の取得エラー:', error);
        document.getElementById('weatherInfo').innerHTML =
          `<p>取得に失敗: ${error.message}</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  