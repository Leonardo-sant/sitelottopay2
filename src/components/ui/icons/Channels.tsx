export function IconChannels({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="20" height="32" rx="3" stroke="#57BC3C" strokeWidth="2" />
      <path d="M13 36h6" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <rect x="30" y="14" width="14" height="10" rx="2" stroke="#57BC3C" strokeWidth="2" />
      <path d="M34 28h6" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="37" cy="34" r="4" stroke="#57BC3C" strokeWidth="2" />
    </svg>
  );
}
