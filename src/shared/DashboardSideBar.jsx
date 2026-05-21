import React from "react";
import {
  FiFileText,
  FiFolder,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { NavLink } from "react-router";

export default function DashboardSideBar() {
  const menuItems = [
    {
      name: "My Orders",
      icon: <FiFileText size={24} />,
      path: "/dashboard",
    },
    {
      name: "File Library",
      icon: <FiFolder size={24} />,
      path: "/dashboard/file",
    },
    {
      name: "My Cart",
      icon: <FiShoppingCart size={24} />,
      path: "/dashboard/cart",
    },
    {
      name: "Profile",
      icon: <FiUser size={24} />,
      path: "/dashboard/profile",
    },
  ];

  return (
    <div className="bg-[#E7E7E780] rounded-3xl p-6 w-70">
      <ul className="flex flex-col gap-5">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-7 py-3 rounded-[20px] transition-all duration-200 ${isActive
                  ? "bg-[#07162E] text-white"
                  : "text-[#1F2937]"
                }`
              }
            >
              <span>{item.icon}</span>
              <span className="text-[20px] font-medium">
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}