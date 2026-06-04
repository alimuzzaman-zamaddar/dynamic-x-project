import React from "react";


const PerChiLavoriamo = ({ data }) => {

  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Header Section */}
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">{data?.title}</h2>
          <p className="section-description">
            {data?.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {data?.cards?.map((client, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon & Title Group */}
              <div className="flex items-center gap-4">
                <img src={client.icon_url} alt={client.title} className="text-black shrink-0" />
                <h3 className="text-xl md:text-xl font-semibold text-black leading-tight">
                  {client.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[15px] leading-[18px] text-black/80">
                {client.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerChiLavoriamo;
