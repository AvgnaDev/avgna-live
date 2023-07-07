import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import Header from "./layout/Header";
import Home from "./pages/home/Home";
import Footer from "./layout/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
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
    let crumb = location.pathname.split("/")[1];
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
          <Route path="/" element={<FrontendLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Error errMsg="Page not Found" />} />
          </Route>


          {/* Backend ADMIN PANEL Layout */}


          {/* <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Dashboard />}>
            <Route path="/admin-dashboard" element={<ProtectedRoute />}>
              <Route path="home" element={<DashboardHome />} />
              <Route path="our-team" element={<OurTeam />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route
                path="*"
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
