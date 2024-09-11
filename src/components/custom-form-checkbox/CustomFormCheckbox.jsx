import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

export function CustomFormCheckbox({ name, label }) {
  const { register, formState, setValue } = useFormContext();
  const fieldState = register(name);

  const id = useId();
  const error = formState.errors[name];
  return (
    <FormControl
      error={!!error}
      {...fieldState}
      fullWidth
      hiddenLabel={true}
      sx={{
        mt: 0,
      }}
    >
      <FormControlLabel
        {...fieldState}
        control={<Checkbox />}
        onChange={(ev) => {
          setValue(name, ev.target.checked);
        }}
        label={label}
      />
      {error?.message && (
        <FormHelperText variant="standard" id={`${id}-helper-text`}>
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
