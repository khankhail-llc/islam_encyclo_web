import React from "react";
import { styles } from "./Styles";
import { AiTwotoneHome } from "react-icons/ai";
import useTheme from "../../../theming/useTheme";
import useThemedStyles from "../../../theming/useThemedStyles";
import Toggle from "./ToggleSwitch";

const Navbar = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const handleThemeToggle = () => {
    theme.toggleTheme();
  };

  return (
    <nav style={style.navbar}>
      <a href="#home">
        <AiTwotoneHome style={style.navIcons} />
      </a>
      <Toggle onChange={handleThemeToggle} checked={theme.isLightTheme} />
    </nav>
  );
};

export default Navbar;
