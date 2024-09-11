import { OutlinedInput, FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useId } from "react";
import { Controller } from "react-hook-form";

const CustomFormSelect = (props) => {
  const id = useId();
  return (
    <FormControl {...props} fullWidth>
      <FormLabel
        htmlFor={id}
        style={{
          marginBottom: 2,
        }}
      >
        {props.label}
      </FormLabel>
      <Controller
        control={props.control}
        render={({ field }) => {
          return (
            <Select
              labelId={id}
              id={id}
              {...field}
              label={props.label || ""}
              input={
                <OutlinedInput
                  size="small"
                  style={{
                    marginTop: 0,
                  }}
                />
              }
            >
              {props.children}
            </Select>
          );
        }}
        name={props.name}
        defaultValue={props.defaultValue}
      />
    </FormControl>
  );
};
export default CustomFormSelect;
