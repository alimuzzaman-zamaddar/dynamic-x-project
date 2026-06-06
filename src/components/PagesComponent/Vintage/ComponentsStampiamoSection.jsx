import React from "react";

const ComponentsStampiamoSection = ({ data }) => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="section-header max-w-[800px]">
          <h2 className="section-title mb-4">
            {data?.title || "Componenti che Stampiamo"}
          </h2>

          <p className="section-description text-gray-700">
            {data?.subtitle}
          </p>
        </div>

        {/* List */}
        <ul className="mt-6 space-y-6">
          {data?.items?.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
              <div>
                <h4 className="item-title">{item?.title}</h4>
                <p className="item-description text-gray-700">
                  {item?.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ComponentsStampiamoSection;