import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { GoArrowUp } from 'react-icons/go';
import Container from '../../../shared/Container';

export default function ChatBoat() {
  const [promptText, setPromptText] = useState('');

  return (
    <Container>
      <div className="w-full mx-auto mt-5 relative pb-15">
        <div className="w-full border border-gray-200 rounded-xl shadow-md bg-white  px-4 py-3 md:py-4 gap-3 focus-within:border-gray-300 transition-all">
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ask about 3D object or scene..."
            className="flex-1 bg-transparent border-none text-sm md:text-base text-gray-700 placeholder-gray-400 outline-none"
          />
          <div className="flex justify-between mt-10">
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FiPlus />

            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center cursor-pointer justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
            >
              <GoArrowUp />

            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
