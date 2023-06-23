import React, { useState } from "react";
import {styles} from "./Styles";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SurahList from "../surahContainer/SurahList";
import useThemedStyles from "../../../theming/useThemedStyles";
// import useTheme from "../../../theming/useTheme";

const Header = () => {
  // const theme = useTheme();
  const style = useThemedStyles(styles);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div style={style.container}>
      <Navbar />
      <header>
        <h1 style={style.heading}>ISLAM ENCYCLO</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <SurahList searchQuery={searchQuery} />
    </div>
  );
};

export default Header;
