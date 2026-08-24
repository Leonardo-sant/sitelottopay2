import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOTTOPAY — Tecnologia que conecta estados e pessoas",
  description:
    "A Lottopay é especializada em tecnologia, gestão e operação de soluções para o mercado lotérico e de entretenimento. Plataforma segura, escalável e integrada para operações lotéricas estaduais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="font-corpo text-[17px] leading-[1.62] text-navy bg-branco overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
