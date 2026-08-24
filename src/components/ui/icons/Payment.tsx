export function IconPayment({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="36" height="24" rx="3" stroke="#57BC3C" strokeWidth="2" />
      <path d="M6 20h36" stroke="#57BC3C" strokeWidth="2" />
      <path d="M12 28h8" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 32h5" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="30" r="4" stroke="#57BC3C" strokeWidth="2" />
    </svg>
  );
}
