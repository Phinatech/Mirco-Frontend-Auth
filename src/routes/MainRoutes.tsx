import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/Authlayout";

import SignIn from "../pages/SignIn";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
]);
