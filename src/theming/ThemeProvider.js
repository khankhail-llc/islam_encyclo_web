import React, { useState } from "react";
import { colors } from "../colors/colors";
import { typography } from "../colors/typography";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);
  const toggleTheme = () => setLightTheme((previousState) => !previousState);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    toggleTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
