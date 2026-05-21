import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import ProductImage from "../assets/img/product/product.png"
import Profile from "../assets/img/product/profile.png"
import Company from "../assets/img/product/company.jpg"
import Me from "../assets/img/product/me.png"
import { ChevronDown, Minus, MoreVertical, Plus, ShoppingCart } from 'lucide-react'

export default function ProductDetails() {
  const [comment, setComment] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('black')

  // State for active image preview tracking
  const [selectedImage, setSelectedImage] = useState(ProductImage)

  // Demo gallery image array (replace with actual unique paths if available)
  const productGallery = [ProductImage, ProductImage, ProductImage]

  const colors = [
    { name: 'black', hex: '#000000' },
    { name: 'white', hex: '#E8E8E8' },
    { name: 'gray', hex: '#808080' },
  ]

  const handleQuantityChange = (value) => {
    if (value > 0) setQuantity(value)
  }

  const unitPrice = 25.99
  const subtotal = (unitPrice * quantity).toFixed(2)

  return (
    <section className='pt-24 md:pt-40 pb-20 px-4 bg-white'>
      <div className="max-w-[1440px] mx-auto">

        {/* Adjusted grid system triggers stacked column logic below 1150px/1280px scales */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">

          {/* Left Side Content (Takes up 2 columns on extra large desktop arrays) */}
          <div className="w-full xl:col-span-2 space-y-12">

            {/* Gallery Frame */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
              {/* Thumbnails Container */}
              <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0 order-2 sm:order-1">
                {productGallery.map((imgUrl, idx) => (
                  <figure
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-20 h-16 sm:w-25 sm:h-20 bg-[#D9D9D9] border-2 rounded-xl cursor-pointer p-2 shrink-0 transition-all ${selectedImage === imgUrl ? 'border-black scale-102 shadow-xs' : 'border-slate-300 hover:border-slate-500'
                      }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className='h-full w-full object-contain' />
                  </figure>
                ))}
              </div>

              {/* Main Preview Component Window */}
              <div className="border border-gray-300 p-3 rounded-3xl w-full h-[320px] sm:h-[400px] xl:max-h-125 order-1 sm:order-2">
                <figure className='bg-[#D9D9D9] rounded-xl w-full h-full p-6 sm:p-10 flex items-center justify-center'>
                  <img src={selectedImage} alt="Main Product View" className='max-h-full max-w-full object-contain' />
                </figure>
              </div>
            </div>

            {/* Discussion Meta Structure */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-4">

              {/* Sidebar filter framework */}
              <div className="p-5 rounded-3xl border border-gray-300 shrink-0 w-full lg:w-60 h-fit">
                <div className="flex justify-between items-center">
                  <h5 className='text-xl text-[#262626] font-semibold'>Type</h5>
                  <IoIosArrowDown />
                </div>
                <div className="flex flex-row lg:flex-col flex-wrap gap-x-6 gap-y-3 pt-5 lg:space-y-3">
                  {['All', 'Answered', 'Not Answered'].map((label) => (
                    <label key={label} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-slate-900 border-slate-300 focus:ring-0" />
                      <span className='text-base font-semibold text-[#262626]'>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Forum Timeline Thread Block */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-[#262626] font-semibold">Sort by :</span>
                    <div className="relative">
                      <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
                        <option className='text-base font-normal text-gray-400'>Latest</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                    </div>
                  </div>
                  <button className="bg-white border border-slate-300 hover:bg-slate-50 text-[#101828] text-sm font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer w-fit">
                    Start Discussion
                  </button>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 shadow-xs space-y-5 mt-8">
                  {/* User Entry Original Question */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Profile} alt="Anna Sam" className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <h4 className="text-base font-semibold text-[#262626]">Anna Sam</h4>
                          <p className="text-sm text-[#737373]">2022-09-24 18:31</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
                    </div>
                    <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                      What DPI settings does the Rexus Xierra X16 offer, and how can users adjust them to suit their gaming preferences?
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <button className="text-base font-semibold text-[#262626] hover:underline">Reply</button>
                      <button className="flex items-center gap-1 text-base font-semibold text-[#262626] hover:text-slate-700">
                        <span>Hide Reply</span>
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Merchant Response Bubble */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 space-y-3 border border-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xs overflow-hidden">
                          <img src={Company} alt="Company" className='object-cover w-full h-full' />
                        </div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-semibold text-[#262626]">Company</h4>
                          <span className="bg-orange-100 text-xs sm:text-base font-medium text-[#262626] px-1.5 py-0.5 rounded">Store</span>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={14} /></button>
                    </div>
                    <p className="text-sm text-[#737373]">2022-09-24 18:31</p>
                    <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                      Learn about the mouse's DPI range and the easy-to-use software for DPI customization and sensitivity adjustment
                    </p>
                  </div>

                  {/* Comment input module box */}
                  <div className="flex gap-3 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden">
                      <img src={Me} alt="My Avatar" className='object-cover w-full h-full' />
                    </div>
                    <div className="flex-1 space-y-3">
                      <input
                        type="text"
                        placeholder="Write Your Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full text-sm text-slate-700 placeholder-slate-400 bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-slate-400"
                      />
                      <div className="flex justify-end gap-2">
                        <button className="px-4 py-2 sm:px-5 sm:py-3 border border-slate-200 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer">
                          Cancel
                        </button>
                        <button className="px-4 py-2 sm:px-5 sm:py-3 bg-[#0F141C] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 cursor-pointer">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Checkout Panel Module */}
          <div className="p-6 border border-[#D8DBDF] rounded-3xl h-fit w-full xl:sticky xl:top-6 bg-white">
            <h3 className='text-2xl text-[#262626] font-medium'>3D Installation Guide Model</h3>

            <div className="pt-4 flex gap-3">
              <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded border border-orange-100">SLA</span>
              <span className="bg-purple-50 text-purple-600 text-xs font-medium px-3 py-1 rounded border border-purple-100">Tough Resin</span>
            </div>

            <div className="flex items-baseline gap-2 py-6">
              <span className="text-3xl font-bold text-[#262626]">${unitPrice}</span>
              <span className="text-lg text-[#5D5D5D] line-through">$00.00</span>
            </div>

            <div>
              <p className="text-slate-700 leading-relaxed text-sm">
                The Xierra X16 mouse is a cutting-edge peripheral that combines precision and comfort. Its ergonomic design fits snugly in your hand, while its high-precision sensor ensures smooth and accurate movements.
              </p>
              <button className="text-purple-500 text-sm font-semibold mt-2 transition-colors cursor-pointer block">
                View More →
              </button>
            </div>

            {/* Colors picker array component */}
            <div className="space-y-3 py-5">
              <label className="text-sm font-semibold text-[#737373] block">Color</label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === color.name
                      ? 'border-slate-900 shadow-md scale-105'
                      : 'border-slate-300 hover:border-slate-500'
                      }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Counter adjustment controls */}
            <div className="space-y-3 pb-5">
              <label className="text-sm font-semibold text-[#737373] block">Quantity</label>
              <div className="flex items-center border border-[#262626] rounded-3xl bg-white overflow-hidden justify-between max-w-[200px]">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-12 text-center font-bold text-lg border-0 outline-none bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Checkout Pricing breakdown meta item */}
            <div className="py-4 border-t border-slate-100">
              <div className="flex justify-between text-sm text-slate-600 items-center">
                <span className='text-[#737373] text-lg font-medium'>Subtotal</span>
                <span className="text-3xl font-medium text-[#262626]">${subtotal}</span>
              </div>
            </div>

            {/* Shopping Action CTAs */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer">
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
      </div>
    </section>
  )
}