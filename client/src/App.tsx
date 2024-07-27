import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { HomePage, LoginPage, ProfilePage, RegisterPage } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
