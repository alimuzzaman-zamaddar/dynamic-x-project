import React from "react";

const CompatibilityMatrixSection = ({ title, columns, rows }) => {
  return (
    <section className="section mt-20">
      <div className="container-main">
        {/* Title */}
        <h2 className="section-title mb-8">{title}</h2>

        {/* Wrapper */}
        <div className="border border-[#E5E7EB] rounded-2xl p-4 md:p-6 overflow-x-auto xl:overflow-visible">
          {/* Grid */}
          <div className="min-w-[700px] xl:min-w-0">
            {/* Header */}
            <div className="grid grid-cols-[160px_repeat(5,minmax(100px,1fr))] mb-6">
              <div></div>

              {columns.map((col, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  {/* Icon Box */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${col.color}15`,
                      color: col.color,
                    }}
                  >
                    {col.icon}
                  </div>

                  {/* Label */}
                  <p
                    className="text-[15px] font-medium"
                    style={{ color: col.color }}
                  >
                    {col.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-[160px_repeat(5,minmax(100px,1fr))] items-center mb-4"
              >
                {/* Label */}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: row.color }}
                  />
                  {row.name}
                </div>

                {/* Cells */}
                {columns.map((_, colIndex) => {
                  const active = row.values[colIndex];

                  return (
                    <div key={colIndex} className="flex justify-center">
                      <div
                        className={`
                          w-10 h-10 rounded-xl flex items-center justify-center
                          border
                          ${active ? "" : "border-gray-200 bg-gray-100"}
                        `}
                        style={
                          active
                            ? {
                                borderColor: `${row.color}30`,
                                backgroundColor: `${row.color}15`,
                              }
                            : {}
                        }
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: active ? row.color : "#D1D5DB",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Footer */}
            <div className="grid grid-cols-[160px_repeat(5,minmax(100px,1fr))] mt-6 pt-4 border-t border-[#E5E7EB]">
              <div className="text-[15px] text-gray-500">Total</div>

              {columns.map((col, colIndex) => {
                const total = rows.reduce(
                  (acc, row) => acc + (row.values[colIndex] ? 1 : 0),
                  0,
                );

                return (
                  <div
                    key={colIndex}
                    className="flex flex-col items-center gap-2"
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{ color: col.color }}
                    >
                      {total}
                    </p>

                    <div className="w-16 h-[7.371px] bg-gray-200 rounded">
                      <div
                        className="h-full rounded"
                        style={{
                          width: `${(total / rows.length) * 100}%`,
                          backgroundColor: col.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityMatrixSection;
