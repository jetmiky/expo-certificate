import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";

// Components
import App from "./App";
import Admin from "./routes/Admin";

const routes = [
  { path: "/", element: <App /> },
  { path: "/admin", element: <Admin /> },
];

const router = createBrowserRouter(routes);
export default router;
