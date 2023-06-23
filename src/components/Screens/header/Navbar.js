import React from "react";
import { styles } from "./Styles";
import { AiTwotoneHome } from "react-icons/ai";
import useTheme from "../../../theming/useTheme";
import useThemedStyles from "../../../theming/useThemedStyles";
import SettingButton from "../../SettingButton/SettingButton";

const Navbar = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  
  return (
    <nav style={style.navbar}>
      <a href="#home">
        <AiTwotoneHome style={style.navIcons} />
      </a>
      <a href="#settings">
        <SettingButton
          style={style.navIcons}
          onClick={theme.toggleTheme}
          value={theme.isLightTheme}
        />
      </a>
    </nav>
  );
};

export default Navbar;
