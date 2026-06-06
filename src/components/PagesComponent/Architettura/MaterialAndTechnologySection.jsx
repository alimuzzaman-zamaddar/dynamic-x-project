import React from 'react';

const MaterialAndTechnologySection = ({ data }) => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">

        <div className="section-header mb-12">
          <h2 className="section-title">
            {data?.title}
          </h2>
          <p className="section-description text-black/80 mt-4">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-10">
          {data?.cards?.map((tech, index) => {
            const tags = [tech.link_1, tech.link_2].filter(Boolean);
            const isOutlined = index % 2 === 0;

            return (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">
                  {tech.title}
                </h3>

                <p className="item-description">
                  {tech.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`
                        px-4 py-2 text-[11px] font-bold tracking-widest uppercase
                        ${isOutlined
                          ? 'border border-primary-black text-primary-black'
                          : 'bg-[#F3F4F6] text-primary-black'}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaterialAndTechnologySection;