import { CustomButton } from "@components/custom-button/CustomButton";
import { CustomFormCheckbox } from "@components/custom-form-checkbox/CustomFormCheckbox";
import { CustomFormInput } from "@components/custom-form-input/CustomFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import { useSignUpMutation } from "@store/apis/auth";
import { showToast } from "@utils/eventEmitter";
import validations from "@utils/validations";
import { Form, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: validations.email,
  password: validations.password,
  firstName: validations.firstName,
  lastName: validations.lastName,
  company: validations.company,
  phone: validations.phone,
  term: validations.fieldRequired,
});

export default function SignUp() {
  const [signUp, { isLoading }] = useSignUpMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, formState } = form;
  const onSubmit = async (data) => {
    const res = await signUp(data);
    console.log("res", res);
    if (res?.data?.user?.id) {
      showToast({
        message: "Signed up successfully",
      });
      navigate("/signin");
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
        <Form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            maxWidth: "415px",
          }}
        >
          <Grid container spacing={1} width={"100%"}>
            <Grid item xs={12}>
              <Typography variant="h4">Sign up</Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomFormInput name="firstName" label="First name*" />
            </Grid>
            <Grid item xs={6}>
              <CustomFormInput name="lastName" label="Last name*" />
            </Grid>
            <Grid item xs={12}>
              <CustomFormInput name="email" label="Work email*" />
            </Grid>
            <Grid item xs={12}>
              <CustomFormInput name="company" label="Company*" />
            </Grid>
            <Grid item xs={12}>
              <CustomFormInput name="phone" label="Phone Number*" type="tel" />
            </Grid>
            <Grid item xs={12}>
              <CustomFormInput
                name="password"
                label="Password*"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomFormCheckbox
                name="term"
                label={
                  <>
                    <Typography
                      variant="body2"
                      lineHeight={1}
                      display={"inline"}
                    >
                      By checking this box, you are confirming you have read and
                      agree to our{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      lineHeight={1}
                      display={"inline"}
                    >
                      Terms & Conditions
                    </Typography>{" "}
                    and{" "}
                    <Typography
                      display={"inline"}
                      color="primary"
                      variant="body2"
                      lineHeight={1}
                    >
                      Privacy Policy
                    </Typography>
                    .
                  </>
                }
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
                title="Sign Up"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography lineHeight={1} display={"inline"}>
                Already a member?{" "}
              </Typography>
              <Typography
                lineHeight={1}
                display={"inline"}
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                })}
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Sign in
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </FormProvider>
    </>
  );
}
