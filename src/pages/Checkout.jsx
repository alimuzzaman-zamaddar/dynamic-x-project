import React, { useState } from 'react'
import { ChevronRight, ChevronDown, Minus, Plus } from 'lucide-react'
import ProductImage from "../assets/img/product/product.png" // Update matching your asset directory paths
import { Link } from 'react-router'

export default function Checkout() {
  const [quantity, setQuantity] = useState(10)
  const itemPrice = 25.99
  const shippingFee = 0.5

  const totalProductPrice = itemPrice * quantity
  const grandTotal = totalProductPrice + shippingFee

  const handleQuantityChange = (value) => {
    if (value > 0) setQuantity(value)
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white min-h-screen">

      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 select-none">
        <Link to={"/dashboard/cart  "}>
          <span>My Cart</span>
        </Link>
        <ChevronRight size={14} />
        <span className="font-medium text-slate-800">Checkout</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        <div className="lg:col-span-2 space-y-8">

          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Your Order</h2>

            <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white">
              <figure className="w-36 h-36 bg-[#D9D9D9] rounded-xl p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img src={ProductImage} alt="Order Product" className="max-h-full max-w-full object-contain" />
              </figure>

              <div className="flex-1 w-full space-y-2">
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg sm:text-xl">3D Installation Guide Model.</h3>
                  <p className="text-sm text-slate-400 mt-0.5">SKU Q3P6L7.</p>
                </div>

                <div className="pt-1">
                  <button className="text-xs font-medium text-slate-600 bg-[#E2E8F0] hover:bg-slate-300 transition-colors px-3 py-1.5 rounded-lg cursor-pointer">
                    View Order Details
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-slate-800">${itemPrice}</span>

                  <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-medium text-sm text-slate-800">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Address</h2>

            <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 bg-white">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
                    <option>Indonesia</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-400 focus:outline-none focus:border-slate-400 cursor-pointer">
                    <option hidden>Province</option>
                    <option className="text-slate-700">Banten</option>
                    <option className="text-slate-700">West Java</option>
                    <option className="text-slate-700">Jakarta</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-400 focus:outline-none focus:border-slate-400 cursor-pointer">
                    <option hidden>City</option>
                    <option className="text-slate-700">Tangerang</option>
                    <option className="text-slate-700">Bandung</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-400 focus:outline-none focus:border-slate-400 cursor-pointer">
                    <option hidden>Postal Code</option>
                    <option className="text-slate-700">15111</option>
                    <option className="text-slate-700">40111</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Input Complete Address"
                  className="w-full bg-white border border-slate-300 text-sm rounded-xl p-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 resize-none"
                />
              </div>

            </div>
          </div>

        </div>

        <div className="border border-slate-200 rounded-2xl p-6 bg-white w-full space-y-6">

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-800">Total Product</h3>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>Total Product Price ({quantity} Item)</span>
              <span className="font-semibold text-slate-800">${totalProductPrice.toFixed(1)}</span>
            </div>
          </div>

          <hr className="border-t border-dashed border-slate-200" />

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-800">Total Shipping Fees</h3>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>Shipping Fees</span>
              <span className="font-semibold text-slate-800">${shippingFee.toFixed(1)}</span>
            </div>
          </div>

          <hr className="border-t border-slate-200" />

          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-slate-700">Grand total</span>
            <span className="text-3xl font-bold text-slate-900">${grandTotal.toFixed(1)}</span>
          </div>

          <button className="w-full bg-[#0F141C] hover:bg-slate-800 text-white font-medium py-3.5 rounded-full transition-all duration-200 cursor-pointer text-center text-sm tracking-wide shadow-sm">
            Pay Now
          </button>
        </div>

      </div>
    </div>
  )
}