import { Header } from "@/components/sections/Header";
import { ContatoFooter } from "@/components/sections/ContatoFooter";
import { QuemSomos as QuemSomosSection } from "@/components/sections/QuemSomos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Lottopay",
  description: "A parceira tecnológica ideal para loterias estaduais no Brasil.",
};

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      
      <main className="pt-[80px] min-h-screen">
        <QuemSomosSection />
      </main>

      <ContatoFooter />
    </>
  );
}
