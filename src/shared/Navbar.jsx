import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/home/W.DynamicsX - RED 1.png";

const navMenu = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Chi Siamo",
    path: "/chi-siamo",
  },
  {
    label: "Servizi",
    path: "/",
  },
  {
    label: "Tecnologie",
    path: "/",
  },
  { label: "Materiali", path: "/allmaterials", type: "route" },


  {
    label: "Catalogo",
    path: "/catalog",
  },
  {
    label: "2D to 3D",
    path: "/2d3d",
  },
  {
    label: "Bio stamp 3D",
    path: "/",
  },
  {
    label: "News",
    path: "/",
  },
];

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // const isHome = pathName === "/";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHome = pathName === "/";
  const isDrone = pathName === "/drone";
  const isVintage = pathName === "/vintage";
  const isCatalog = pathName === "/catalog";
  const isFashion = pathName === "/footwear";
  const isJwellery = pathName === "/jwellery";
  const isChiSiamo = pathName === "/chi-siamo";
  const isIndustrial = pathName === "/industrial";
  const isVeterinary = pathName === "/veterinary";
  const isMedicale = pathName === "/medicale-lab";
  const isArchitettura = pathName === "/architettura";

  return (
    <nav
      className={`fixed ease-in-out duration-500 transition-all lg:px-0 px-4 top-0 left-0 w-full z-50 
  ${pathName.includes("/technology-details")
          ? "bg-transparent"
        : isHome || isFashion || isIndustrial || isMedicale || isJwellery || isArchitettura || isVintage || isDrone || isVeterinary || isCatalog || isChiSiamo
            ? scrollY < 200
              ? "bg-transparent"
              : "bg-black"
            : "bg-black"
        }`}
    >
      <div className="max-w-[1440px] mx-auto lg:py-8 py-4 px-4 flex items-center justify-between">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            className=" w-32 2xl:w-40 cursor-pointer h-10 2xl:h-12 object-contain"
            alt="site logo"
          />
        </div>
        {/* navbar desktop */}

        <ul className="hidden 2xl:flex flex-row gap-x-7 2xl:gap-x-8.25 items-center">
          {navMenu.map((nav, idx) => (
            <li key={idx}>
              {nav.type === "scroll" ? (
                <Link
                  smooth
                  duration={500}
                  to={nav.path}
                  className="text-sm xl:text-[15.6px] text-white hover:text-blue-500 capitalize cursor-pointer transition"
                >
                  {nav.label}
                </Link>
              ) : (
                <span
                  onClick={() => navigate(nav.path)}
                  className="text-sm xl:text-[15.6px] text-white hover:text-blue-500 capitalize cursor-pointer transition"
                >
                  {nav.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* navbar mobile */}
        <div
          ref={sidebarRef}
          className={`  fixed 2xl:hidden container flex flex-col items-start gap-y-8 py-6 top-0 left-0 h-full w-[280px] bg-slate-900/70 backdrop-blur-xl border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <img
            src={logo}
            className="w-32 2xl:w-40 h-10 2xl:h-12 object-contain cursor-pointer"
            alt="site logo"
          />

          <ul className="flex flex-col gap-y-4">
            {navMenu.map((nav, idx) => (
              <li key={idx}>
                <Link
                  smooth
                  duration={500}
                  to={nav.path}
                  className=" text-sm xl:text-[15px] text-slate-200  hover:text-primary-black font-medium capitalize cursor-pointer transition-colors duration-300
          "
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className=" flex w-[80%] items-center justify-center text-sm 2xl:text-[15.6px] font-normal leading-[128%] text-white  py-3.5  px-10 2xl:px-[71px] border border-white rounded-full hover:border-transparent cursor-pointer hover:bg-white hover:text-primary-black ease-in-out duration-500 n  ">
            Login
          </button>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative 2xl:hidden w-8 cursor-pointer h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "rotate-45 absolute" : ""
              }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "-rotate-45 absolute" : ""
              }`}
          />
        </button>

        {/* login button */}
        <button className=" hidden 2xl:flex text-sm 2xl:text-[15.6px] font-normal leading-[128%] text-white  py-3.5 w-auto px-10 2xl:px-[71px] border border-white rounded-full hover:border-transparent cursor-pointer hover:bg-white hover:text-primary-black ease-in-out duration-500 n  ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
