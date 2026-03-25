import React from "react";

const WhyChooseSection = ({
  badge = "VANTAGGI",
  title,
  description,
  features = [],
}) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black mb-2">
            {badge}
          </p>

          <h2 className="section-title mb-4">{title}</h2>

          <p className="section-description ">{description}</p>
        </div>

        {/* Layout */}
        <div className="flex items-center gap-6 h-full">
          {/* Left */}
          <div className="flex flex-col justify-between gap-6 xl:gap-30 h-full xl:w-[33%]">
            {features.slice(0, 2).map((item, i) => (
              <div key={i}>
                <h3 className="text-base md:text-lg text-end font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-end leading-[160%] max-w-[320px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Icons */}
          <div className="flex justify-center xl:w-[34%]">
            <div className="grid grid-cols-2  gap-3">
              {features.map((item, i) => {
                const roundedClass =
                  i === 0
                    ? "rounded-bl-full rounded-tr-full rounded-tl-full"
                    : i === 1
                      ? "rounded-br-full rounded-tr-full rounded-tl-full"
                      : i === 2
                        ? "rounded-bl-full  rounded-tl-full rounded-br-full"
                        : "rounded-br-full rounded-bl-full rounded-tr-full";

                return (
                  <div
                    key={i}
                    className={`
          w-[120px] h-[120px] md:w-[160px] md:h-[160px] 
          bg-[#F2EEEE] flex items-center justify-center
          ${roundedClass}
        `}
                  >
                    {item.icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 justify-between gap-6 xl:gap-30 h-full xl:w-[33%]">
            {features.slice(2, 4).map((item, i) => (
              <div key={i}>
                <h3 className="text-base md:text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-[160%] max-w-[320px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
