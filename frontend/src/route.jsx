import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/aboutPage";
import ProductPage from "./pages/product/ProductPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/logins/LoginPage";
import SignupPage from "./pages/logins/SignupPage";

import DashLogin from "./pages/dashboard/DashLogin";
import NotFoundPage from "./pages/NotFoundPage";
import DashNav from "./components/DashNav";
import AdminAnalytics from "./pages/dashboard/dashPages/AdminAnalytics";
import AdminProduct from "./pages/dashboard/dashPages/AdminProduct";
import AdminOrder from "./pages/dashboard/dashPages/AdminOrder";
import ProductEditPage from "./pages/product/ProductEditPage";
import ProtectedRoute from "./components/common/ProtectedRoute";

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
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
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
    element: (
      <ProtectedRoute>
        <DashNav />
      </ProtectedRoute>
    ),
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
        path: "product/:id",
        element: <ProductEditPage />,
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
