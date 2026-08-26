import { Header } from "@/components/sections/Header";
import { ContatoFooter } from "@/components/sections/ContatoFooter";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jogo Responsável | Lottopay",
  description: "Nosso compromisso com o jogo responsável e um ambiente seguro de entretenimento.",
};

export default function JogoResponsavel() {
  return (
    <>
      <Header />
      
      <main className="pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] bg-gelo min-h-screen">
        <div className="w-[min(900px,90vw)] mx-auto">
          <AnimatedEntry>
            <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano mb-[14px] block">
              Compromisso Lottopay
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] text-navy mb-[24px] leading-[1.1]">
              Jogo Responsável
            </h1>
            <p className="text-[1.1rem] font-light text-cinza-txt mb-[40px] leading-[1.6]">
              A Lottopay e a Loto Potiguar estão comprometidas em oferecer uma experiência de entretenimento segura, transparente e responsável. Acreditamos que o jogo deve ser sempre uma atividade divertida e nunca uma fonte de problemas financeiros ou emocionais.
            </p>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1} className="bg-white rounded-[20px] p-[34px_26px] md:p-[50px] shadow-[0_20px_42px_-20px_rgba(22,38,107,0.08)] mb-[60px]">
            <h2 className="text-[1.8rem] text-navy mb-[20px]">Nossas Diretrizes</h2>
            
            <div className="space-y-[30px]">
              <div>
                <h3 className="font-display font-semibold text-[1.2rem] text-navy mb-[10px] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] stroke-ciano fill-none stroke-[2.5]"><path d="M20 6L9 17l-5-5"/></svg>
                  Proibido para Menores
                </h3>
                <p className="text-cinza-txt font-light leading-[1.6]">
                  A participação em qualquer modalidade lotérica ou de aposta é estritamente proibida para menores de 18 anos. Implementamos rigorosos controles de verificação de identidade e idade (KYC) em nossas plataformas.
                </p>
              </div>

              <div>
                <h3 className="font-display font-semibold text-[1.2rem] text-navy mb-[10px] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] stroke-ciano fill-none stroke-[2.5]"><path d="M20 6L9 17l-5-5"/></svg>
                  Limites e Controle
                </h3>
                <p className="text-cinza-txt font-light leading-[1.6]">
                  Disponibilizamos ferramentas para que os jogadores possam definir limites de depósitos, perdas e tempo de sessão. O jogador deve ter sempre o controle absoluto sobre sua atividade de entretenimento.
                </p>
              </div>

              <div>
                <h3 className="font-display font-semibold text-[1.2rem] text-navy mb-[10px] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] stroke-ciano fill-none stroke-[2.5]"><path d="M20 6L9 17l-5-5"/></svg>
                  Autoexclusão
                </h3>
                <p className="text-cinza-txt font-light leading-[1.6]">
                  Caso o jogador sinta que está perdendo o controle, oferecemos a opção de autoexclusão temporária ou permanente. Durante esse período, o acesso à plataforma e o envio de material promocional serão bloqueados.
                </p>
              </div>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.2} className="bg-navy-esc rounded-[20px] p-[34px_26px] md:p-[50px] shadow-[0_20px_44px_rgba(0,0,0,0.2)] text-white text-center">
            <span className="font-display font-semibold text-[13px] tracking-[2.6px] uppercase text-ciano-claro mb-[14px] block">
              Segurança
            </span>
            <h2 className="text-[1.8rem] mb-[16px]">
              Aposte apenas em operadores oficiais da Loto Potiguar
            </h2>
            <p className="text-txt-claro font-light leading-[1.6] mb-[30px] max-w-[600px] mx-auto">
              Confira as casas disponíveis. Veja todas as opções legalizadas e escolha a que mais combina com você, com a garantia de segurança e conformidade da Lottopay.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px] mx-auto">
              <a href="https://loteriadagente.com.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-white/10 hover:border-ciano/50 group cursor-pointer no-underline">
                <span className="font-display font-bold text-xl text-white group-hover:text-ciano-claro transition-colors">LOTERIA DA GENTE</span>
                <span className="text-sm text-ciano-claro mt-1">Operador Oficial</span>
              </a>
              <a href="https://raizbet.com.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-white/10 hover:border-ciano/50 group cursor-pointer no-underline">
                <span className="font-display font-bold text-xl text-white group-hover:text-ciano-claro transition-colors">RAIZ BET</span>
                <span className="text-sm text-ciano-claro mt-1">Operador Oficial</span>
              </a>
            </div>
          </AnimatedEntry>

        </div>
      </main>

      <ContatoFooter />
    </>
  );
}
