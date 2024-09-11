import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import { PropTypes } from "prop-types";

export default function TableLayout({ children }) {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%">
        <Paper elevation={1} display="flex" width="100%">
          {children}
        </Paper>
      </Box>
    </Box>
  );
}
TableLayout.propTypes = {
  children: PropTypes.any,
};
