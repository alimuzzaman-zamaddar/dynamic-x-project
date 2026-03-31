import React from "react";
import { Link } from "react-router";
import logo from "../assets/img/home/W.DynamicsX - RED 1.png";

// Socials and contact
const socialFooterNav = [
  {
    title: "Socials",
    items: [
      {
        label: "Instagram",
        redirectLink: "https://www.instagram.com/yourusername/",
      },
      {
        label: "LinkedIn",
        redirectLink: "https://www.linkedin.com/company/yourcompany/",
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
  { label: "Categorie", redirectLink: "/" },
  { label: "Tecnologie", redirectLink: "/" },
  { label: "Servizi", redirectLink: "/" },
  { label: "Materiali", redirectLink: "/allmaterials" },
  { label: "Catalogo", redirectLink: "/catalog" },
  { label: "2D to 3D", redirectLink: "/2d3d" },
  { label: "Bio stamp 3D", redirectLink: "/bio-stamp" },
  { label: "News", redirectLink: "/news" },
];

const Footer = () => {
  // Split navigation links into two roughly equal columns
  const midIndex = Math.ceil(mainNavLinks.length / 2);
  const navCol1 = mainNavLinks.slice(0, midIndex);
  const navCol2 = mainNavLinks.slice(midIndex);

  return (
    <footer className="h-auto w-full bg-secondary-black pt-12 xl:pt-24 pb-[33.5px]">
      <div className="max-w-[1440px] px-4 mx-auto flex flex-col gap-y-20 lg:gap-y-30">
        {/* Top section: Logo + links */}
        <div className="flex flex-col gap-y-12 lg:flex-row justify-between">
          <img
            src={logo}
            className="w-32 2xl:w-40 cursor-pointer h-10 2xl:h-12 object-contain"
            alt="site logo"
          />

          <div className="flex flex-col md:flex-row gap-x-20">
            {/* Navigation column 1 */}
            <div className="flex flex-col gap-y-8">
              <h4 className="text-white opacity-64 font-light text-base">Navigation</h4>
              <ul className="flex flex-col gap-y-3">
                {navCol1.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      className="text-base text-white font-normal leading-[126.582%]"
                      to={item.redirectLink}
                    >
                      {item.label}
                    </Link>
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
                    <Link
                      className="text-base text-white font-normal leading-[126.582%]"
                      to={item.redirectLink}
                    >
                      {item.label}
                    </Link>
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
                      <Link
                        className="text-base text-white font-normal leading-[126.582%]"
                        to={item.redirectLink}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section: Policy + copyright */}
        <div className="flex flex-col items-center w-full gap-y-8 lg:flex-row justify-between">
          <ul className="flex flex-row justify-between lg:justify-normal w-full lg:gap-x-8 items-center">
            <Link
              to={"/privacy-policy"}
              className="text-white opacity-64 font-light text-base hover:text-white ease-in-out duration-500 hover:opacity-100"
            >
              Privacy Policy
            </Link>

            <Link
              to={"/terms-and-conditions"}
              className="text-white opacity-64 font-light text-base hover:opacity-100 ease-in-out duration-500"
            >
              Terms and Conditions
            </Link>
          </ul>
          <span className="text-white text-nowrap opacity-64 font-light text-base">
            © 2025. DynamicsX. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;