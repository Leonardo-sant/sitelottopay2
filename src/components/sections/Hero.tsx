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
      className="bg-hero-grad text-white pt-[140px] pb-[80px] md:pt-[190px] md:pb-[140px] relative overflow-hidden"
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

      {/* Decorative gradients */}
      <div className="absolute w-[880px] h-[880px] rounded-full -right-[300px] -top-[360px] bg-[radial-gradient(circle,rgba(63,198,210,0.18),transparent_66%)] pointer-events-none z-0" />
      <div className="absolute w-[700px] h-[700px] rounded-full -left-[320px] -bottom-[400px] bg-[radial-gradient(circle,rgba(22,166,179,0.15),transparent_66%)] pointer-events-none z-0" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-[min(1240px,90vw)] grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center"
      >
        {/* Left Column */}
        <div className="text-left">
          <motion.span variants={itemReveal} className="inline-flex items-center gap-[9px] border border-ciano-claro/40 bg-navy-esc/40 backdrop-blur-sm rounded-full px-[22px] py-[8px] font-display font-medium text-[12px] tracking-[1.5px] uppercase text-ciano-claro mb-[24px]">
            Tecnologia para o mercado lotérico
          </motion.span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] text-white font-bold tracking-[-1.5px] leading-[1.05] mb-[24px]">
            <motion.span variants={itemReveal} className="block">Tecnologia que conecta</motion.span>
            <motion.span variants={itemReveal} className="block text-ciano-claro">estados e pessoas.</motion.span>
          </h1>

          <motion.p variants={itemReveal} className="max-w-[620px] text-[clamp(1rem,1.2vw,1.1rem)] text-white/90 font-light leading-[1.6] mb-[44px]">
            Somos a plataforma definitiva para o mercado lotérico público.
            Oferecemos soluções completas de estruturação, regulamentação,
            tecnologia, gestão e operação para que governos lancem e
            operacionalizem loterias públicas com segurança, inovação e total
            conformidade.
          </motion.p>

          <motion.div variants={itemReveal} className="flex gap-[16px] flex-wrap">
            <a href="#solucoes" className="font-display font-semibold text-[15.5px] px-[32px] py-[14px] rounded-lg inline-flex items-center gap-[9px] bg-ciano text-white transition-all hover:bg-ciano-claro group">
              Conheça nossas soluções
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#modelo" className="font-display font-medium text-[15.5px] px-[32px] py-[14px] rounded-lg inline-flex items-center gap-[9px] border border-white/40 text-white transition-all hover:border-white">
              Como atuamos
            </a>
          </motion.div>
        </div>

        {/* Right Column - Map and Floating Panel */}
        <motion.div variants={itemReveal} className="relative h-full min-h-[500px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Real Map Graphic - Positioned Top Right */}
          <div className="absolute top-[-40px] right-[-40px] w-[140%] max-w-[800px] pointer-events-none z-0 flex justify-end">
            <motion.div 
              animate={{ 
                y: ["-2%", "2%", "-2%"],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src="/mapa-brasil.png" 
                alt="Conexões Brasil" 
                className="w-[100%] h-auto object-contain opacity-90"
              />
            </motion.div>
          </div>

          {/* Floating Feature Panel - Positioned Bottom Right */}
          <motion.div 
            className="relative z-10 bg-navy/50 backdrop-blur-md border border-ciano-claro/30 rounded-[12px] p-[32px_40px] w-full max-w-[380px] mt-[160px] lg:mt-[220px] lg:mr-4"
          >
            <div className="flex flex-col gap-[28px]">
              
              <div className="flex items-center gap-[20px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[24px] h-[24px] text-ciano-claro">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="font-corpo font-light text-[14px] text-white">Conformidade regulatória</span>
              </div>

              <div className="flex items-center gap-[20px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[24px] h-[24px] text-ciano-claro">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                  </svg>
                </div>
                <span className="font-corpo font-light text-[14px] text-white">Tecnologia escalável e segura</span>
              </div>

              <div className="flex items-center gap-[20px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[24px] h-[24px] text-ciano-claro">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <span className="font-corpo font-light text-[14px] text-white">Gestão eficiente e transparente</span>
              </div>

              <div className="flex items-center gap-[20px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[24px] h-[24px] text-ciano-claro">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <span className="font-corpo font-light text-[14px] text-white">Impacto social positivo</span>
              </div>

            </div>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </div>
  );
}
