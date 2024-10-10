import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../layout/layout";
import Shop from "../pages/shop";
import Plantcare from "../pages/plantcare";
import Blog from "../pages/blog";
import ShoppingCart from "../pages/shoppingcart";
import Checkout from "../pages/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Outlet />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "plantcare",
        element: <Plantcare />,
      },
      {
        path: "shoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
