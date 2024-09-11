export const primaryColor = {
  500: "#9747FF",
  contrastText: "#FFFFFF",
};

export const secondaryColor = {
  200: "#03DAC5",
  300: "#87F789",
  500: "#01A299",
  600: "#019592",
  700: "#018786",
  800: "#017374",
  900: "#146715",
  contrastText: "#000000",
};

const colors = {
  primary: { ...primaryColor, main: primaryColor[500] },
  secondary: { ...secondaryColor, main: secondaryColor[500] },
  surface: "#FFFFFF",
  error: {
    main: "#B00020",
    contrastText: "#000000",
  },
  background: {
    default: "#F6F9FD",
  },
};
export const LIGHT = colors;

export const DARK = colors;
