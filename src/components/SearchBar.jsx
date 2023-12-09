import { useState } from "react";

const SearchBar = ({ onSearch, searchRef }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="search-form">
      <input
        ref={ searchRef }
        placeholder="Type to search..."
        value={ searchRef?.current?.value ?? '' }
        onChange={ (e) => handleChange(e.target.value) }
      />
    </div>
  );
};

export default SearchBar;
