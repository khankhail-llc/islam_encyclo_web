import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {styles} from "./Styles";
import useThemedStyles from "../../../theming/useThemedStyles";

const SearchBar = ({ onSearch }) => {
const style = useThemedStyles(styles);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div style={style.searchbarContainer}>
      <input
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        style={style.searchStyle}
      />
      <div>
        <BsSearch style={style.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
