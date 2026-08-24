"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, itemReveal } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      id="topo" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-hero-grad text-white pt-[134px] pb-[80px] md:pt-[172px] md:pb-[108px] relative overflow-hidden"
    >
      {/* Interactive Mouse Spotlight (Only visible on md+ screens to save mobile perf) */}
      <motion.div
        className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full pointer-events-none mix-blend-screen z-0 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(63, 198, 210, 0.12) 0%, transparent 50%)",
        }}
        animate={{
          x: mousePos.x - 500,
          y: mousePos.y - 500,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />

      {/* Floating Geometric Orbits */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] max-w-[1600px] max-h-[1600px] pointer-events-none z-0 opacity-[0.05]"
      >
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] border-[2px] border-white rounded-full" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] border-[2px] border-white rounded-full" />
        <img src="/symbol-lottopay.png" alt="" className="absolute top-[38%] right-[22%] w-[260px] h-[260px] opacity-80" />
      </motion.div>

      {/* Decorative gradients */}
      <div className="absolute w-[880px] h-[880px] rounded-full -right-[300px] -top-[360px] bg-[radial-gradient(circle,rgba(63,198,210,0.28),transparent_66%)] pointer-events-none z-0" />
      <div className="absolute w-[700px] h-[700px] rounded-full -left-[320px] -bottom-[400px] bg-[radial-gradient(circle,rgba(22,166,179,0.22),transparent_66%)] pointer-events-none z-0" />
      
      {/* Animated Flowing Grid Overlay */}
      <div className="hero-grid-overlay animate-grid-pan absolute inset-0 opacity-45 pointer-events-none z-0" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-[1010px] mx-auto w-[min(1240px,90vw)]"
      >
        <motion.span variants={itemReveal} className="inline-flex items-center gap-[9px] border border-ciano-claro/55 bg-ciano-claro/13 rounded-full px-5 py-2 font-display font-medium text-[13.5px] tracking-[1.5px] uppercase text-ciano-claro mb-[34px]">
          <span className="w-[7px] h-[7px] rounded-full bg-ciano-claro animate-pulse-dot" />
          Tecnologia para o mercado lotérico
        </motion.span>

        <h1 className="text-[clamp(2.35rem,5.6vw,4.4rem)] text-white tracking-[-1.6px] leading-[1.12]">
          <span className="flex justify-center gap-[0.22em] flex-wrap">
            {["Tecnologia", "que", "conecta"].map((word, i) => (
              <motion.span key={i} variants={itemReveal} className="inline-block">{word}</motion.span>
            ))}
          </span>
          <span className="flex justify-center gap-[0.22em] flex-wrap text-ciano-claro mt-1 md:mt-2">
            {["estados", "e", "pessoas."].map((word, i) => (
              <motion.span key={i} variants={itemReveal} className="inline-block">{word}</motion.span>
            ))}
          </span>
        </h1>

        <motion.p variants={itemReveal} className="max-w-[730px] mx-auto mt-[28px] text-[clamp(1.03rem,1.7vw,1.22rem)] text-txt-claro font-light leading-[1.6]">
          Somos a plataforma definitiva para o novo mercado lotérico estadual. A Lottopay fornece a infraestrutura completa de tecnologia, gestão e operação para que governos e parceiros lancem suas loterias com segurança, escalabilidade e conformidade.
        </motion.p>

        <motion.div variants={itemReveal} className="flex gap-[14px] justify-center flex-wrap mt-[44px]">
          <a href="#solucoes" className="font-display font-semibold text-[16.5px] px-[34px] py-[15px] rounded-[10px] inline-flex items-center gap-[9px] bg-ciano text-white shadow-[0_12px_32px_-12px_rgba(22,166,179,0.9)] transition-all hover:bg-ciano-claro hover:-translate-y-[3px] hover:scale-[1.02] group">
            Conheça nossas soluções
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className="transition-transform group-hover:translate-x-1"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#modelo" className="font-display font-semibold text-[16.5px] px-[34px] py-[15px] rounded-[10px] inline-flex items-center gap-[9px] border-[1.5px] border-white/35 text-white transition-all hover:border-ciano-claro hover:text-ciano-claro hover:-translate-y-[3px] hover:scale-[1.02]">
            Como atuamos
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
