import React from 'react'
import Container from '../../../shared/Container'

const Moda = ({ data }) => {
  if (!data) return null;

  const {
    title = "Materiali per la Moda",
    subtitle = "",
    divs = []
  } = data;

  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>
          {title}
        </h2>

        {subtitle && (
          <p className='text-[15px] font-normal text-[#1E2939] pt-4'>
            {subtitle}
          </p>
        )}

        <div className="flex md:flex-row flex-col gap-4 mt-10">
          {divs.map((item, index) => (
            <div key={index} className="border-l-4 border-black px-6 pb-3 flex-1">
              <h4 className='text-[#0A0A0A] text-base font-bold py-3'>
                {item.title}
              </h4>
              <p className='text-[15px] font-normal text-[#1E2939]'>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Moda