import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import { useId, useRef } from "react";
import { useFormContext } from "react-hook-form";

export function CustomFormInput({ name, label, hideLabel, ...rest }) {
  const isBlurred = useRef(false);
  const { register, trigger, formState, setValue } = useFormContext();
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
      {!hideLabel && (
        <FormLabel
          htmlFor={id}
          style={{
            marginBottom: 2,
          }}
        >
          {label}
        </FormLabel>
      )}
      <OutlinedInput
        id={id}
        {...rest}
        size="small"
        style={{
          marginTop: 0,
        }}
        onBlur={() => {
          trigger(name);
          isBlurred.current = true;
        }}
        onChange={(e) => {
          setValue(name, e.target.value, {
            shouldValidate: true,
          });
        }}
      />
      {error?.message && (
        <FormHelperText variant="standard" id={`${id}-helper-text`}>
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
