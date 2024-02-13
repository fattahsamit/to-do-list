import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        // Check if the userdata is in localstorage
        const storedSignupData = localStorage.getItem("signup");
        if (storedSignupData) {
          const signupData = JSON.parse(storedSignupData);
          if (
            values.email === signupData.email &&
            values.password === signupData.password
          ) {
            console.log("Login successful");
            localStorage.setItem("login", JSON.stringify(values));
          } else {
            console.log("Login not successful");
          }
        } else {
          console.log("Signup data not found in localstorage");
        }

        action.resetForm();
      },
    });

  return (
    <div className="flex justify-center min-h-[calc(100vh-64px)] items-center mx-5">
      <div className="w-full max-w-lg p-8 space-y-3 rounded-xl border-2 dark:border-primary shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              E-mail
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500 dark:text-slate-100 dark:border-primary dark:bg-gray-800"
            />
            {errors.email && touched.email ? (
              <p className="text-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500 dark:text-slate-100 dark:border-primary dark:bg-gray-800"
            />
            {errors.password && touched.password ? (
              <p className="text-error">{errors.password}</p>
            ) : null}
            {/* <div className="flex justify-end text-xs text-gray-400">
              <button>Forgot Password?</button>
            </div> */}
          </div>
          <button
            type="submit"
            className="w-full text-white text-lg font-semibold bg-primary hover:bg-violet-500  py-3 rounded-md"
          >
            Log in
          </button>
        </form>

        <p className="text-center sm:px-6 text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
