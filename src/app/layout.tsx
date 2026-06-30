import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renovartepisos.com.br"),
  title:
    "Limpeza Pós-Obra e Restauração de Mármore e Granito | Renovarte Pisos",
  description:
    "Limpeza pós-obra premium, polimento, restauração e impermeabilização de mármore, granito e pedras nobres para casas de alto padrão.",
  keywords: [
    "limpeza pós obra alto padrão",
    "limpeza pós obra premium",
    "restauração de mármore",
    "restauração de granito",
    "polimento de mármore",
    "polimento de granito",
    "impermeabilização de mármore",
    "limpeza técnica pós obra",
    "limpeza fina pós obra",
    "recuperação de brilho de mármore",
    "pedras naturais",
  ],
  openGraph: {
    title: "Renovarte Pisos | Limpeza Pós-Obra e Restauração de Pedras",
    description:
      "Acabamento técnico para pisos nobres, mármores, granitos e superfícies de alto padrão.",
    images: ["/images/stone/transition-after.jpeg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
