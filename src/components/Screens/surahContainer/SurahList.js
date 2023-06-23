import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { surahsList } from "../../../constants/SurahData";
import { styles } from "./Styles";
// import useTheme from "../../../theming/useTheme";
import useThemedStyles from "../../../theming/useThemedStyles";

const SurahList = ({ searchQuery }) => {
  //  const theme = useTheme();
   const style = useThemedStyles(styles);

  const filteredSurahs = surahsList.filter(
    (surah) =>
      surah.title.toLowerCase().includes(searchQuery) || 
      surah.englishTitle.toLowerCase().includes(searchQuery) ||
      surah.arabicTitle.toLowerCase().includes(searchQuery)

  );

  return (
    <div style={style.container}>
      {filteredSurahs.map((surah) => (
        <div key={surah.surahNo} style={style.itemContainer}>
          <div style={style.titleContainer}>
            <BsPlayCircleFill style={style.icon} />
            <div style={style.title}>
              <p>{surah.title}</p>
              <p style={style.englishTitle}>{surah.englishTitle}</p>
            </div>
          </div>
          <div style={style.arabicTitle}>
            <p>سُوْرَۃُ {surah.arabicTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default  SurahList;
