"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import Image from "next/image";

export function OndeAtuamos() {
  return (
    <section id="marcas" className="py-[72px] md:py-[100px] relative bg-white">
      <div className="w-[min(1240px,90vw)] mx-auto">
        {/* OPERAÇÕES */}
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <div className="flex items-center justify-center gap-4 mb-[14px]">
            <div className="h-[1px] w-12 bg-cinza-txt/30"></div>
            <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano">
              OPERAÇÕES
            </span>
            <div className="h-[1px] w-12 bg-cinza-txt/30"></div>
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-navy">
            Loterias públicas que geram receita e transformam realidades
          </h2>
        </AnimatedEntry>

        <div className="grid lg:grid-cols-12 gap-[40px] items-center mb-[30px]">
          <div className="lg:col-span-5">
            <AnimatedEntry>
              <p className="text-cinza-txt font-light text-[1.1rem] leading-[1.6] mb-8">
                Operações oficiais estruturadas e operacionalizadas pela Lottopay, em
                conformidade com a legislação vigente e com foco em resultados sustentáveis
                para a sociedade.
              </p>
              <a href="#" className="inline-block bg-ciano text-white px-[26px] py-[14px] rounded-lg font-display font-medium text-[15px] transition-all hover:bg-ciano-claro hover:-translate-y-0.5">
                Saiba mais sobre as operações
              </a>
            </AnimatedEntry>
          </div>

          <div className="lg:col-span-7">
            <AnimatedEntry className="bg-white rounded-[20px] p-[40px] border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative">
              <div className="grid sm:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-gray-100 pb-8 sm:pb-0 sm:pr-8">
                   <img src="/loto-potiguar-logo.png" alt="Loto Potiguar" className="w-full max-w-[200px] h-auto object-contain mb-3" />
                   <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">A Loteria Oficial do RN</div>
                </div>
                
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 shrink-0">
                      ✓
                    </div>
                    <div className="text-[12px] font-bold text-navy leading-tight uppercase">
                      Operação Oficial<br />e Regulamentada
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center font-bold text-navy shrink-0">
                      18+
                    </div>
                    <div className="text-[13px] text-gray-600 leading-tight">
                      <strong className="text-navy">Proibido para</strong><br />menores de 18 anos
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center shrink-0">
                      <span className="text-xl">⛨</span>
                    </div>
                    <div className="text-[13px] text-gray-600 leading-tight">
                      Jogue com<br /><strong className="text-navy">responsabilidade</strong>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>

        <AnimatedEntry className="bg-[#F8FBFC] border border-[#E8F2F5] rounded-[16px] p-[24px] md:p-[32px] flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-[80px]">
          <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm text-ciano text-2xl">
            🏛
          </div>
          <p className="text-cinza-txt text-[14px] leading-[1.6]">
            <strong className="text-navy font-semibold">* Iniciativa custeada com recursos da Loteria do Estado do Rio Grande do Norte – LOTO POTIGUAR.</strong><br/>
            Recursos destinados a programas e ações nas áreas de segurança pública, saúde, educação, esporte, assistência social, cultura e desenvolvimento econômico.
          </p>
        </AnimatedEntry>




        {/* NOSSAS MARCAS */}
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <div className="flex items-center justify-center gap-4 mb-[14px]">
            <div className="h-[1px] w-12 bg-cinza-txt/30"></div>
            <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano">
              NOSSAS MARCAS
            </span>
            <div className="h-[1px] w-12 bg-cinza-txt/30"></div>
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-navy">
            Marcas que representam nossa operação
          </h2>
        </AnimatedEntry>

        <div className="grid md:grid-cols-2 gap-[30px]">
          {/* Loteria da Gente */}
          <AnimatedEntry className="bg-white border border-gray-200 rounded-[20px] p-[30px] flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-1">
            <div className="w-[140px] h-[140px] bg-gray-50 border border-gray-100 rounded-[12px] flex items-center justify-center shrink-0 p-4">
              <img src="/logo-loteria-da-gente.png" alt="Loteria da Gente" className="w-full h-auto object-contain" />
            </div>
            <div className="flex flex-col h-full flex-1">
              <div className="flex-1">
                <h3 className="font-display font-bold text-[18px] text-[#439546] mb-2 text-center sm:text-left">Marca da operação</h3>
                <p className="text-[14px] text-cinza-txt leading-[1.6] mb-4 text-center sm:text-left">
                  Identidade oficial da nossa operação lotérica junto ao público, representando sorte, confiança e propósito social.
                </p>
              </div>
              <a href="https://loteriadagente.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-2 text-[14px] font-bold text-[#439546] hover:underline mt-auto">
                Acessar site <span>→</span>
              </a>
            </div>
          </AnimatedEntry>

          {/* Raiz Bet */}
          <AnimatedEntry className="bg-white border border-gray-200 rounded-[20px] p-[30px] flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-1">
            <div className="w-[140px] h-[140px] bg-gray-50 border border-gray-100 rounded-[12px] flex items-center justify-center shrink-0 p-4">
              <img src="/logo-raiz-bet.png" alt="Raiz Bet" className="w-full h-auto object-contain" />
            </div>
            <div className="flex flex-col h-full flex-1">
              <div className="flex-1">
                <h3 className="font-display font-bold text-[18px] text-[#82D926] mb-2 text-center sm:text-left">Marca da operação</h3>
                <p className="text-[14px] text-cinza-txt leading-[1.6] mb-4 text-center sm:text-left">
                  Marca do nosso canal digital de entretenimento e apostas responsáveis, com tecnologia, segurança e diversão.
                </p>
              </div>
              <a href="https://raizbet.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-2 text-[14px] font-bold text-[#82D926] hover:underline mt-auto">
                Acessar site <span>→</span>
              </a>
            </div>
          </AnimatedEntry>
        </div>

      </div>
    </section>
  );
}
