import React from 'react'
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Visione = ({ data }) => {
  if (!data) return null;

  const {
    title = "Dai Vita alla Tua Visione",
    subtitle = "",
    divs = []
  } = data;

  return (
    <section className='lg:pt-18 pt-8'>
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
            <div
              key={index}
              className="rounded-sm border border-[#D1D5DC] p-6 flex flex-col items-center flex-1"
            >
              <h4 className='text-[#0A0A0A] text-base text-center font-bold'>
                {item.title}
              </h4>
              <p className='text-[15px] font-normal text-center text-[#1E2939] py-4'>
                {item.subtitle}
              </p>

              <Link to={"/new-upload-design"}>
                <button
                  className='px-7 py-3 rounded-4xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
                >
                  {item.link || "Scopri di più"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Visione