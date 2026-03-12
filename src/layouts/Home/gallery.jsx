// src/components/GalleryAutoScroll.jsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/livingroom.png";
import img2 from "@/assets/bathroom.png";
import img3 from "@/assets/office.png";

const SLIDES = [
  {
    title: "Complete Builds",
    subtitle: "From foundation to final handover — we manage it end-to-end.",
    image: img1,
    alt: "Buildko complete builds",
  },
  {
    title: "Quality Finishes",
    subtitle: "Clean lines, durable materials, and attention to detail.",
    image: img2,
    alt: "Buildko quality finishes",
  },
  {
    title: "Renovations & Upgrades",
    subtitle: "Modern upgrades that add value and comfort to your home.",
    image: img3,
    alt: "Buildko renovations and upgrades",
  },
];

export default function GalleryAutoScroll() {
  const HOLD_MS = 3000;
  const MOVE_MS = 900;

  const [paused, setPaused] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [animating, setAnimating] = React.useState(true);

  const timerRef = React.useRef(null);
  const rafRef = React.useRef(null);

  const clearTimers = React.useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    timerRef.current = null;
    rafRef.current = null;
  }, []);

  const activeIndex = pos === SLIDES.length ? 0 : pos;

  React.useEffect(() => {
    clearTimers();
    if (paused) return;

    timerRef.current = window.setTimeout(() => {
      setAnimating(true);
      setPos((p) => (p >= SLIDES.length ? p : p + 1));
    }, HOLD_MS);

    return () => clearTimers();
  }, [pos, paused, clearTimers]);

  const onTransitionEnd = () => {
    if (pos === SLIDES.length) {
      setAnimating(false);
      setPos(0);

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = window.requestAnimationFrame(() => setAnimating(true));
      });
    }
  };

  const goNext = () => {
    clearTimers();
    setPaused(true);

    setAnimating(true);
    setPos((p) => (p >= SLIDES.length ? p : p + 1));

    window.setTimeout(() => setPaused(false), HOLD_MS);
  };

  const goPrev = () => {
    clearTimers();
    setPaused(true);

    if (pos === 0) {
      setAnimating(false);
      setPos(SLIDES.length);

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = window.requestAnimationFrame(() => {
          setAnimating(true);
          setPos(SLIDES.length - 1);
        });
      });
    } else {
      setAnimating(true);
      setPos((p) => p - 1);
    }

    window.setTimeout(() => setPaused(false), HOLD_MS);
  };

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        {/* TRACK */}
        <div
          className="absolute inset-0 flex will-change-transform"
          style={{
            width: `${(SLIDES.length + 1) * 100}%`,
            transform: `translateX(-${pos * (100 / (SLIDES.length + 1))}%)`,
            transition: animating
              ? `transform ${MOVE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {SLIDES.map((s) => (
            <div key={s.alt} className="relative h-full w-full shrink-0">
              <img
                src={s.image}
                alt={s.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>
          ))}

          {/* Clone first slide */}
          <div className="relative h-full w-full shrink-0">
            <img
              src={SLIDES[0].image}
              alt={SLIDES[0].alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* TEXT OVERLAY */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15 backdrop-blur">
                  Our Work
                </div>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {SLIDES[activeIndex].title}
                </h2>

                <p className="mt-3 text-base text-white/85 md:text-lg">
                  {SLIDES[activeIndex].subtitle}
                </p>

                <div className="mt-6 flex gap-2">
                  {SLIDES.map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "h-1.5 w-8 rounded-full transition-all duration-500",
                        i === activeIndex ? "bg-teal-400" : "bg-white/30",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREV / NEXT */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="pointer-events-auto rounded-full bg-black/35 text-white border-white/20 hover:bg-black/50"
            onClick={goPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="pointer-events-auto rounded-full bg-black/35 text-white border-white/20 hover:bg-black/50"
            onClick={goNext}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slide count */}
        <div className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur">
          {activeIndex + 1} / {SLIDES.length}
        </div>
      </div>
    </section>
  );
}