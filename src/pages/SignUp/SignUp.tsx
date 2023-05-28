import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  // Must be the same as input attribute name
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        localStorage.setItem("form", JSON.stringify(values));
        action.resetForm();
      },
    });

  return (
    <div className="flex gap-5 justify-around min-h-[calc(100vh-64px)] items-center my-5">
      <div>
        <h2 className="text-5xl">Sign Up</h2>
      </div>
      <div className="w-full max-w-lg p-8 space-y-3 rounded-xl border-2 shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="first_name" className="block text-gray-400">
              First Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="first_name"
              id="first_name"
              placeholder="First name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            {errors.first_name && touched.first_name ? (
              <p className="text-error">{errors.first_name}</p>
            ) : null}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="last_name" className="block text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            {errors.last_name && touched.last_name ? (
              <p className="text-error">{errors.last_name}</p>
            ) : null}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="user_name" className="block text-gray-400">
              User Name
            </label>
            <input
              type="text"
              autoComplete="off"
              name="user_name"
              id="user_name"
              placeholder="User name"
              value={values.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            {errors.user_name && touched.user_name ? (
              <p className="text-error">{errors.user_name}</p>
            ) : null}
          </div>
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
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
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
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            {errors.password && touched.password ? (
              <p className="text-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="confirm_password" className="block text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-error">{errors.confirm_password}</p>
            ) : null}
            <div className="flex justify-end text-xs text-gray-400">
              <button>Forgot Password?</button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold bg-primary hover:bg-violet-500 py-3 rounded-md"
          >
            Sign up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
