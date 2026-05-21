import { Link, useNavigate } from 'react-router';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Productimage from '../assets/img/product/product.png';
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const SORT_MAP = {
  'Latest': 'latest',
  'Oldest': 'oldest',
  'Price: Low to High': 'price_asc',
  'Price: High to Low': 'price_desc',
  'Title A-Z': 'title_asc',
  'Title Z-A': 'title_desc',
};

const sortOptions = Object.keys(SORT_MAP);
const showOptions = [9, 12, 24, 36];

export default function ProductPage() {
  const { addNormalProduct } = useCart();
  const navigate = useNavigate();

  // Filter state
  const [search, setSearch] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [sortBy, setSortBy] = useState('Latest');
  const [showCount, setShowCount] = useState(9);
  const [page, setPage] = useState(1);

  // UI state
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isShowOpen, setIsShowOpen] = useState(false);
  const [addedMap, setAddedMap] = useState({});

  // Data state
  const [products, setProducts] = useState([]);
  const [allMaterials, setAllMaterials] = useState([]);
  const [allMethods, setAllMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const sortRef = useRef(null);
  const showRef = useRef(null);

  // Derive unique materials and methods from product data
  const extractFilters = useCallback((data) => {
    const materials = new Map();
    const methods = new Map();
    data.forEach((p) => {
      if (p.material) materials.set(p.material.id, p.material.name);
      if (p.technology) methods.set(p.technology.id, p.technology.title);
    });
    setAllMaterials([...materials.entries()].map(([id, name]) => ({ id, name })));
    setAllMethods([...methods.entries()].map(([id, title]) => ({ id, title })));
  }, []);

  // Build query params
  const buildParams = useCallback(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    selectedMaterials.forEach((id) => params.append('material', id));
    selectedMethods.forEach((id) => params.append('print_method', id));
    params.set('sort', SORT_MAP[sortBy] || 'latest');
    params.set('per_page', showCount);
    params.set('page', page);
    return params.toString();
  }, [search, selectedMaterials, selectedMethods, sortBy, showCount, page]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const qs = buildParams();
        const res = await fetch(`${BASE_URL}/products?${qs}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const data = Array.isArray(json.data) ? json.data : [];
        setProducts(data);
        extractFilters(data);
        if (json.meta?.last_page) setTotalPages(json.meta.last_page);
        else setTotalPages(1);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [buildParams, extractFilters]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
      if (showRef.current && !showRef.current.contains(event.target)) setIsShowOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
    setPage(1);
  };

  const toggleMethod = (id) => {
    setSelectedMethods((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
    setPage(1);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addNormalProduct(product, 1);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  const handleBuyNow = (e, product) => {
    e.stopPropagation();
    addNormalProduct(product, 1);
    navigate('/dashboard/cart');
  };

  const getEffectivePrice = (p) => p.discount_price ?? p.price;

  const renderColorDots = (colors) => (
    <div className="flex items-center gap-1">
      {(colors || []).slice(0, 4).map((hex, i) => (
        <span
          key={i}
          className="w-3.5 h-3.5 rounded-full border border-slate-300/60 inline-block"
          style={{ backgroundColor: hex }}
          title={hex}
        />
      ))}
    </div>
  );

  return (
    <section className="text-slate-800 antialiased font-sans pt-30">
      <div className="max-w-max-width mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8 border-r border-slate-100 pr-6 hidden md:block">
          {/* Search */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide text-[#262626] pb-2">Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-slate-400"
            />
          </div>

          <hr className="border-slate-100" />

          {/* Print Method */}
          <div>
            <div className="flex items-center justify-between py-2 cursor-pointer group">
              <h3 className="text-xl font-semibold tracking-wide text-[#262626]">Print Method</h3>
              <FiChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
            <div className="mt-4 space-y-3">
              {allMethods.map((method) => (
                <label key={method.id} className="flex items-center gap-3 cursor-pointer group text-base font-medium text-[#262626] hover:text-slate-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedMethods.includes(method.id)}
                    onChange={() => toggleMethod(method.id)}
                    className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500 accent-slate-900"
                  />
                  <span>{method.title}</span>
                </label>
              ))}
              {allMethods.length === 0 && !loading && (
                <span className="text-sm text-slate-400">No filters available</span>
              )}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Material */}
          <div>
            <div className="flex items-center justify-between py-2 cursor-pointer group">
              <h3 className="text-xl font-semibold tracking-wide text-[#262626]">Material</h3>
              <FiChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
            <div className="mt-4 space-y-3">
              {allMaterials.map((mat) => (
                <label key={mat.id} className="flex items-center gap-3 cursor-pointer group text-base font-medium text-[#262626] hover:text-slate-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat.id)}
                    onChange={() => toggleMaterial(mat.id)}
                    className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500 accent-slate-900"
                  />
                  <span>{mat.name}</span>
                </label>
              ))}
              {allMaterials.length === 0 && !loading && (
                <span className="text-sm text-slate-400">No filters available</span>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort / Show Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 text-sm z-20 relative">
            <div className="flex items-center gap-2 relative" ref={sortRef}>
              <span className="text-[#262626] text-lg font-medium">Sort by :</span>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center justify-between gap-4 px-3 py-1.5 min-w-25 border border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50"
              >
                {sortBy} <FiChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSortOpen && (
                <div className="absolute top-full left-14 mt-1 w-52 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-30">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => { setSortBy(option); setIsSortOpen(false); setPage(1); }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm ${sortBy === option ? 'text-slate-900 font-semibold bg-slate-50/50' : 'text-slate-600'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 relative" ref={showRef}>
              <span className="text-[#262626] text-lg font-medium">Show :</span>
              <button
                type="button"
                onClick={() => setIsShowOpen(!isShowOpen)}
                className="flex items-center justify-between gap-4 px-3 py-1.5 min-w-17.5 border border-slate-200 rounded-lg font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50"
              >
                {showCount} <FiChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isShowOpen ? 'rotate-180' : ''}`} />
              </button>
              {isShowOpen && (
                <div className="absolute top-full right-0 mt-1 w-24 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-30">
                  {showOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => { setShowCount(option); setIsShowOpen(false); setPage(1); }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm ${showCount === option ? 'text-slate-900 font-semibold bg-slate-50/50' : 'text-slate-600'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl p-4 animate-pulse">
                  <div className="aspect-square w-full rounded-xl bg-slate-100 mb-4" />
                  <div className="h-4 bg-slate-100 rounded mb-2 w-3/4" />
                  <div className="h-4 bg-slate-100 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg font-medium">Failed to load products</p>
              <p className="text-sm mt-1 text-slate-400">{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
              {products.map((product) => {
                const effectivePrice = getEffectivePrice(product);
                const hasDiscount = product.discount_price != null;
                const isAdded = addedMap[product.id];
                return (
                  <div
                    key={product.id}
                    className="group border border-slate-100 bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-200 flex flex-col justify-between"
                  >
                    <Link to={`/product/${product.id}`} className="cursor-pointer block flex-1">
                      <div className="aspect-square w-full rounded-xl bg-slate-50 flex items-center justify-center p-6 overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-100/30 pointer-events-none" />
                        <img
                          src={product.thumbnail_image || Productimage}
                          alt={product.title}
                          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {product.technology && (
                          <span className="text-sm font-medium px-3 py-1 rounded border bg-orange-50 text-orange-600 border-orange-100">
                            {product.technology.code || product.technology.title}
                          </span>
                        )}
                        {product.material && (
                          <span className="text-sm font-medium px-3 py-1 rounded border bg-purple-50 text-purple-600 border-purple-100">
                            {product.material.name}
                          </span>
                        )}
                      </div>

                      <h4 className="mt-3 text-[#262626] font-medium text-lg line-clamp-1 group-hover:text-slate-900 transition-colors">
                        {product.title}
                      </h4>

                      <div className="mt-3 flex items-center justify-between gap-2 pt-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-[#262626]">${effectivePrice.toFixed(2)}</span>
                          {hasDiscount && (
                            <span className="text-lg text-[#5D5D5D] line-through">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </Link>

                    <div className="flex justify-between items-center mt-4 pt-2 border-t border-slate-50">
                      {renderColorDots(product.color)}
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`flex items-center cursor-pointer gap-1.5 text-base font-semibold px-3 py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                          isAdded
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-[#E5E7EB] hover:bg-slate-900 hover:text-white text-[#101828]'
                        }`}
                      >
                        <FiShoppingCart className="w-3.5 h-3.5" />
                        {isAdded ? 'Added!' : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-1 text-sm font-medium flex-wrap">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                      page === p
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-98 transition-all disabled:opacity-40"
                >
                  <FiChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-98 transition-all disabled:opacity-40"
                >
                  Next <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}