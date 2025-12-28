# Weather App React

A beginner-friendly **Weather App** built with **React** and **Vite**.  
Users can search for a city and view current weather information using the **OpenWeatherMap API**.

---

## Features

- Search weather by city name
- Displays temperature, condition, humidity, and wind speed
- Loading state while fetching data
- Error handling for invalid city names or network issues
- Supports **Enter key** and button click for search
- Responsive design with clean UI

---

## Technologies Used

- **React** (Functional components & hooks)
- **JavaScript (ES6+)**
- **HTML & CSS**
- **Vite** for fast development
- **OpenWeatherMap API** for weather data
- **localStorage** not used (optional if you want to save search history)

---

## Project Structure

```
weather-app-react/
│
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── SearchBox.css
│   │   ├── WeatherCard.jsx
│   │   └── WeatherCard.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── .env.example
```

---

## How to Run Locally

1. **Clone the repository:**

```
git clone https://github.com/rajpatil005/weather-app-react.git
cd weather-app-react
```

2. **Install dependencies:**

```
npm install
```

3. **Create a `.env` file** (copy from `.env.example`) and add your OpenWeatherMap API key:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. **Start the development server:**

```
npm run dev
```

5. Open the browser at the URL provided by Vite (usually `http://localhost:5173/`)

---

## Notes

- The `.env` file is **not pushed to GitHub** for security  
- The app shows **loading state**, **error handling**, and **Enter key support**  
- UI uses **gradient background and cards** for better readability

---

## Contact

If you want to discuss this project or see more of my work:

- **GitHub:** [rajpatil005](https://github.com/rajpatil005)  
- **LinkedIn:** [Rajvardhan Patil](https://www.linkedin.com/in/rajvardhan-patil-06727a300/)
