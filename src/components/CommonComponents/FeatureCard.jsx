import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="py-10 px-5 rounded-xl border-2 border-white backdrop-blur-[4.5px]">
      <div className="flex justify-center">
        {React.createElement(icon)}
      </div>
      <h3 className="pt-10 pb-2.5 font-normal text-base text-center text-white">{title}</h3>
      <p className="font-normal text-lg text-white/50 text-center">{description}</p>
    </div>
  );
};