import React from 'react';

const YachtComponentSection = ({ data }) => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title">
            {data?.title}
          </h2>
          <p className="section-description max-w-[1200px] text-primary-gray/80 mt-4">
            {data?.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-12 md:mt-16">
          {data?.divs?.map((div, index) => (
            <button key={index} className="h-[60px] cursor-pointer px-8 bg-[#E5E7EB] rounded-3xl text-black/80 font-medium uppercase text-sm tracking-wide whitespace-nowrap">
              {div?.title}
            </button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default YachtComponentSection;