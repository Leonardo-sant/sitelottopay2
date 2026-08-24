"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function OndeAtuamos() {
  return (
    <section id="onde" className="py-[72px] md:py-[100px] relative bg-gelo">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano mb-[14px] block">
            Casos de Sucesso e Expansão
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-navy">
            Tecnologia validada. <span className="text-ciano">Pronta para o seu estado</span>.
          </h2>
        </AnimatedEntry>

        <div className="max-w-[800px] mx-auto">
          {/* Loto Potiguar Case */}
          <AnimatedEntry className="bg-white rounded-[20px] p-[34px_26px] md:p-[44px_42px] border border-ciano/30 relative overflow-hidden shadow-[0_20px_42px_-20px_rgba(22,38,107,0.12)]">
            <div className="absolute left-0 top-0 w-full h-[5px] bg-gradient-to-r from-verde to-ciano" />
            
            <img 
              src="/logos-rn.png" 
              alt="Loto Potiguar, Governo do Rio Grande do Norte e Lottopay" 
              className="h-[65px] md:h-[85px] w-auto object-contain mb-[24px]" 
            />

            <h3 className="text-[1.9rem] text-navy mb-1.5">LOTO POTIGUAR</h3>
            <div className="font-display font-medium text-[1.05rem] text-ciano mb-4">Rio Grande do Norte</div>
            <p className="text-cinza-txt font-light text-[1.06rem] leading-[1.6]">
              Operada pela Lottopay Tecnology Ltda., conforme o Contrato nº 057/2026, e sob permissão do Governo do Estado do Rio Grande do Norte, por meio da SEFAZ/RN, a Loto Potiguar nasce para unir entretenimento seguro, tecnologia e responsabilidade na operação de apostas de quota fixa.
            </p>
            <div className="mt-[26px] pt-[22px] border-t border-dashed border-navy/20 grid sm:grid-cols-2 gap-5">
              <div className="text-[0.94rem] text-cinza-txt font-light leading-[1.4]">
                <b className="block font-display font-semibold text-[0.98rem] text-navy tracking-[0.2px] mb-1">Contrato nº 057/2026</b>
                Processo nº 00310082.000360/2026-83
              </div>
              <div className="text-[0.94rem] text-cinza-txt font-light leading-[1.4]">
                <b className="block font-display font-semibold text-[0.98rem] text-navy tracking-[0.2px] mb-1">Edital de Chamamento Público nº 003/2025</b>
                de 30 de dezembro de 2025
              </div>
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </section>
  );
}
