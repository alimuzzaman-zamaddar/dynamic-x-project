export default function AutomotiveSection({ auto, problem }) {
  return (
    <section className="section">
      <div className="container-main">
        <div className="section-header text-left">
          <h2 className="section-title mb-4">
            {auto?.title}
          </h2>

          <p className="section-description max-w-[800px]">
            {auto?.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {problem?.divs?.map((div, index) => (
              <button
                key={index}
                className="px-6 py-3 cursor-pointer rounded-full border border-[var(--color-border-gray)] 
                             text-sm font-medium hover:bg-black hover:text-white transition"
              >
                {div.title}
              </button>
            ))}

          </div>
        </div>

        {/* ===== PROBLEM SECTION ===== */}
        <div className="mt-12">
          <h3 className="section-title mb-4">{problem?.title}</h3>

          <p className="section-description max-w-[900px]">
            {problem?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {problem?.cards?.map((item, index) => (
            <div key={index}>
              <div className="bg-[#F2EEEE] h-[80px] flex items-center justify-center text-xl font-semibold">
                {index + 1}
              </div>
              <div className="mt-4">
                <h4 className="item-title mb-2">{item?.title}</h4>
                <p className="item-description">
                  {item?.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
