import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { Loader2, Mail } from "lucide-react";
import Container from "../../../shared/Container";
import bio_stamp from "../../../assets/img/bg/Desktop.png";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Helper to strip HTML tags for blog excerpts
function stripHtml(html) {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.trim() ?? "";
}

// Helper to format timestamps consistently
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

const BioStamp = ({ data }) => {

  // --- Carousel & API State ---
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  // --- Newsletter State ---
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Fetch blogs and slice the latest 5 entries for the carousel
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/blogs`, {
          headers: { Accept: "application/json" },
        });
        const json = await res.json();
        if (res.ok && json.success && Array.isArray(json.data)) {
          // Sort or grab the latest items
          setRecentPosts(json.data.slice(0, 5));
        } else {
          setError(json.message || "Failed to load recent posts.");
        }
      } catch (err) {
        console.error("Failed to fetch recent blogs:", err);
        setError("Failed to load recent posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecentBlogs();
  }, []);

  // Control carousel scrolling
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle subscriber submit actions
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setNewsletterStatus({ type: null, message: "" });

    try {
      // Replace with your designated endpoints if separate from standard base API routes
      const res = await fetch(`${BASE_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();

      if (res.ok) {
        setNewsletterStatus({ type: "success", message: "Grazie per esserti iscritto!" });
        setEmail("");
      } else {
        setNewsletterStatus({ type: "error", message: json.message || "Qualcosa è andato storto." });
      }
    } catch (err) {
      setNewsletterStatus({ type: "error", message: "Errore di connessione." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Main BioStamp Section */}
      <section
        id="biostamp-3d"
        style={{
          backgroundImage: `url(${data.image_url || bio_stamp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full"
      >
        <Container>
          <div className="xl:py-16.25 py-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-y-3">
              <h2 className="lg:text-4xl text-2xl font-semibold text-white">{data.title || "BioStamp 3D"}</h2>
              <span className="text-white/50 leading-[133%] max-w-[622px] font-light text-lg">
                {data?.subtitle || "Scopri la nostra tecnologia all'avanguardia per il bioprinting 3D."}
              </span>
            </div>
            <div className="flex justify-end items-end xl:pt-76 pt-20">
              <span className="text-white lg:text-2xl text-lg font-normal leading-[142%] max-w-[642px]">
                {data?.description || "Il BioStamp 3D è un dispositivo indossabile che monitora in tempo reale i parametri fisiologici, offrendo dati preziosi per la ricerca medica e il benessere personale."}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Recent Blog Posts Carousel Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ultimi Articoli
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Resta aggiornato sulle ultime novità e scoperte scientifiche.
              </p>
            </div>

            {/* Carousel Arrow Controls */}
            {!loading && !error && recentPosts.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 cursor-pointer"
                  aria-label="Scroll left"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 cursor-pointer"
                  aria-label="Scroll right"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Carousel Viewport Status Blocks */}
          {loading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={32} className="animate-spin text-slate-400" />
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-12 text-sm text-red-500">{error}</div>
          )}

          {!loading && !error && recentPosts.length === 0 && (
            <div className="text-center py-12 text-sm text-slate-400">Nessun articolo recente trovato.</div>
          )}

          {/* Horizontal Slider Element */}
          {!loading && !error && recentPosts.length > 0 && (
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {recentPosts.map((post) => {
                const excerpt = stripHtml(post.description);
                return (
                  <article
                    key={post.id}
                    className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 transition hover:shadow-md min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0"
                  >
                    <div>
                      <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-700 via-orange-600 to-amber-950">
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
                        <h4 className="mt-1 text-base font-semibold text-[#0A0A0A] line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                        <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">
                          {excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:opacity-70 transition"
                      >
                        Leggi di più
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* 3. Inline Newsletter Subscription Form Section */}
      <section className="relative overflow-hidden bg-[#0d0a08] py-24 text-white">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-b from-[#16120f] to-[#110e0c] border border-white/[0.04] p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Content */}
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wide uppercase">
                  <Mail size={12} /> Newsletter
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                  Rimani aggiornato
                </h3>
                <p className="text-base text-gray-400 max-w-xl leading-relaxed">
                  Iscriviti alla nostra newsletter per ricevere novità in anteprima sul progetto BioStamp 3D.
                </p>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-5 w-full">
                <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md focus-within:border-orange-500/50 transition-all duration-300">
                  <input
                    type="email"
                    required
                    placeholder="Inserisci la tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitting}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-sm text-white bg-transparent outline-none placeholder:text-gray-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 sm:py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 disabled:from-gray-700 disabled:to-gray-800 text-white font-medium text-sm rounded-xl sm:rounded-full whitespace-nowrap transition-all duration-300 transform active:scale-[0.98] disabled:transform-none cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 disabled:shadow-none"
                  >
                    {submitting && <Loader2 size={16} className="animate-spin" />}
                    Iscriviti
                  </button>
                </form>

                {/* Status Message Feedbacks */}
                {newsletterStatus.message && (
                  <div className="px-2 mt-3">
                    <p
                      className={`text-xs font-medium flex items-center gap-1.5 ${newsletterStatus.type === "success" ? "text-emerald-400" : "text-rose-400"
                        }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${newsletterStatus.type === "success" ? "bg-emerald-400" : "bg-rose-400"
                        }`} />
                      {newsletterStatus.message}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BioStamp;