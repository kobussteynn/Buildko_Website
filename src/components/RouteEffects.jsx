import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);

      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ block: "start" });
          return;
        }

        window.scrollTo({ top: 0, left: 0 });
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.hash]);

  return null;
}
