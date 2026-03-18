import React from "react";

const ComparisonSection = () => {
  const comparisonRows = [
    { label: "Risoluzione", fdm: "★★★☆☆", sla: "★★★★★", sls: "★★★★★" },
    { label: "Accuratezza", fdm: "★★★★☆", sla: "★★★★★", sls: "★★★★★" },
    {
      label: "Finitura superficiale",
      fdm: "★★★☆☆",
      sla: "★★★★★",
      sls: "★★★★☆",
    },
    { label: "Rendimento", fdm: "★★★★☆", sla: "★★★★☆", sls: "★★★★★" },
    { label: "Design complessi", fdm: "★★★☆☆", sla: "★★★★☆", sls: "★★★★★" },
    { label: "Facilità di utilizzo", fdm: "★★★★★", sla: "★★★★★", sls: "★★★★★" },
  ];

  const StarRating = ({ rating }) => {
    const filled = rating.split("★").length - 1;
    const empty = 5 - filled;

    return (
      <div className="flex items-center justify-center gap-1">
        {[...Array(filled)].map((_, i) => (
          <span
            key={`filled-${i}`}
            className="text-amber-400 text-2xl md:text-3xl drop-shadow-md"
          >
            ★
          </span>
        ))}
        {[...Array(empty)].map((_, i) => (
          <span
            key={`empty-${i}`}
            className="text-gray-200 text-2xl md:text-3xl"
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section>
      <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-sm shadow-xl shadow-gray-100/50">
        <table className="w-full min-w-[640px] divide-y divide-gray-100">
          <thead>
            <tr className="bg-gradient-to-r ">
              <th className="py-7 pl-8 pr-6 text-left text-lg font-semibold text-gray-800">
                Caratteristica
              </th>
              <th className="py-7 px-6 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-blue-600 font-bold text-xl">FDM</span>
                  <span className="text-xs text-gray-500 font-medium">
                    Deposizione Fusa
                  </span>
                </div>
              </th>
              <th className="py-7 px-6 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-indigo-600 font-bold text-xl">SLA</span>
                  <span className="text-xs text-gray-500 font-medium">
                    Stereolitografia
                  </span>
                </div>
              </th>
              <th className="py-7 px-6 pr-8 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-purple-600 font-bold text-xl">SLS</span>
                  <span className="text-xs text-gray-500 font-medium">
                    Sinterizzazione Laser
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row, idx) => (
              <tr
                key={row.label}
                className={`
                    group transition-all duration-200
                    hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-white
                    ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
                  `}
              >
                <td className="py-6 pl-8 pr-6 text-base font-medium text-gray-700 whitespace-nowrap">
                  {row.label}
                </td>
                <td className="py-6 px-6 text-center">
                  <StarRating rating={row.fdm} />
                </td>
                <td className="py-6 px-6 text-center">
                  <StarRating rating={row.sla} />
                </td>
                <td className="py-6 px-6 pr-8 text-center">
                  <StarRating rating={row.sls} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonSection;
