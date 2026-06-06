import React from 'react';
import Container from '../../../shared/Container';
import { useNavigate } from 'react-router';

const DynamicsX = ({ underHero, chiSiamo }) => {
  const navigate = useNavigate();

  return (
    <section className="lg:py-18 py-8">
      <Container>
        {/* Under Hero Section */}
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {underHero?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {underHero?.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => navigate('/#services')}
            className="px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold"
          >
            {underHero?.btn1_text}
          </button>

          <button
            onClick={() => navigate('/upload-design')}
            className="px-7 py-3 rounded-2xl hover:bg-[#1A1A2E] cursor-pointer hover:text-white bg-transparent text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold"
          >
            {underHero?.btn2_text}
          </button>
        </div>

        {/* Chi Siamo Sections */}
        <div className="pt-18">
          {chiSiamo?.cards?.map((card, index) => (
            <div
              key={index}
              className={index === 0 ? 'pt-18' : 'mt-10'}
            >
              <h2
                className={
                  index === 0
                    ? 'lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'
                    : 'font-semibold text-black'
                }
              >
                {card.title}
              </h2>

              <p className="text-[15px] text-gray-600 leading-[160%] mt-4">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DynamicsX;