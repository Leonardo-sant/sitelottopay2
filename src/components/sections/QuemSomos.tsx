"use client";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function QuemSomos() {
  return (
    <section id="sobre" className="py-[72px] md:py-[100px] relative bg-branco">
      <div className="w-[min(1240px,90vw)] mx-auto grid md:grid-cols-2 gap-11 md:gap-[70px] items-center">
        <AnimatedEntry>
          <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano mb-[14px] block">
            Quem somos
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-navy">
            A parceira tecnológica ideal para <span className="text-ciano">loterias estaduais</span> no Brasil.
          </h2>
          <div className="mt-6 space-y-[18px] text-cinza-txt font-light">
            <p>A Lottopay nasceu para estruturar, viabilizar e operar o novo mercado de loterias no Brasil. Somos uma plataforma B2B focada em tecnologia, gestão, segurança da informação e eficiência operacional.</p>
            <p>Desenvolvemos de ponta a ponta a estrutura que sustenta uma loteria de alto nível: plataforma de jogos, integração com os principais meios de pagamento e ecossistemas digitais, além do monitoramento em tempo real para auditoria dos órgãos competentes.</p>
            <p><strong className="text-navy font-semibold">Foco na aplicação dos recursos.</strong> Nós cuidamos de toda a operação tecnológica, incluindo processamento de pagamentos e suporte aos usuários. Dessa forma, sua gestão tem autonomia para focar exclusivamente na fiscalização e na aplicação dos recursos gerados em benefícios para a sociedade.</p>
          </div>
        </AnimatedEntry>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { v: "100%", l: "Das transações monitoradas e rastreáveis" },
            { v: "24/7", l: "Monitoramento contínuo das plataformas", dark: true },
            { v: "06", l: "Modalidades lotéricas suportadas pela plataforma", dark: true },
            { v: "+UF", l: "Arquitetura pronta para novos estados" }
          ].map((stat, i) => (
            <AnimatedEntry key={stat.v} delay={0.1 + (i * 0.05)} className={`rounded-[16px] p-6.5 md:p-[30px_26px] relative overflow-hidden ${stat.dark ? 'bg-ciano-esc' : 'bg-navy'}`}>
              <div className="absolute -right-10 -top-10 w-[120px] h-[120px] rounded-full bg-ciano-claro/20" />
              <b className={`font-display font-bold text-[2.3rem] leading-none block relative z-10 ${stat.dark ? 'text-white' : 'text-ciano-claro'}`}>
                {stat.v}
              </b>
              <span className="block mt-[9px] text-[0.92rem] text-txt-claro font-light relative z-10 leading-[1.42]">
                {stat.l}
              </span>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
