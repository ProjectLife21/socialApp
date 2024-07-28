import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white p-2 rounded-md mt-2 transition-all hover:bg-blue-400"
        >
          Go to Home Page
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <Link to="/">Go to Home Page</Link>
      </div>
    );
  }
};
export default ErrorPage;
