import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router";
import logo from "../assets/img/home/W.DynamicsX - RED 1.png";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

const navMenu = [
  {
    label: "Shop",
    path: "/product",
  },
  {
    label: "Chi Siamo",
    path: "/chi-siamo",
  },
  {
    label: "Categorie",
    hash: "categorie",
    path: "/",
    dropdown: [
      { label: "Droni & Componenti", path: "/drone" },
      { label: "Automotive d’epoca & Parti rare", path: "/vintage" },
      { label: "Yacht & Componenti", path: "/yacht" },
      { label: "Medicale Lab & Biotech", path: "/medicale-lab" },
      { label: "Dime & Componenti Industriali", path: "/industrial" },
      { label: "Architettura", path: "/architettura" },
      { label: "Supporti Veterinari", path: "/veterinary" },
      { label: "Gioielleria", path: "/jwellery" },
      { label: "Fashion", path: "/footwear" },
      { label: "Prototipi & Prodotti Custom", path: "/prototyping" },
    ],
  },
  {
    label: "Tecnologie",
    hash: "technologies",
    path: "/",
    dropdown: [
      { label: "FDM", path: "/stampa" },
      { label: "SLA", path: "/stampasla" },
      { label: "SLS", path: "/stampasls" },
    ],
  },
  {
    label: "Servizi",
    path: "/",
    hash: "services",
  },
  {
    label: "Materiali",
    path: "/allmaterials",
  },
  {
    label: "2D To 3D",
    path: "/2d3d",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const pathName = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { totalCount } = useCart();
  const { user, loading, logout } = useAuth();
  const { showToast } = useToast();
  const [scrollY, setScrollY] = useState(0);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/auth/logout`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
        });
      } catch (err) {
        console.error("Logout API failed", err);
      }
    }
    logout();
    setIsOpen(false);
    navigate('/');
    showToast("Logged out successfully", "success");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handles internal fallback transitions for complex hash links
  const handleHashNavigation = (e, nav) => {
    e.preventDefault();
    if (pathName !== nav.path) {
      navigate(nav.path);
      setTimeout(() => {
        document
          .getElementById(nav.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(nav.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const transparentRoutes = [
    "/", "/drone", "/vintage", "/catalog", "/footwear", "/jwellery",
    "/chi-siamo", "/industrial", "/veterinary", "/medicale-lab", "/architettura"
  ];

  const isTransparentBg = pathName.includes("/technology-details") ||
    (transparentRoutes.includes(pathName) && scrollY < 200);

  return (
    <nav className={`fixed ease-in-out duration-500 transition-all px-4 top-0 left-0 w-full z-50 ${isTransparentBg ? "bg-transparent" : "bg-black"}`}>
      <div className="container mx-auto lg:py-8 py-4 flex items-center justify-between">
        <div className="flex gap-x-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src={logo}
              className="w-32 2xl:w-40 cursor-pointer h-10 2xl:h-12 object-contain"
              alt="site logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden 2xl:flex flex-row gap-x-7 2xl:gap-x-8.25 items-center">
            {navMenu.map((nav, idx) => (
              <li key={idx} className="relative group">
                {nav.dropdown ? (
                  <>
                    <Link
                      to={`${nav.path}#${nav.hash}`}
                      onClick={(e) => handleHashNavigation(e, nav)}
                      className="text-sm xl:text-[15.6px] text-white hover:text-blue-500 capitalize cursor-pointer transition flex items-center gap-1"
                    >
                      {nav.label}
                      <span className="text-xs mt-px">▼</span>
                    </Link>

                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="min-w-45 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl py-2">
                        {nav.dropdown.map((item, subIdx) => (
                          <Link
                            key={subIdx}
                            to={item.path}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:text-blue-500 hover:bg-white/5 cursor-pointer transition text-nowrap"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : nav.hash ? (
                  <Link
                    to={`${nav.path}#${nav.hash}`}
                    onClick={(e) => handleHashNavigation(e, nav)}
                    className="text-sm xl:text-[15.6px] text-white hover:text-blue-500 capitalize cursor-pointer transition"
                  >
                    {nav.label}
                  </Link>
                ) : (
                  <Link
                    to={nav.path}
                    className="text-sm xl:text-[15.6px] text-white hover:text-blue-500 capitalize cursor-pointer transition"
                  >
                    {nav.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed 2xl:hidden container flex flex-col items-start gap-y-8 py-6 top-0 left-0 h-full w-70 bg-slate-900/70 backdrop-blur-xl border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              className="w-32 2xl:w-40 h-10 2xl:h-12 object-contain cursor-pointer"
              alt="site logo"
            />
          </Link>

          <ul className="flex flex-col gap-y-4 w-full">
            {navMenu.map((nav, idx) => (
              <li key={idx} className="w-full">
                {nav.dropdown ? (
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to={`${nav.path}#${nav.hash}`}
                        onClick={(e) => handleHashNavigation(e, nav)}
                        className="text-sm xl:text-[15px] text-slate-200 hover:text-white font-medium capitalize cursor-pointer transition-colors duration-300 text-left"
                      >
                        {nav.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen(prev => !prev)}
                        className="text-slate-200 text-xs px-2 py-1 bg-transparent border-none focus:outline-none"
                      >
                        {mobileDropdownOpen ? "▲" : "▼"}
                      </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-100 mt-2" : "max-h-0"}`}>
                      <div className="ml-4 flex flex-col gap-y-3 border-l border-white/10 pl-4">
                        {nav.dropdown.map((item, subIdx) => (
                          <Link
                            key={subIdx}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className="text-sm text-slate-300 hover:text-white font-medium cursor-pointer transition-colors duration-300 text-left w-full"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={nav.hash ? `${nav.path}#${nav.hash}` : nav.path}
                    onClick={(e) => nav.hash && handleHashNavigation(e, nav)}
                    className="text-sm xl:text-[15px] text-slate-200 hover:text-white font-medium capitalize cursor-pointer transition-colors duration-300 text-left w-full"
                  >
                    {nav.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Authentication Area */}
          {loading ? (
            <div className="w-[80%] h-12 bg-white/10 animate-pulse rounded-full ml-5" />
          ) : user ? (
            <div className="w-full px-5 border-t border-white/10 pt-5 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="text-white w-6 h-6" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white font-medium truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user.email}</p>
                </div>
              </div>
              <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 cursor-pointer bg-transparent border-none focus:outline-none">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <div className="w-[80%] ml-5 flex flex-col gap-2 items-center">
              <Link
                to="/auth/login"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center text-sm font-normal leading-[128%] text-white py-3.5 px-10 border border-white rounded-full hover:border-transparent cursor-pointer hover:bg-white hover:text-black ease-in-out duration-500 text-center"
              >
                Login
              </Link>
              <Link
                to="/auth/login"
                onClick={() => setIsOpen(false)}
                className="text-xs text-slate-400 hover:text-white underline transition cursor-pointer mt-1"
              >
                Non hai un account? Registrati
              </Link>
            </div>
          )}
        </div>

        {/* Global Right Action Items (Cart & Hamburger) */}
        <div className="flex 2xl:hidden items-center gap-3">
          <Link
            to="/dashboard/cart"
            className="relative p-2 text-white hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-4.5 h-4.5 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full px-1 leading-none shadow-md">
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 cursor-pointer h-8 flex flex-col justify-center items-center gap-1.5 bg-transparent border-none focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "rotate-45 absolute" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? "-rotate-45 absolute" : ""}`} />
          </button>
        </div>

        {/* Desktop Authentication Buttons & User Profile Menu */}
        <div className="hidden 2xl:flex items-center gap-4">
          <Link
            to="/dashboard/cart"
            className="relative p-2 text-white hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-4.5 h-4.5 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full px-1 leading-none shadow-md">
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            )}
          </Link>

          {loading ? (
            <div className="w-11 h-11 rounded-full bg-white/10 animate-pulse"></div>
          ) : user ? (
            <div className="relative group flex items-center">
              <Link to="/dashboard/profile" className="w-11 h-11 rounded-full border-2 border-white/20 overflow-hidden cursor-pointer hover:border-white transition-colors bg-white/10 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="text-white w-5 h-5" />
                )}
              </Link>
              <div className="absolute top-full right-0 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="min-w-45 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl py-2 flex flex-col">
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <p className="text-sm text-white font-medium truncate">{user.name}</p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 cursor-pointer transition bg-transparent border-none focus:outline-none">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link to="/auth/login" className="text-sm 2xl:text-[15.6px] font-normal leading-[128%] text-white py-3.5 w-auto px-10 border border-white rounded-full hover:border-transparent cursor-pointer hover:bg-white hover:text-black ease-in-out duration-500 flex items-center justify-center">
                Login
              </Link>
              <Link to="/auth/login" className="text-sm 2xl:text-[15.6px] font-normal leading-[128%] hover:text-white py-3.5 w-auto px-10 border border-white rounded-full cursor-pointer bg-white hover:bg-transparent text-black ease-in-out duration-500 flex items-center justify-center">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;