import React from 'react'
import Container from '../../../shared/Container'
import { Car, Clock, Usd } from '../../SvgContainer/SvgContainer'

const Pronto = ({ data }) => {
  // Array fallback to keep local SVG components handy if needed
  const localIcons = [<Clock />, <Usd />, <Car />];

  return (
    <section className='lg:pt-18 pt-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>
          {data?.title}
        </h2>
        <p className='text-[15px] font-normal text-[#1E2939] pt-4'>
          {data?.subtitle}
        </p>

        <div className="flex md:flex-row flex-col gap-6 py-10">
          {data?.divs?.map((item, index) => (
            <div key={index} className="w-full">
              <h3 className='text-base font-semibold text-black'>
                {item.title}.
              </h3>
              <h5 className='text-[15px] md:text-base font-normal text-black py-4'>
                {item.description}
              </h5>
              <h6 className='text-base font-semibold text-[#1E2939] cursor-pointer'>
                {index === 0 ? '→ Invia il file' : '→ Contattaci'}
              </h6>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {data?.cards?.map((card, index) => (
            <div key={index} className="w-full">
              <div className="py-3 h-[56px] rounded-[40px] bg-[#F0EEEB] flex justify-center items-center">
                {card.icon_url ? (
                  <img
                    src={card.icon_url}
                    alt={card.title}
                    className="h-6 w-auto object-contain"
                  />
                ) : (
                  localIcons[index]
                )}
              </div>
              <h3 className='text-base font-semibold text-black pt-3 text-center md:text-left'>
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pronto