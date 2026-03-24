import React, { useState } from "react";

const CustomDropdown = ({
  options,
  placeholder = "Select service",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative w-full">
      {/* Trigger / Display */}
      <div
        className={`
          common-input 
          flex items-center justify-between 
          cursor-pointer select-none
          ${isOpen ? "border-black" : ""}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${selected ? "text-black" : "text-gray-400"}`}>
          {selected || placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
            absolute top-full left-0 w-full mt-2 
            bg-white border border-gray-300 rounded-2xl 
            shadow-xl z-10 max-h-72 overflow-y-auto
            divide-y divide-gray-100
          "
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                px-6 py-4 cursor-pointer hover:bg-gray-50 text-gray-500 transition-colors
                ${selected === option.value ? "bg-gray-50 font-medium text-gray-500" : ""}
              `}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
