import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Community from "../pages/Comunity";
import Support from "../pages/Support";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comunity" element={<Community />}/>
        <Route path="/support" element={<Support />}/>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default Router;
