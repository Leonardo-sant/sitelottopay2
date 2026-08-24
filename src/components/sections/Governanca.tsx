"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

const pilares = [
  { n: "01", t: "Integridade das plataformas", p: "Sistemas que operam com estabilidade, previsibilidade e regras claras em cada produto disponibilizado." },
  { n: "02", t: "Rastreabilidade das operações", p: "Cada operação é registrada e auditável, permitindo acompanhamento completo do ciclo e resposta rápida a inconsistências." },
  { n: "03", t: "Segurança das transações", p: "Camadas de proteção aplicadas a todo o fluxo financeiro, do recebimento à liquidação, com conciliação permanente." },
  { n: "04", t: "Proteção das informações", p: "Dados dos usuários tratados com controles rigorosos de acesso, armazenamento e uso, seguindo as melhores práticas do setor." },
  { n: "05", t: "Conformidade e jogo responsável", p: "Total aderência às normas que regulam o mercado lotérico, com práticas que promovem o consumo consciente dos produtos." }
];

export function Governanca() {
  return (
    <section id="governanca" className="py-[72px] md:py-[100px] relative bg-navy-esc text-white">
      <div className="w-[min(1240px,90vw)] mx-auto">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano-claro mb-[14px] block">
            Credibilidade, responsabilidade e transparência
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-white">
            Inovação e responsabilidade precisam <span className="text-ciano-claro">caminhar juntas</span>.
          </h2>
          <p className="mt-[16px] text-[1.06rem] font-light text-txt-claro">
            Independentemente do estado, da marca ou do canal utilizado, todas as nossas operações seguem os mesmos princípios de governança, segurança e controle.
          </p>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-white/15 border border-white/15 rounded-[16px] overflow-hidden">
          {pilares.map((pilar, i) => (
            <AnimatedEntry key={i} delay={i * 0.05} className={`bg-navy-esc p-[38px_32px] transition-colors duration-350 hover:bg-navy-deep ${i === 4 ? "md:col-span-2 lg:col-span-2 xl:col-span-4" : ""}`}>
              <span className="font-display font-bold text-[2.5rem] text-ciano-claro/40 leading-none block mb-3">{pilar.n}</span>
              <h4 className="text-[1.24rem] font-semibold text-white mb-[9px]">{pilar.t}</h4>
              <p className="text-[0.97rem] font-light text-txt-claro">{pilar.p}</p>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
