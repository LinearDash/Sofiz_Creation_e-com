import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout/";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashLogin from "./pages/Dashboard/DashLogin";
import NotFoundPage from "./pages/NotFoundPage";

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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashlogin",
        element: <DashLogin />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
