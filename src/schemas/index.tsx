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
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Password must match"),
  // .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export const todoSchema = Yup.object({
  todo: Yup.string().min(2).max(30).required("Please add your todo"),
});
