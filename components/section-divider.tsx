export function SectionDivider() {
  return (
    <div className="relative h-32 w-full overflow-hidden -mb-px">
      {/* Soft curved divider using SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-bg" />
            <stop offset="100%" stopColor="currentColor" className="text-bg-subtle" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C200,40 400,50 600,35 C800,20 1000,15 1200,15 L1200,120 L0,120 Z"
          fill="url(#dividerGradient)"
        />
      </svg>
      
      {/* Additional gradient fade for ultra-smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-subtle/30 to-bg-subtle pointer-events-none" />
    </div>
  );
}

