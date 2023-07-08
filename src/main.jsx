import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter ,RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/avgna-live/",
    element: <App />,
    children: [
      {
        path: "/avgna-live/",
        element: <Home />,
      },
      {
        path: "/avgna-live/about",
        element: <AboutPage />,
      },
      {
        path: "/avgna-live/service",
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
  <React.StrictMode>
        {/* <BrowserRouter>
          <App />
        </BrowserRouter> */}
         <RouterProvider router={router} />
  </React.StrictMode>
);
