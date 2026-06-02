import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { IoIosArrowDown } from 'react-icons/io'
import ProductImage from '../assets/img/product/product.png'
import Profile from '../assets/img/product/profile.png'
import Company from '../assets/img/product/company.jpg'
import Me from '../assets/img/product/me.png'
import { ChevronDown, Minus, MoreVertical, Plus, ShoppingCart, CheckCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addNormalProduct } = useCart()
  const { showToast } = useToast()

  // UI state
  const [comment, setComment] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(null)

  // Track image selection by its array index instead of string URL
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const [addedToCart, setAddedToCart] = useState(false)
  const [filterType, setFilterType] = useState('All')

  // Data state
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Gallery images preparation
  const productGallery = product?.images?.length > 0
    ? product.images.map((img) => img.url || ProductImage)
    : [ProductImage, ProductImage, ProductImage]

  // Safe reference for the main preview image
  const selectedImage = productGallery[currentImgIndex] || ProductImage

  useEffect(() => {
    if (!id) return
    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`${BASE_URL}/product?id=${id}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const data = json.data
        setProduct(data)

        // Reset image selection index back to first image on product switch
        setCurrentImgIndex(0)

        // Set default selected color
        if (data.color && data.color.length > 0) {
          setSelectedColor(data.color[0])
        }
      } catch (err) {
        console.error('Failed to fetch product details:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleQuantityChange = (value) => {
    if (value > 0) setQuantity(value)
  }

  const effectivePrice = product
    ? (product.discount_price ?? product.price)
    : 0
  const subtotal = (effectivePrice * quantity).toFixed(2)
  const hasDiscount = product?.discount_price != null

  const handleAddToCart = () => {
    if (!product) return
    addNormalProduct(product, quantity, selectedColor)
    showToast(`"${product.title}" added to cart!`)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    if (!product) return
    addNormalProduct(product, quantity, selectedColor)
    showToast(`"${product.title}" added to cart!`)
    navigate('/dashboard/cart')
  }

  // Filter questions
  const filteredQuestions = (product?.questions || []).filter((q) => {
    if (filterType === 'All') return true
    if (filterType === 'Answered') return q.answer && q.status
    if (filterType === 'Not Answered') return !q.answer || !q.status
    return true
  })

  if (loading) {
    return (
      <section className="pt-24 md:pt-40 pb-20 px-4 bg-white">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start animate-pulse">
            <div className="xl:col-span-2 space-y-6">
              <div className="h-96 bg-slate-100 rounded-3xl" />
              <div className="h-40 bg-slate-100 rounded-2xl" />
            </div>
            <div className="h-125 bg-slate-100 rounded-3xl" />
          </div>
        </div>
      </section>
    )
  }

  if (error || !product) {
    return (
      <section className="pt-24 md:pt-40 pb-20 px-4 bg-white">
        <div className="max-w-max-width mx-auto text-center py-20">
          <p className="text-xl font-semibold text-slate-700">Product not found</p>
          <p className="text-sm text-slate-400 mt-2">{error}</p>
          <button
            onClick={() => navigate('/product')}
            className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-24 md:pt-40 pb-20 px-4 bg-white">
      <div className="max-w-max-width mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">

          {/* Left Side */}
          <div className="w-full xl:col-span-2 space-y-12">

            {/* Gallery */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
              {/* Thumbnails */}
              <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0 order-2 sm:order-1">
                {productGallery.map((imgUrl, idx) => (
                  <figure
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-20 h-16 sm:w-25 sm:h-20 bg-[#D9D9D9] border-2 rounded-xl cursor-pointer p-2 shrink-0 transition-all ${currentImgIndex === idx
                      ? 'border-black scale-102 shadow-xs'
                      : 'border-slate-300 hover:border-slate-500'
                      }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-contain" />
                  </figure>
                ))}
              </div>

              {/* Main Preview */}
              <div className="border border-gray-300 p-3 rounded-3xl w-full h-80 sm:h-100 xl:max-h-125 order-1 sm:order-2">
                <figure className="bg-[#D9D9D9] rounded-xl w-full h-full p-6 sm:p-10 flex items-center justify-center">
                  <img src={selectedImage} alt={product.title} className="max-h-full max-w-full object-contain" />
                </figure>
              </div>
            </div>

            {/* Q&A Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-4">
              {/* Sidebar Filter */}
              <div className="p-5 rounded-3xl border border-gray-300 shrink-0 w-full lg:w-60 h-fit">
                <div className="flex justify-between items-center">
                  <h5 className="text-xl text-[#262626] font-semibold">Type</h5>
                  <IoIosArrowDown />
                </div>
                <div className="flex flex-row lg:flex-col flex-wrap gap-x-6 gap-y-3 pt-5 lg:space-y-3">
                  {['All', 'Answered', 'Not Answered'].map((label) => (
                    <label key={label} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterType === label}
                        onChange={() => setFilterType(label)}
                        className="w-4 h-4 rounded accent-slate-900 border-slate-300 focus:ring-0"
                      />
                      <span className="text-base font-semibold text-[#262626]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q&A Thread */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-[#262626] font-semibold">Sort by :</span>
                    <div className="relative">
                      <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-slate-400 cursor-pointer">
                        <option className="text-base font-normal text-gray-400">Latest</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                    </div>
                  </div>
                  <button className="bg-white border border-slate-300 hover:bg-slate-50 text-[#101828] text-sm font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer w-fit">
                    Start Discussion
                  </button>
                </div>

                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((q) => (
                    <div key={q.id} className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 shadow-xs space-y-5 mt-8">
                      {/* Question */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                              {q.user?.avatar
                                ? <img src={q.user.avatar} alt={q.user.name} className="w-full h-full object-cover" />
                                : <span className="text-xs font-bold text-slate-600">{q.user?.name?.charAt(0) || 'U'}</span>
                              }
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-[#262626]">{q.user?.name || 'User'}</h4>
                              <p className="text-sm text-[#737373]">{new Date(q.created_at).toLocaleString()}</p>
                            </div>
                          </div>
                          <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
                        </div>
                        <p className="text-sm sm:text-base text-[#262626] leading-relaxed">{q.question}</p>
                        <div className="flex items-center justify-between pt-1">
                          <button className="text-base font-semibold text-[#262626] hover:underline">Reply</button>
                          {q.answer && (
                            <button className="flex items-center gap-1 text-base font-semibold text-[#262626] hover:text-slate-700">
                              <span>Hide Reply</span>
                              <ChevronDown size={14} />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Answer */}
                      {q.answer && (
                        <div className="bg-[#F8F9FA] rounded-xl p-4 space-y-3 border border-slate-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xs overflow-hidden">
                                <img src={Company} alt="Company" className="object-cover w-full h-full" />
                              </div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-base font-semibold text-[#262626]">{q.replier?.name || 'Admin'}</h4>
                                <span className="bg-orange-100 text-xs sm:text-base font-medium text-[#262626] px-1.5 py-0.5 rounded">Store</span>
                              </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={14} /></button>
                          </div>
                          <p className="text-sm text-[#737373]">{q.answered_at ? new Date(q.answered_at).toLocaleString() : ''}</p>
                          <p className="text-sm sm:text-base text-[#262626] leading-relaxed">{q.answer}</p>
                        </div>
                      )}

                      {/* Comment Input */}
                      <div className="flex gap-3 pt-3 border-t border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden">
                          <img src={Me} alt="My Avatar" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            placeholder="Write Your Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full text-sm text-slate-700 placeholder-slate-400 bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-slate-400"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setComment('')}
                              className="px-4 py-2 sm:px-5 sm:py-3 border border-slate-200 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button className="px-4 py-2 sm:px-5 sm:py-3 bg-[#0F141C] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 cursor-pointer">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="mt-8 p-6 border border-slate-100 rounded-2xl text-center text-slate-400">
                    <p className="text-sm">No discussions yet. Be the first to start a conversation!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Checkout Panel */}
          <div className="p-6 border border-[#D8DBDF] rounded-3xl h-fit w-full xl:sticky xl:top-6 bg-white">
            <h3 className="text-2xl text-[#262626] font-medium">{product.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{product.product_code}</p>

            <div className="pt-4 flex flex-wrap gap-2">
              {product.technology && (
                <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded border border-orange-100">
                  {product.technology.code || product.technology.title}
                </span>
              )}
              {product.material && (
                <span className="bg-purple-50 text-purple-600 text-xs font-medium px-3 py-1 rounded border border-purple-100">
                  {product.material.name}
                </span>
              )}
              {product.processing_type && (
                <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded border border-blue-100">
                  {product.processing_type.title}
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-2 py-6">
              <span className="text-3xl font-bold text-[#262626]">€{effectivePrice.toFixed(2)}</span>
              {hasDiscount && (
                <span className="text-lg text-[#5D5D5D] line-through">€{product.price.toFixed(2)}</span>
              )}
            </div>

            <div>
              <p className="text-slate-700 leading-relaxed text-sm">{product.description}</p>
            </div>

            {/* Color Picker */}
            {product.color && product.color.length > 0 && (
              <div className="space-y-3 py-5">
                <label className="text-sm font-semibold text-[#737373] block">Color</label>
                <div className="flex gap-3 flex-wrap">
                  {product.color.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => setSelectedColor(hex)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === hex
                        ? 'border-slate-900 shadow-md scale-105'
                        : 'border-slate-300 hover:border-slate-500'
                        }`}
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Picker */}
            <div className="space-y-3 pb-5">
              <label className="text-sm font-semibold text-[#737373] block">Quantity</label>
              <div className="flex items-center border border-[#262626] rounded-3xl bg-white overflow-hidden justify-between max-w-50">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-12 text-center font-bold text-lg border-0 outline-none bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-3 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="py-4 border-t border-slate-100">
              <div className="flex justify-between text-sm text-slate-600 items-center">
                <span className="text-[#737373] text-lg font-medium">Subtotal</span>
                <span className="text-3xl font-medium text-[#262626]">€{subtotal}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleBuyNow}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <ShoppingCart size={20} />
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className={`w-full border-2 font-bold py-3 rounded-3xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${addedToCart
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-slate-300 hover:border-slate-900 text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {addedToCart ? <CheckCircle size={20} /> : <ShoppingCart size={20} />}
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}