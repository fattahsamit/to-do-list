import { Link } from "react-router-dom";

const Home = () => {
  const storedLoginData = localStorage.getItem("login");
  const loginData = storedLoginData ? JSON.parse(storedLoginData) : null;

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] m-5">
      <section className="max-w-sm flex flex-col items-center gap-5 p-20 border rounded-full shadow-lg text-3xl font-bold text-neutral">
        <h2 className="text-5xl">Hello!</h2>
        {loginData ? (
          <h2>{loginData.email}</h2>
        ) : (
          <p className="text-xl font-normal text-slate-400">
            Dear user, please login in order to gain access to your
          </p>
        )}
        <Link
          to="/app"
          className="w-fit mx-auto px-8 py-3 font-semibold rounded-md text-white shadow-lg bg-primary hover:bg-violet-500"
        >
          Todo
        </Link>
      </section>
    </div>
  );
};

export default Home;
