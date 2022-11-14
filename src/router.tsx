import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";

// Components
import App from "./App";

const routes = [{ path: "/", element: <App /> }];

const router = createBrowserRouter(routes);
export default router;
