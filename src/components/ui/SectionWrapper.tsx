import type { ReactNode } from "react";

type BgVariant = "azul" | "azul-esc" | "azul-deep" | "branco" | "cinza";

interface SectionWrapperProps {
  id?: string;
  bg?: BgVariant;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const bgClasses: Record<BgVariant, string> = {
  azul: "bg-azul text-white",
  "azul-esc": "bg-azul-esc text-white",
  "azul-deep": "bg-azul-deep text-white",
  branco: "bg-branco text-cinza-txt",
  cinza: "bg-cinza text-cinza-txt",
};

export function SectionWrapper({
  id,
  bg = "branco",
  children,
  className = "",
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgClasses[bg]} ${noPadding ? "" : "py-20 md:py-28"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}
