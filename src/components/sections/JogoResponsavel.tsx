"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function JogoResponsavel() {
  return (
    <section id="responsavel" className="py-[72px] md:py-[100px] relative bg-branco">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[20px] md:gap-[32px] items-center bg-white border border-ciano/35 rounded-[16px] p-[32px_26px] md:p-[42px]">
          <div className="w-[92px] h-[92px] rounded-full bg-navy grid place-items-center shrink-0 font-display font-bold text-[1.8rem] text-ciano-claro">
            18+
          </div>
          <div>
            <h3 className="text-[1.5rem] text-navy mb-[10px]">Jogo responsável</h3>
            <p className="text-cinza-txt font-light max-w-[76ch]">
              Os produtos operados pela Lottopay são destinados exclusivamente a maiores de 18 anos. Jogue com responsabilidade: aposte apenas valores compatíveis com o seu orçamento e trate os produtos como entretenimento, nunca como fonte de renda. Disponibilizamos canais e ferramentas de apoio para quem precisar estabelecer limites ou interromper a participação.
            </p>
          </div>
        </AnimatedEntry>

        <AnimatedEntry className="grid grid-cols-1 md:grid-cols-3 gap-[22px] md:gap-[30px] items-center mt-[44px] pt-[34px] border-t border-navy/10">
          <div className="flex items-center gap-[16px] justify-start md:justify-center">
            <svg viewBox="0 0 48 48" aria-hidden="true" className="w-[42px] h-[42px] shrink-0 fill-[#9BA4B5]">
              <rect x="3" y="5" width="23" height="23" rx="5"/>
              <circle cx="10" cy="12" r="2.3" fill="#FFFFFF"/><circle cx="19" cy="12" r="2.3" fill="#FFFFFF"/>
              <circle cx="10" cy="21" r="2.3" fill="#FFFFFF"/><circle cx="19" cy="21" r="2.3" fill="#FFFFFF"/>
              <g transform="rotate(-14 33 33)"><rect x="21" y="21" width="24" height="24" rx="5"/>
              <circle cx="28" cy="28" r="2.4" fill="#FFFFFF"/><circle cx="33" cy="33" r="2.4" fill="#FFFFFF"/><circle cx="38" cy="38" r="2.4" fill="#FFFFFF"/></g>
            </svg>
            <p className="font-display font-semibold text-[1rem] leading-[1.3] text-[#9BA4B5]">
              Jogo não é renda extra,<br/>é entretenimento.
            </p>
          </div>
          
          <div className="flex items-center gap-[16px] justify-start md:justify-center">
            <svg viewBox="0 0 48 48" aria-hidden="true" className="w-[42px] h-[42px] shrink-0 fill-[#9BA4B5]">
              <path d="M24 1.5C11.6 1.5 1.5 11.6 1.5 24S11.6 46.5 24 46.5 46.5 36.4 46.5 24 36.4 1.5 24 1.5zm0 3.4c10.5 0 19.1 8.6 19.1 19.1S34.5 43.1 24 43.1 4.9 34.5 4.9 24 13.5 4.9 24 4.9z"/>
              <path d="M14.2 22.4h2.9v2.6h-2.9v2.9h-2.6v-2.9H8.7v-2.6h2.9v-2.9h2.6v2.9z"/>
              <path d="M24.6 15.4h-2.4l-4 2.4 1.1 2.5 2.2-1.3v13.6h3.1V15.4z"/>
              <path d="M34.1 15c-3.9 0-6.5 2-6.5 5 0 1.7 1 3.1 2.5 3.8-1.9.9-3.1 2.5-3.1 4.5 0 3.3 2.8 5.5 7.1 5.5s7.1-2.2 7.1-5.5c0-2-1.2-3.6-3.1-4.5 1.5-.7 2.5-2.1 2.5-3.8 0-3-2.6-5-6.5-5zm0 3.2c1.6 0 2.8 1 2.8 2.3 0 1.3-1.2 2.3-2.8 2.3s-2.8-1-2.8-2.3c0-1.3 1.2-2.3 2.8-2.3zm0 7.2c1.9 0 3.3 1.1 3.3 2.6s-1.4 2.6-3.3 2.6-3.3-1.1-3.3-2.6 1.4-2.6 3.3-2.6z"/>
            </svg>
            <p className="font-display font-semibold text-[1rem] leading-[1.3] text-[#9BA4B5]">
              Proibido para menores de 18 anos.<br/>Aposte com Responsabilidade.
            </p>
          </div>

          <div className="flex items-center gap-[16px] justify-start md:justify-center">
            <svg viewBox="0 0 48 48" aria-hidden="true" className="w-[42px] h-[42px] shrink-0 fill-[#9BA4B5]">
              <circle cx="24" cy="7" r="3.4"/><rect x="22.3" y="9" width="3.4" height="31" rx="1.2"/>
              <rect x="13" y="40" width="22" height="4" rx="1.6"/><rect x="6" y="12.4" width="36" height="3.2" rx="1.6"/>
              <path d="M11 14.5L3.2 29.8h15.6L11 14.5zm0 6.3l3.4 6.6H7.6L11 20.8z"/>
              <path d="M37 14.5l-7.8 15.3h15.6L37 14.5zm0 6.3l3.4 6.6h-6.8L37 20.8z"/>
            </svg>
            <p className="font-display font-semibold text-[1rem] leading-[1.3] text-[#9BA4B5]">
              Aposte com consciência, sem<br/>comprometer seu orçamento.
            </p>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
