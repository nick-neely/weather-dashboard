import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import background from "../assets/background-3.png";

const Home = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (searchLocation: string) => {
    setLocation(searchLocation);
  };

  return (
    <div>
      {/* Hero section */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to ClimaSync</h1>
            <p className="mb-5">
              Get synchronized with the climate. Enter a location to get the
              current weather updates.
            </p>
            <SearchBar onSearch={handleSearch} />
            {location && <Weather location={location} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
