import React, { useEffect, useState } from 'react'
import { X, Loader2, Package, FileBox, Check, MapPin, CreditCard } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const STATUS_STEP = {
  pending: 1,
  placed: 1,
  production: 2,
  quality_check: 3,
  shipped: 4,
  delivered: 4,
}

const STEPS = [
  { id: 1, name: 'Placed' },
  { id: 2, name: 'Production' },
  { id: 3, name: 'Quality Check' },
  { id: 4, name: 'Shipped' },
]

const STATUS_COLORS = {
  pending:       'bg-amber-100 text-amber-700',
  production:    'bg-blue-100 text-blue-700',
  quality_check: 'bg-purple-100 text-purple-700',
  shipped:       'bg-cyan-100 text-cyan-700',
  delivered:     'bg-green-100 text-green-700',
  completed:     'bg-green-100 text-green-700',
  cancelled:     'bg-red-100 text-red-700',
}

/** Safely parse any numeric-like value; returns '0.00' string on failure */
const fmt = (val) => {
  const n = parseFloat(val)
  return isNaN(n) ? '0.00' : n.toFixed(2)
}

/** Try multiple field names for the order grand total */
const getTotal = (order) =>
  order.total ??
  order.total_amount ??
  order.grand_total ??
  order.amount ??
  0

export default function OrderDetailsModal({ orderId, orderNumber, onClose }) {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem('token')
      if (!token || !orderId) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`${BASE_URL}/auth/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
        const json = await res.json()
        if (res.ok && json.success && json.data) {
          setOrder(json.data)
        } else {
          setError(json.message || 'Failed to load order details.')
        }
      } catch (err) {
        console.error('Failed to fetch order details:', err)
        setError('Network error. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [orderId])

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const currentStep = order ? (STATUS_STEP[order.status] ?? 1) : 1

  return (
    <div
      className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
          <div>
            <h2 className="text-lg font-semibold text-[#0D0D12]">Order Details</h2>
            <p className="text-sm text-slate-400 mt-0.5">{orderNumber}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-6">

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={32} className="animate-spin text-slate-300" />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-16 text-sm text-red-500">{error}</div>
          )}

          {/* Content */}
          {!loading && !error && order && (() => {
            const items = order.items ?? order.order_items ?? []
            const hasCustom = items.some(i => i.item_type === 'custom_print' || i.type === 'custom_print')

            return (
              <>
                {/* Status badge + dates */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${STATUS_COLORS[order.status] ?? 'bg-slate-100 text-slate-600'}`}>
                    {order.status_label ?? order.status}
                  </span>
                  <span className="text-xs text-slate-400">Placed on {order.placed_date}</span>
                  {order.estimated_delivery && (
                    <span className="text-xs text-slate-400">Est. delivery: {order.estimated_delivery}</span>
                  )}
                </div>

                {/* Stepper */}
                <div className="bg-[#F8F9FA] rounded-2xl p-4">
                  <div className="grid grid-cols-4 gap-0">
                    {STEPS.map((step, idx) => {
                      const done = currentStep >= step.id
                      const isLast = idx === STEPS.length - 1
                      return (
                        <div key={step.id} className="flex flex-col items-center gap-2 relative">
                          <div className="relative flex items-center justify-center w-full">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0 transition-all ${done ? 'bg-[#101828] text-white' : 'bg-[#DCE1E7] text-transparent'}`}>
                              {done && <Check size={14} strokeWidth={3} />}
                            </div>
                            {!isLast && (
                              <div className="absolute left-1/2 w-full top-1/2 -translate-y-1/2 h-[2px] bg-[#DCE1E7] z-0">
                                <div className="h-full bg-[#101828] transition-all duration-300" style={{ width: currentStep > step.id ? '100%' : '0%' }} />
                              </div>
                            )}
                          </div>
                          <span className="text-[11px] font-medium text-slate-600 text-center leading-tight">{step.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Items */}
                <div>
                  <h3 className="text-sm font-semibold text-[#0D0D12] mb-3">
                    Items ({items.length})
                    {hasCustom && (
                      <span className="ml-2 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-full">
                        Includes Custom Prints
                      </span>
                    )}
                  </h3>

                  <div className="space-y-3">
                    {items.map((item, idx) => {
                      const isCustom = item.item_type === 'custom_print' || item.type === 'custom_print'
                      return (
                        <div
                          key={item.id ?? idx}
                          className={`rounded-2xl p-4 flex items-start gap-4 border ${isCustom ? 'bg-violet-50 border-violet-100' : 'bg-[#F8F9FA] border-slate-100'}`}
                        >
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isCustom ? 'bg-violet-100' : 'bg-slate-200'}`}>
                            {isCustom
                              ? <FileBox size={22} className="text-violet-500" />
                              : <Package size={22} className="text-slate-500" />
                            }
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-semibold text-[#0D0D12] truncate">
                                {item.name ?? item.product_name ?? (isCustom ? 'Custom 3D Print' : 'Product')}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isCustom ? 'bg-violet-100 text-violet-600' : 'bg-slate-200 text-slate-600'}`}>
                                {isCustom ? 'Custom Print' : 'Product'}
                              </span>
                            </div>

                            {isCustom && (
                              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                                {item.technology && <span className="text-xs text-slate-500">Tech: <b>{item.technology}</b></span>}
                                {item.material && <span className="text-xs text-slate-500">Material: <b>{item.material}</b></span>}
                                {item.color && <span className="text-xs text-slate-500">Color: <b>{item.color}</b></span>}
                                {item.print_time_hours && <span className="text-xs text-slate-500">Print time: <b>{item.print_time_hours}h</b></span>}
                              </div>
                            )}

                            {!isCustom && item.product_code && (
                              <p className="text-xs text-slate-400 mt-0.5">{item.product_code}</p>
                            )}

                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs text-slate-500">Qty: <b>{item.quantity}</b></span>
                              <span className="text-xs text-slate-500">Unit: <b>{order.currency} {fmt(item.unit_price ?? item.price)}</b></span>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="text-right shrink-0">
                            <span className="text-sm font-bold text-[#0D0D12]">
                              {order.currency} {fmt(item.total_price ?? item.subtotal)}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Shipping address */}
                {(order.shipping_address || order.shipping_city) && (
                  <div className="bg-[#F8F9FA] rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={15} className="text-slate-500 shrink-0" />
                      <span className="text-sm font-semibold text-[#0D0D12]">Shipping Address</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {[order.shipping_address, order.shipping_city, order.shipping_state, order.shipping_postal_code, order.shipping_country_code]
                        .filter(Boolean).join(', ')}
                    </p>
                    {order.shipping_phone && (
                      <p className="text-xs text-slate-400 mt-1">{order.shipping_phone}</p>
                    )}
                  </div>
                )}

                {/* Payment summary */}
                <div className="bg-[#F8F9FA] rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={15} className="text-slate-500 shrink-0" />
                    <span className="text-sm font-semibold text-[#0D0D12]">Payment Summary</span>
                  </div>
                  {[
                    { label: 'Subtotal', value: order.subtotal ?? order.sub_total },
                    { label: 'Shipping', value: order.shipping_cost ?? order.shipping },
                    { label: 'Tax', value: order.tax },
                    { label: 'Discount', value: order.discount },
                  ].map(({ label, value }) =>
                    value != null ? (
                      <div key={label} className="flex justify-between text-sm text-slate-500">
                        <span>{label}</span>
                        <span>{order.currency} {fmt(value)}</span>
                      </div>
                    ) : null
                  )}
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-semibold text-[#0D0D12]">
                    <span>Total</span>
                    <span>{order.currency ?? 'USD'} {fmt(getTotal(order))}</span>
                  </div>
                  {order.payment_method && (
                    <p className="text-xs text-slate-400 pt-1 capitalize">Payment: {order.payment_method}</p>
                  )}
                </div>
              </>
            )
          })()}
        </div>

        {/* ── Footer ── */}
        <div className="px-6 py-4 border-t border-slate-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-[#101828] hover:bg-slate-800 text-white text-sm font-semibold py-3 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}
