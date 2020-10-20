import React from "react";
import "./search-bar.css";

export default function SearchBar({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
