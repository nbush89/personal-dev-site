import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-border-card/60 bg-card-bg p-6 shadow-soft transition-all hover:shadow-lg hover:border-border-card/80",
        className
      )}
    >
      {children}
    </Component>
  );
}

