import React, { useState } from 'react'
import { Trash2, Minus, Plus } from 'lucide-react'
import ProductImage from "../assets/img/product/product.png"
import { Link } from 'react-router'

export default function Cart() {
  const [qty1, setQty1] = useState(10)
  const [qty2, setQty2] = useState(1)

  const [checkedItems, setCheckedItems] = useState({
    item1: true,
    item2: false
  })

  const item1Price = 25.99
  const item2Price = 49.99

  const handleItemCheckboxChange = (key) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const isAllSelected = Object.values(checkedItems).every(Boolean)

  const handleSelectAllToggle = () => {
    const targetState = !isAllSelected
    setCheckedItems({
      item1: targetState,
      item2: targetState
    })
  }

  const activeItemsCount = (checkedItems.item1 ? qty1 : 0) + (checkedItems.item2 ? qty2 : 0)
  const dynamicSubtotal = (
    (checkedItems.item1 ? item1Price * qty1 : 0) +
    (checkedItems.item2 ? item2Price * qty2 : 0)
  ).toFixed(1)

  return (
    <div className="w-full bg-white">
      <div className="mb-6">
        <h1 className="text-3xl text-[#0D0D12] font-medium">My Cart</h1>
        <p className="text-sm text-slate-400 mt-1">
          View and organize items you've selected for purchase.
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <input
          type="checkbox"
          id="selectAll"
          checked={isAllSelected}
          onChange={handleSelectAllToggle}
          className="w-5 h-5 rounded border-gray-300 text-slate-900 focus:ring-0 accent-slate-900 cursor-pointer"
        />
        <label htmlFor="selectAll" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
          Select All
        </label>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-2 space-y-4">

          {/* Card Item 1 */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <input
              type="checkbox"
              checked={checkedItems.item1}
              onChange={() => handleItemCheckboxChange('item1')}
              className="w-5 h-5 rounded border-gray-300 text-slate-900 focus:ring-0 accent-slate-900 cursor-pointer shrink-0"
            />

            <div className="flex-1 bg-[#F8F9FA] sm:bg-white border border-slate-100 sm:border-slate-200 rounded-lg p-6 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center lg:gap-10 gap-5 relative">
              <figure className="w-40 h-40 rounded-xl p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img src={ProductImage} alt="Product Model" className="max-h-full max-w-full object-contain" />
              </figure>

              <div className="flex-1 w-full space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#262626] text-base sm:text-2xl">3D Installation Guide Model</h3>
                    <p className="text-xs sm:text-base text-[#63716E] py-1">SKU A7X9B2.</p>
                  </div>
                  <button className="text-red-400 hover:text-red-500 transition-colors p-1 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="py-1">
                  <button className="text-sm font-medium text-[#0D0D12] bg-[#E2E8F0] hover:bg-slate-300 transition-colors px-3 py-2 rounded-lg cursor-pointer">
                    View Order Details
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 sm:pt-1">
                  <span className="text-2xl font-bold text-[#262626]">${item1Price}</span>

                  <div className="flex items-center border border-black rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => qty1 > 1 && setQty1(qty1 - 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-black cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-medium text-sm text-black">{qty1}</span>
                    <button
                      onClick={() => setQty1(qty1 + 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-black cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Item 2 */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <input
              type="checkbox"
              checked={checkedItems.item2}
              onChange={() => handleItemCheckboxChange('item2')}
              className="w-5 h-5 rounded border-gray-300 text-slate-900 focus:ring-0 accent-slate-900 cursor-pointer shrink-0"
            />

            <div className="flex-1 bg-[#F8F9FA] sm:bg-white border border-slate-100 sm:border-slate-200 rounded-lg p-6 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center lg:gap-10 gap-5 relative">
              <figure className="w-40 h-40 rounded-xl p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img src={ProductImage} alt="Product Model" className="max-h-full max-w-full object-contain" />
              </figure>

              <div className="flex-1 w-full space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#262626] text-base sm:text-2xl">3D Installation Guide Model</h3>
                    <p className="text-xs sm:text-base text-[#63716E] py-1">SKU M4T8Z1.</p>
                  </div>
                  <button className="text-red-400 hover:text-red-500 transition-colors p-1 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="py-1">
                  <button className="text-sm font-medium text-[#0D0D12] bg-[#E2E8F0] hover:bg-slate-300 transition-colors px-3 py-2 rounded-lg cursor-pointer">
                    View Order Details
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 sm:pt-1">
                  <span className="text-2xl font-bold text-[#262626]">${item2Price}</span>

                  <div className="flex items-center border border-black rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => qty2 > 1 && setQty2(qty2 - 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-black cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-medium text-sm text-black">{qty2}</span>
                    <button
                      onClick={() => setQty2(qty2 + 1)}
                      className="px-3 py-2 hover:bg-slate-50 text-black cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Total Ledger Panel */}
        <div className="border border-slate-200 rounded-2xl p-6 bg-white w-full">
          <h2 className="text-xl font-medium text-slate-800 mb-4">Total Product</h2>

          <div className="flex justify-between text-sm items-center pb-4 border-b border-dashed border-slate-200 text-slate-500">
            <span className="text-[#5D5D5D] text-base">Total Product Price ({activeItemsCount} Item)</span>
            <span className="font-semibold text-black text-base">${dynamicSubtotal}</span>
          </div>

          <div className="flex justify-between items-center py-6">
            <span className="text-base text-slate-600 font-medium">Subtotal</span>
            <span className="text-2xl font-medium text-[#262626]">${dynamicSubtotal}</span>
          </div>
          <Link to={"/dashboard/checkout"}>
            <button className="w-full bg-[#0F141C] hover:bg-slate-800 text-white font-semibold py-3.5 rounded-full transition-all duration-200 cursor-pointer tracking-wide shadow-sm text-sm">
              Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}