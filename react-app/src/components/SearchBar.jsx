import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchBar;

