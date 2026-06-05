import React from 'react'
import Container from "../../../shared/Container";

const FashionAccesories = ({ data }) => {
  if (!data) return null;

  const {
    title = "Fashion & Design Accessori Innovativi",
    subtitle = "",
    cards = []
  } = data;

  return (
    <section className='lg:py-18 py-8 '>
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
          {cards.map((card, index) => (
            <div key={index} className="bg-[#F2F0EE] p-6 rounded-sm flex-1">
              <h4 className='text-[#0A0A0A] text-lg font-bold'>
                {card.title}
              </h4>
              <p className='text-[15px] font-normal text-[#1E2939] pt-3 pb-4'>
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FashionAccesories