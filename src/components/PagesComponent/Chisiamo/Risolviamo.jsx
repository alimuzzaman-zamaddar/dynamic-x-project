import React from 'react'
import Container from '../../../shared/Container'


const Risolviamo = ({ challenges }) => {
  return (
    <section className='lg:pt-18 pt-8'>
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">Le Sfide che Risolviamo</h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4 max-w-4xl">
          {challenges?.description}
        </p>
        <div className="grid grid-cols-1 gap-6 mt-10">
          {challenges?.divs?.map((tech,index) => (
            <div
              key={index}
              className=" border-l-4 border-l-[#1A1A1A] p-6 flex flex-col gap-3"
            >
              <h3 className="text-xl md:text-[22px] font-semibold text-primary-black leading-tight">{tech.title}</h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-black/70">{tech.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Risolviamo