export function themeComponents() {
  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
      },
    },
    OutlinedInput: {
      defaultProps: {
        variant: "contained",
        size: "small",
      },
    },
  };
}
