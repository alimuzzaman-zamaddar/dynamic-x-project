import React from "react";
import { Link } from "react-router";
import logo from "../assets/img/home/W.DynamicsX - RED 1.png";

const footerNav = [
  {
    title: "Navigation",
    items: [
      { label: "About Us", redirectLink: "/about-us" },
      { label: "Services", redirectLink: "/services" },
      { label: "News", redirectLink: "/news" },
    ],
  },
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

const Footer = () => {
  return (
    <footer className="h-auto  w-full bg-secondary-black pt-12 xl:pt-24 pb-[33.5px] ">
      <div className="max-width-[1440px] px-4 mx-auto  flex flex-col gap-y-20 lg:gap-y-30  ">
        <div className="flex flex-col gap-y-12 lg:flex-row justify-between ">
          <img
            src={logo}
            className=" w-32 2xl:w-40 cursor-pointer h-10 2xl:h-12 object-contain"
            alt="site logo"
          />
          <ul className="flex flex-col gap-y-8 md:flex-row  md:gap-x-25 ">
            {footerNav.map((nav, idx) => {
              return (
                <li key={idx} className="flex flex-col gap-y-4 md:gap-y-8   ">
                  <h4 className="text-white opacity-64 font-light text-base">
                    {" "}
                    {nav.title}{" "}
                  </h4>
                  <ul className="flex flex-col gap-y-3 md:gap-y-6  ">
                    {nav.items.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            className="text-base text-white font-normal leading-[126.582%]"
                            to={item.redirectLink}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center w-full gap-y-8 lg:flex-row justify-between ">
          <ul className="flex flex-row justify-between lg:justify-normal  w-full lg:gap-x-8 items-center  ">
            <Link
              to={"/privacy-policy"}
              className="text-white opacity-64 font-light text-base hover:text-white ease-in-out duration-500 hover:opacity-100   "
            >
              Privacy Policy
            </Link>

            <Link
              to={"/terms-and-conditions"}
              className="text-white opacity-64 font-light text-base hover:opacity-100 ease-in-out duration-500   "
            >
              Terms and Conditions
            </Link>
          </ul>
          <span className="text-white text-nowrap opacity-64 font-light text-base   ">
            © 2025. DynamicsX . All Right Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
