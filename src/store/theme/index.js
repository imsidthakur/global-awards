import { createSlice } from "@reduxjs/toolkit";

import { DARK, LIGHT } from "./colors";
import { themeComponents } from "./components";
import { themeTypography } from "./typography";

const createThemeVariable = (mode) => {
  const isDark = mode === "dark";
  const palettes = isDark ? DARK : LIGHT;
  return {
    palette: palettes,
    typography: themeTypography(),
    components: themeComponents(),
  };
};

const initialState = {
  theme: createThemeVariable("light"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getInitialState: (state) => {
      state.theme = createThemeVariable(
        JSON.parse(localStorage.getItem("themeMode")),
        true,
      );
      return state;
    },
    toggleTheme: (state) => {
      return state;
    },
  },
});

export const { toggleTheme, getInitialState } = themeSlice.actions;
export const themeSelector = (state) => state?.theme.theme;

const theme = themeSlice.reducer;
export default theme;
