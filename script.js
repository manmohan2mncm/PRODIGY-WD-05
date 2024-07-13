const API_KEY="8c7d1cc05af54248a4b90328240303"; // Replace with your WeatherAPI API key

document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function fetchWeather(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    document.getElementById('weatherInfo').classList.remove('hidden');
    document.getElementById('locationName').textContent = data.location.name;
    document.getElementById('weatherDescription').textContent = data.current.condition.text;
    document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
}
