import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Solucoes } from "@/components/sections/Solucoes";
import { Modalidades } from "@/components/sections/Modalidades";
import { Modelo } from "@/components/sections/Modelo";
import { Governanca } from "@/components/sections/Governanca";
import { Impacto } from "@/components/sections/Impacto";
import { OndeAtuamos } from "@/components/sections/OndeAtuamos";
import { ContatoFooter } from "@/components/sections/ContatoFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Solucoes />
        <Modalidades />
        <Modelo />
        <Governanca />
        <Impacto />
        <OndeAtuamos />
        <ContatoFooter />
      </main>
    </>
  );
}
