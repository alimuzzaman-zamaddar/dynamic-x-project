import React from 'react';

const WhyChooseUsSectionatchitettura = ({ data }) => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">

        <div className="flex flex-col-reverse xl:flex-row gap-10 items-center">

          <div className="flex flex-col gap-10 xl:w-[60%] w-full">

            <h2 className="section-title">
              {data?.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {data?.divs?.map((point, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h3 className="font-semibold text-black">
                    {point.title}
                  </h3>
                  <p className="item-description text-primary-gray/80 leading-relaxed">
                    {point.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end xl:w-[40%] w-full">
            {data?.image_url && (
              <img
                src={data.image_url}
                alt={data?.title || "Why choose us graphic"}
                className="w-full xl:h-[388px] object-contain"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSectionatchitettura;