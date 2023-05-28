import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex gap-5 justify-around min-h-[calc(100vh-64px)] items-center">
      <div>
        <h2 className="text-5xl">Sign Up</h2>
      </div>
      <div className="w-full max-w-lg p-8 space-y-3 rounded-xl border-2 shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary">Signup</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="fname" className="block text-gray-400">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="lname" className="block text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="cpassword" className="block text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm password"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-400 text-gray-500"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <button>Forgot Password?</button>
            </div>
          </div>
          <button className="w-full text-white font-semibold bg-primary hover:bg-violet-500 py-3 rounded-md">
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
