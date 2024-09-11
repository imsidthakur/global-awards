import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LazyComponent = ({ Component }) => {
  return (
    <React.Suspense
      fallback={
        <Box
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      }
    >
      <Component />
    </React.Suspense>
  );
};

export default LazyComponent;
