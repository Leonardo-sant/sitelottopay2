export function IconScale({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 7l8-2 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 14l4-7 4 7a4 4 0 01-8 0z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14l4-7 4 7a4 4 0 01-8 0z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
