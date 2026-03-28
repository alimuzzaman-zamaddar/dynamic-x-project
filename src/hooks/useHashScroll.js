import { useEffect } from "react";
import { useLocation } from "react-router";

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    setTimeout(tryScroll, 100);
  }, [location.hash, location.pathname]);
};

export default useHashScroll;
