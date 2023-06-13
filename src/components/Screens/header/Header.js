import React, { useState } from "react";
import styles from "./Styles";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SurahList from "../surahContainer/SurahList";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <header>
        <h1 style={styles.heading}>ISLAM ENCYCLO</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <SurahList searchQuery={searchQuery}/>
    </div>
  );
};

export default Header;
