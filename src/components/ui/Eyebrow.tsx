interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="mb-4 inline-block font-condensed text-sm font-bold uppercase tracking-[2.4px] text-verde">
      {children}
    </span>
  );
}
