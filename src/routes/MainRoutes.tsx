import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/Authlayout";

import SignIn from "../pages/Auth/SignIn";
import Authpage from "../pages/Authurpage/Authpage";
import SignUp from "../pages/Auth/SignUp";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
]);
