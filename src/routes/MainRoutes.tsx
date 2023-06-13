import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import Authpage from "../pages/Authurpage/Authpage";
import ProfileLayout from "../components/layout/ProfileLayout";
import Authlayout from "../components/layout/Authlayout";
import Profile from "../pages/ProfilePage/Profile";
import SignUp from "../pages/Auth/SignUp";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Authlayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/AuthurPage",
        element: <Authpage />,
      },
    ],
  },

  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
]);
