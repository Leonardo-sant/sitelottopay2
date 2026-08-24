"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function Modelo() {
  return (
    <section id="modelo" className="py-[72px] md:py-[100px] relative bg-gradient-to-br from-ciano to-ciano-esc text-white">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-white/75 mb-[14px] block">
            Modelo de atuação
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-white">
            Inovação que <span className="text-navy">gera resultados</span>.
          </h2>
          <p className="mt-[16px] text-[1.06rem] font-light text-white/88">
            Um processo estruturado que leva uma operação lotérica do credenciamento ao pleno funcionamento — e que se repete a cada novo mercado.
          </p>
        </AnimatedEntry>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {[
            { n: "01", t: "Credenciamento", p: "Participação em chamamentos públicos e processos de habilitação junto aos órgãos competentes de cada estado." },
            { n: "02", t: "Implantação", p: "Configuração da plataforma, integração de meios de pagamento e adequação dos produtos às regras locais." },
            { n: "03", t: "Operação", p: "Ativação dos canais físicos e digitais, rede de pontos, atendimento e gestão do dia a dia da operação." },
            { n: "04", t: "Controle", p: "Monitoramento contínuo, auditoria, prestação de contas e evolução constante da plataforma." }
          ].map((item, i) => (
            <AnimatedEntry key={i} delay={i * 0.05} className="relative p-[34px_26px_30px] rounded-[16px] bg-white/5 border border-white/15 transition-all duration-300 ease-out hover:bg-white/15 hover:-translate-y-[4px] hover:scale-[1.02] hover:border-white/40">
              <span className="font-display font-bold text-[2.6rem] leading-none text-white/35 block mb-[14px]">{item.n}</span>
              <h4 className="text-[1.2rem] font-semibold text-white mb-2">{item.t}</h4>
              <p className="text-[0.96rem] font-light text-white/80">{item.p}</p>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
