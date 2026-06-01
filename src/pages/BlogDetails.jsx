import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Loader2 } from 'lucide-react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const FALLBACK_SLIDES = [
  'linear-gradient(to right, #9a3412, #ea580c, #451a03)',
  'linear-gradient(to right, #1e3a8a, #3b82f6, #172554)',
  'linear-gradient(to right, #115e59, #14b8a6, #042f2e)',
];

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

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/blogs/${id}`, {
          headers: { Accept: 'application/json' },
        });
        const json = await res.json();
        if (res.ok && json.success && json.data) {
          setPost(json.data);
        } else {
          setPost(null);
          setError(json.message || 'Blog post not found.');
        }
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  const slides = useMemo(() => {
    if (!post) return FALLBACK_SLIDES.map((bg) => ({ type: 'gradient', bg }));
    const images = [];
    if (post.thumbnail_url) images.push(post.thumbnail_url);
    if (Array.isArray(post.images)) {
      post.images.forEach((img) => {
        const url = typeof img === 'string' ? img : img?.url;
        if (url && !images.includes(url)) images.push(url);
      });
    }
    if (images.length === 0) {
      return FALLBACK_SLIDES.map((bg) => ({ type: 'gradient', bg }));
    }
    return images.map((url) => ({ type: 'image', url }));
  }, [post]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [post?.id]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const autoPlayTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoPlayTimer);
  }, [slides.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-40">
        <Loader2 size={32} className="animate-spin text-slate-400" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white px-4 lg:pt-40 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-max-width text-center py-20">
          <p className="text-sm text-red-500 mb-4">{error || 'Blog post not found.'}</p>
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 pb-10 sm:px-6 lg:px-8 lg:pt-40 pt-30">
      <div className="mx-auto max-w-max-width">

        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Blog
          </button>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl aspect-16/7 bg-gray-100">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative h-full w-full shrink-0">
                {slide.type === 'image' ? (
                  <img src={slide.url} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full" style={{ background: slide.bg }}>
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,#ffedd5,transparent)]" />
                    <div className="absolute top-1/4 left-1/4 h-6 w-4 rounded-full bg-white/20 blur-[1px] rotate-12" />
                    <div className="absolute top-1/3 left-1/3 h-8 w-5 rounded-full bg-white/30 blur-[0.5px]" />
                    <div className="absolute top-1/4 left-1/2 h-4 w-32 rounded-full bg-white/20 rotate-12" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-gray-950 w-3' : 'bg-gray-300 w-1.5'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <article className="mt-8">
          <time className="text-[11px] font-medium tracking-wide text-gray-400 uppercase">
            {formatDate(post.published_at)}
          </time>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl leading-tight">
            {post.title}
          </h1>

          {(post.keywords?.length ?? 0) > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs text-gray-500"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}

          <div
            className="blog-content mt-6 flex flex-col gap-5 text-sm text-gray-600 leading-relaxed font-normal [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900 [&_p]:text-gray-600 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1 [&_strong]:font-semibold [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-gray-200 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:bg-gray-50 [&_td]:border [&_td]:border-gray-200 [&_td]:px-3 [&_td]:py-2"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
        </article>

      </div>
    </div>
  );
}
