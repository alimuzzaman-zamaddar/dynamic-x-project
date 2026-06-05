import React from 'react';

const CadToPhysicalSection = ({ data }) => {
  const steps = data?.divs || [];

  const leftSteps = steps.slice(0, 2);
  const rightSteps = steps.slice(2, 4);

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">

        <div className="section-header mb-12">
          <h2 className="section-title mb-4">
            {data?.title}
          </h2>
          <p className="section-description max-w-[850px] text-black/80">
            {data?.subtitle}
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-6">

          <div className="flex flex-col xl:gap-24 gap-6 md:left-0 md:top-[15%] md:w-[320px] text-left w-full">
            {leftSteps.map((step, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-bold text-[15px] text-black/90">
                  {step.title}
                </h4>
                <p className="text-[15px] text-primary-gray/80 leading-relaxed xl:max-w-[167px]">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center my-4 xl:my-16 md:my-0 md:w-full w-full">
            {data?.image_url && (
              <img
                src={data.image_url}
                alt={data?.title || "Process flow graphic"}
                className="h-[150px] xl:h-auto object-contain"
              />
            )}
          </div>

          <div className="flex flex-col xl:gap-24 gap-6 text-left md:text-right w-full">
            {rightSteps.map((step, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-bold text-[15px] text-black/90">
                  {step.title}
                </h4>
                <p className="text-[15px] text-primary-gray/80 leading-relaxed xl:max-w-[167px] md:max-w-none md:ml-auto">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 xl:mt-10 pt-8">
          <p className="text-[15px] text-primary-gray/90 leading-relaxed max-w-[1000px]">
            {data?.footer_text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CadToPhysicalSection;