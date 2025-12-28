import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>🌡 Temperature: {weather.temp} °C</p>
      <p>☁ Condition: {weather.condition}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind} m/s</p>
    </div>
  );
}

export default WeatherCard;
