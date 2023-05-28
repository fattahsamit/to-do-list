import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex gap-5 justify-around min-h-[calc(100vh-64px)] items-center">
      <div>
        <h2 className="text-5xl">Login</h2>
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
        <form className="space-y-6">
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
            <div className="flex justify-end text-xs text-gray-400">
              <button>Forgot Password?</button>
            </div>
          </div>
          <button className="w-full text-white font-semibold bg-primary hover:bg-violet-500  py-3 rounded-md">
            Sign in
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
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
