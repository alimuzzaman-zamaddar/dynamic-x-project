import React from 'react'
import { Check, FolderOpen } from 'lucide-react'

export default function RecentOrders() {
  const orderData = {
    id: "7845645",
    date: "Oct 24, 2026",
    totalPrice: "156.00",
    itemCount: 5,
    currentStep: 1, // 1 = Placed, 2 = Production, 3 = Quality Check, 4 = Shipped
  }

  const steps = [
    { id: 1, name: "Placed" },
    { id: 2, name: "Production" },
    { id: 3, name: "Quality Check" },
    { id: 4, name: "Shipped" },
  ]

  return (
    <div>
      <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Orders</h2>

      <div className="bg-[#F2F2F2] rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
        {/* Header Block: Order Info & Price */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-slate-800">
              Order #{orderData.id}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Placed on {orderData.date}
            </p>
          </div>
          <div className="text-right self-end sm:self-auto">
            <span className="text-lg sm:text-xl font-bold text-slate-800">
              ${orderData.totalPrice}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              {orderData.itemCount} Items
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 pt-2 pb-4 w-full">
          {steps.map((step, idx) => {
            const isCompleted = orderData.currentStep >= step.id
            const isLast = idx === steps.length - 1

            return (
              <div
                key={step.id}
                className="flex md:flex-col items-center gap-4 md:gap-3 w-full relative"
              >
                <div className="relative flex items-center justify-start md:justify-center w-fit md:w-full">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 shrink-0 ${isCompleted
                      ? 'bg-[#101828] text-white'
                      : 'bg-[#DCE1E7] text-transparent'
                      }`}
                  >
                    {isCompleted && <Check size={16} strokeWidth={3} />}
                  </div>

                  {!isLast && (
                    <div className="hidden md:block absolute left-1/2 w-full top-1/2 -translate-y-1/2 h-[2px] bg-[#DCE1E7] z-0">
                      <div
                        className="h-full bg-[#101828] transition-all duration-300"
                        style={{ width: orderData.currentStep > step.id ? '100%' : '0%' }}
                      />
                    </div>
                  )}

                  {/* Vertical Connecting Line (Mobile) */}
                  {!isLast && (
                    <div className="md:hidden absolute left-5 top-10 bottom-[-24px] w-[2px] bg-[#DCE1E7] z-0">
                      <div
                        className="w-full bg-[#101828] transition-all duration-300"
                        style={{ height: orderData.currentStep > step.id ? '100%' : '0%' }}
                      />
                    </div>
                  )}
                </div>

                {/* Step Metadata Name Label Text */}
                <span className="text-sm font-medium text-slate-700 text-left md:text-center max-w-[120px] md:max-w-none break-words">
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer Actions Panel */}
        <div className="flex justify-end pt-2">
          <button className="inline-flex items-center gap-2 bg-[#DCE1E7] hover:bg-slate-300 transition-colors text-slate-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl cursor-pointer">
            <FolderOpen size={16} className="text-slate-600" />
            View Order Details
          </button>
        </div>

      </div>
    </div>
  )
}