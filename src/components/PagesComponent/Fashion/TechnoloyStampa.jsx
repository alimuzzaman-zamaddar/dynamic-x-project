import React from 'react'
import Container from '../../../shared/Container'
import FDM from "../../../assets/img/Fashion/Icon.png"
import SLA from "../../../assets/img/Fashion/Icon (1).png"

const TechnoloyStampa = ({ data }) => {
  if (!data) return null;

  const {
    title = "Tecnologie di Stampa",
    subtitle = "",
    footer_text = "",
    icon_divs = [],
    divs = []
  } = data;

  const fallbackIcons = [SLA, FDM];

  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>
          {title}
        </h2>
        {subtitle && (
          <p className='text-[15px] font-normal text-[#1E2939] pt-4'>
            {subtitle}
          </p>
        )}

        <div className="flex md:flex-row flex-col gap-4 my-10">
          {icon_divs.map((tech, index) => {
            const lines = tech.subtitle ? tech.subtitle.split('\r\n') : [];
            const mainDescription = lines[0] || "";
            const featureBullets = lines.slice(1);

            return (
              <div key={index} className="flex gap-x-4 flex-1">
                <img
                  src={tech.icon_url || fallbackIcons[index]}
                  alt="Tech Icon"
                  className='h-8 w-8 object-contain'
                />
                <div>
                  <h4 className='text-[#0A0A0A] text-base font-bold'>
                    {tech.title}
                  </h4>
                  <p className='text-[15px] font-normal text-[#1E2939] py-4'>
                    {mainDescription}
                  </p>

                  {featureBullets.length > 0 && (
                    <ul className='flex flex-col gap-1 list-none pl-0'>
                      {featureBullets.map((bullet, idx) => (
                        <li key={idx} className='text-[15px] font-normal text-[#1E2939]'>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="justify-center flex flex-wrap md:gap-0 gap-3 pb-10">
          {divs.map((step, index) => {
            const marginClass = (index === 0 || index === 2) ? "-mr-10" : "xl:-mr-10";

            return (
              <div
                key={index}
                className={`xl:h-60 h-40 xl:w-60 w-40 rounded-full border-2 border-[#3D3A6B] flex flex-col justify-center px-8 shrink-0 ${marginClass}`}
              >
                <h4 className='text-[#0A0A0A] text-base font-bold text-center'>
                  {step.title}
                </h4>
                <p className='text-[15px] font-normal text-[#1E2939] pt-2 text-center balance'>
                  {step.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {footer_text && (
          <p className='text-[15px] font-normal text-[#1E2939] text-center pb-6'>
            {footer_text}
          </p>
        )}
      </Container>
    </section>
  )
}

export default TechnoloyStampa