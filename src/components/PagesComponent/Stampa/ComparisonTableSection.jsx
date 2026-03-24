import React from "react";
import { StarBlankIcon, StarIcon } from "../../SvgContainer/SvgContainer1";

const ComparisonTableSection = ({ data, categories }) => {
  return (
    <section className="section">
      <div className="container-main">
        
        {/* Scroll Wrapper */}
        <div className="w-full overflow-x-auto scroll-smooth">
          
          {/* Table */}
          <div className="min-w-[700px] md:min-w-[900px] border border-[#F3F4F6] rounded-xl overflow-hidden">
            
            {/* Header */}
            <div className="grid grid-cols-[120px_repeat(3,minmax(180px,1fr))] bg-gray-50 border-b border-[#F3F4F6]">
              <div></div>

              {data.map((col, i) => (
                <div
                  key={i}
                  className={`p-4 flex flex-col gap-2 ${
                    i !== 0 ? "border-l border-[#F3F4F6]" : ""
                  }`}
                >
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium w-fit"
                    style={{
                      backgroundColor: `${col.color}15`,
                      color: col.color,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: col.color }}
                    />
                    {col.name}
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs text-gray-500">
                    {col.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {categories.map((cat, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-[120px_repeat(3,minmax(180px,1fr))] border-b border-[#F3F4F6] last:border-none"
              >
                {/* Label */}
                <div className="p-4 text-sm text-gray-700">
                  {cat.label}
                </div>

                {/* Values */}
                {data.map((col, colIndex) => {
                  const value = col.values[rowIndex];

                  return (
                    <div
                      key={colIndex}
                      className={`p-4 flex flex-col gap-2 ${
                        colIndex !== 0
                          ? "border-l border-[#F3F4F6]"
                          : ""
                      }`}
                    >
                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => {
                          const isFilled = i < value;

                          return (
                            <span
                              key={i}
                              style={{
                                color: isFilled
                                  ? col.color
                                  : "#D1D5DB",
                              }}
                            >
                              {isFilled ? (
                                <StarIcon />
                              ) : (
                                <StarBlankIcon />
                              )}
                            </span>
                          );
                        })}
                      </div>

                      {/* Progress */}
                      <div className="flex items-center gap-3">
                        <div className="w-full h-[6.29px] bg-gray-200 rounded">
                          <div
                            className="h-full rounded"
                            style={{
                              width: `${(value / 5) * 100}%`,
                              backgroundColor: col.color,
                            }}
                          />
                        </div>

                        {/* Score */}
                        <p className="text-xs text-gray-500 text-right">
                          {value}/5
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Footer */}
            <div className="grid grid-cols-[120px_repeat(3,minmax(180px,1fr))] bg-gray-50 border-t border-[#F3F4F6]">
              {/* Label */}
              <div className="p-4 text-sm font-semibold text-[#6A7282]">
                MEDIA
              </div>

              {data.map((col, i) => {
                const avg = Math.round(col.avg);

                return (
                  <div
                    key={i}
                    className={`p-4 flex flex-col gap-2 ${
                      i !== 0
                        ? "border-l border-[#F3F4F6]"
                        : ""
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => {
                        const isFilled = starIndex < avg;

                        return (
                          <span
                            key={starIndex}
                            style={{
                              color: isFilled
                                ? col.color
                                : "#D1D5DB",
                            }}
                          >
                            {isFilled ? (
                              <StarIcon />
                            ) : (
                              <StarBlankIcon />
                            )}
                          </span>
                        );
                      })}
                    </div>

                    {/* Avg */}
                    <p
                      className="text-sm font-semibold"
                      style={{ color: col.color }}
                    >
                      {col.avg} / 5
                    </p>
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

export default ComparisonTableSection;