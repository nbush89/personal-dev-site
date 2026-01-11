"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/40 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link
            href="/"
            className="text-lg font-semibold text-text hover:text-primary transition-colors"
          >
            Nicole Bush
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary-hover",
                        isActive
                          ? "text-primary"
                          : "text-text-muted"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}

