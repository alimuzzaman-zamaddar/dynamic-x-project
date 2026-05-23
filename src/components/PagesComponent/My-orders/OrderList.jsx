import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import OrderDetailsModal from './OrderDetailsModal'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const TAB_STATUS_MAP = {
  'All orders': null,
  'Running Orders': ['pending', 'production', 'quality_check', 'shipped'],
  'Completed Orders': ['delivered', 'completed'],
  'Cancelled Orders': ['cancelled'],
}

export default function OrderList() {
  const [activeTab, setActiveTab] = useState('All orders')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const tabs = ['All orders', 'Running Orders', 'Completed Orders', 'Cancelled Orders']

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`${BASE_URL}/auth/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
        const json = await res.json()
        if (res.ok && json.success && Array.isArray(json.data)) {
          setOrders(json.data)
        } else {
          setOrders([])
        }
      } catch (err) {
        console.error('Failed to fetch orders:', err)
        setError('Failed to load orders.')
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  const allowedStatuses = TAB_STATUS_MAP[activeTab]
  const filteredOrders = allowedStatuses
    ? orders.filter((o) => allowedStatuses.includes(o.status))
    : orders

  return (
    <div className="w-full bg-white">
      <h2 className="text-2xl font-medium text-[#0D0D12] mb-6">Orders List</h2>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none snap-x">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap snap-center cursor-pointer ${
              activeTab === tab
                ? 'bg-[#101828] text-white'
                : 'bg-[#F0F2F5] text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin text-slate-400" />
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-12 text-sm text-red-500">{error}</div>
      )}

      {/* Empty */}
      {!loading && !error && filteredOrders.length === 0 && (
        <div className="text-center py-12 text-sm text-slate-400">No orders found.</div>
      )}

      {/* Order Cards Grid */}
      {!loading && !error && filteredOrders.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOrders.map((order) => (
            <div
              key={order.order_id}
              className="bg-[#F3F4F6] rounded-2xl p-5 sm:p-6 flex flex-col gap-6 justify-between border border-transparent hover:border-slate-200 transition-all"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="lg:text-2xl text-lg font-normal text-[#0D0D12]">
                    {order.order_number}
                  </h3>
                  <p className="text-xs sm:text-base text-slate-400 mt-1">
                    Placed on {order.placed_date}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="lg:text-2xl text-base font-normal text-[#0D0D12]">
                    {order.currency} {parseFloat(order.total_amount).toFixed(2)}
                  </span>
                  <p className="text-base text-slate-400 mt-1">
                    {order.items_count} Items
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row py-3 items-start sm:items-center justify-between gap-5 sm:gap-2">
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1 w-full sm:w-auto">
                  <div>
                    <span className="lg:text-base text-sm font-bold text-[#0D0D12] block">
                      Status
                    </span>
                    <span className="text-sm text-slate-500 block mt-1">
                      {order.status_label}
                    </span>
                  </div>
                  <div>
                    <span className="lg:text-base text-sm font-bold text-[#0D0D12] block whitespace-nowrap">
                      Est. delivery date
                    </span>
                    <span className="text-sm text-slate-500 block mt-1 whitespace-nowrap">
                      {order.estimated_delivery ?? 'N/A'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedOrder(order)}
                  className="w-full sm:w-auto bg-[#DCE1E7] hover:bg-slate-300 transition-colors text-slate-700 text-sm font-medium px-4 py-2.5 rounded-xl cursor-pointer whitespace-nowrap lg:mt-0 mt-3 flex items-center justify-center"
                >
                  View Order Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          orderId={selectedOrder.order_id}
          orderNumber={selectedOrder.order_number}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  )
}