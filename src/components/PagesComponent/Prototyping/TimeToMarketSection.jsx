import React from 'react';
import { TargetIcon } from '../../SvgContainer/SvgContainer1';
import { HiOutlineLightningBolt, HiOutlineBeaker } from "react-icons/hi";

const TimeToMarketSection = ({ data }) => {
  if (!data) return null;

  const {
    title = "Il Nostro Approccio al Time-to-Market",
    subtitle = "",
    divs = []
  } = data;

  const localIcons = [
    <HiOutlineLightningBolt className="text-2xl min-w-[24px]" />,
    <HiOutlineBeaker className="text-2xl min-w-[24px]" />,
    <TargetIcon className="min-w-[24px]" />
  ];

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-16 md:mb-20">
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle && (
            <p className="section-description">
              {subtitle}
            </p>
          )}
        </div>

        {divs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-10">
            {divs.map((feature, index) => (
              <div key={index} className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-4">
                  {feature.icon_url ? (
                    <img
                      src={feature.icon_url}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    localIcons[index] || localIcons[0]
                  )}
                  <h3 className="font-semibold text-black/90 text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="item-description leading-relaxed text-black/80 max-w-[320px] text-[15px]">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TimeToMarketSection;