const SILVER = "#BDC3C7";
const WHITE = "#FFFFFF";
const BLACK = "#0A1929";
const TRANSPARENT = "transparent";
const YELLOW = "#EA9109";

const common = {
  PRIMARY: SILVER,
  TRANSPARENT: TRANSPARENT,
  ICON: YELLOW,
};

const light = {
  ...common,
  BACKGROUND: WHITE,
  TEXT: BLACK,
  TEXT_SECONDARY: WHITE,
};

const dark = {
  ...common,
  BACKGROUND: BLACK,
  TEXT: WHITE,
  TEXT_SECONDARY: BLACK,
};

export const colors = { light, dark };
