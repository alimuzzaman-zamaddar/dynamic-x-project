import React from 'react';
import Vector from "../assets/img/bg/Vector.png";

const News = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto pt-24 md:pt-40 px-6 md:px-8 pb-20">
        <h2 className='text-3xl lg:text-4xl font-bold text-[#0A0A0A] tracking-tight'>
          News
        </h2>

        <div className="py-12 text-center mx-auto flex flex-col items-center max-w-[720px]">
          <h1 className='text-2xl lg:text-4xl font-normal text-[#0A0A0A] leading-tight'>
            Page is under construction
          </h1>

          <p className='text-lg md:text-2xl font-light text-gray-500 pt-6 leading-relaxed'>
            Unleashing the future of 3D printing. We’re building an experience
            you won’t want to miss. Stay tuned.
          </p>
        </div>

        <div className="flex justify-center mt-8 animate-pulse">
          <img
            src={Vector}
            alt="Bio Stamp 3D Visualization"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default News;