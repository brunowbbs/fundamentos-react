import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

const routes = createBrowserRouter([
  { element: <Home />, path: "/" },
  { element: <Details />, path: "/details/:id/:nome" },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
