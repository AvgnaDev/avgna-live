import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import Header from "./layout/Header";
import Home from "./pages/home/Home";
import Footer from "./layout/Footer";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ContactPage from "./pages/contact/ContactPage";
import Login from "./pages/login/Login";
import Spinner from "./Spinner";
import Error from "./pages/Error";
import Dashboard from "./pages/dashboard/Dashboard";
import OurTeam from "./pages/dashboard/OurTeam";
import FrontendLayout from "./layout/FrontendLayout";
import DashboardView from "./components/Dashboard/DashboardHeader";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import Services from "./pages/dashboard/Services";
import About from "./pages/dashboard/About";
import { RecoilRoot } from "recoil";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  let location = useLocation();
  const [adminLogin, setAdminLogin] = useState(false);
  useEffect(() => {
    let crumb = location.pathname.split("/")[2];
    if (crumb === "admin-login" || crumb === "admin-dashboard") {
      setAdminLogin(true);
    }
  }, [adminLogin]);

  return (
    <>
      <RecoilRoot>
        {/* <Suspense fallback={<Spinner />}>
        {!adminLogin && (
          <> */}
        {/* <Header /> */}

        <Routes>
          {/* <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Error />} /> */}



          <Route path="/avgna-live/" element={<FrontendLayout />}>
            <Route path="/avgna-live/" element={<Home />} />
            <Route path="/avgna-live/about" element={<AboutPage />} />
            <Route path="/avgna-live/services" element={<ServicesPage />} />
            <Route path="/avgna-live/contact" element={<ContactPage />} />
            <Route path="/avgna-live/*" element={<Error errMsg="Page not Found" />} />
          </Route>

          <Outlet />
          {/* Backend ADMIN PANEL Layout */}


          {/* <Route path="/avgna-live/admin-login" element={<Login />} />
          <Route path="/avgna-live/admin-dashboard" element={<Dashboard />}>
            <Route path="/avgna-live/admin-dashboard" element={<ProtectedRoute />}>
              <Route path="/avgna-live/admin-dashboard/home" element={<DashboardHome />} />
              <Route path="/avgna-live/admin-dashboard/our-team" element={<OurTeam />} />
              <Route path="/avgna-live/admin-dashboard/about" element={<About />} />
              <Route path="/avgna-live/admin-dashboard/services" element={<Services />} />
              <Route
                path="/avgna-live/admin-dashboard/*"
                element={<Error errMsg="Something went worng!" />}
              />
            </Route>
          </Route> */}

          
        </Routes>


        {/* <Footer /> */}
        {/* </>
        )}
      </Suspense> */}
        {/* <Routes>
      </Routes> */}
      </RecoilRoot>
    </>
  );
}

export default App;
