import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter ,RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import FrontendLayout from "./layout/FrontendLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/avgna-live/",
    element:<FrontendLayout /> ,
    children: [
      {
        path: "/avgna-live/",
        index:true,
        element: <Home />,
      },
      {
        path: "/avgna-live/about",
        element: <AboutPage />,
      },
      {
        path: "/avgna-live/services",
        element: <ServicesPage />,
      },
      {
        path: "/avgna-live/contact",
        element: <ContactPage />,
      },
      {
        path: "/avgna-live/*",
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
