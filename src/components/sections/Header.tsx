"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] bg-navy/96 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-2.5 shadow-[0_8px_30px_rgba(10,18,53,0.4)]" : "py-4"
      }`}
    >
      <div className="w-[min(1240px,90vw)] mx-auto">
        <nav className="flex items-center justify-between relative gap-5">
          <a href="/" className="flex items-center gap-[11px] no-underline">
            <svg viewBox="0 0 48 48" aria-hidden="true" className="w-[34px] h-[34px] shrink-0">
              <g fill="none" stroke="#3FC6D2" strokeWidth="2.6" strokeLinejoin="round">
                <path d="M24 4l6 6-6 6-6-6z" />
                <path d="M24 32l6 6-6 6-6-6z" />
                <path d="M10 18l6 6-6 6-6-6z" />
                <path d="M38 18l6 6-6 6-6-6z" />
                <path d="M24 17l7 7-7 7-7-7z" />
              </g>
            </svg>
            <b className="font-display font-semibold text-[24px] text-white tracking-[-0.5px]">Lottopay</b>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-[26px] items-center list-none">
            <li><NavLink href="/quem-somos">Quem somos</NavLink></li>
            <li><NavLink href="/#solucoes">Soluções</NavLink></li>
            <li><NavLink href="/#marcas">Marcas</NavLink></li>
            <li><NavLink href="/#modalidades">Modalidades</NavLink></li>
            <li><NavLink href="/jogo-responsavel">Jogo Responsável</NavLink></li>
            <li>
              <a href="/#contato" className="bg-ciano text-white px-[22px] py-2.5 rounded-lg font-display font-semibold text-[15px] transition-all hover:bg-ciano-claro hover:-translate-y-0.5 ml-2">
                Fale conosco
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden bg-transparent border-[1.5px] border-white/30 rounded-lg text-white px-3.5 py-2 font-display font-medium text-[15px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[calc(100%+16px)] left-[5vw] right-[5vw] bg-navy-esc rounded-[14px] p-[22px] shadow-[0_20px_44px_rgba(0,0,0,0.45)] md:hidden flex flex-col gap-4"
          >
            <MobileNavLink href="/quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</MobileNavLink>
            <MobileNavLink href="/#solucoes" onClick={() => setMenuOpen(false)}>Soluções</MobileNavLink>
            <MobileNavLink href="/#marcas" onClick={() => setMenuOpen(false)}>Marcas</MobileNavLink>
            <MobileNavLink href="/#modalidades" onClick={() => setMenuOpen(false)}>Modalidades</MobileNavLink>
            <MobileNavLink href="/jogo-responsavel" onClick={() => setMenuOpen(false)}>Jogo Responsável</MobileNavLink>
            <a href="/#contato" onClick={() => setMenuOpen(false)} className="bg-ciano text-white px-[22px] py-2.5 rounded-lg font-display font-semibold text-[15px] text-center mt-2">
              Fale conosco
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-corpo font-normal text-[15px] text-txt-claro no-underline transition-colors duration-250 relative py-[5px] whitespace-nowrap hover:text-white group">
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-ciano-claro transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a href={href} onClick={onClick} className="font-corpo text-[16px] text-txt-claro hover:text-white transition-colors block">
      {children}
    </a>
  );
}
