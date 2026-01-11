import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-muted">{description}</p>
      )}
    </div>
  );
}

