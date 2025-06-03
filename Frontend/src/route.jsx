import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout/";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";

import DashLogin from "./pages/Dashboard/DashLogin";
import NotFoundPage from "./pages/NotFoundPage";
import DashNav from "./components/DashNav";
import AdminAnalytics from "./pages/Dashboard/DashPages/AdminAnalytics";
import AdminProduct from "./pages/Dashboard/DashPages/AdminProduct";
import AdminOrder from "./pages/Dashboard/DashPages/AdminOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/dashlogin",
        element: <DashLogin />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashNav />,
    children: [
      {
        path: "",
        element: <AdminAnalytics />,
      },
      {
        path: "product",
        element: <AdminProduct />,
      },
      {
        path: "order",
        element: <AdminOrder />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
