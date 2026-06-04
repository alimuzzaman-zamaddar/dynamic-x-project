import React from 'react'
import Container from '../../../shared/Container'

const Oggi = ({ mission, vision }) => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {mission?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4 max-w-4xl">
          {mission?.description}
        </p>

        <div className="py-10 flex flex-col gap-4">
          {mission?.divs?.map((div, index) => {
            return (
              <div key={index} className="flex gap-7 items-center">
                <div className="py-4 px-8 bg-[#E8E8E8] flex justify-center items-center text-[28px] text-[#1A1A1A] font-extrabold min-w-20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0A0A0A]">
                    {div?.title}
                  </h3>
                  <p className="text-[15px] text-[#1E2939] mt-2">
                    {div?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A] mt-8">
          {vision?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {vision?.description}
        </p>
      </Container>
    </section>
  )
}

export default Oggi