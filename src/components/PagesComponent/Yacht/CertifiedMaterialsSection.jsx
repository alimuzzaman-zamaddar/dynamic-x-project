import React from 'react';
import { IoIosWater } from "react-icons/io";
import { FileIcon } from '../../SvgContainer/SvgContainer1';
import { HiOutlineSun, HiOutlineWrench } from "react-icons/hi2";

const CertifiedMaterialsSection = ({ data }) => {


  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">

          <h2 className="section-title t">
            Materiali Certificati per l'Ambiente Marino
          </h2>
          <p className="section-description max-w-[1000px] text-black/80 mt-4">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {data.items.map((material) => (
            <div
              key={material.id}
              className="border border-border-gray flex flex-col group overflow-hidden"
            >
              <div
                className="w-full h-[120px] flex items-center justify-center p-8 bg-[#F3F4F6]"
              >
                <div className="text-primary-black opacity-90 transition-opacity group-hover:opacity-100">
                  <img src={material.icon_url} alt="icon_url" />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 p-4 xl:p-6 bg-white">
                <h3 className="font-bold leading-tight">
                  {material.title}
                </h3>
                <p className="item-description leading-4.5 text-black/90">
                  {material.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedMaterialsSection;