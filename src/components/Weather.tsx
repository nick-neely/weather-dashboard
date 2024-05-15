import { useState, useEffect } from "react";
import { geocodeLocation, fetchWeather } from "../api/weatherApi";
import { iconMapping } from "../assets/icons";

interface WeatherData {
  name: string; // City name
  sys: {
    country: string; // Country code
  };
  main: {
    temp: number; // Temperature
    feels_like: number; // Feels like temperature
    humidity: number; // Humidity
  };
  weather: [
    {
      description: string; // Weather condition description
      icon: string; // Weather condition icon ID
    }
  ];
  wind: {
    speed: number; // Wind speed
  };
}

const Weather = ({ location }: { location: string }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location) {
      const loadWeather = async () => {
        try {
          const { lat, lon } = await geocodeLocation(location);
          const weather = await fetchWeather(lat, lon, "imperial");
          setWeatherData(weather);
        } catch (e) {
          setError("Failed to fetch weather data");
          console.error(e);
        }
      };

      loadWeather();
    }
  }, [location]);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData)
    return (
      <div>
        <span className="loading loading-dots loading-lg mt-10"></span>
      </div>
    );

  const WeatherIcon = weatherData && iconMapping[weatherData.weather[0].icon];

  // Check if the location and current properties exist before trying to access them
  return (
    <div className="card glass w-full md:w-96 bg-neutral shadow-xl mx-auto my-10">
      <div className="card-body text-center">
        {weatherData ? (
          <>
            <h2 className="card-title text-3xl">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div className="flex flex-col items-center justify-center">
              {WeatherIcon && <WeatherIcon />}
              <p className="badge badge-neutral badge-lg py-4">
                {weatherData.weather[0].description}
              </p>
              <div className="text-xl mt-2">
                <p>
                  <strong>Temperature:</strong>{" "}
                  {Math.round(weatherData.main.temp)}°F
                </p>
                <p>
                  <strong>Feels Like:</strong>{" "}
                  {Math.round(weatherData.main.feels_like)}°F
                </p>
                <p>
                  <strong>Humidity:</strong> {weatherData.main.humidity}%
                </p>
                <p>
                  <strong>Wind: </strong> {Math.round(weatherData.wind.speed)}{" "}
                  mph
                </p>
              </div>
            </div>
          </>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
