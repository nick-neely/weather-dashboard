import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { useState } from "react";

const WeatherDetail = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (searchLocation: string) => {
    setLocation(searchLocation);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4 w-full">
        <div className="w-1/2">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>{location && <Weather location={location} />}</div>
      </div>
    </div>
  );
};

export default WeatherDetail;
