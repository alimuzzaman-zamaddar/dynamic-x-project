import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import {
  CheckCircle,
  Package,
  MapPin,
  Receipt,
  Printer,
  ArrowRight,
  ShoppingBag,
  FileBox,
  Download,
  Copy,
  Check,
} from 'lucide-react'

export default function PaymentSuccess() {
  const [order, setOrder] = useState(null)
  const [copiedField, setCopiedField] = useState(null)
  const [showContent, setShowContent] = useState(false)
  const invoiceRef = useRef(null)


  useEffect(() => {
    try {
      const stored = localStorage.getItem('dx_pending_order')
      if (stored) {
        setOrder(JSON.parse(stored))
      }
    } catch {
      // ignore
    }

    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  const formatDate = (iso) => {
    if (!iso) return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatCurrency = (amount) => {
    return `€${Number(amount || 0).toFixed(2)}`
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle size={40} className="text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Payment Successful!</h1>
          <p className="text-slate-500">Your payment has been processed successfully.</p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-[#0F141C] text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors"
          >
            Go to Orders <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Print-only styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print-area, .print-area * { visibility: visible; }
          .print-area { position: absolute; left: 0; top: 0; width: 100%; padding: 20px; }
          .no-print { display: none !important; }
        }
        @keyframes successPulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes checkDraw {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes confettiBurst {
          0% { opacity: 1; transform: translateY(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-100px) rotate(720deg); }
        }
        .animate-success-pulse { animation: successPulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-fade-slide-up { animation: fadeSlideUp 0.5s ease-out forwards; }
      `}</style>

      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 pb-16 mt-30">
        <div className="no-print relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-emerald-50/80 via-emerald-50/30 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className={`relative max-w-2xl mx-auto text-center pt-12 sm:pt-16 pb-8 px-4 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Animated success icon */}
            <div className="mb-6 animate-success-pulse">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <div className="relative w-24 h-24 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" style={{ strokeDasharray: 100, animation: 'checkDraw 0.6s ease-out 0.3s both' }} />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
              Payment Successful!
            </h1>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Thank you for your order. Your payment has been processed and your order is being prepared.
            </p>

            {/* Order ID badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
              <span className="text-sm text-slate-400">Order ID</span>
              <span className="font-mono font-bold text-slate-800 text-lg">#{order.order_id}</span>
              <button
                onClick={() => handleCopy(String(order.order_id), 'orderId')}
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Copy Order ID"
              >
                {copiedField === 'orderId' ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} className="text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Invoice Content */}
        <div
          ref={invoiceRef}
          className={`print-area max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Action Buttons */}
          <div className="no-print flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-sm"
            >
              <Printer size={16} /> Print Invoice
            </button>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-[#0F141C] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Package size={16} /> View My Orders
            </Link>
          </div>

          {/* Invoice Card */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            {/* Invoice Header */}
            <div className="bg-linear-to-r from-slate-800 to-slate-900 p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Receipt size={20} className="text-emerald-400" />
                    <h2 className="text-lg font-semibold tracking-wide uppercase text-slate-300">Invoice</h2>
                  </div>
                  <p className="text-2xl font-bold">Order #{order.order_id}</p>
                </div>
                <div className="text-right sm:text-right">
                  <p className="text-sm text-slate-400">Date</p>
                  <p className="font-medium">{formatDate(order.date)}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/30">
                    PAID
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Customer & Shipping Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Billed To */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Billed To</h3>
                  <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                    <p className="font-semibold text-slate-800">{order.user_name || 'Customer'}</p>
                    <p className="text-sm text-slate-500">{order.user_email}</p>
                  </div>
                </div>

                {/* Ship To */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin size={12} /> Ship To
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                    <p className="font-semibold text-slate-800">{order.shipping?.fullAddress}</p>
                    <p className="text-sm text-slate-500">
                      {[order.shipping?.city, order.shipping?.province, order.shipping?.postal]
                        .filter(Boolean)
                        .join(', ')}
                    </p>
                    <p className="text-sm text-slate-500">{order.shipping?.country || ''}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <ShoppingBag size={12} /> Order Items
                </h3>

                {/* Desktop table */}
                <div className="hidden sm:block overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Item
                        </th>
                        <th className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                          Qty
                        </th>
                        <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                          Unit Price
                        </th>
                        <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {order.items?.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              {item.type === 'custom' ? (
                                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center shrink-0">
                                  <FileBox size={18} className="text-violet-500" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                  <Package size={18} className="text-slate-400" />
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  {item.type === 'custom' && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-violet-100 text-violet-600 rounded font-medium">
                                      Custom
                                    </span>
                                  )}
                                  {item.product_code && (
                                    <span className="text-xs text-slate-400">{item.product_code}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-center text-sm font-medium text-slate-700">
                            {item.quantity}
                          </td>
                          <td className="px-3 py-4 text-right text-sm text-slate-600">
                            {formatCurrency(item.price)}
                          </td>
                          <td className="px-5 py-4 text-right text-sm font-semibold text-slate-800">
                            {formatCurrency(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="sm:hidden space-y-3">
                  {order.items?.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 flex items-start gap-3"
                    >
                      {item.type === 'custom' ? (
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center shrink-0">
                          <FileBox size={18} className="text-violet-500" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                          <Package size={18} className="text-slate-400" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 text-sm truncate">{item.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.quantity} × {formatCurrency(item.price)}
                        </p>
                      </div>
                      <span className="font-semibold text-slate-800 text-sm shrink-0">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-full sm:w-80 space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium text-slate-700">{formatCurrency(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Shipping</span>
                    <span className="font-medium text-slate-700">{formatCurrency(order.shipping_cost)}</span>
                  </div>
                  {order.tax > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Tax</span>
                      <span className="font-medium text-slate-700">{formatCurrency(order.tax)}</span>
                    </div>
                  )}
                  {order.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Discount</span>
                      <span className="font-medium text-emerald-600">-{formatCurrency(order.discount)}</span>
                    </div>
                  )}
                  <hr className="border-t border-dashed border-slate-200 my-3!" />
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-slate-800">Total Paid</span>
                    <span className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {formatCurrency(order.total)}
                    </span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Payment Method</span>
                    <span className="font-medium text-slate-500">Stripe</span>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Order Confirmed</p>
                    <p className="text-sm text-slate-500 mt-1">
                      You will receive an email confirmation shortly at{' '}
                      <span className="font-medium text-slate-700">{order.user_email}</span>.
                      We will notify you when your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="no-print flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link
              to="/product"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              <ShoppingBag size={16} /> Continue Shopping
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-[#0F141C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              View My Orders <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
