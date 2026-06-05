import React from 'react'
import Container from '../../../shared/Container'
import Ochiali from "../../../assets/img/Fashion/ImageWithFallback.png"
import Ochiali1 from "../../../assets/img/Fashion/ImageWithFallback (1).png"
import Ochiali2 from "../../../assets/img/Fashion/ImageWithFallback (2).png"
import Ochiali3 from "../../../assets/img/Fashion/ImageWithFallback (3).png"

const Cosa = ({ data }) => {
  if (!data) return null;

  const {
    title = "Cosa Stampiamo",
    subtitle = "",
    cards = []
  } = data;

  const fallbackImages = [Ochiali, Ochiali1, Ochiali2, Ochiali3];

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

        <div className="flex md:flex-row flex-col gap-4 mt-10">
          {cards.map((card, index) => {
            const localFallback = fallbackImages[index] || Ochiali;

            return (
              <div key={index} className="flex-1">
                <img
                  src={card.image_url || localFallback}
                  alt={card.title || "Ochiali"}
                  className='xl:h-61 h-40 w-full object-cover'
                />
                <h4 className='text-[#0A0A0A] text-base text-center font-bold py-3'>
                  {card.title}
                </h4>
                <p className='text-[15px] font-normal text-center text-[#1E2939]'>
                  {card.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  )
}

export default Cosa