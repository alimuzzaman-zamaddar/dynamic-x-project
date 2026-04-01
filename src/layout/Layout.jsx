import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Outlet } from "react-router";
import React, { useEffect } from "react";
import ScrollToTop from "../shared/ScrollToTop ";
import useHashScroll from "../hooks/useHashScroll";
import CookieBanner from "../components/CookieBanner";

const Layout = () => {
  useHashScroll();

  useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev || "auto";
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> {/* Fixed the missing '>' here */}
      <Footer />

      {/* The banner is placed here so it stays on top of all pages */}
      <CookieBanner />
    </>
  );
};

export default Layout;