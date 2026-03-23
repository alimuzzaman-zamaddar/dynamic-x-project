import React from "react";

const sectionsData = [
  {
    category: "PERCHE SCEGLIERE NOI",
    items: [
      { title: "Innovazione costante" },
      { title: "Flessibilità" },
      { title: "Soluzione su misure" },
      { title: "Supporto completo" },
    ],
  },
  {
    category: "IN NOSTRO APPROCIO",
    items: [
      { title: "Ascolto e Analisi" },
      { title: "Prototipazione rapida" },
      { title: "Produzione scalabile" },
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full pb-10   xl:py-24">
      <div className="container mx-auto px-50 flex flex-col gap-y-14 lg:flex-row lg:gap-x-12">
        {sectionsData.map((section, idx) => (
          <div key={idx} className="flex w-full flex-col gap-y-6 sm:gap-y-8">
            <h4 className="text-xl sm:text-2xl font-normal leading-[133%] text-black">
              {section.category}
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {section.items.map((item, idx) => {
                const isLastSingle =
                  section.items.length % 2 !== 0 &&
                  idx === section.items.length - 1;

                return (
                  <li
                    key={idx}
                    className={`
                      flex items-center justify-center
                      rounded-3xl border border-border-gray
                      bg-secondary-gray
                      px-6 py-4 sm:px-8 sm:py-6 text-sm
                      3xl:text-base sm:text-lg
                      font-normal text-black text-center
                      leading-[140%]
                      transition-colors duration-300
                      ${isLastSingle ? "sm:col-span-2" : ""}
                    `}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
