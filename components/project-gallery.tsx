"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Shot = {
  src: string;
  width: number;
  height: number;
  caption?: string;
};

const SLIDE_FRACTION = 0.72; // active slide width as a fraction of the viewport
const GAP = 16; // px gap between slides

export function ProjectGallery({
  images,
  title,
}: {
  images: Shot[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const count = images.length;

  const go = useCallback(
    (target: number) => setIndex(((target % count) + count) % count),
    [count]
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Measure the viewport width so we can position the side slides in pixels.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setViewportWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Arrow-key navigation (also drives the lightbox, which shares the index).
  useEffect(() => {
    if (count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, count]);

  // Lightbox: lock scroll + Esc to close.
  useEffect(() => {
    if (!lightbox) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  if (count === 0) return null;
  const shot = images[index];
  const slideW = viewportWidth * SLIDE_FRACTION;

  return (
    <div className="mx-auto max-w-2xl">
      <div
        ref={viewportRef}
        className="relative aspect-[20/9] w-full overflow-hidden"
      >
        {images.map((img, i) => {
          const offset = i - index;
          const isActive = offset === 0;
          const visible = Math.abs(offset) <= 1;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => (isActive ? setLightbox(true) : go(i))}
              aria-label={
                isActive
                  ? "Open screenshot full size"
                  : `Go to screenshot ${i + 1}`
              }
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className={cn(
                "absolute left-1/2 top-1/2 w-[72%] overflow-hidden rounded-lg border border-border-card/60 bg-card-bg",
                isActive ? "cursor-zoom-in" : "cursor-pointer"
              )}
              style={{ aspectRatio: "16 / 10" }}
              animate={{
                x: offset * (slideW + GAP) - slideW / 2,
                y: "-50%",
                scale: isActive ? 1 : 0.86,
                opacity: visible ? (isActive ? 1 : 0.4) : 0,
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={img.src}
                alt={img.caption || `${title} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 768px) 72vw, 460px"
                className="object-cover object-top"
                priority={i === 0}
              />
              {!isActive && (
                <span className="absolute inset-0 bg-bg/30" aria-hidden="true" />
              )}
            </motion.button>
          );
        })}

        {count > 1 && (
          <div className="pointer-events-none absolute right-3 top-3 z-30 rounded-full bg-bg/80 px-2.5 py-1 text-xs font-medium text-text-muted backdrop-blur-sm">
            {index + 1} / {count}
          </div>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg text-text transition-colors hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-border-card/70 hover:bg-border-card"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg text-text transition-colors hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {shot.caption && (
        <p className="mt-3 text-center text-sm text-text-muted">
          {shot.caption}
        </p>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${index + 1}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(false);
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {count > 1 && (
              <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                {index + 1} / {count}
              </div>
            )}

            <div
              className="flex max-h-full max-w-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shot.src}
                alt={shot.caption || `${title} screenshot ${index + 1}`}
                width={shot.width}
                height={shot.height}
                className="h-auto w-auto max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
              />
              {shot.caption && (
                <p className="mt-3 max-w-2xl text-center text-sm text-white/80">
                  {shot.caption}
                </p>
              )}
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
