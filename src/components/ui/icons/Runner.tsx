export function IconRunner({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="30" cy="10" r="4" stroke="#57BC3C" strokeWidth="2" />
      <path d="M22 20l6-4 6 8-6 4v10" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 28l-8 4v8" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 24l8-4" stroke="#57BC3C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
