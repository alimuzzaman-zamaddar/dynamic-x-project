import React from "react";
import { Link } from "react-router"; 
import Container from "../../../shared/Container";

const CategoryCard = ({ category }) => {
  const dynamicLink = category.link.startsWith("/") ? category.link : `/${category.link}`;

  return (
    <Link
      to={dynamicLink}
      className="group block border-2 border-[#979797] rounded-xl w-full h-full transition-all duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 no-underline"
    >
      <div className="lg:p-6 p-4 flex flex-col items-center gap-y-3 h-full justify-between">
        <div className="flex flex-col items-center gap-y-3 flex-grow w-full">
          <img
            src={category.icon_url}
            alt={category.title}
            className="w-12 h-12 object-contain transition-all duration-300 group-hover:invert"
          />

          <span className="lg:text-lg text-base text-center font-semibold text-black group-hover:text-white transition-all duration-300 block">
            {category.title}
          </span>

          <p
            className="text-center text-black/70 group-hover:text-white/90 transition-all duration-300 block"
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22px",
            }}
          >
            {category.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = ({ data }) => {
  const cards = data?.cards || [];
  const subtitle = data?.subtitle || '';

  return (
    <section id="categorie" className="h-auto w-full py-10 xl:py-25">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-3">
          Categorie
        </h2>

        <div className="flex flex-col gap-y-7.5 w-full">
          <div className="flex flex-col gap-y-3">
            <h3 className="lg:text-lg text-base font-normal text-black">
              {subtitle}
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:gap-7.5 gap-4 w-full list-none p-0">
            {cards.map((category, idx) => (
              <li key={idx} className="flex w-full min-h-full">
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div id="technologies" className="h-15"></div>
    </section>
  );
};

export default CategorySection;