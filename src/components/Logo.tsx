interface LogoProps {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="FocusFlow home">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill={light ? '#FFFFFF' : '#0B1220'} />
        <circle
          cx="16"
          cy="16"
          r="8.5"
          fill="none"
          stroke={light ? '#CDEBE3' : '#2A3345'}
          strokeWidth="3"
        />
        <path
          d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5"
          fill="none"
          stroke={light ? '#0E7A6B' : '#2BB89E'}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.5" fill="#F5A524" />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}
      >
        FocusFlow
      </span>
    </a>
  )
}
