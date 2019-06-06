import React from "react";
import "./searchbar.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
