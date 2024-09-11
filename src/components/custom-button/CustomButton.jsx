import { Button, CircularProgress } from "@mui/material";

export function CustomButton({
  isLoading,
  title,
  disabled,
  type = "submit",
  ...otherProps
}) {
  return (
    <Button type={type} fullWidth disabled={disabled} {...otherProps}>
      {title}
      {isLoading ? (
        <CircularProgress
          sx={{
            ml: 1,
          }}
          size={14}
        />
      ) : (
        ""
      )}
    </Button>
  );
}
