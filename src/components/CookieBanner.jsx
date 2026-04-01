import React, { useState } from "react";
import { Link } from "react-router";

const CookieBanner = () => {
  // ✅ FIX: Use a lazy initializer function in useState.
  // This determines the correct visibility on the first render,
  // preventing the "cascading render" / "setState in useEffect" warning.
  const [isVisible, setIsVisible] = useState(() => {
    // If we're in a browser environment
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookieConsent");
      // If 'cookieConsent' is null, the banner should be visible (true)
      return !consent;
    }
    return false;
  });

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#1A154D] text-white p-6 rounded-lg shadow-2xl max-w-[450px] border border-white/10">
        <p className="text-base font-normal leading-relaxed mb-4">
          Utilizziamo i cookie per migliorare la tua esperienza e per il
          marketing. Leggi la nostra{" "}
          <Link
            to="/cookie-policy"
            className="text-[#8B7EF8] underline hover:text-white transition-colors"
          >
            cookie policy
          </Link>{" "}
          o{" "}
          <button className="text-[#8B7EF8] underline hover:text-white transition-colors">
            gestisci i cookie
          </button>
          .
        </p>

        <div className="flex justify-end gap-x-3">
          <button
            onClick={() => handleConsent("accepted")}
            className="bg-white text-black px-6 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Accetta tutti
          </button>
          <button
            onClick={() => handleConsent("rejected")}
            className="bg-white text-black px-6 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Rifiuta tutti
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;