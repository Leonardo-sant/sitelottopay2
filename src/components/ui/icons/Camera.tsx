export function IconCamera({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 16h4l4-6h16l4 6h4a2 2 0 012 2v20a2 2 0 01-2 2H8a2 2 0 01-2-2V18a2 2 0 012-2z" stroke="#57BC3C" strokeWidth="2" />
      <circle cx="24" cy="27" r="7" stroke="#57BC3C" strokeWidth="2" />
      <circle cx="24" cy="27" r="3" stroke="#57BC3C" strokeWidth="2" />
    </svg>
  );
}
