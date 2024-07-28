import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout

// pages
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ErrorPage,
} from "./pages";
import { MainLayout } from "./layouts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile/:profileId",
      element: (
        <MainLayout>
          <ProfilePage />
        </MainLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
