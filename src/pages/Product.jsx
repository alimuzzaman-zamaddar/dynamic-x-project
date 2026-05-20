import Productimage from '../assets/img/product/product.png';
import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiShoppingCart } from 'react-icons/fi';

// Mock Data
const categories = {
  printMethods: ['All', 'SLA', 'FDM', 'SLS'],
  materials: ['All', 'Standard Resin', 'Tough Resin', 'Transparent']
};

const sortOptions = ['Latest', 'Price: Low to High', 'Price: High to Low', 'Popularity'];
const showOptions = [9, 12, 24, 36];

const mockProduct = {
  id: 1,
  title: "3D Installation Guide Model",
  price: 25.99,
  originalPrice: 100.00,
  tags: [
    { label: "SLA", className: "bg-orange-50 text-orange-600 border-orange-100" },
    { label: "Tough Resin", className: "bg-purple-50 text-purple-600 border-purple-100" }
  ],
  image: Productimage
};

const productsList = Array(9).fill(mockProduct).map((p, idx) => ({ ...p, id: idx + 1 }));

export default function ProductPage() {
  const [selectedMethod, setSelectedMethod] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const [sortBy, setSortBy] = useState('Latest');
  const [showCount, setShowCount] = useState(9);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isShowOpen, setIsShowOpen] = useState(false);

  const sortRef = useRef(null);
  const showRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
      if (showRef.current && !showRef.current.contains(event.target)) {
        setIsShowOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="text-slate-800 antialiased font-sans pt-30">
      <div className="max-w-max-width mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

        <aside className="w-full md:w-64 shrink-0 space-y-8 border-r border-slate-100 pr-6 hidden md:block">
          <div>
            <div className="flex items-center justify-between py-2 cursor-pointer group">
              <h3 className="text-xl font-semibold tracking-wide text-[#262626]">Print Method</h3>
              <FiChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
            <div className="mt-4 space-y-3">
              {categories.printMethods.map((method) => (
                <label key={method} className="flex items-center gap-3 cursor-pointer group text-base font-medium
                 text-[#262626] hover:text-slate-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedMethod === method}
                    onChange={() => setSelectedMethod(method)}
                    className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500 accent-slate-900"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          <div>
            <div className="flex items-center justify-between py-2 cursor-pointer group">
              <h3 className="text-xl font-semibold tracking-wide text-[#262626]">Material</h3>
              <FiChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
            <div className="mt-4 space-y-3">
              {categories.materials.map((material) => (
                <label key={material} className="flex items-center gap-3 cursor-pointer group text-base font-medium
                 text-[#262626] hover:text-slate-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedMaterial === material}
                    onChange={() => setSelectedMaterial(material)}
                    className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500 accent-slate-900"
                  />
                  <span>{material}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between pb-6 mb-6  text-sm z-20 relative">

            <div className="flex items-center gap-2 relative" ref={sortRef}>
              <span className="text-[#262626] text-lg font-medium">Sort by :</span>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center justify-between gap-4 px-3 py-1.5 min-w-25 border border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50"
              >
                {sortBy} <FiChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSortOpen && (
                <div className="absolute top-full left-14 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-30">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm ${sortBy === option ? 'text-slate-900 font-semibold bg-slate-50/50' : 'text-slate-600'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 relative" ref={showRef}>
              <span className="text-[#262626] text-lg font-medium">Show :</span>
              <button
                type="button"
                onClick={() => setIsShowOpen(!isShowOpen)}
                className="flex items-center justify-between gap-4 px-3 py-1.5 min-w-17.5 border border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50"
              >
                {showCount} <FiChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isShowOpen ? 'rotate-180' : ''}`} />
              </button>

              {isShowOpen && (
                <div className="absolute top-full right-0 mt-1 w-24 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-30">
                  {showOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setShowCount(option);
                        setIsShowOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm ${showCount === option ? 'text-slate-900 font-semibold bg-slate-50/50' : 'text-slate-600'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
            {productsList.map((product) => (
              <div
                key={product.id}
                className="group border border-slate-100 bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-200"
              >
                <div className="aspect-square w-full rounded-xl bg-slate-50 flex items-center justify-center p-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-100/30 pointer-events-none" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply  group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-sm font-medium px-3 py-1 rounded border ${tag.className}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h4 className="mt-3 text-[#262626] font-medium text-lg line-clamp-1 group-hover:text-slate-900 transition-colors">
                  {product.title}
                </h4>

                <div className="mt-3 flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#262626]">${product.price.toFixed(2)}</span>
                    <span className="text-lg text-[#5D5D5D] line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1.5 text-base text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400/20" />
                    Color
                  </div>
                  <button type="button" className="flex items-center cursor-pointer gap-1.5 bg-[#E5E7EB] hover:bg-slate-900 hover:text-white text-[#101828] text-base font-semibold px-3 py-2 rounded-lg transition-all duration-200 active:scale-95">
                    <FiShoppingCart className="w-3.5 h-3.5" />
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50">1</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">2</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50">3</button>
              <span className="w-9 h-9 flex items-center justify-center text-slate-400">...</span>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50">40</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50">41</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50">42</button>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-98 transition-all">
                <FiChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button type="button" className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-98 transition-all">
                Next <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </main>
      </div>
    </section>
  );
}