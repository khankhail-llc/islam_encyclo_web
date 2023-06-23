// eslint-disable-next-line
import React, { useState,useRef } from "react";
import useTheme from "../../theming/useTheme";
import useThemedStyles from "../../theming/useThemedStyles";
import { AiFillSetting } from "react-icons/ai";
import { styles } from "./Styles";
import Toggle from "../Screens/header/ToggleSwitch";

const SettingButton = () => {
  
  const theme = useTheme();
  const style = useThemedStyles(styles);

  let currentTheme = ""
  if (theme.isLightTheme) {
    currentTheme = 'Light'
  } else {
    currentTheme = 'Dark'
  }

  const handleThemeToggle = () => {
    theme.toggleTheme();
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <AiFillSetting style={style.button} onClick={handleDropdownToggle} />
      {isDropdownOpen && (
        <div style={style.menuList} ref={dropdownRef}>
          <div style={style.menuListUl}>
            <div style={style.listItem}>Theme : {currentTheme}</div>
            <div style={style.themeToggleContainer}>
              Change :
              <div style={style.toggle}>
                <Toggle
                  onChange={handleThemeToggle}
                  checked={theme.isLightTheme}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingButton;
