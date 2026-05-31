import React, { useState, useRef } from 'react'
import { FiPlus } from 'react-icons/fi';
import { GoArrowUp } from 'react-icons/go';
import { Loader2 } from 'lucide-react';
import Container from '../../../shared/Container';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export default function ChatBoat() {
  const [promptText, setPromptText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  // useEffect(() => {
  //   scrollToBottom()
  // }, [messages])

  const handleSend = async () => {
    if (!promptText.trim() || loading) return;

    const userMessage = promptText.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setPromptText('');
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/open-ai/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setMessages(prev => [...prev, { role: 'bot', content: json.data.answer }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', content: json.message || "Sorry, I couldn't process your request." }]);
      }
    } catch (err) {
      console.error('Chat API Error:', err);
      setMessages(prev => [...prev, { role: 'bot', content: "Network error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <div className="w-full mx-auto mt-5 relative py-15">

        {/* Chat History Area */}
        {messages.length > 0 && (
          <div className="mb-6 max-h-[400px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3 ${msg.role === 'user' ? 'bg-[#101828] text-white rounded-br-none' : 'bg-[#F2F2F2] text-gray-800 rounded-bl-none border border-gray-200'}`}>
                  <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3 bg-[#F2F2F2] text-gray-800 rounded-bl-none border border-gray-200 flex items-center gap-3">
                  <Loader2 size={18} className="animate-spin text-gray-500" />
                  <span className="text-sm text-gray-500 font-medium">Generating response...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="w-full border border-gray-200 rounded-xl shadow-sm bg-white px-4 py-3 md:py-6 flex flex-col focus-within:border-gray-300 transition-all">
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about materials, tech, or our 3D printing services..."
            className="flex-1 w-full bg-transparent border-none text-sm md:text-base text-gray-700 placeholder-gray-400 outline-none mb-3"
            disabled={loading}
          />
          <div className="flex justify-end items-center">
            {/* <button
              type="button"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FiPlus />
            </button> */}
            <button
              type="button"
              onClick={handleSend}
              disabled={!promptText.trim() || loading}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${!promptText.trim() || loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#101828] text-white hover:bg-black cursor-pointer'}`}
            >
              <GoArrowUp />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
