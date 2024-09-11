import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import { newEvent } from "@utils/eventEmitter";
import { useCallback, useEffect, useState } from "react";

export default function CustomizedSnackbar() {
  const [snackData, setSnackData] = useState([]);

  const handleSnackData = useCallback((data) => {
    setSnackData((prev) => [
      { open: true, type: "success", ...data, id: Math.random() },
      ...prev,
    ]);
  }, []);

  useEffect(() => {
    newEvent.on("showToast", handleSnackData);
    return () => {
      newEvent.off("showToast", handleSnackData);
    };
  }, [handleSnackData]);

  const handleClick = useCallback((id) => {
    setSnackData((prevSnackData) =>
      prevSnackData.filter((item) => item.id !== id),
    );
  }, []);

  return (
    <Grid
      position="fixed"
      zIndex={3000}
      display="flex"
      flexDirection="column"
      top={10}
      right={10}
    >
      {snackData?.map((snack) => (
        <Box key={snack?.id} sx={{ position: "relative" }} mb={7}>
          <Snackbar
            open={snack?.open}
            autoHideDuration={snack?.duration ?? 5000}
            onClose={(_, reason) => {
              if (reason === "clickaway") {
                return;
              }
              setSnackData((prevSnackData) =>
                prevSnackData.filter((item) => item.id !== snack?.id),
              );
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              position: "absolute",
            }}
          >
            <Alert
              variant="filled"
              key={snack?.id}
              onClose={() => handleClick(snack?.id)}
              sx={{
                color: "#fff",
                width: "fit-content",
                textWrap: "nowrap",
                minWidth: "250px",
              }}
              severity={snack?.type ?? "error"}
            >
              {snack?.message || "Something went wrong"}
            </Alert>
          </Snackbar>
        </Box>
      ))}
    </Grid>
  );
}
