"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { useEffect, useState } from "react";

export function ContatoFooter() {
  const [ano, setAno] = useState("");
  useEffect(() => setAno(new Date().getFullYear().toString()), []);

  return (
    <>
      <section id="contato" className="pb-[72px] md:pb-[100px] relative bg-gelo">
        <div className="w-[min(1240px,90vw)] mx-auto">
          <AnimatedEntry className="bg-gradient-to-br from-navy to-ciano-esc rounded-[20px] p-[54px_24px] md:p-[76px_50px] text-center relative overflow-hidden">
            <div className="absolute w-[640px] h-[640px] rounded-full left-1/2 -bottom-[470px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(63,198,210,0.4),transparent_66%)] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano-claro mb-[14px] block">
                Fale com a Lottopay
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-white max-w-[22ch] mx-auto leading-[1.12]">
                A tecnologia definitiva para a loteria do seu estado.
              </h2>
              <p className="mt-[16px] text-[1.06rem] font-light text-txt-claro max-w-[58ch] mx-auto">
                Seja para estruturar a loteria do seu estado, formar parcerias estratégicas ou conhecer nossa plataforma, nossa equipe corporativa está à disposição.
              </p>
              
              <div className="flex flex-wrap gap-[14px] justify-center mt-[40px]">
                <a href="mailto:contato@lottopay.com.br" className="font-display font-semibold text-[16.5px] px-[34px] py-[15px] rounded-[10px] inline-flex items-center gap-[9px] bg-ciano text-white shadow-[0_12px_32px_-12px_rgba(22,166,179,0.9)] transition-all hover:bg-ciano-claro hover:-translate-y-[3px] group">
                  contato@lottopay.com.br
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className="transition-transform group-hover:translate-x-1"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </AnimatedEntry>
        </div>
      </section>

      <footer className="bg-navy-deep text-white pt-[66px] pb-[34px]">
        <div className="w-[min(1240px,90vw)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[44px]">
            <div>
              <a href="#topo" className="flex items-center gap-[11px] no-underline">
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
              <p className="text-txt-claro text-[0.96rem] font-light mt-[16px] max-w-[36ch]">
                Tecnologia, gestão e operação de soluções para o mercado lotérico e de entretenimento.
              </p>
            </div>

            <div>
              <h5 className="font-display font-semibold text-[12.5px] tracking-[2.2px] uppercase text-ciano-claro mb-[18px]">Institucional</h5>
              <div className="flex flex-col gap-[11px]">
                <a href="/quem-somos" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Quem somos</a>
                <a href="/#solucoes" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">O que fazemos</a>
                <a href="/#modelo" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Modelo de atuação</a>
                <a href="/#governanca" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Governança</a>
              </div>
            </div>

            <div>
              <h5 className="font-display font-semibold text-[12.5px] tracking-[2.2px] uppercase text-ciano-claro mb-[18px]">Operações</h5>
              <div className="flex flex-col gap-[11px]">
                <a href="/#marcas" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Casos de Sucesso</a>
                <a href="/#modalidades" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Modalidades</a>
                <a href="/#impacto" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Impacto social</a>
                <a href="/#contato" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Novos estados</a>
              </div>
            </div>

            <div>
              <h5 className="font-display font-semibold text-[12.5px] tracking-[2.2px] uppercase text-ciano-claro mb-[18px]">Transparência</h5>
              <div className="flex flex-col gap-[11px]">
                <a href="/jogo-responsavel" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Jogo responsável</a>
                <a href="/privacidade" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Política de privacidade</a>
                <a href="/termos" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Termos de uso</a>
                <a href="/#contato" className="text-txt-claro text-[0.96rem] font-light transition-colors hover:text-ciano-claro">Contato</a>
              </div>
            </div>
          </div>

          <div className="mt-[52px] pt-[32px] border-t border-white/12 flex flex-col md:flex-row justify-between items-center gap-[24px]">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left font-display font-normal text-[13.5px] text-white/55">
              <span>© {ano} Lottopay. Todos os direitos reservados.</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/55 text-[11px] font-bold shrink-0">18+</span>
                <span>Proibido para menores de 18 anos. Jogue com responsabilidade.</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-center md:text-right text-[14px]">
              <span className="text-white/80">
                <strong className="font-semibold text-white">Razão Social:</strong> LOTTOPAY TECNOLOGY LTDA
              </span>
              <span className="text-white/80">
                <strong className="font-semibold text-white">CNPJ:</strong> 62.894.998/0001-72
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
