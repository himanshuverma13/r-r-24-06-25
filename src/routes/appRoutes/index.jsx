import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../../pages/auth/login";
// import NotFound from "../pages/NotFound";
import LoginOtp from "../../pages/auth/loginOtp";
import Registration from "../../pages/auth/registration";
import Product from "../../pages/auth/product";
import Home from '../../pages/home/home';

// import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginOtp" element={<LoginOtp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/subscription" element={<Product />} />
        <Route path="/home" element={<Home />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
