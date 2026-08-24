"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

const cards = [
  {
    title: "Aumento de Arrecadação",
    text: "Nosso modelo maximiza a arrecadação estadual através de uma nova fonte de receita legal, proporcionando recursos adicionais sem o aumento de impostos.",
    icon: <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
  },
  {
    title: "Contribuição Social",
    text: "Cada aposta representa uma oportunidade de fazer o bem. Revertemos a arrecadação para melhorar a comunidade através de projetos em infraestrutura, educação e saúde.",
    icon: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  },
  {
    title: "Desenvolvimento Econômico",
    text: "Os recursos arrecadados retornam para a comunidade, fomentando o mercado local, criando novas oportunidades e promovendo um ecossistema sustentável.",
    icon: <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H5c-1.1 0-2 .9-2 2v2M21 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
  },
  {
    title: "Modelo Pronto e Operacional",
    text: "Entregamos uma solução tecnológica completa e pronta para ser operada, garantindo uma implementação rápida, eficiente e com total confiança.",
    icon: <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  },
  {
    title: "Autonomia e Gestão Total",
    text: "Cuidamos de toda a tecnologia, meios de pagamento e suporte. Assim, o governo mantém sua autonomia e foca apenas na fiscalização e aplicação dos recursos.",
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
  },
  {
    title: "Controle e Jogo Responsável",
    text: "Plataforma equipada com monitoramento rigoroso e ferramentas de controle para evitar más condutas, promovendo um ambiente seguro, transparente e ético.",
    icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  }
];

export function Solucoes() {
  return (
    <section id="solucoes" className="py-[72px] md:py-[100px] relative bg-navy-deep">
      <div className="w-[min(1240px,90vw)] mx-auto relative z-10">
        <AnimatedEntry className="text-center max-w-[920px] mx-auto mb-[58px]">
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano-claro mb-[14px] block">
            Nossas Soluções e Benefícios
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-white">
            Uma estrutura tecnológica completa para <span className="text-ciano-claro">transformar o seu estado</span>.
          </h2>
          <p className="mt-[16px] text-[1.06rem] font-light text-txt-claro">
            Nossas soluções proporcionam benefícios financeiros, operacionais e éticos, garantindo total confiança para a sua gestão.
          </p>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimatedEntry key={i} delay={i * 0.05} as="article" className="rounded-[16px] p-[34px_30px_32px] bg-white/[0.045] border border-ciano-claro/32 transition-all duration-300 ease-out hover:-translate-y-[4px] hover:scale-[1.02] hover:border-ciano-claro hover:bg-ciano-claro/10 hover:shadow-[0_20px_44px_-20px_rgba(0,0,0,0.6)]">
              <div className="w-10 h-10 mb-5 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:stroke-ciano-claro [&>svg]:fill-none [&>svg]:stroke-[1.8] [&>svg]:stroke-linecap-round [&>svg]:stroke-linejoin-round">
                {card.icon}
              </div>
              <h3 className="text-[1.35rem] font-semibold text-white mb-[9px]">{card.title}</h3>
              <p className="text-[1rem] font-light text-txt-claro leading-[1.55]">{card.text}</p>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
