import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Styles";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div style={styles.searchbarContainer}>
      <input
        placeholder="Search"
        style={styles.searchStyle}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div>
        <BsSearch style={styles.searchicon} size={13} color="#000" />
      </div>
    </div>
  );
};

export default SearchBar;
