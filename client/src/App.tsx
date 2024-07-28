import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import { MainLayout, AuthLayout } from "./layouts";

// pages
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ErrorPage,
} from "./pages";

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
    {
      path: "/login",
      element: (
        <AuthLayout>
          <LoginPage />
        </AuthLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthLayout>
          <RegisterPage />
        </AuthLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
