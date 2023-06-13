import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { surahsList } from "../../../constants/SurahData";
import { styles } from "./Styles";

const   SurahList = ({ searchQuery }) => {
  const filteredSurahs = surahsList.filter(
    (surah) =>
      surah.title.toLowerCase().includes(searchQuery) || 
      surah.englishTitle.toLowerCase().includes(searchQuery) ||
      surah.arabicTitle.toLowerCase().includes(searchQuery)

  );

  return (
    <>
      <div style={styles.container}>
        {filteredSurahs.map((surah) => (
          <div key={surah.surahNo} style={styles.itemContainer}>
            <div style={styles.tittleContainer}>
              <BsPlayCircleFill style={styles.icon} size={20} />
              <div style={styles.title}>
                <p>{surah.title}</p>
                <p style={styles.englishTitle}>{surah.englishTitle}</p>
              </div>
            </div>
            <div style={styles.arabicTitle}>
              <p>{surah.arabicTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default  SurahList;
