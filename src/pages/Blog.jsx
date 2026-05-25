import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Loader2 } from 'lucide-react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

function stripHtml(html) {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent?.trim() ?? '';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

const KEYWORD_SCROLL_AMOUNT = 200;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [activeKeyword, setActiveKeyword] = useState('All');
  const keywordSliderRef = useRef(null);
  const [canScrollKeywordsLeft, setCanScrollKeywordsLeft] = useState(false);
  const [canScrollKeywordsRight, setCanScrollKeywordsRight] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/blogs`, {
          headers: { Accept: 'application/json' },
        });
        const json = await res.json();
        if (res.ok && json.success && Array.isArray(json.data)) {
          setPosts(json.data);
        } else {
          setPosts([]);
          setError(json.message || 'Failed to load blogs.');
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const allKeywords = useMemo(() => {
    const set = new Set();
    posts.forEach((post) => {
      (post.keywords ?? []).forEach((kw) => set.add(kw));
    });
    return [...set].sort();
  }, [posts]);

  const keywordFilters = useMemo(() => ['All', ...allKeywords], [allKeywords]);

  const updateKeywordArrows = () => {
    const el = keywordSliderRef.current;
    if (!el) return;
    setCanScrollKeywordsLeft(el.scrollLeft > 0);
    setCanScrollKeywordsRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = keywordSliderRef.current;
    if (!el) return undefined;
    updateKeywordArrows();
    el.addEventListener('scroll', updateKeywordArrows);
    window.addEventListener('resize', updateKeywordArrows);
    return () => {
      el.removeEventListener('scroll', updateKeywordArrows);
      window.removeEventListener('resize', updateKeywordArrows);
    };
  }, [keywordFilters]);

  const scrollKeywords = (direction) => {
    keywordSliderRef.current?.scrollBy({
      left: direction * KEYWORD_SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesSearch =
        !q ||
        post.title?.toLowerCase().includes(q) ||
        stripHtml(post.description).toLowerCase().includes(q);
      const matchesKeyword =
        activeKeyword === 'All' || (post.keywords ?? []).includes(activeKeyword);
      return matchesSearch && matchesKeyword;
    });
  }, [posts, search, activeKeyword]);

  return (
    <div className="min-h-screen bg-white px-4 lg:pt-40 pt-30 pb-10 sm:px-6 lg:px-8">
      <style>{`.blog-keyword-slider::-webkit-scrollbar { display: none; }`}</style>
      <div className="mx-auto max-w-max-width">

        <header className="mb-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Blogs
            </h1>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Find UI kit assets that will help designers build faster. Simplify design with our comprehensive
              and carefully refined library from the start.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="relative w-full lg:max-w-md shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-200 py-2 pl-11 pr-4 text-sm outline-none transition focus:border-gray-400 placeholder:text-gray-400"
              />
            </div>

            <div className="flex min-w-0 flex-1 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollKeywords(-1)}
                disabled={!canScrollKeywordsLeft}
                className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
                aria-label="Previous keywords"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={keywordSliderRef}
                className="blog-keyword-slider flex flex-1 gap-2 overflow-x-auto scroll-smooth py-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {keywordFilters.map((keyword) => (
                  <button
                    key={keyword}
                    type="button"
                    onClick={() => setActiveKeyword(keyword)}
                    className={`shrink-0 rounded-full px-6 py-1 capitalize text-[14px] font-normal whitespace-nowrap transition cursor-pointer ${activeKeyword === keyword
                      ? 'bg-[#1A253C] text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {keyword}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollKeywords(1)}
                disabled={!canScrollKeywordsRight}
                className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
                aria-label="Next keywords"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="animate-spin text-slate-400" />
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-16 text-sm text-red-500">{error}</div>
        )}

        {!loading && !error && filteredPosts.length === 0 && (
          <div className="text-center py-16 text-sm text-slate-400">No blog posts found.</div>
        )}

        {!loading && !error && filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-6">
            {filteredPosts.map((post, index) => {
              const featured = index % 5 < 2;
              const excerpt = stripHtml(post.description);
              const keywords = post.keywords ?? [];

              return (
                <article
                  key={post.id}
                  className={`flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 transition hover:shadow-sm ${featured
                    ? 'col-span-1 md:col-span-3 lg:col-span-3'
                    : 'col-span-1 md:col-span-2 lg:col-span-2'
                    }`}
                >
                  <div>
                    <div className="relative aspect-16/8 w-full overflow-hidden rounded-xl bg-linear-to-br from-amber-700 via-orange-600 to-amber-950">
                      {post.thumbnail_url ? (
                        <img
                          src={post.thumbnail_url}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                          <div className="absolute -bottom-10 -left-10 h-40 w-48 rounded-full border-12 border-white/20" />
                          <div className="absolute -right-10 -top-10 h-40 w-48 rounded-full border-12 border-white/20" />
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <time className="text-[11px] font-medium tracking-wide text-gray-400 uppercase">
                        {formatDate(post.published_at)}
                      </time>
                      <h3 className="mt-2 text-lg font-medium text-[#0A0A0A] line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#737373] leading-relaxed line-clamp-3">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-gray-50 pt-4">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-900 hover:opacity-70 transition"
                    >
                      Learn More
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>

                    <div className="flex flex-wrap gap-1.5">
                      {keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-[14px] font-normal text-gray-500 capitalize"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
