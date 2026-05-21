import React, { useState } from 'react'

export default function OrderList() {
  const [activeTab, setActiveTab] = useState('All orders')

  const tabs = ['All orders', 'Running Orders', 'Completed Orders', 'Cancelled Orders']

  const orders = [
    { id: '7845645', date: 'Oct 24, 2026', price: '156.00', items: 5, status: 'On Production', estDelivery: 'Feb 12, 2026' },
    { id: '7845645', date: 'Oct 24, 2026', price: '156.00', items: 5, status: 'On Production', estDelivery: 'Feb 12, 2026' },
    { id: '7845645', date: 'Oct 24, 2026', price: '156.00', items: 5, status: 'On Production', estDelivery: 'Feb 12, 2026' },
    { id: '7845645', date: 'Oct 24, 2026', price: '156.00', items: 5, status: 'On Production', estDelivery: 'Feb 12, 2026' },
  ]

  return (
    <div className="w-full  bg-white">
      <h2 className="text-2xl font-medium text-[#0D0D12] mb-6">Orders List</h2>
      <div className="flex gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none snap-x">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap snap-center cursor-pointer ${activeTab === tab
              ? 'bg-[#101828] text-white'
              : 'bg-[#F0F2F5] text-slate-600 hover:bg-slate-200'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Responsive Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-[#F3F4F6] rounded-2xl p-5 sm:p-6 flex flex-col gap-6 justify-between border border-transparent hover:border-slate-200 transition-all"
          >
            {/* Top Row: Order Details and Pricing Header */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="lg:text-2xl text-lg font-normal text-[#0D0D12]">
                  Order #{order.id}
                </h3>
                <p className="text-xs sm:text-base text-slate-400 mt-1">
                  Placed on {order.date}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="lg:text-2xl text-base font-normal text-[#0D0D12]">
                  ${order.price}
                </span>
                <p className="text-base text-slate-400 mt-1">
                  {order.items} Items
                </p>
              </div>
            </div>

            <div className="flex flex-wrap  py-2 items-center justify-between">
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                <div>
                  <span className="lg:text-base text-sm font-bold text-[#0D0D12] block">
                    Status
                  </span>
                  <span className="text-sm text-slate-500 block mt-1">
                    {order.status}
                  </span>
                </div>
                <div>
                  <span className="lg:text-base text-sm font-bold text-[#0D0D12] block whitespace-nowrap">
                    Est. delivery date
                  </span>
                  <span className="text-sm text-slate-500 block mt-1 whitespace-nowrap">
                    {order.estDelivery}
                  </span>
                </div>
              </div>

              <button className="bg-[#DCE1E7] hover:bg-slate-300 transition-colors text-slate-700 text-sm font-medium px-4 py-2.5 rounded-xl self-end sm:self-auto cursor-pointer whitespace-nowrap lg: mt-0 mt-3">
                View Order Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}