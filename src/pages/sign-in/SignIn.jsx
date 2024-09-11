import { CustomButton } from "@components/custom-button/CustomButton";
import { CustomFormInput } from "@components/custom-form-input/CustomFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "@hooks/useAuth";
import { Typography, Grid } from "@mui/material";
// import { useSignInMutation } from '@store/apis/auth';
import { useSignInMutation } from "@store/apis/auth";
import { showToast } from "@utils/eventEmitter";
import validations from "@utils/validations";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: validations.email,
  password: validations.password,
});
export default function SignIn() {
  const { addAuth } = useAuth();
  const [signin, { isLoading }] = useSignInMutation();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, formState } = form;
  const onSubmit = async (data) => {
    const res = await signin(data);
    if (res?.data?.token) {
      addAuth({
        user: res.data,
        token: res.data.token,
        refToken: res.data.token,
      });
      showToast({
        message: "Logged in successfully",
      });
    } else {
      showToast({
        type: "error",
        message: res?.error?.message || "Something went wrong",
      });
    }
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
              <CustomFormInput
                name="email"
                label="Email address*"
                type="email"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                position: "relative",
              }}
            >
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 10,
                  right: 0,
                  zIndex: 2,
                }}
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </Typography>
              <CustomFormInput
                name="password"
                label="Password*"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton
                style={{ marginTop: "20px" }}
                disabled={
                  !formState.isValid ||
                  !!Object.keys(formState.errors).length ||
                  isLoading
                }
                isLoading={isLoading}
                title="Login"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography lineHeight={1} display={"inline"}>
                Not a member?{" "}
              </Typography>
              <Typography
                lineHeight={1}
                display={"inline"}
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                })}
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign up
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
