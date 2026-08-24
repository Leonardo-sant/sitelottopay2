import type { ReactNode } from "react";

type CardVariant = "on-blue" | "on-white";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  "on-blue":
    "bg-azul-esc/80 border border-white/[0.06] hover:border-verde/40 hover:bg-azul-esc",
  "on-white":
    "bg-white border border-cinza/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-verde/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]",
};

export function Card({ variant = "on-blue", children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
