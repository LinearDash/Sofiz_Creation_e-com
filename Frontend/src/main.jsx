import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/layout/layout.jsx";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import ProductDetailPage from "./pages/Product/ProductDetailPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashLogin from "./pages/Dashboard/DashLogin.jsx";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
