import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/results?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="p-4">
      <input
        type="text"
        placeholder="Search trademarks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-80"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
