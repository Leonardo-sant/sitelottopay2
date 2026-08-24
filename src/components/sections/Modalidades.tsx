"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

const mod1 = [
  { t: "Loteria Passiva", p: "Sorteios com bilhetes pré-impressos e prêmios programados." },
  { t: "Loteria Instantânea", p: "Prêmios rápidos e diretos, com resultados imediatos." },
  { t: "Prognósticos Numéricos", p: "Sorteios periódicos baseados na escolha de números." }
];
const mod2 = [
  { t: "Prognóstico Específico", p: "Resultados vinculados a eventos ou datas especiais." },
  { t: "Apostas de Quota Fixa", p: "O valor do prêmio é conhecido no momento da aposta." },
  { t: "Prognóstico Esportivo", p: "Resultados baseados em competições oficiais." }
];

export function Modalidades() {
  return (
    <section id="modalidades" className="py-[72px] md:py-[100px] relative bg-branco">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano mb-[14px] block">
            Modalidades suportadas
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-navy">
            Uma plataforma preparada para <span className="text-ciano">todas as modalidades lotéricas</span>.
          </h2>
          <p className="mt-[16px] text-[1.06rem] font-light text-cinza-txt">
            Estrutura pronta para operar cada modalidade autorizada, com regras claras e resultados auditáveis.
          </p>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...mod1, ...mod2].map((item, i) => <ModCard key={i} item={item} delay={i * 0.05} />)}
        </div>
      </div>
    </section>
  );
}

function ModCard({ item, delay }: { item: { t: string, p: string }, delay: number }) {
  return (
    <AnimatedEntry delay={delay} as="article" className="bg-white border border-ciano/30 rounded-[16px] text-center p-[42px_26px] min-h-[216px] flex flex-col justify-center transition-all duration-300 ease-out hover:-translate-y-[4px] hover:scale-[1.02] hover:border-ciano hover:shadow-[0_20px_42px_-20px_rgba(22,38,107,0.28)]">
      <h3 className="text-[1.45rem] leading-[1.14] text-navy mb-[11px]">{item.t}</h3>
      <p className="text-[1rem] font-light text-cinza-txt max-w-[32ch] mx-auto leading-[1.55]">{item.p}</p>
    </AnimatedEntry>
  );
}
