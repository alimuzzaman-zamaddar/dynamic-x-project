import React, { useState } from 'react'
import ProductImage from "../assets/img/product/product.png"
import { ChevronDown, Heart, Minus, MoreVertical, Plus, Share2, ShoppingCart } from 'lucide-react'
import { IoIosArrowDown } from 'react-icons/io'

export default function ProductDetails() {
  const [comment, setComment] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('black')

  const colors = [
    { name: 'black', hex: '#000000' },
    { name: 'white', hex: '#E8E8E8' },
    { name: 'gray', hex: '#808080' },
  ]

  const handleQuantityChange = (value) => {
    if (value > 0) setQuantity(value)
  }

  return (
    <section className='pt-40 pb-20 px-4'>
      <div className="max-w-max-width mx-auto">

        <div className="flex gap-10">
          {/* left side */}
          <div className="w-full">
            <div className="flex gap-10 w-full">
              <div className="flex flex-col gap-5">
                <figure className='w-25 h-20 bg-[#D9D9D9] border-2 border-black rounded-xl cursor-pointer p-3'>
                  <img src={ProductImage} alt="ProductImage" className='h-full w-full' />
                </figure>
                <figure className='w-25 h-20 bg-[#D9D9D9] border-2 border-black rounded-xl cursor-pointer p-3'>
                  <img src={ProductImage} alt="ProductImage" className='h-full w-full' />
                </figure>
                <figure className='w-25 h-20 bg-[#D9D9D9] border-2 border-black rounded-xl cursor-pointer p-3'>
                  <img src={ProductImage} alt="ProductImage" className='h-full w-full' />
                </figure>
              </div>
              <div className="border border-gray-300 p-3 rounded-3xl w-full max-h-125">
                <figure className='bg-[#D9D9D9] rounded-xl cursor-pointer w-full h-full p-10'>
                  <img src={ProductImage} alt="ProductImage" className='h-full w-full object-contain' />
                </figure>
              </div>
            </div>
            <div className="pt-12 flex gap-12">
              <div className="p-4 rounded-3xl border border-gray-300 shrink-0 h-fit">
                <div className="flex gap-10 items-center">
                  <h5 className='text-xl text-[#262626] font-semibold'>Type</h5>
                  <IoIosArrowDown />
                </div>
                <div className="space-y-3 pt-5">
                  <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-slate-900 border-slate-300 focus:ring-0" />
                    <span className='text-base font-semibold text-[#262626]'>All</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-slate-900 border-slate-300 focus:ring-0" />
                    <span className='text-base font-semibold text-[#262626]'>Answered</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-slate-900 border-slate-300 focus:ring-0" />
                    <span className='text-base font-semibold text-[#262626]'>Not Answered</span>
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-[#262626] font-semibold">Sort by :</span>
                    <div className="relative">
                      <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
                        <option className='text-base font-normal text-gray-400'>Latest</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                    </div>
                  </div>
                  <button className="bg-white border border-slate-300 hover:bg-slate-50 text-[#101828] text-sm font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer">
                    Start Discussion
                  </button>
                </div>
                <div className="md:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-5 mt-8">

                  {/* User Original Question Post */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="/api/placeholder/40/40" alt="Anna Sam" className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">Anna Sam</h4>
                          <p className="text-xs text-slate-400">2022-09-24 18:31</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      What DPI settings does the Rexus Xierra X16 offer, and how can users adjust them to suit their gaming preferences?
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <button className="text-xs font-semibold text-slate-600 hover:underline">Reply</button>
                      <button className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-700">
                        <span>Hide Reply</span>
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] rounded-xl p-4 ml-2 sm:ml-6 space-y-3 border border-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xs">
                          ⏰
                        </div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-800">Company</h4>
                          <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Store</span>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={14} /></button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Learn about the mouse's DPI range and the easy-to-use software for DPI customization and sensitivity adjustment
                    </p>
                    <p className="text-[11px] text-slate-400">2022-09-24 18:31</p>
                  </div>

                  {/* User Input Reply Area */}
                  <div className="flex gap-3 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      G
                    </div>
                    <div className="flex-1 space-y-3">
                      <input
                        type="text"
                        placeholder="Write Your Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full text-sm text-slate-700 placeholder-slate-400 bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400"
                      />
                      <div className="flex justify-end gap-2">
                        <button className="px-4 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50">
                          Cancel
                        </button>
                        <button className="px-4 py-1.5 bg-[#0F141C] text-white rounded-xl text-xs font-semibold hover:bg-slate-800">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="p-6 border border-[#D8DBDF] rounded-3xl h-fit">
            <h3 className='text-2xl text-[#262626] font-medium'>3D Installation Guide Model</h3>
            <div className="pt-5 flex gap-5">
              <div className="bg-orange-50 text-orange-600 border-orange-100">
                <h4 className='text-sm font-medium px-3 py-1 rounded border'>SLA </h4>
              </div>
              <div className="bg-purple-50 text-purple-600 border-purple-100">
                <h4 className='text-sm font-medium px-3 py-1 rounded border'>Tough Resin </h4>
              </div>
            </div>
            <div className="flex items-baseline gap-2 py-8">
              <span className="text-3xl font-bold text-[#262626]">$25.99</span>
              <span className="text-lg text-[#5D5D5D] line-through">$00.00</span>
            </div>
            <div>
              <p className="text-slate-700 leading-relaxed text-sm max-w-100">
                The Xierra X16 mouse is a cutting-edge peripheral that combines precision and comfort. Its ergonomic design fits snugly in your hand, while its high-precision sensor ensures smooth and accurate.
              </p>
              <button className="text-purple-500 text-sm font-semibold mt-2  transition-colors cursor-pointer">
                View More →
              </button>
            </div>

            <div className="space-y-3 py-5">
              <label className="text-sm font-semibold text-[#737373] block">
                Color
              </label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === color.name
                      ? 'border-slate-900 shadow-lg scale-110'
                      : 'border-slate-300 hover:border-slate-500'
                      }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-[#737373] block">
                Quantity
              </label>
              <div className="flex items-center border border-[#262626] rounded-3xl bg-white gap-5 overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="flex-1 text-center font-bold text-lg border-0 outline-none bg-white"
                />

                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between text-sm text-slate-600 items-center">
                <span className='text-[#737373] text-lg font-medium'>Subtotal</span>
                <span className="text-3xl font-medium text-[#262626]">$259.9</span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer">
                <ShoppingCart size={20} />
                Buy Now
              </button>
              <button className="w-full border-2 border-slate-300 hover:border-slate-900 text-slate-900 font-bold py-3 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-slate-50 cursor-pointer">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}
