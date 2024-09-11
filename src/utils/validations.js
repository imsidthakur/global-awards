import * as yup from "yup";

const validations = {
  password: yup
    .string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .required("Password is required")
    .matches(
      "^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{8,20})$",
      "Password must be between 8 to 20 characters and contain at least 1 lowercase, 1 uppercase,1 number, and 1 special character",
    ),
  email: yup
    .string()
    .email("Provide a valid email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Provide a valid email",
    )
    .required("Email is required"),
  firstName: yup
    .string()
    .matches(/\S/, "First name must not contain only empty spaces")
    .max(50, "First name should not be more than 50 characters")
    .matches(/^\S.*\S$/, "First name must not start or end with whitespace")
    .test(
      "is-one-word",
      "First name cannot contain multiple words",
      (value) => !value || value.split(/\s+/).length === 1,
    )
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/\S/, "Last name must not contain only empty spaces")
    .max(50, "Last name should not be more than 50 characters")
    .matches(/^\S.*\S$/, "Last name must not start or end with whitespace")
    .test(
      "is-one-word",
      "Last name cannot contain multiple words",
      (value) => !value || value.split(/\s+/).length === 1,
    )
    .required("Last name is required"),
  company: yup
    .string()
    .matches(/^\S.*\S$/, "Company name must not start or end with whitespace")
    .required("Company name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .test(
      "not-all-zeros",
      "Phone must be non zero.",
      (value) => value !== "0000000000",
    )
    .required("Phone number is required"),
  fieldRequired: yup
    .boolean()
    .test("is-true", "This field is required.", (value) => value === true),
  code: yup
    .string()
    .matches(/^[0-9]{6}$/, "code must be a 6-digit number")
    .required("code is required"),
};
export default validations;
