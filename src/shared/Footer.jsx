import React from "react";
import logo from "../assets/img/home/W.DynamicsX - RED 1.png";
import { useLocation, useNavigate } from "react-router";

// Socials and contact
const socialFooterNav = [
  {
    title: "Socials",
    items: [
      {
        label: "Instagram",
        redirectLink: "https://www.instagram.com/dynamicsx_/",
      },
      {
        label: "LinkedIn",
        redirectLink: "https://www.linkedin.com/company/dynamicsx3d/",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        label: "xeniabat@gmail.com",
        redirectLink: "mailto:xeniabat@gmail.com",
      },
    ],
  },
];

// Main nav links (top-level only)
const mainNavLinks = [
  { label: "Home", redirectLink: "/" },
  { label: "Chi Siamo", redirectLink: "/chi-siamo" },
  { label: "Categorie", redirectLink: "/", hash: "categorie" },
  { label: "Tecnologie", redirectLink: "/", hash: "technologies" },
  { label: "Servizi", redirectLink: "/", hash: "services" },
  { label: "Materiali", redirectLink: "/allmaterials" },
  { label: "Catalogo", redirectLink: "/catalog" },
  { label: "2D to 3D", redirectLink: "/2d3d" },
  { label: "Bio stamp 3D", redirectLink: "/bio-stamp" },
  { label: "News", redirectLink: "/news" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Split navigation links into two roughly equal columns
  const midIndex = Math.ceil(mainNavLinks.length / 2);
  const navCol1 = mainNavLinks.slice(0, midIndex);
  const navCol2 = mainNavLinks.slice(midIndex);

  // Handle hash links like Navbar
  const handleClick = (item) => {
    if (item.hash) {
      if (location.pathname !== item.redirectLink) {
        navigate(item.redirectLink);
        setTimeout(() => {
          document
            .getElementById(item.hash)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document
          .getElementById(item.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.redirectLink);
    }
  };

  return (
    <footer className="h-auto w-full bg-secondary-black pt-12 xl:pt-24 pb-[33.5px]">
      <div className="max-w-[1440px] px-4 mx-auto flex flex-col gap-y-20 lg:gap-y-30">

        {/* Top section: Logo + links */}
        <div className="flex flex-col gap-y-12 lg:flex-row justify-between">
          <img
            src={logo}
            className="w-32 2xl:w-40 cursor-pointer h-10 2xl:h-12 object-contain"
            alt="site logo"
            onClick={() => navigate("/")}
          />

          <div className="flex flex-col md:flex-row gap-x-20">
            {/* Navigation column 1 */}
            <div className="flex flex-col gap-y-8">
              <h4 className="text-white opacity-64 font-light text-base">Navigation</h4>
              <ul className="flex flex-col gap-y-3">
                {navCol1.map((item, idx) => (
                  <li key={idx}>
                    <span
                      onClick={() => handleClick(item)}
                      className="text-base text-white font-normal leading-[126.582%] hover:text-white/80 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column 2 */}
            <div className="flex flex-col gap-y-8">
              <h4 className="text-white opacity-64 font-light text-base">&nbsp;</h4>
              <ul className="flex flex-col gap-y-3">
                {navCol2.map((item, idx) => (
                  <li key={idx}>
                    <span
                      onClick={() => handleClick(item)}
                      className="text-base text-white font-normal leading-[126.582%] hover:text-white/80 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials & Contact */}
            {socialFooterNav.map((nav, idx) => (
              <div key={idx} className="flex flex-col gap-y-8">
                <h4 className="text-white opacity-64 font-light text-base">{nav.title}</h4>
                <ul className="flex flex-col gap-y-3">
                  {nav.items.map((item, i) => (
                    <li key={i}>
                      <a
                        className="text-base text-white font-normal leading-[126.582%] hover:text-white/80 transition-colors"
                        href={item.redirectLink}
                        target={item.redirectLink.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Text */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed max-w-4xl">
            Ho letto l'informativa privacy e acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679.
            I dati forniti saranno utilizzati esclusivamente per le finalità indicate e non saranno ceduti a terzi senza esplicito consenso.
          </p>
        </div>

        {/* Bottom section: Policy + copyright */}
        <div className="flex flex-col items-center w-full gap-y-8 lg:flex-row justify-between">
          <ul className="flex flex-row justify-between lg:justify-normal w-full lg:gap-x-8 items-center">
            <span
              onClick={() => navigate("/privacy-policy")}
              className="text-white opacity-64 font-light text-base hover:text-white transition-all duration-500 hover:opacity-100 cursor-pointer"
            >
              Privacy Policy
            </span>

            <span
              onClick={() => navigate("/terms-and-conditions")}
              className="text-white opacity-64 font-light text-base hover:text-white transition-all duration-500 hover:opacity-100 cursor-pointer"
            >
              Terms and Conditions
            </span>
          </ul>

          <span className="text-white text-nowrap opacity-64 font-light text-base">
            © 2026 DynamicsX. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;