export function IconMonitoring({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="#57BC3C" strokeWidth="2" />
      <path d="M24 14v10l7 7" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2" fill="#57BC3C" />
      <path d="M12 8l-3-3" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 8l3-3" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
