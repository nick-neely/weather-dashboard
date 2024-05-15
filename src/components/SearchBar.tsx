// src/components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <div className="form-control mt-5">
      <div className="join">
        <input
          type="text"
          placeholder="Enter a city or zip code"
          className="input input-bordered bg-base-200 w-full join-item rounded-l-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(input);
            }
          }}
        />
        <button
          className="btn btn-primary px-2 join-item"
          onClick={() => onSearch(input)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
