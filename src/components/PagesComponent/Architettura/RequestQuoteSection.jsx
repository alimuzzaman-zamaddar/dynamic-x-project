import React from "react";

const RequestQuoteSection = ({ data }) => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main flex flex-col">

        <div className="section-header">
          <h2 className="section-title mb-11">
            {data?.title}
          </h2>
          <p className="section-description text-black/80">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-10 text-center">
          {data?.divs?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="section-title">
                {stat.num}
              </div>
              <div className="text-primary-black font-semibold">
                {stat.title}
              </div>
              <p className="section-description text-primary-gray/80">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {data?.buttons && data.buttons.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 mt-11">
            {data.buttons.map((btn, index) => {
              const isPrimary = index === 0;

              return (
                <button
                  key={index}
                  className={`h-12 cursor-pointer px-8 rounded-full text-base font-medium flex items-center justify-center transition whitespace-nowrap ${isPrimary
                      ? "bg-[#1a1411] text-white hover:bg-white hover:text-black border border-transparent hover:border-black"
                      : "bg-transparent text-primary-black border border-black hover:bg-black hover:text-white"
                    }`}
                >
                  {btn.text}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default RequestQuoteSection;