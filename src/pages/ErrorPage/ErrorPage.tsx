import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <section className="min-h-screen flex items-center h-full p-16 bg-gray-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">404</h2>
          <p className="text-2xl mb-12 font-semibold">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-md text-white bg-primary hover:bg-violet-500"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
}
