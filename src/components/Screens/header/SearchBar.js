import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {styles} from "./Styles";
import useThemedStyles from "../../../theming/useThemedStyles";
// import useTheme from "../../../theming/useTheme";

const SearchBar = ({ onSearch }) => {
  // const theme = useTheme();
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
        style={{ ...style.searchStyle, "::placeholder": { color: "red" } }}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div>
        <BsSearch style={style.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
