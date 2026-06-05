import React from 'react'
import Container from '../../../shared/Container'

const Dime = ({ data }) => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>
          {data?.title}
        </h2>
        <p className='text-[15px] font-normal text-[#1E2939] pt-4'>
          {data?.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          {data?.divs?.map((item, index) => (
            <div
              key={index}
              className="border-t-2 border-black pt-3 flex flex-col justify-between"
            >
              <div>
                <h4 className='text-[#0A0A0A] text-lg font-bold'>
                  {item.title}
                </h4>
                <h5 className='text-[15px] font-normal text-[#1E2939] pt-3'>
                  {item.description}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Dime