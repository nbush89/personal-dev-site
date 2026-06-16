"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Returns false on the server and during hydration, true afterward—the
// React-recommended way to detect that the client has hydrated without a
// setState-in-effect. This keeps the server and first client render identical.
const subscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const hydrated = useHydrated();

  const isDark = resolvedTheme === "dark";

  // Render a stable placeholder until hydrated to avoid a hydration mismatch.
  if (!hydrated) {
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
