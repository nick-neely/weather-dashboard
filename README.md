# ClimaSync

ClimaSync is a weather application that provides current weather updates based on the location entered by the user. It's built with TypeScript and React, and uses the OpenWeatherMap API for fetching weather data.

## Features

- Search for weather by city or zip code
- Display current weather conditions including temperature, humidity, and wind speed
- Animated weather icons that reflect the current weather condition
- Responsive design that works on various screen sizes

## Project Structure

- `src/api/`: Contains the API configuration and functions for fetching weather data
- `src/assets/`: Contains static assets like images and animated weather icons
- `src/components/`: Contains reusable React components like `SearchBar`, `Weather`, `NavBar`, etc.
- `src/pages/`: Contains page components like `Home`, `About`, `WeatherDetail`, etc.
- `src/router.tsx`: Defines the routing for the application

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Open `http://localhost:3000` in your browser

## Environment Variables

You need to set the following environment variables in a `.env` file:

- `VITE_OPENWEATHERMAP_API_KEY`: Your OpenWeatherMap API key

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Please note that this is a basic README and you might want to add more details like screenshots, code examples, testing instructions, etc.
