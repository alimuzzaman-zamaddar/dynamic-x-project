import React, { useState, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import ProductImage from '../assets/img/product/product.png'
import { ChevronRight, ChevronDown, Minus, Plus, Tag, ShoppingBag, FileBox, Loader2 } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const SHIPPING_FEE = 0.5

export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { showToast } = useToast()
  const { items, updateQuantity, clearCart } = useCart()

  const selectedCartIds = useMemo(() => {
    const state = location.state?.selectedCartIds
    if (state && Array.isArray(state) && state.length > 0) return new Set(state)
    return new Set(items.map((i) => i.cartId))
  }, [location.state, items])

  const checkoutItems = items.filter((i) => selectedCartIds.has(i.cartId))

  const [qtyOverride, setQtyOverride] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)

  const getQty = (item) => qtyOverride[item.cartId] ?? item.quantity
  const handleQtyChange = (cartId, value) => {
    if (value < 1) return
    setQtyOverride((prev) => ({ ...prev, [cartId]: value }))
    updateQuantity(cartId, value)
  }

  const totalProductPrice = checkoutItems.reduce((s, i) => s + i.price * getQty(i), 0)
  const grandTotal = totalProductPrice + SHIPPING_FEE

  const [address, setAddress] = useState({
    country: 'IT',
    province: '',
    city: '',
    postal: '',
    fullAddress: '',
  })

  const handleCheckout = async () => {
    if (!address.fullAddress.trim() || !address.city.trim() || !address.postal.trim()) {
      setCheckoutError('Please fill in your shipping address details.')
      return
    }
    setCheckoutError(null)
    setSubmitting(true)
    const token = localStorage.getItem('token')
    try {
      const cartItemsPayload = checkoutItems.map((item) => {
        if (item.type === 'custom') {
          const cd = item.customData || {}
          return {
            item_type: 'custom_print',
            name: item.title,
            description: cd.description || '',
            quantity: getQty(item),
            unit_price: item.price,
            total_price: item.price * getQty(item),
            technology_id: cd.technology_id ?? null,
            material_id: cd.material_id ?? null,
            color_id: cd.color_id ?? null,
            uploaded_file: cd.uploaded_file || cd.file_path || '',
            ...(cd.volume_cm3 != null ? { volume_cm3: cd.volume_cm3 } : {}),
            ...(cd.material_usage_grams != null ? { material_usage_grams: cd.material_usage_grams } : {}),
            ...(cd.print_time_hours != null ? { print_time_hours: cd.print_time_hours } : {}),
          }
        }
        return {
          item_type: 'product',
          product_id: item.id,
          quantity: getQty(item),
          unit_price: item.price,
          total_price: item.price * getQty(item),
        }
      })

      const payload = {
        cart_items: cartItemsPayload,
        shipping_address: address.fullAddress,
        shipping_city: address.city,
        shipping_state: address.province,
        shipping_postal_code: address.postal,
        shipping_country_code: address.country,
        shipping_phone: user?.phone || '',
        subtotal: totalProductPrice,
        shipping_cost: SHIPPING_FEE,
        tax: 0,
        discount: 0,
        total: grandTotal,
        currency: 'USD',
        payment_method: 'stripe',
        payment_status: 'pending',
        transaction_id: '',
        notes: '',
      }

      const res = await fetch(`${BASE_URL}/auth/checkout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (res.ok && json.success) {
        clearCart()
        showToast('Order placed successfully! 🎉', 'success')
        navigate('/dashboard', { replace: true })
      } else {
        setCheckoutError(json.message || 'Checkout failed. Please try again.')
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setCheckoutError('Network error. Please check your connection.')
    } finally {
      setSubmitting(false)
    }
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 select-none">
          <Link to="/dashboard/cart"><span>My Cart</span></Link>
          <ChevronRight size={14} />
          <span className="font-medium text-slate-800">Checkout</span>
        </nav>
        <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
          <ShoppingBag size={56} className="text-slate-200" />
          <p className="text-xl font-medium text-slate-500">No items to checkout</p>
          <Link
            to="/dashboard/cart"
            className="mt-2 px-6 py-3 bg-[#0F141C] text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 select-none">
        <Link to="/dashboard/cart">
          <span className="hover:text-slate-600 transition-colors">My Cart</span>
        </Link>
        <ChevronRight size={14} />
        <span className="font-medium text-slate-800">Checkout</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Order Items */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Your Order</h2>
            <div className="space-y-4">
              {checkoutItems.map((item) => (
                <div
                  key={item.cartId}
                  className="border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white relative"
                >
                  {/* Custom Badge */}
                  {item.type === 'custom' && (
                    <span className="absolute top-3 right-3 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                      <Tag size={10} /> Custom Order
                    </span>
                  )}

                  {item.type === 'custom' ? (
                    <figure className="w-32 h-32 bg-linear-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-xl flex flex-col items-center justify-center shrink-0 mx-auto sm:mx-0 gap-1">
                      <FileBox size={40} className="text-violet-400" />
                      <span className="text-[10px] text-violet-400 font-semibold uppercase tracking-wide px-2 text-center line-clamp-2">
                        {/* {item.customData?.fileName || 'STL File'} */}
                      </span>
                    </figure>
                  ) : (
                    <figure className="w-32 h-32 bg-[#D9D9D9] rounded-xl p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                      <img
                        src={item.thumbnail_image || ProductImage}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </figure>
                  )}

                  <div className="flex-1 w-full space-y-2">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg sm:text-xl">{item.title}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{item.product_code}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 py-3">
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
                            className="w-2.5 h-2.5 rounded-full border border-slate-300"
                            style={{ backgroundColor: item.selectedColor }}
                          />
                          {item.selectedColor}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-2 gap-3">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-slate-800">${(item.price * getQty(item)).toFixed(2)}</span>
                        {getQty(item) > 1 && (
                          <span className="text-xs text-slate-400 ml-1 block sm:inline-block">(${item.price.toFixed(2)} × {getQty(item)})</span>
                        )}
                      </div>

                      <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden w-full sm:w-auto">
                        <button
                          onClick={() => handleQtyChange(item.cartId, getQty(item) - 1)}
                          className="px-4 sm:px-3 py-2 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer flex-1 sm:flex-none text-center"
                        >
                          <Minus size={14} className="mx-auto" />
                        </button>
                        <span className="w-12 sm:w-10 text-center font-medium text-sm text-slate-800">{getQty(item)}</span>
                        <button
                          onClick={() => handleQtyChange(item.cartId, getQty(item) + 1)}
                          className="px-4 sm:px-3 py-2 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer flex-1 sm:flex-none text-center"
                        >
                          <Plus size={14} className="mx-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Shipping Address</h2>

            <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Country */}
                <div className="relative">
                  <select
                    value={address.country}
                    onChange={(e) => setAddress((a) => ({ ...a, country: e.target.value }))}
                    className="w-full appearance-none bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer"
                  >
                    <option value="IT">Italy</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="US">USA</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                {/* Province */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Province / Region"
                    value={address.province}
                    onChange={(e) => setAddress((a) => ({ ...a, province: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                {/* City */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress((a) => ({ ...a, city: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>

                {/* Postal Code */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={address.postal}
                    onChange={(e) => setAddress((a) => ({ ...a, postal: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-sm rounded-xl pl-4 pr-10 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Complete Address (Street, Building, Apartment...)"
                  value={address.fullAddress}
                  onChange={(e) => setAddress((a) => ({ ...a, fullAddress: e.target.value }))}
                  className="w-full bg-white border border-slate-300 text-sm rounded-xl p-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="border border-slate-200 rounded-2xl p-6 bg-white w-full space-y-6 lg:sticky lg:top-6">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-800">Order Summary</h3>
            {/* {checkoutItems.map((item) => (
              <div key={item.cartId} className="flex justify-between items-center text-sm text-slate-500">
                <span className="line-clamp-1 flex-1 pr-2">
                  {item.type === 'custom' && <span className="text-violet-500 font-medium">[Custom] </span>}
                  {item.title} × {getQty(item)}
                </span>
                <span className="font-semibold text-slate-800 shrink-0">${(item.price * getQty(item)).toFixed(2)}</span>
              </div>
            ))} */}
          </div>

          <hr className="border-t border-dashed border-slate-200" />

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-800">Total Products</h3>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>Total Product Price ({checkoutItems.reduce((s, i) => s + getQty(i), 0)} Items)</span>
              <span className="font-semibold text-slate-800">${totalProductPrice.toFixed(2)}</span>
            </div>
          </div>

          <hr className="border-t border-dashed border-slate-200" />

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-800">Shipping</h3>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>Shipping Fee</span>
              <span className="font-semibold text-slate-800">${SHIPPING_FEE.toFixed(2)}</span>
            </div>
          </div>

          <hr className="border-t border-slate-200" />

          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-slate-700">Grand Total :</span>
            <span className="lg:text-2xl text-lg font-medium text-slate-900">${grandTotal.toFixed(2)}</span>
          </div>

          {checkoutError && (
            <p className="text-sm text-red-500 text-center">{checkoutError}</p>
          )}

          <button
            onClick={handleCheckout}
            disabled={submitting}
            className="w-full bg-[#0F141C] hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-full transition-all duration-200 cursor-pointer text-center text-sm tracking-wide shadow-sm flex items-center justify-center gap-2"
          >
            {submitting ? (
              <><Loader2 size={16} className="animate-spin" /> Processing...</>
            ) : (
              'Pay Now'
            )}
          </button>
        </div>

      </div>
    </div>
  )
}