// const SUN_FLOWER = "#f1c40f";
// const ASBESTOS = "#7f8c8d";
// const MIDNIGHT_BLUE = "#2c3e50";
const EMERALD = "#2ecc71";
const ALIZARIN = "#e74c3c";
const CLOUDS = "#ecf0f1";
const SILVER = "#bdc3c7";
const WHITE = "#FFFFFF";
const BLACK = "#0A1929";
// const BLACK = "#090909";
const TRANSPARENT = "transparent";
const YELLOW = "#EA9109";

const common = {
  PRIMARY: SILVER,
  SUCCESS: EMERALD,
  ERROR: ALIZARIN,
  // SEARCH: BLACK,
  TRANSPARENT: TRANSPARENT,
 HEADER : YELLOW
};

const light = {
  ...common,
  BACKGROUND: WHITE,
  TEXT: BLACK,
  TEXT_SECONDARY: WHITE,
  ICON: YELLOW,
  HEADER_ITEMS: CLOUDS,
};

const dark = {
  ...common,
  BACKGROUND: BLACK,
  TEXT: WHITE,
  TEXT_SECONDARY: BLACK,
  ICON: YELLOW,
  HEADER_ITEMS: CLOUDS,
};

export const colors = { light, dark };
