"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function HeroBackground() {
  const { resolvedTheme } = useTheme();

  // Show green-leaf during SSR (before theme is resolved)
  // resolvedTheme is undefined during SSR, so we default to light mode
  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute inset-0 z-0">
      {isDark ? (
        <Image
          src="/mountains.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      ) : (
        <Image
          src="/leaves.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      )}
    </div>
  );
}

