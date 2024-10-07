import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Outlet />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
