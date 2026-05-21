import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Profile from "../../../assets/img/product/profile.png"

export default function ProfileForm() {
  const [countryCode, setCountryCode] = useState('+62')

  return (
    <div className="w-full bg-white">
      <h1 className="lg:text-3xl text:xl text-[#0D0D12] font-medium">Personal & Contact Information</h1>
      <p className="text-sm text-slate-400 mt-1">
        Maintain your personal and contact information from here
      </p>

      <form action="" onSubmit={(e) => e.preventDefault()} className='py-10 w-full space-y-8'>


        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 w-full items-start">
          <img
            src={Profile}
            alt="Profile Avatar"
            className='w-18 h-18 rounded-full object-cover shrink-0 mx-auto sm:mx-0'
          />
          <div className="w-full">
            <h5 className='text-base font-semibold text-[#262626] mb-1'>Personal Info</h5>
            <label htmlFor="fullName" className='text-sm font-normal text-[#63716E] mt-3 mb-2 block'>Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder='Niko Pradana'
              className='p-5 rounded-3xl bg-[#F7F7F7] w-full text-slate-700 placeholder-slate-500 focus:outline-none focus:bg-slate-100 transition-colors border-0'
            />
          </div>
        </div>


        <div className="w-full pt-2">
          <h5 className='text-base font-semibold text-[#262626] mb-1'>Contact Info</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-end">

            <div className="w-full">
              <label htmlFor="emailAddress" className='text-sm font-normal text-[#63716E] mt-3 mb-2 block'>Email Address</label>
              <input
                id="emailAddress"
                type="email"
                placeholder='niko.pradana@company.com'
                className='p-5 rounded-3xl bg-[#F7F7F7] w-full text-slate-700 placeholder-slate-500 focus:outline-none focus:bg-slate-100 transition-colors border-0'
              />
            </div>

            <div className="w-full">
              <label htmlFor="phoneNumber" className='text-sm font-normal text-[#63716E] mt-3 mb-2 block'>Phone Number</label>

              <div className="flex items-center rounded-3xl bg-[#F7F7F7] overflow-hidden px-4 focus-within:bg-slate-100 transition-colors">
                <div className="relative flex items-center gap-1.5 shrink-0 pr-3  border-slate-300">
                  <img
                    src="https://flagcdn.com/w20/us.png"
                    alt="Country Flag"
                    className="w-5 h-3.5 object-cover rounded-xs"
                  />
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent pr-5 py-5 text-sm font-medium text-slate-700 focus:outline-none cursor-pointer border-none ring-0 focus:ring-0"
                  >
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <ChevronDown size={14} className="text-slate-500 absolute right-0 pointer-events-none" />
                </div>

                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder='813 7788 2244'
                  className='p-5 bg-transparent w-full text-slate-700 placeholder-slate-500 focus:outline-none border-0 ring-0 focus:ring-0'
                />
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}