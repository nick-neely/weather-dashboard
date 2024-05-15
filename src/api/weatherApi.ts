import axios from "axios";

const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
const GEO_ZIP_API_URL = "http://api.openweathermap.org/geo/1.0/zip";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// Function to get latitude and longitude from location name or zip code
export const geocodeLocation = async (
  location: string
): Promise<{ lat: number; lon: number }> => {
  try {
    let response;

    // Log the input location
    console.log(`Geocoding location: ${location}`);

    if (/^\d{5}$/.test(location)) {
      // Log the request for zip code
      console.log(`Geocoding ZIP: ${location}`);

      response = await axios.get(GEO_ZIP_API_URL, {
        params: {
          zip: location + ",US",
          appid: API_KEY,
        },
      });

      // No need to access the first element with zip code response
      const { lat, lon } = response.data;

      // Additional check to ensure lat and lon are not undefined
      if (typeof lat === "undefined" || typeof lon === "undefined") {
        throw new Error("Location not found");
      }

      return { lat, lon };
    } else {
      // Log the request for city name
      console.log(`Geocoding City: ${location}`);

      response = await axios.get(GEO_API_URL, {
        params: {
          q: location,
          limit: 1,
          appid: API_KEY,
        },
      });

      // Access the first element for city name response
      const { lat, lon } = response.data[0] || {};

      // Additional check to ensure lat and lon are not undefined
      if (typeof lat === "undefined" || typeof lon === "undefined") {
        throw new Error("Location not found");
      }

      return { lat, lon };
    }
  } catch (error) {
    console.error("Error geocoding location:", error);
    throw new Error("Failed to geocode location");
  }
};

// Function to get weather data using latitude and longitude
export const fetchWeather = async (
  lat: number,
  lon: number,
  units: "metric" | "imperial" = "imperial"
): Promise<WeatherData> => {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        lat,
        lon,
        units,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data");
  }
};
