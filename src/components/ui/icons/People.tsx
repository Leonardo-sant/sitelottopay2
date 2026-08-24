export function IconPeople({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="14" r="5" stroke="#57BC3C" strokeWidth="2" />
      <circle cx="34" cy="14" r="4" stroke="#57BC3C" strokeWidth="2" />
      <path d="M8 36c0-6 4-10 10-10s10 4 10 10" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 26c4 0 8 3 8 8" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
