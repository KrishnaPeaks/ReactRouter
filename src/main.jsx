import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([])
ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router = {router}/>
);
