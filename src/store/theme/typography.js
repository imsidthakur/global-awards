const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`;

export function themeTypography() {
  return {
    htmlFontSize,
    // fontSize: fontSizeCalc(fontSize),
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: pxToRem(96),
      fontFamily: "Inter-Bold",
    },
    h2: {
      fontSize: pxToRem(60),
      fontFamily: "Inter-Light",
    },
    h3: {
      fontSize: pxToRem(48),
      fontFamily: "Inter-Regular",
    },
    h4: {
      fontSize: pxToRem(34),
      fontFamily: "Inter-Bold",
    },
    h5: {
      fontSize: pxToRem(24),
      fontFamily: "Inter-Regular",
    },
    h6: {
      fontSize: pxToRem(20),
      fontFamily: "Inter-Medium",
    },
    subtitle1: {
      fontSize: pxToRem(16),
      fontFamily: "Inter-Regular",
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontFamily: "Inter-Medium",
    },
    body1: {
      fontSize: pxToRem(16),
      fontFamily: "Inter-Regular",
    },
    body2: {
      fontSize: pxToRem(14),
      fontFamily: "Inter-Regular",
    },
    button: {
      fontSize: pxToRem(14),
      fontFamily: "Inter-Medium",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: pxToRem(12),
      fontFamily: "Inter-Regular",
    },
    overline: {
      fontSize: pxToRem(10),
      fontFamily: "Inter-Regular",
      textTransform: "uppercase",
    },
  };
}
