import { CustomFormInput } from "@components/custom-form-input/CustomFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Typography } from "@mui/material";
import validations from "@utils/validations";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: validations.email,
});
export default function ForgotPassword() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, formState } = form;
  const onSubmit = (data) => {
    console.log("onSubmit data", data);
  };

  const navigate = useNavigate();
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            maxWidth: "415px",
          }}
        >
          <Grid container width="100%" spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4">Reset Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomFormInput
                name="email"
                label="Email address*"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                style={{ marginTop: "20px" }}
                disabled={
                  !formState.isValid || !!Object.keys(formState.errors).length
                }
              >
                Send Reset Instructions
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="primary"
                variant="body2"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                })}
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Back to login
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
