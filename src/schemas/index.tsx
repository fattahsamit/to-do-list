import * as Yup from "yup";

export const signUpSchema = Yup.object({
  first_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your last name"),
  user_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Password must match"),
  // .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});
