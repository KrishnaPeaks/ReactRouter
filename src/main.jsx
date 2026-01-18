import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./components/Home.jsx/Home";
import About from "./components/About.jsx/About";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },{
      path:"about",
      element:<About/>
    }]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router = {router}/>
);
