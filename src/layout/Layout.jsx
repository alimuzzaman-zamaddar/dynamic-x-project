import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Outlet, ScrollRestoration, Navigate } from "react-router";

const Layout = () => {
  useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev || "auto";
    };
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={location => location.pathname} />
    </>
  );
};

export default Layout;
