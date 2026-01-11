"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollDownButton() {
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    const element = document.getElementById("selected-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 z-20",
        "flex h-12 w-12 items-center justify-center rounded-full",
        "border border-border bg-bg-subtle/60 backdrop-blur-sm",
        "text-text-muted transition-all duration-200",
        "hover:bg-bg-subtle hover:text-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      )}
      aria-label="Scroll to Selected Work"
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
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
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.button>
  );
}

