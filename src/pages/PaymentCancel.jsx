import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {
  XCircle,
  ShoppingBag,
  ArrowRight,
  RefreshCcw,
} from 'lucide-react'

export default function PaymentCancel() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* CSS animations */}
      <style>{`
        @keyframes cancelPulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes crossDraw {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-cancel-pulse { animation: cancelPulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30 flex flex-col items-center justify-center p-4">
        {/* Cancel Header */}
        <div className="relative w-full overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className={`relative max-w-lg mx-auto text-center py-12 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Animated Cancel Icon */}
            <div className="mb-6 animate-cancel-pulse">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-red-400/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <div className="relative w-24 h-24 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-red-200">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" style={{ strokeDasharray: 100, animation: 'crossDraw 0.6s ease-out 0.3s both' }} />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Payment Cancelled
            </h1>
            <p className="text-slate-500 text-lg mx-auto mb-8 px-4">
              Your payment process was interrupted or cancelled. No charges were made to your account.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <Link
                to="/dashboard/cart"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F141C] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                <RefreshCcw size={18} /> Retry Payment
              </Link> */}
              <Link
                to="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ShoppingBag size={18} /> Continue Shopping
              </Link>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <p>If you're experiencing issues, please <Link to="/" className="text-red-500 hover:underline">contact support</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
