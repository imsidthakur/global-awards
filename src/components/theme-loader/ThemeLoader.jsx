import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSelector } from "@store/theme";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function ThemeLoader(props) {
  const themeState = useSelector(themeSelector);
  const theme = createTheme(themeState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

ThemeLoader.propTypes = {
  children: PropTypes.element,
};
