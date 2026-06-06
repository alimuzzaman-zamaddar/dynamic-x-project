import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";
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
      const res = await fetch(`${BASE_URL}/newsletter/subscribe`, {
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
      <section className="py-20 bg-[#1a1411] text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Rimani aggiornato</h3>
              <p className="text-sm text-gray-300 mt-1">
                Iscriviti alla nostra newsletter per ricevere novità sul progetto BioStamp 3D.
              </p>
            </div>

            <div className="w-full sm:max-w-md">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  required
                  placeholder="Inserisci la tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  className="w-full px-4 py-2.5 rounded-full text-sm text-gray-900 bg-white outline-none placeholder:text-gray-400 border border-transparent focus:border-gray-300 transition"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 disabled:bg-gray-400 text-white font-medium text-sm rounded-full whitespace-nowrap transition cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting && <Loader2 size={16} className="animate-spin" />}
                  Iscriviti
                </button>
              </form>

              {/* Status Message Feedbacks */}
              {newsletterStatus.message && (
                <p
                  className={`text-xs mt-2 text-center sm:text-left ${newsletterStatus.type === "success" ? "text-emerald-400" : "text-rose-400"
                    }`}
                >
                  {newsletterStatus.message}
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BioStamp;