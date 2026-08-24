export function IconTools({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M14 6h20v36H14z" stroke="#57BC3C" strokeWidth="2" rx="2" />
      <path d="M20 14h8" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 20h8" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 26h5" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 33l3 3 5-5" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h6M8 20h6M8 28h6" stroke="#57BC3C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
