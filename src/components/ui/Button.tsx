import type { ReactNode, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "outline-dark";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-verde text-white hover:bg-verde-claro border-2 border-verde hover:border-verde-claro",
  outline:
    "bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10",
  "outline-dark":
    "bg-transparent text-azul border-2 border-verde hover:bg-verde hover:text-white",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-condensed text-sm font-bold uppercase tracking-wider transition-all duration-300 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
