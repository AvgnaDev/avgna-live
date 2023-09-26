import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import FrontendLayout from "./layout/FrontendLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<FrontendLayout /> ,
    children: [
      {
        path: "/",
        index:true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/*",
        element: <Error errMsg="Page not Found"  />,
      },
    ],
  },
]);


  ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    //     <BrowserRouter>
    //       <App />
    //     </BrowserRouter>
      
    <RouterProvider router={router} />
       
  // {/* </React.StrictMode> */}
);
