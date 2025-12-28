import "./SearchBox.css";
function SearchBox({
  city,
  setCity,
  setWeather,
  setLoading,
  setError,
  loading,
}) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  console.log("API KEY:", API_KEY);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather({
        name: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (error) {
      setWeather(null);
      setError("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !loading) {
            fetchWeather();
          }
        }}
      />

      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBox;
