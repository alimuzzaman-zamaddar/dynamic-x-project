import { Link, useNavigate } from 'react-router';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Productimage from '../assets/img/product/product.png';
import {
  FiChevronDown, FiChevronLeft, FiChevronRight, FiShoppingCart, FiFilter, FiX, FiSearch
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

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
  const { showToast } = useToast();
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(true);
  const [materialOpen, setMaterialOpen] = useState(true);

  // Data state
  const [products, setProducts] = useState([]);
  const [allMaterials, setAllMaterials] = useState([]);
  const [allMethods, setAllMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const sortRef = useRef(null);
  const showRef = useRef(null);

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

  // Lock body scroll when mobile filter is open
  useEffect(() => {
    document.body.style.overflow = mobileFilterOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileFilterOpen]);

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) => prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]);
    setPage(1);
  };

  const toggleMethod = (id) => {
    setSelectedMethods((prev) => prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]);
    setPage(1);
  };

  const clearAllFilters = () => {
    setSearch('');
    setSelectedMaterials([]);
    setSelectedMethods([]);
    setPage(1);
  };

  const activeFilterCount = selectedMaterials.length + selectedMethods.length + (search ? 1 : 0);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addNormalProduct(product, 1);
    showToast(`"${product.title}" added to cart!`);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  const getEffectivePrice = (p) => p.discount_price ?? p.price;

  const renderColorDots = (colors) => (
    <div className="flex items-center gap-1">
      {(colors || []).slice(0, 5).map((hex, i) => (
        <span
          key={i}
          className="w-3 h-3 rounded-full border border-slate-200 inline-block shrink-0"
          style={{ backgroundColor: hex }}
          title={hex}
        />
      ))}
    </div>
  );

  // ─── Reusable Filter Panel Content ──────────────────────────────────────────
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="text-base font-semibold text-[#262626] mb-2">Search</h3>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-slate-400 bg-white"
          />
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Print Method */}
      <div>
        <button
          type="button"
          onClick={() => setMethodOpen((v) => !v)}
          className="flex items-center justify-between w-full group cursor-pointer"
        >
          <h3 className="text-base font-semibold text-[#262626]">Print Method</h3>
          <FiChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${methodOpen ? 'rotate-180' : ''}`} />
        </button>
        {methodOpen && (
          <div className="mt-3 space-y-2.5">
            {allMethods.map((method) => (
              <label key={method.id} className="flex items-center gap-3 cursor-pointer text-sm font-medium text-[#262626] hover:text-slate-900 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedMethods.includes(method.id)}
                  onChange={() => toggleMethod(method.id)}
                  className="w-4 h-4 rounded border-slate-300 accent-slate-900 cursor-pointer"
                />
                <span>{method.title}</span>
              </label>
            ))}
            {allMethods.length === 0 && !loading && (
              <span className="text-sm text-slate-400">No filters available</span>
            )}
          </div>
        )}
      </div>

      <hr className="border-slate-100" />

      {/* Material */}
      <div>
        <button
          type="button"
          onClick={() => setMaterialOpen((v) => !v)}
          className="flex items-center justify-between w-full group cursor-pointer"
        >
          <h3 className="text-base font-semibold text-[#262626]">Material</h3>
          <FiChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${materialOpen ? 'rotate-180' : ''}`} />
        </button>
        {materialOpen && (
          <div className="mt-3 space-y-2.5">
            {allMaterials.map((mat) => (
              <label key={mat.id} className="flex items-center gap-3 cursor-pointer text-sm font-medium text-[#262626] hover:text-slate-900 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat.id)}
                  onChange={() => toggleMaterial(mat.id)}
                  className="w-4 h-4 rounded border-slate-300 accent-slate-900 cursor-pointer"
                />
                <span>{mat.name}</span>
              </label>
            ))}
            {allMaterials.length === 0 && !loading && (
              <span className="text-sm text-slate-400">No filters available</span>
            )}
          </div>
        )}
      </div>

      {/* Clear all */}
      {activeFilterCount > 0 && (
        <>
          <hr className="border-slate-100" />
          <button
            type="button"
            onClick={clearAllFilters}
            className="w-full text-sm font-semibold text-red-500 hover:text-red-600 transition-colors text-center cursor-pointer py-1"
          >
            Clear all filters ({activeFilterCount})
          </button>
        </>
      )}
    </div>
  );

  return (
    <section className="text-slate-800 antialiased font-sans pt-24 md:pt-30">

      {/* ─── Mobile Filter Drawer Overlay ───────────────────────────────────── */}
      {mobileFilterOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileFilterOpen(false)}
        />
      )}

      {/* ─── Mobile Filter Drawer ────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
        style={{ transform: mobileFilterOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <FiFilter className="w-4 h-4 text-slate-700" />
            <span className="text-base font-semibold text-slate-800">Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <FilterContent />
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-slate-100 shrink-0">
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="w-full bg-slate-900 text-white text-sm font-semibold py-3 rounded-full cursor-pointer hover:bg-slate-800 transition-colors"
          >
            Show Results
          </button>
        </div>
      </div>

      <div className="max-w-max-width mx-auto px-4 py-6 md:py-8">

        {/* ─── Page Header ─────────────────────────────────────────────────────── */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#262626]">Products</h1>
          <p className="text-sm text-slate-400 mt-1">Explore our full catalog of 3D printed parts</p>
        </div>

        {/* ─── Mobile Top Bar: Filter trigger + Search ─────────────────────────── */}
        <div className="flex items-center gap-3 mb-5 md:hidden">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
          >
            <FiFilter className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {activeFilterCount}
              </span>
            )}
          </button>
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-slate-400 bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* ─── Desktop Sidebar ────────────────────────────────────────────────── */}
          <aside className="hidden md:block w-56 lg:w-64 shrink-0 sticky top-28">
            <div className="border border-slate-100 rounded-2xl p-5 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <FiFilter className="w-4 h-4 text-slate-600" />
                  <span className="text-base font-semibold text-slate-800">Filters</span>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-xs text-red-400 hover:text-red-600 font-medium cursor-pointer transition-colors"
                  >
                    Clear ({activeFilterCount})
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* ─── Main Content ────────────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* Sort / Show Bar */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100 gap-3 flex-wrap">
              {/* Result count */}
              {!loading && (
                <p className="text-sm text-slate-500 shrink-0">
                  {products.length} product{products.length !== 1 ? 's' : ''} found
                </p>
              )}

              <div className="flex items-center gap-3 ml-auto flex-wrap">
                {/* Sort */}
                <div className="flex items-center gap-2 relative" ref={sortRef}>
                  <span className="text-sm font-medium text-slate-600 hidden sm:inline">Sort:</span>
                  <button
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50 cursor-pointer"
                  >
                    <span className="max-w-[90px] sm:max-w-none truncate">{sortBy}</span>
                    <FiChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSortOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-30">
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

                {/* Show count */}
                <div className="flex items-center gap-2 relative" ref={showRef}>
                  <span className="text-sm font-medium text-slate-600 hidden sm:inline">Show:</span>
                  <button
                    type="button"
                    onClick={() => setIsShowOpen(!isShowOpen)}
                    className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:border-slate-300 transition-all active:bg-slate-50 cursor-pointer"
                  >
                    {showCount}
                    <FiChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isShowOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isShowOpen && (
                    <div className="absolute top-full right-0 mt-1 w-20 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-30">
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
            </div>

            {/* Active filter chips (mobile) */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {search && (
                  <span className="flex items-center gap-1.5 text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                    "{search}"
                    <button onClick={() => { setSearch(''); setPage(1); }} className="text-slate-400 hover:text-slate-700 cursor-pointer"><FiX className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedMethods.map((id) => {
                  const m = allMethods.find((x) => x.id === id);
                  return m ? (
                    <span key={id} className="flex items-center gap-1.5 text-xs font-medium bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1.5 rounded-full">
                      {m.title}
                      <button onClick={() => toggleMethod(id)} className="text-orange-400 hover:text-orange-600 cursor-pointer"><FiX className="w-3 h-3" /></button>
                    </span>
                  ) : null;
                })}
                {selectedMaterials.map((id) => {
                  const m = allMaterials.find((x) => x.id === id);
                  return m ? (
                    <span key={id} className="flex items-center gap-1.5 text-xs font-medium bg-purple-50 text-purple-600 border border-purple-100 px-3 py-1.5 rounded-full">
                      {m.name}
                      <button onClick={() => toggleMaterial(id)} className="text-purple-400 hover:text-purple-600 cursor-pointer"><FiX className="w-3 h-3" /></button>
                    </span>
                  ) : null;
                })}
              </div>
            )}

            {/* ─── Product Grid ─────────────────────────────────────────────────── */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl p-3 sm:p-4 animate-pulse">
                    <div className="aspect-square w-full rounded-xl bg-slate-100 mb-3" />
                    <div className="h-3 bg-slate-100 rounded mb-2 w-2/3" />
                    <div className="h-3 bg-slate-100 rounded w-1/2" />
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
                <p className="text-sm mt-2">Try adjusting your filters</p>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-4 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {products.map((product) => {
                  const effectivePrice = getEffectivePrice(product);
                  const hasDiscount = product.discount_price != null;
                  const isAdded = addedMap[product.id];
                  return (
                    <div
                      key={product.id}
                      className="group border border-slate-100 bg-white rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-200 flex flex-col justify-between"
                    >
                      <Link to={`/product/${product.id}`} className="cursor-pointer block flex-1">
                        {/* Image */}
                        <div className="aspect-square w-full rounded-xl bg-slate-50 flex items-center justify-center p-3 sm:p-5 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/20 pointer-events-none" />
                          <img
                            src={product.thumbnail_image || Productimage}
                            alt={product.title}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {product.technology && (
                            <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded border bg-orange-50 text-orange-600 border-orange-100">
                              {product.technology.code || product.technology.title}
                            </span>
                          )}
                          {product.material && (
                            <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded border bg-purple-50 text-purple-600 border-purple-100">
                              {product.material.name}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="mt-2 text-[#262626] font-medium text-sm sm:text-base line-clamp-2 group-hover:text-slate-900 transition-colors leading-snug">
                          {product.title}
                        </h4>

                        {/* Price */}
                        <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
                          <span className="text-lg sm:text-2xl font-bold text-[#262626]">${effectivePrice.toFixed(2)}</span>
                          {hasDiscount && (
                            <span className="text-xs sm:text-sm text-[#5D5D5D] line-through">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </Link>

                      {/* Bottom bar */}
                      <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-slate-50 gap-2">
                        {renderColorDots(product.color)}
                        <button
                          type="button"
                          onClick={(e) => handleAddToCart(e, product)}
                          className={`flex items-center cursor-pointer gap-1 text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-200 active:scale-95 shrink-0 ${
                            isAdded
                              ? 'bg-green-100 text-green-700 border border-green-200'
                              : 'bg-[#E5E7EB] hover:bg-slate-900 hover:text-white text-[#101828]'
                          }`}
                        >
                          <FiShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span className="hidden xs:inline sm:inline">{isAdded ? 'Added!' : 'Add to cart'}</span>
                          <span className="xs:hidden sm:hidden">{isAdded ? '✓' : '+'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ─── Pagination ───────────────────────────────────────────────────── */}
            {!loading && !error && totalPages > 1 && (
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-1 text-sm font-medium flex-wrap justify-center">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg transition-colors text-xs sm:text-sm ${
                        page === p ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  {totalPages > 7 && <span className="text-slate-400 px-1">…</span>}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <button
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Next <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}