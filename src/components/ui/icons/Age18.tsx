export function IconAge18({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="sans-serif">18</text>
      <text x="19" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" fontFamily="sans-serif">+</text>
    </svg>
  );
}
