import React from "react";

import "./search-box.styles.css";

//functional component doesn't have access to state or lifecycle methods
//no constructor,so no state
//gets props, and can just render HTML
export const SearchBox = ({ placeholder, handleChange}) => (
  <input
    size = '100'
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
