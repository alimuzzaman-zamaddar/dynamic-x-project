import React from 'react'
import Container from '../../../shared/Container'

const Materiali = ({ data }) => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>
          Materiali & Tecnologie di Stampa
        </h2>

        <div className="flex md:flex-row flex-col lg:gap-18 gap-8 mt-10">

          <div className="w-full">
            {data?.items?.map((item, index) => {
              const isLast = index === data.items.length - 1;
              return (
                <div
                  key={index}
                  className={`w-full ${!isLast ? 'border-b-2 border-black pb-10' : 'pb-10'} ${index === 0 ? '!pb-5' : ''}`}
                >
                  <div className="w-full">
                    <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>
                      {item.title}
                    </h4>
                    {item.description && (
                      <h5 className='text-[15px] font-normal text-[#1E2939] pt-3'>
                        {item.description}
                      </h5>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="py-6">
              <h4 className='text-[#0A0A0A] text-base font-bold'>
                {data?.extra_section?.title}
              </h4>
              <h5 className='text-[15px] font-normal text-[#1E2939] pt-4'>
                {data?.extra_section?.description}
              </h5>
            </div>

            {data?.extra_section?.items?.map((tech, index) => (
              <div key={index} className="rounded-sm border border-black p-3">
                <h4 className='text-[#0A0A0A] text-base font-bold'>
                  {tech.title}
                </h4>
                <h5 className='text-[15px] font-normal text-[#1E2939] pt-4'>
                  {tech.description}
                </h5>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Materiali