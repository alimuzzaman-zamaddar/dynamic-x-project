import React, { useEffect, useState } from 'react'
import { Check, FolderOpen, Loader2 } from 'lucide-react'
import OrderDetailsModal from './OrderDetailsModal'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

// Map API status strings → stepper step numbers
const STATUS_STEP = {
  pending: 1,
  placed: 1,
  production: 2,
  quality_check: 3,
  shipped: 4,
  delivered: 4,
}

const steps = [
  { id: 1, name: 'Placed' },
  { id: 2, name: 'Production' },
  { id: 3, name: 'Quality Check' },
  { id: 4, name: 'Shipped' },
]

export default function RecentOrders() {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchRecentOrder = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }
      try {
        const res = await fetch(`${BASE_URL}/auth/orders/recent`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
        const json = await res.json()
        if (res.ok && json.success && Array.isArray(json.data) && json.data.length > 0) {
          setOrder(json.data[0])
        } else {
          setOrder(null)
        }
      } catch (err) {
        console.error('Failed to fetch recent orders:', err)
        setError('Failed to load recent order.')
      } finally {
        setLoading(false)
      }
    }
    fetchRecentOrder()
  }, [])

  if (loading) {
    return (
      <div className="xl:py-8 py-4">
        <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Orders</h2>
        <div className="bg-[#F2F2F2] rounded-2xl p-4 lg:p-8 flex items-center justify-center min-h-[160px]">
          <Loader2 size={28} className="animate-spin text-slate-400" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="xl:py-8 py-4">
        <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Orders</h2>
        <div className="bg-[#F2F2F2] rounded-2xl p-4 lg:p-8 text-center text-sm text-red-500">
          {error}
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="xl:py-8 py-4">
        <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Orders</h2>
        <div className="bg-[#F2F2F2] rounded-2xl p-4 lg:p-8 text-center text-sm text-slate-400">
          No recent orders found.
        </div>
      </div>
    )
  }

  const currentStep = STATUS_STEP[order.status] ?? 1

  return (
    <div className="xl:py-8 py-4">
      <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Orders</h2>

      <div className="bg-[#F2F2F2] rounded-2xl p-4 lg:p-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-slate-800">
              {order.order_number}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Placed on {order.placed_date}
            </p>
          </div>
          <div className="text-right self-end sm:self-auto">
            <span className="text-lg sm:text-xl font-bold text-slate-800">
              {order.currency} {parseFloat(order.total_amount).toFixed(2)}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              {order.items_count} Items
            </p>
          </div>
        </div>

        {/* Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 pt-2 pb-4 w-full">
          {steps.map((step, idx) => {
            const isCompleted = currentStep >= step.id
            const isLast = idx === steps.length - 1

            return (
              <div
                key={step.id}
                className="flex md:flex-col items-center gap-4 md:gap-3 w-full relative"
              >
                <div className="relative flex items-center justify-start md:justify-center w-fit md:w-full">
                  <div
                    className={`lg:w-10 w-7 lg:h-10 h-7 rounded-full flex items-center justify-center transition-all z-10 shrink-0 ${
                      isCompleted ? 'bg-[#101828] text-white' : 'bg-[#DCE1E7] text-transparent'
                    }`}
                  >
                    {isCompleted && <Check size={16} strokeWidth={3} />}
                  </div>

                  {/* Horizontal connector (desktop) */}
                  {!isLast && (
                    <div className="hidden md:block absolute left-1/2 w-full top-1/2 -translate-y-1/2 h-[2px] bg-[#DCE1E7] z-0">
                      <div
                        className="h-full bg-[#101828] transition-all duration-300"
                        style={{ width: currentStep > step.id ? '100%' : '0%' }}
                      />
                    </div>
                  )}

                  {/* Vertical connector (mobile) */}
                  {!isLast && (
                    <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-7 bottom-[-24px] w-[2px] bg-[#DCE1E7] z-0">
                      <div
                        className="w-full bg-[#101828] transition-all duration-300"
                        style={{ height: currentStep > step.id ? '100%' : '0%' }}
                      />
                    </div>
                  )}
                </div>

                <span className="text-sm font-medium text-slate-700 text-left md:text-center max-w-[120px] md:max-w-none break-words">
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DCE1E7] hover:bg-slate-300 transition-colors text-slate-700 text-sm font-medium px-4 py-3 sm:py-2.5 rounded-xl cursor-pointer"
          >
            <FolderOpen size={16} className="text-slate-600 shrink-0" />
            View Order Details
          </button>
        </div>
      </div>

      {/* Order Details Modal */}
      {showModal && (
        <OrderDetailsModal
          orderId={order.order_id}
          orderNumber={order.order_number}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}