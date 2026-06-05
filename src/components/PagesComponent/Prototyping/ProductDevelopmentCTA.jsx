import React from "react";
import { Link } from "react-router";

const ProductDevelopmentCTA = ({ data }) => {
  if (!data) return null;

  const {
    title = "Pronti a Sviluppare il Tuo Prodotto?",
    subtitle = "",
    divs = [],
    buttons = []
  } = data;

  const btnBase =
    "h-[60px] cursor-pointer px-8 rounded-full font-medium uppercase text-sm tracking-wide whitespace-nowrap flex items-center justify-center transition-all duration-300 border w-full md:w-auto";

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header flex flex-col gap-6">
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle && (
            <p className="section-description text-primary-gray/80 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {divs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-4 md:mt-6 text-center">
            {divs.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="section-title text-[40px] md:text-[54px] font-bold">
                  {stat.num}
                </div>
                <div className="text-primary-black font-semibold text-lg leading-tight mt-[-4px]">
                  {stat.title}
                </div>
                <p className="text-primary-black/80 text-[15px] leading-[22px] max-w-[320px] mt-[-6px]">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Responsive Button Row */}
        {buttons.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-20 md:mt-24 w-full">
            {buttons.map((btn, index) => {
              // Alternates styles cleanly (Even index indices get dark theme skin, Odd indices get outline)
              const isAlternateOutline = index === 1;

              return (
                <Link
                  key={index}
                  to={btn.link || "/new-upload-design"}
                  className="w-full md:w-auto"
                >
                  <button
                    className={`${btnBase} ${isAlternateOutline
                        ? "bg-transparent text-primary-black border-border-gray hover:bg-[#1a1411] hover:text-white hover:border-[#1a1411]"
                        : "bg-[#1a1411] text-white border-[#1a1411] hover:bg-transparent hover:text-primary-black"
                      }`}
                  >
                    {btn.text}
                  </button>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDevelopmentCTA;