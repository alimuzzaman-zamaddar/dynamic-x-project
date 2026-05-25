import { Link } from 'react-router'
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductImage from '../assets/img/product/product.png'
import { Trash2, Minus, Plus, ShoppingBag, Tag, FileBox } from 'lucide-react'

export default function Cart() {
  const { items, updateQuantity, removeItem } = useCart()
  const [checkedIds, setCheckedIds] = useState(() => new Set(items.map((i) => i.cartId)))

  const currentIds = new Set(items.map((i) => i.cartId))
  const syncedCheckedIds = new Set([...checkedIds].filter((id) => currentIds.has(id)))

  const handleItemCheck = (cartId) => {
    setCheckedIds((prev) => {
      const next = new Set(prev)
      if (next.has(cartId)) next.delete(cartId)
      else next.add(cartId)
      return next
    })
  }

  const isAllSelected = items.length > 0 && items.every((i) => syncedCheckedIds.has(i.cartId))
  const handleSelectAll = () => {
    if (isAllSelected) {
      setCheckedIds(new Set())
    } else {
      setCheckedIds(new Set(items.map((i) => i.cartId)))
    }
  }

  const selectedItems = items.filter((i) => syncedCheckedIds.has(i.cartId))
  const activeItemsCount = selectedItems.reduce((s, i) => s + i.quantity, 0)
  const dynamicSubtotal = selectedItems.reduce((s, i) => s + i.price * i.quantity, 0)

  return (
    <div className="w-full bg-white px-0 sm:px-2">
      <div className="mb-6">
        <h1 className="lg:text-3xl text-xl text-[#0D0D12] font-medium">My Cart</h1>
        <p className="text-sm text-slate-400 mt-1">
          View and organize items you've selected for purchase.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
          <ShoppingBag size={56} className="text-slate-200" />
          <p className="text-xl font-medium text-slate-500">Your cart is empty</p>
          <p className="text-sm">Browse products and add items to your cart</p>
          <Link
            to="/product"
            className="mt-2 px-6 py-3 bg-[#0F141C] text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="selectAll"
              checked={isAllSelected}
              onChange={handleSelectAll}
              className="w-5 h-5 rounded border-gray-300 text-slate-900 focus:ring-0 accent-slate-900 cursor-pointer"
            />
            <label htmlFor="selectAll" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
              Select All ({items.length} item{items.length !== 1 ? 's' : ''})
            </label>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            <div className="xl:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.cartId} className="flex items-center gap-3 sm:gap-4 w-full">
                  <input
                    type="checkbox"
                    checked={syncedCheckedIds.has(item.cartId)}
                    onChange={() => handleItemCheck(item.cartId)}
                    className="w-5 h-5 rounded border-gray-300 text-slate-900 focus:ring-0 accent-slate-900 cursor-pointer shrink-0"
                  />

                  <div className="flex-1 bg-[#F8F9FA] sm:bg-white border border-slate-100 sm:border-slate-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center lg:gap-10 gap-5 relative">
                    {item.type === 'custom' && (
                      <span className="absolute top-3 left-3 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                        <Tag size={10} /> Custom
                      </span>
                    )}

                    {item.type === 'custom' ? (
                      <figure className="w-32 h-32 rounded-xl bg-linear-to-br from-violet-50 to-violet-100 border border-violet-200 flex flex-col items-center justify-center shrink-0 mx-auto sm:mx-0 gap-1">
                        <FileBox size={40} className="text-violet-400" />
                        <span className="text-[10px] text-violet-400 font-semibold uppercase tracking-wide px-2 text-center line-clamp-2">
                          {/* {item.customData?.fileName || 'STL File'} */}
                        </span>
                      </figure>
                    ) : (
                      <figure className="lg:w-40 md:w-30 w-20 lg:h-50 md:h-30 h-20 rounded-xl  p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                        <img
                          src={item.thumbnail_image || ProductImage}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </figure>
                    )}

                    <div className="flex-1 w-full space-y-1.5">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-2">
                          <h3 className="font-medium text-[#262626] text-base sm:text-xl leading-tight">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-[#63716E] py-0.5">{item.product_code}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 my-3">
                            {item.technology && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-100">
                                {item.technology}
                              </span>
                            )}
                            {item.material && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-100">
                                {item.material}
                              </span>
                            )}
                            {item.selectedColor && (
                              <span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-100">
                                <span
                                  className="w-2.5 h-2.5 rounded-full border border-slate-300 inline-block"
                                  style={{ backgroundColor: item.selectedColor }}
                                />
                                {item.selectedColor}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="text-red-400 hover:text-red-500 transition-colors p-1 cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between pt-3 sm:pt-2">
                        <div>
                          <span className="text-xl sm:text-2xl font-medium text-[#262626]">€{(item.price * item.quantity).toFixed(2)}</span>
                          {/* {item.quantity > 1 && (
                            <span className="text-xs text-slate-400 ml-1">(${item.price.toFixed(2)} each)</span>
                          )} */}
                        </div>

                        <div className="flex items-center border border-black rounded-lg bg-white overflow-hidden w-full sm:w-auto">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-4 sm:px-3 py-2 hover:bg-slate-50 text-black cursor-pointer flex-1 sm:flex-none text-center"
                          >
                            <Minus size={14} className="mx-auto" />
                          </button>
                          <span className="w-12 sm:w-10 text-center font-medium text-sm text-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-4 sm:px-3 py-2 hover:bg-slate-50 text-black cursor-pointer flex-1 sm:flex-none text-center"
                          >
                            <Plus size={14} className="mx-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Panel */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-white w-full">
              <h2 className="text-xl font-medium text-slate-800 mb-4">Order Summary</h2>

              {/* <div className="space-y-3 pb-4 border-b border-dashed border-slate-200">
                {selectedItems.map((item) => (
                  <div key={item.cartId} className="flex justify-between text-sm text-slate-500">
                    <span className="line-clamp-1 flex-1 pr-2">{item.title} × {item.quantity}</span>
                    <span className="font-medium text-black shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                {selectedItems.length === 0 && (
                  <p className="text-sm text-slate-400 text-center py-2">No items selected</p>
                )}
              </div> */}

              <div className="flex justify-between text-sm items-center py-4 border-b border-dashed border-slate-200 text-slate-500">
                <span className="text-[#5D5D5D] text-base">Total ({activeItemsCount} Item{activeItemsCount !== 1 ? 's' : ''})</span>
                <span className="font-medium text-black text-base">€{dynamicSubtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center py-6">
                <span className="text-base text-slate-600 font-medium">Subtotal</span>
                <span className="text-2xl font-medium text-[#262626]">€{dynamicSubtotal.toFixed(2)}</span>
              </div>

              <Link to="/dashboard/checkout" state={{ selectedCartIds: [...syncedCheckedIds] }}>
                <button
                  disabled={selectedItems.length === 0}
                  className="w-full bg-[#0F141C] hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full transition-all duration-200 cursor-pointer tracking-wide shadow-sm text-sm"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}