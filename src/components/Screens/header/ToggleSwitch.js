import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Toggle({ onChange, checked }) {
  const handleToggle = () => {
    onChange(!checked);
  };

  return <DarkModeToggle onChange={handleToggle} checked={checked} size={40}/>;
}
