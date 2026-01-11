"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  
  // Use resolvedTheme to determine if theme is ready (only available after mount)
  const isDark = resolvedTheme === "dark";
  
  // Show placeholder during SSR or before theme is resolved
  if (!resolvedTheme) {
    return (
      <div className="h-8 w-14 rounded-full border border-border bg-bg-subtle" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-bg-subtle transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        "hover:bg-bg-subtle"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
    >
      <span
        className={cn(
          "inline-block h-6 w-6 transform rounded-full bg-white dark:bg-bg shadow-sm transition-transform",
          isDark ? "translate-x-7" : "translate-x-1"
        )}
      />
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
}
