import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. `inView` flips to true the first time the element
 * enters (or nears) the viewport and then stays true — so heavy 3D canvases
 * mount lazily on scroll and are never torn down once shown.
 */
export function useInView({ rootMargin = "200px", threshold = 0 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true); // SSR / very old browsers: just render it
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView];
}

/** True when the user has requested reduced motion. */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}
