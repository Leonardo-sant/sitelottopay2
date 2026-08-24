"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

const imp1 = [
  { t: "Educação", p: "Apoio à rede de ensino.", icon: <svg viewBox="0 0 24 24"><path d="M7 8h4a2 2 0 012 2v9a2 2 0 00-2-2H4V8h3z"/><path d="M17 8h-4a2 2 0 00-2 2v9a2 2 0 012-2h7V8h-3z"/><circle cx="7.5" cy="5" r="2"/></svg> },
  { t: "Esporte", p: "Incentivo a projetos e espaços.", icon: <svg viewBox="0 0 24 24"><circle cx="15" cy="4.5" r="2"/><path d="M7 21l3-5 3.5-2.5L12 9l-3.5 2L6 14"/><path d="M13.5 13.5L17 15l2 5"/><path d="M12 9l4 1.5"/></svg> },
  { t: "Cultura", p: "Valorização das nossas raízes.", icon: <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1.5c0-2.2 2.7-3.5 6-3.5s6 1.3 6 3.5V20"/><circle cx="17.5" cy="9.5" r="2.3"/><path d="M17.5 14c2.4 0 4.5 1.1 4.5 3v3"/></svg> }
];
const imp2 = [
  { t: "Turismo", p: "Fomento e divulgação local.", icon: <svg viewBox="0 0 24 24"><path d="M2 13h3l3 3 3-2 3 2 2-2h6"/><path d="M8 16v3a2 2 0 002 2h4a2 2 0 002-2v-3"/><path d="M5 13V8a2 2 0 012-2h10a2 2 0 012 2v5"/></svg> },
  { t: "Saúde", p: "Mais acesso e estrutura.", icon: <svg viewBox="0 0 24 24"><path d="M20.5 6.5a5 5 0 00-7.1 0L12 8l-1.4-1.5a5 5 0 10-7.1 7.1L12 22l8.5-8.4a5 5 0 000-7.1z"/></svg> },
  { t: "Assistência Social", p: "Proteção a quem mais precisa.", icon: <svg viewBox="0 0 24 24"><path d="M11 6l3-2 6 4v7l-4 3-4-3-3 2-4-3V7l3-2 3 1z"/><path d="M11 6l3 2-2 3"/></svg> }
];

export function Impacto() {
  return (
    <section id="impacto" className="py-[72px] md:py-[100px] relative bg-branco">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano mb-[14px] block">
            Impacto social
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-navy">
            Entretenimento que vira <span className="text-ciano">desenvolvimento</span> para a população.
          </h2>
          <p className="mt-[16px] text-[1.06rem] font-light text-cinza-txt">
            Loterias autorizadas destinam parte da arrecadação a áreas prioritárias — e nossa tecnologia garante que cada real seja rastreável.
          </p>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...imp1, ...imp2].map((item, i) => <ImpCard key={i} item={item} delay={i * 0.05} />)}
        </div>
      </div>
    </section>
  );
}

function ImpCard({ item, delay }: { item: any, delay: number }) {
  return (
    <AnimatedEntry delay={delay} as="article" className="bg-white border border-ciano/30 rounded-[16px] p-[34px_30px_32px] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:scale-[1.02] hover:border-ciano hover:shadow-[0_20px_42px_-20px_rgba(22,38,107,0.28)]">
      <div className="w-10 h-10 mb-5 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:stroke-ciano [&>svg]:fill-none [&>svg]:stroke-[1.8] [&>svg]:stroke-linecap-round [&>svg]:stroke-linejoin-round">
        {item.icon}
      </div>
      <h3 className="text-[1.35rem] font-semibold text-navy mb-[9px]">{item.t}</h3>
      <p className="text-[1rem] font-light text-cinza-txt leading-[1.55]">{item.p}</p>
    </AnimatedEntry>
  );
}
