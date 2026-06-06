import React from 'react';


const TechnologiesSectionDrone = ({ data }) => {


  return (
    <section className="section bg-white">
      <div className="container-main">

        <div className="section-header max-w-[1000px]">
          <h2 className="section-title text-4xl leading-tight">
            {data?.title}
          </h2>
          <p className="section-description mt-3">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-8 md:mt-10">
          {data?.cards?.map((tech) => (
            <div key={tech.number} className="flex flex-col gap-6">

              <div
                className="w-full flex items-center justify-center rounded-full bg-[#F0EFED] aspect-[22/4]"

              >
                <span className="text-black text-xl font-bold">
                  {tech.num}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="leading-tight font-semibold">
                  {tech.title}
                </h3>
                <p className="item-description">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSectionDrone;